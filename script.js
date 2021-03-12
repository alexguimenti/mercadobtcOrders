setTimeout(script, 1500);

function script() {
  var lines = [];

getCanceledOrders(lines);

removeLines(lines);

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


