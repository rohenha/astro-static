export function roundDecimal(nombre, precision = 2) {
  // var precision = precision || 2;
  const tmp = 10 ** precision
  // const tmp = Math.pow(10, precision);
  return Math.round(nombre * tmp)/tmp;
}

// Get Matrix from Transform
export const getMatrix = (transform) => {
  const translate = {}
  let mat = transform.match(/^matrix3d\((.+)\)$/)
  if (mat) {
    translate.x = parseFloat(mat[1].split(', ')[12])
    translate.y = parseFloat(mat[1].split(', ')[13])
  } else {
    mat = transform.match(/^matrix\((.+)\)$/)
    translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0
    translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0
  }
  return translate
}

export function getRatioPx (value) {
  return value / window.screen.width * window.viewport.width
}

export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}