// Konami-code easter egg: no dependencies, respects reduced motion.

const SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

/** Calls `cb` once the visitor types the Konami code. Returns a cleanup fn. */
export function watchKonami(cb: () => void): () => void {
  let i = 0;
  const onKey = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    // Don't hijack typing in inputs, textareas, or the project modal.
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      i = 0;
      return;
    }
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    i = key === SEQUENCE[i] ? i + 1 : key === SEQUENCE[0] ? 1 : 0;
    if (i === SEQUENCE.length) {
      i = 0;
      cb();
    }
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}

/** Brand-colored confetti burst. Self-cleans when done. */
export function fireConfetti(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:200;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);
  const colors = ['#e60000', '#ffffff', '#ffd166', '#ff5a5a', '#7e7e7e'];
  const parts = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.3,
    w: 5 + Math.random() * 6,
    h: 8 + Math.random() * 8,
    vy: 2 + Math.random() * 3.5,
    vx: -1.5 + Math.random() * 3,
    rot: Math.random() * Math.PI * 2,
    vr: -0.15 + Math.random() * 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
  const start = performance.now();
  const tick = (now: number) => {
    if (now - start > 4200) {
      window.removeEventListener('resize', resize);
      canvas.remove();
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of parts) {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y > canvas.height + 20) continue;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
