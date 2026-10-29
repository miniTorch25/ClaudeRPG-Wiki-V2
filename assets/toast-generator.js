(() => {
  const tool = document.querySelector('.toast-tool[data-frame-base][data-icon-base]');
  if (!tool) return;

  const $ = id => document.getElementById(id);
  const frames = {grey:0, blue:1, yellow:2, bronze:3, silver:4, gold:5, platinum:6, mythic:7, ascension:8, discovery:9};
  const frameBase = tool.dataset.frameBase;
  const iconBase = tool.dataset.iconBase;
  const fields = ['toast-target','toast-frame','toast-icon','toast-sound','toast-header','toast-body'];
  const controls = fields.map($);
  const cleanText = value => String(value ?? '').replace(/[\r\n]+/g, ' ').trim();
  const visibleBody = value => value.replace(/&[0-9a-fk-or]/gi, '').length;
  const setStatus = (message, error = false) => { $('toast-validation').textContent = message; $('toast-validation').className = error ? 'toast-note toast-error' : 'toast-note'; };

  function render() {
    const target = cleanText($('toast-target').value);
    const frame = $('toast-frame').value;
    const icon = cleanText($('toast-icon').value).toUpperCase();
    const sound = $('toast-sound').value;
    const header = cleanText($('toast-header').value);
    const body = cleanText($('toast-body').value);
    const validTarget = !!target && !target.includes('|');
    const validFrame = Object.prototype.hasOwnProperty.call(frames, frame);
    const validIcon = icon === '-' || /^[A-Z0-9]{4}$/.test(icon);
    const validHeader = /^[\x20-\x7E]{1,28}$/.test(header) && !header.includes('|');
    const validBody = !body.includes('|');
    const validSound = ['default','none','toast','levelup','orb'].includes(sound);

    // The game strips Minecraft formatting codes from the fixed-width header; mirror that in the preview.
    const previewHeader = header.replace(/&[0-9a-fk-or]/gi, '');
    $('toast-preview-header').textContent = previewHeader || ' ';
    $('toast-preview-body').textContent = body || ' ';
    $('toast-frame-name').textContent = frame[0].toUpperCase()+frame.slice(1)+' · frame '+frames[frame];
    $('toast-preview').style.borderImageSource = 'url("' + frameBase + 'f' + frames[frame] + '.png")';
    const iconImg = $('toast-preview-icon');
    if (icon === '-' || !/^[A-Z0-9]{4}$/.test(icon)) { iconImg.hidden = true; iconImg.removeAttribute('src'); }
    else { iconImg.hidden = false; iconImg.src = iconBase + icon + '.png'; iconImg.onerror = () => { iconImg.hidden = true; }; }

    const errors = [];
    if (!validTarget) errors.push('Target is required and cannot contain |.');
    if (!validFrame) errors.push('Choose a valid frame.');
    if (!validIcon) errors.push('Icon must be a 4-character key or -.');
    if (!validHeader) errors.push('Header must be 1–28 ASCII characters.');
    if (!validBody) errors.push('Body cannot contain |.');
    if (!validSound) errors.push('Choose a valid sound.');
    if (validBody && visibleBody(body) > 22) errors.push('Body exceeds the 22-character visible area and may be truncated.');
    setStatus(errors.join(' '), errors.some(e => !e.startsWith('Body exceeds')));

    const iconArg = icon === '-' ? '-' : icon;
    const command = '/scriptevent toast:send ' + target + ' | ' + frame + ' | ' + iconArg + ' | ' + header + ' | ' + body + ' | ' + sound;
    $('toast-command').textContent = command;
    const invalid = !validTarget || !validFrame || !validIcon || !validHeader || !validBody || !validSound;
    $('toast-copy').disabled = invalid;
    $('toast-copy-th').disabled = invalid;
    $('toast-select').disabled = invalid;
    $('toast-select-th').disabled = invalid;
  }
  controls.forEach(control => control.addEventListener('input', render));
  $('toast-icon-preset').addEventListener('change', () => {
    if ($('toast-icon-preset').value !== 'custom') $('toast-icon').value = $('toast-icon-preset').value;
    render();
  });
  const copy = async () => {
    try { await navigator.clipboard.writeText($('toast-command').textContent); $('toast-copy-status').textContent = 'Copied / คัดลอกแล้ว'; }
    catch (_) { $('toast-copy-status').textContent = 'Clipboard unavailable. Use Select command. / คัดลอกอัตโนมัติไม่ได้ ให้ใช้ Select command'; }
  };
  const select = () => {
    const range = document.createRange(); range.selectNodeContents($('toast-command'));
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    $('toast-copy-status').textContent = 'Command selected / เลือกคำสั่งแล้ว';
  };
  $('toast-copy').addEventListener('click', copy);
  $('toast-copy-th').addEventListener('click', copy);
  $('toast-select').addEventListener('click', select);
  $('toast-select-th').addEventListener('click', select);
  render();
})();
