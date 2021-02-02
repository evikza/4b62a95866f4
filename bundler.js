console.clear();

document.querySelector('.calculate_button').addEventListener('click', () => {
  let values = {
    proceeds: Number(document.getElementById('proceeds').value) || 0,
    costPrice: Number(document.getElementById('costPrice').value) || 0,
    operatingExpenses:
      Number(document.getElementById('operatingExpenses').value) || 0,
  };

  let { proceeds, costPrice, operatingExpenses } = values;

  let revenueSales =
    proceeds - (costPrice + (operatingExpenses > 0 ? operatingExpenses : 0));
  let profitability = ((revenueSales / proceeds) * 100).toFixed();
  let lossSales =
    proceeds - (costPrice + (operatingExpenses > 0 ? operatingExpenses : 0));
  let tradeMargin = (((proceeds - costPrice) / costPrice) * 100).toFixed();
  /*
   * (Сумма полученная за продажу - Себестоимость продаж (производственная себестоимость `закупка, зарплата персонала` + разного рода затраты `телефония, проезд и прочее`))
   * https://www.klerk.ru/buh/articles/495812/
   */

  document.getElementById('revenueSales').textContent = revenueSales;
  document.getElementById('profitability').textContent = profitability;
  document
    .getElementById('lossSales')
    .style.setProperty('color', lossSales > 0 ? '#27ae60' : '#c0392b');
  document.getElementById('lossSales').textContent = lossSales;
  document.getElementById('tradeMargin').textContent = tradeMargin;
});
