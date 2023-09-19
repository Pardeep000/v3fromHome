// convert hex to rgba with opacity
function addAlpha(color: string, opacity: any) {
  // coerce values so ti is between 0 and 1.
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export default addAlpha;
