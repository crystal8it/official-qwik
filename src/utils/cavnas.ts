const gradientRgbBasis = '96,233,146';

function drawLine(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number
): void {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

function drawTriangle(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number
) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + 150, startY + 50);
  ctx.lineTo(startX - 50, 100);
  ctx.lineTo(startX, startY);
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

function drawImage(
  ctx: CanvasRenderingContext2D,
  imageEl: HTMLImageElement,

  endX: number,
  endY: number,
  offset: number
) {
  ctx.beginPath();

  ctx.drawImage(imageEl, endX - offset, endY, imageEl.width, imageEl.height);
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

function drawRect(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  lrgb: string,
  rrgb: string,
  opacity: number = 1
): void {
  const linearGradient = ctx.createLinearGradient(startX, startY, endX, endY);
  linearGradient.addColorStop(0, `rgba(${lrgb},${opacity})`);
  linearGradient.addColorStop(0.5, `rgba(${gradientRgbBasis},${opacity})`);
  linearGradient.addColorStop(1, `rgb(${rrgb},${opacity})`);

  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, endX, endY);
}

function drawLineCirclePoints(
  numPoints: number = 200,
  centerX: number,
  centerY: number,
  radius: number
) {
  const startAngle = 0;
  const endAngle = Math.PI * 2;

  const angleIncrement = (endAngle - startAngle) / numPoints;
  const points = [];

  if (radius > 200) radius = 200;

  for (let i = 0; i <= numPoints; i++) {
    const angle = startAngle + i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x: x, y: y });
  }

  return points;
}

function drawLineCircle(
  ctx: CanvasRenderingContext2D,
  points: { x: number; y: number }[],
  numCompletedPoints: number
) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineWidth = 6;

  for (let i = 0; i <= numCompletedPoints; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.lineDashOffset = 0;

  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

function drawCircle(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  circleRadius: number,
  opacity: number = 1
): void {
  const centerX = (startX + endX) / 2;
  const centerY = (startY + endY) / 2;

  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    circleRadius
  );

  // gradient.addColorStop(0, `rgba(${gradientCenter},${opacity})`);
  gradient.addColorStop(0, `rgba(${gradientRgbBasis},${opacity})`);
  gradient.addColorStop(
    0.4,
    `rgba(${gradientRgbBasis},${opacity >= 0.5 ? 0.5 : opacity})`
  );
  gradient.addColorStop(
    0.5,
    `rgba(${gradientRgbBasis},${opacity >= 0.3 ? 0.3 : opacity})`
  );
  gradient.addColorStop(
    0.6,
    `rgba(${gradientRgbBasis},${opacity >= 0.1 ? 0.1 : opacity})`
  );
  gradient.addColorStop(1, `transparent`);

  ctx.beginPath();
  ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;

  ctx.fill();
}

export {
  drawLine,
  drawRect,
  drawLineCirclePoints,
  drawLineCircle,
  drawCircle,
  drawImage,
  drawTriangle,
};
