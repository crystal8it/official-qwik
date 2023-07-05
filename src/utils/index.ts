export function getColorTransition(
  startColor: string,
  endColor: string,
  duration: number
) {
  const start = parseInt(startColor.substr(1), 16);
  const end = parseInt(endColor.substr(1), 16);
  const r0 = (start >> 16) & 255;
  const g0 = (start >> 8) & 255;
  const b0 = start & 255;
  const r1 = (end >> 16) & 255;
  const g1 = (end >> 8) & 255;
  const b1 = end & 255;

  const startTime = performance.now();

  return function () {
    const elapsed = performance.now() - startTime;
    const progress = (elapsed / duration) % 1;
    const reversedProgress =
      progress <= 0.5 ? progress * 2 : 1 - (progress - 0.5) * 2;
    const r = Math.round(r0 + (r1 - r0) * reversedProgress);
    const g = Math.round(g0 + (g1 - g0) * reversedProgress);
    const b = Math.round(b0 + (b1 - b0) * reversedProgress);
    const hex = `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;

    return { hex, rgb: `${r},${g},${b}` };
  };
}
