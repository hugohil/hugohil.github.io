console.log("welcome");

function rngRoll(targetId, sides) {
  const el = document.getElementById(targetId);
  el.classList.add('rolling');
  setTimeout(() => {
    const result = Math.floor(Math.random() * sides) + 1;
    el.textContent = sides === 2
      ? (result === 1 ? 'pile' : 'face')
      : result;
    el.classList.remove('rolling');
  }, 80);
}

function rngRollWalkers(targetId) {
  const el = document.getElementById(targetId);
  el.classList.add('rolling');
  setTimeout(() => {
    const d = Math.floor(Math.random() * 6) + 1;
    const a = d;
    const b = ((d + 1 - 1) % 6) + 1;  // walker +1
    const c = ((d + 2 - 1) % 6) + 1;  // walker +2
    el.innerHTML = `A:${a} B:${b} C:${c}`;
    el.classList.remove('rolling');
  }, 80);
}

function copyCode(btn) {
  const code = btn.previousElementSibling.textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'copié';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'copier'; btn.classList.remove('copied'); }, 1500);
  });
}

hljs.highlightAll();
