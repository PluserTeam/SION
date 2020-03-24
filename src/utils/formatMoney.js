class formatMoney {
  format(number, decPlaces, decSep, thouSep) {
    (decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
      (decSep = typeof decSep === 'undefined' ? '.' : decSep);
    thouSep = typeof thouSep === 'undefined' ? ',' : thouSep;
    let sign = number < 0 ? '-' : '';
    let i = String(
      parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces))),
    );
    let j = (j = i.length) > 3 ? j % 3 : 0;

    return (
      sign +
      (j ? i.substr(0, j) + thouSep : '') +
      i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, '$1' + thouSep) +
      (decPlaces
        ? decSep +
          Math.abs(number - i)
            .toFixed(decPlaces)
            .slice(2)
        : '')
    );
  }
}

export default new formatMoney();
