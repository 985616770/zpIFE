const selected = document.getElementById('region-select');
const selected2 = document.getElementById('region-select2');
const table = document.getElementById('table-wrapper');
const reAll = document.getElementById('regionAll');
const proAll = document.getElementById('productAll');
const container = [];

var status = 0;
var status2 = 0;

function adjust(status, selected) {
  if (status == 0) {
    for (let i = 0; i < selected.children.length; i++) {
      const el = selected.children[i];
      el.checked = true;
    }
    status = 1;
    return status;
  } else if (status == 1) {
    for (let i = 0; i < selected.children.length; i++) {
      const el = selected.children[i];
      el.checked = false;
    }
    status = 0;
    return status;
  }
}

console.log(adjust(status, selected));
console.log(adjust(status, selected));
console.log(status);

reAll.onclick = function() {
  if (status === 0) {
    for (let i = 0; i < selected.children.length; i++) {
      const el = selected.children[i];
      el.checked = true;
    }

    status = 1;
  } else if (status === 1) {
    for (let i = 0; i < selected.children.length; i++) {
      const el = selected.children[i];
      el.checked = false;
    }
    status = 0;
  }
};
proAll.onclick = function() {
  if (status2 === 0) {
    for (let i = 0; i < selected2.children.length; i++) {
      const el = selected2.children[i];
      el.checked = true;
    }
    status2 = 1;
  } else if (status2 === 1) {
    for (let i = 0; i < selected2.children.length; i++) {
      const el = selected2.children[i];
      el.checked = false;
    }
    status2 = 0;
  }
};
selected.onchange = function(e) {
  const input = e.target;
  if (input.checked) {
    container.push(input);
  } else {
    container.pop(input);
  }
  if (container.length == 3) {
    for (let i = 0; i < selected.children.length; i++) {
      const el = selected.children[i];
      el.checked = true;
    }
    reAll.checked = true;
  } else if (container.length < 3) {
    reAll.checked = false;
  }
  console.log(container);
};

selected2.onchange = function(e) {
  var data = getData();
  render(data);
};

function getData() {
  const value = selected.value;
  const value2 = selected2.value;
  const newTable = [];
  for (let i = 0; i < sourceData.length; i++) {
    const element = sourceData[i];
    if (element.region == value && element.product == value2) {
      newTable.push(element);
    }
  }
  return newTable;
}

function render(data) {
  table.innerHTML = `<table border = '1' id="table">
                          <thead>
                          <tr><th>商品</th>
                          <th>地区</th>
                          <th>1月</th>
                          <th>2月</th>
                          <th>3月</th>
                          <th>4月</th>
                          <th>5月</th>
                          <th>6月</th>
                          <th>7月</th>
                          <th>8月</th>
                          <th>9月</th>
                          <th>10月</th>
                          <th>11月</th>
                          <th>12月</th>
                        </tr>
`;
  for (let i = 0; i < data.length; i++) {
    const ele = data[i];
    table.children[0].innerHTML += `<tr>
                          <td>${ele.product}</td>
                          <td>${ele.region}</td>
                        </tr>`;
    console.dir(table.children[0].children[i].children[0]);
    for (let j = 0; j < ele.sale.length; j++) {
      const num = ele.sale[j];
      table.children[0].children[i + 1].children[0].innerHTML += `
      <td>${num}</td>
      `;
    }
  }
  table.children[0].innerHTML += `</table>`;
}
