console.log('Start Interval!')
var loading = setInterval(waiting, 300);

function waiting() {
  if(document.querySelector('[data-el="orderbook"]')){
    clearTimeout(loading)
    console.log("Found!")
  }
}

setTimeout(script, 3000);

function script() {
  var lines = [];

  getCanceledOrders(lines);

  removeLines(lines);

  getRemainingOrders()


  function getRemainingOrders() {
    document.querySelectorAll('.order-resume-info').forEach(line => {
      if (line.querySelector('td').className.includes('type-buy')) {
        var price = line.querySelector('.value-buy').textContent.substr(3).replace('.', '').replace(',', '.')
        var amount = line.querySelector('.value-qtd').textContent.replace('.', '').slice(0, -5).replace(',', '.');
        var total = price * amount;
        total = total.toFixed(2)
        // console.log(price, amount, total);
        // console.log(line.querySelector('.status > span').innerHTML)
        line.querySelector('.status > span').innerHTML = `R$ ${total}`
      }
      if (line.querySelector('td').className.includes('type-sell')) {
        var price = line.querySelector('.value-sell').textContent.substr(3).replace('.', '').replace(',', '.')
        var amount = line.querySelector('.value-qtd').textContent.replace('.', '').slice(0, -4).replace(',', '.');
        var total = price * amount;
        total = total.toFixed(2)
        console.log(price, amount, total);
        console.log(line.querySelector('.status > span').innerHTML)
        line.querySelector('.status > span').innerHTML = `R$ ${total}`
      }
    })
  }



  function getCanceledOrders(lines) {
    document.querySelectorAll('.order-resume-info').forEach(line => {
      if (line.querySelector('.status').textContent.includes('cancelada')) {
        lines.push(line);
      }
    })
  }

  function removeLines(lines) {
    lines.forEach(line => {
      line.remove();
    })
  }
}


