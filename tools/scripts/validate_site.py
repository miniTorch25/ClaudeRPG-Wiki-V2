#!/usr/bin/env python3
"""Validate local links, asset references, and fragment targets in a built Jekyll site."""
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys
import os


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.refs: list[tuple[str, str]] = []
        self.anchors: set[str] = set()
        self.images_without_alt: int = 0

    def handle_starttag(self, tag: str, attrs) -> None:
        values = dict(attrs)
        if tag.lower() == "img" and "alt" not in values:
            self.images_without_alt += 1
        for attr in ("href", "src", "poster"):
            value = values.get(attr)
            if value:
                self.refs.append((attr, value.strip()))
        anchor = values.get("id") or values.get("name")
        if anchor:
            self.anchors.add(anchor)


def is_html_file(path: Path) -> bool:
    if path.suffix.lower() in {".html", ".htm"}:
        return True
    try:
        prefix = path.read_bytes()[:512].lstrip().lower()
    except OSError:
        return False
    return prefix.startswith(b"<!doctype html") or b"<html" in prefix


def resolve_target(site: Path, current: Path, raw_url: str, baseurl: str) -> Path | None:
    parsed = urlsplit(raw_url)
    if parsed.scheme or parsed.netloc:
        return None
    raw_path = unquote(parsed.path)
    if baseurl and (raw_path == baseurl or raw_path.startswith(baseurl + "/")):
        raw_path = raw_path[len(baseurl):] or "/"
    if not raw_path:
        return current

    candidate = (site / raw_path.lstrip("/")) if raw_path.startswith("/") else (current.parent / raw_path)
    candidate = Path(candidate)
    choices = [candidate]
    if not candidate.suffix:
        choices.extend([Path(str(candidate) + ".html"), candidate / "index.html"])
    if raw_path.endswith("/"):
        choices.insert(0, candidate / "index.html")
    for choice in choices:
        if choice.is_file():
            return choice
    return candidate


def main() -> int:
    site = Path(sys.argv[1] if len(sys.argv) > 1 else "_site").resolve()
    if not site.is_dir():
        print(f"ERROR: site directory not found: {site}")
        return 2

    all_files = [p for p in site.rglob("*") if p.is_file()]
    html_files = [p for p in all_files if is_html_file(p)]
    pages: dict[Path, PageParser] = {}
    for path in html_files:
        parser = PageParser()
        try:
            parser.feed(path.read_text(encoding="utf-8"))
        except (UnicodeDecodeError, OSError) as exc:
            print(f"ERROR: cannot parse HTML {path.relative_to(site)}: {exc}")
            return 2
        pages[path.resolve()] = parser

    repo_name = os.environ.get("GITHUB_REPOSITORY", "").split("/")[-1]
    baseurl = f"/{repo_name}" if repo_name else ""
    errors: list[str] = []
    checked_images_without_alt = 0
    checked = 0
    checked_fragments = 0
    for page, parser in pages.items():
        if parser.images_without_alt:
            checked_images_without_alt += parser.images_without_alt
            errors.append(f"{page.relative_to(site)}: {parser.images_without_alt} image(s) missing an alt attribute")
        for attr, raw_url in parser.refs:
            parsed = urlsplit(raw_url)
            if parsed.scheme.lower() in {"http", "https", "mailto", "tel", "javascript", "data"} or parsed.netloc:
                continue
            if raw_url.startswith("#"):
                target = page
            else:
                target = resolve_target(site, page, raw_url, baseurl)
                if target is None:
                    continue
            checked += 1
            if not target.is_file():
                errors.append(f"{page.relative_to(site)}: missing {attr} target {raw_url!r}")
                continue
            fragment = unquote(parsed.fragment)
            if fragment and target.resolve() in pages:
                checked_fragments += 1
                if fragment not in pages[target.resolve()].anchors:
                    errors.append(f"{page.relative_to(site)}: missing fragment #{fragment} in {target.relative_to(site)}")

    print(f"Scanned {len(pages)} HTML pages; checked {checked} local links/assets and {checked_fragments} fragment targets.")
    print(f"Checked image accessibility attributes; found {checked_images_without_alt} image(s) missing alt.")
    if errors:
        print(f"Found {len(errors)} problem(s):")
        for error in errors:
            print(f" - {error}")
        return 1
    print("No missing local targets or fragment anchors found.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
