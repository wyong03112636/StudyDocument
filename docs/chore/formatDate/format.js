export default (dt, fmt) => {
  if (!dt) return '-';
  if (/^\d{10}$/.test(dt)) {
    dt *= 1000;
  }
  if (typeof dt === 'string') {
    dt = dt.replace(/-/g, '/');
  }
  let date;
  try {
    date = new Date(dt);
  } catch (e) {
    // nothing todo
  }
  if (!date || date.toString() === 'Invalid Date') return dt;
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  const yReg = fmt.match(/(y+)/);
  if (yReg && yReg[0]) {
    fmt = fmt.replace(yReg[0], `${date.getFullYear()}`.substr(4 - yReg[0].length));
  }
  for (const k in o) {
    const oReg = fmt.match(new RegExp(`(${k})`));
    if (oReg && oReg[0]) {
      fmt = fmt.replace(
        oReg[0],
        oReg[0].length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
    }
  }
  return fmt;
};
