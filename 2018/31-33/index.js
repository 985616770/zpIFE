// 筛选关键词
function spliceValue(key, obj, filter) {
  var i = 0;
  var result = [];
  var arr = [];
  obj.forEach(e => {
    if (!arr.includes(e[key])) {
      arr.push(e[key]);
      result.push({
        value: ++i,
        text: e[key]
      });
    }
  });
  if (filter) {
    return arr;
  }
  return result;
}

_filter = {
  product: spliceValue('product', sourceData, 'all'),
  region: spliceValue('region', sourceData, 'all')
};
console.log(_filter);

function returnTable(filter) {
  return `<table style='width:100%;text-align:center;'>
                            <tr>
                                <th>商品</th>
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
                            ${returnTbody(filter)}
                            
                    </table>`;

  function returnTbody(filter) {
    var filter = filter || _filter;
    var long = [filter.product.length, filter.region.length];
    var txt = '';
    sourceData.forEach((e, i) => {
      if (
        filter.product.includes(e.product) &&
        filter.region.includes(e.region)
      ) {
        txt += '<tr>';

        if (long[0] <= 1 && i == 0) {
          txt += '<td rowspan=' + long[1] + '>';
          txt += e.product;
          txt += '</td>';
        } else if (long[0] > 1) {
          txt += '<td>';
          txt += e.product;
          txt += '</td>';
        }

        if (long[1] <= 1 && i == 0) {
          txt += '<td rowspan=' + long[0] + '>';
          txt += e.region;
          txt += '</td>';
        } else if (long[1] > 1) {
          txt += '<td>';
          txt += e.region;
          txt += '</td>';
        }

        e.sale.forEach(e => {
          txt += '<td>';
          txt += e;
          txt += '</td>';
        });
        txt += '</tr>';
      }
    });
    return txt;
  }
}
document.querySelector('#result').innerHTML = returnTable();

// 生成选择
function CheckBox(dom, obj, cof) {
  var el =
    typeof dom === 'string' &&
    !!document.querySelector(dom) &&
    document.querySelector(dom);
  if (!el) return;
  var text = cof.text || '';
  var name = cof.name || '';
  el.innerHTML += `
            <label>全部${text}<input type="checkbox" name='${name}' checked data-type='all'></label>
            ${obj
              .map(element => {
                return (
                  '<label>' +
                  element.text +
                  '<input type="checkbox" checked name="' +
                  name +
                  '" data-type="' +
                  element.value +
                  '" data-text="' +
                  element.text +
                  '"></label>'
                );
              })
              .join('')}
            `;
  var all = el.querySelector('[data-type="all"]');
  var ck = el.querySelectorAll('input:not([data-type="all"])');
  var checkArr = {};
  el.addEventListener('change', function(e) {
    var e = e || window.event;
    var t = e.target;
    var haschecked = Array.prototype.some.call(ck, e => {
      return e.checked == 1;
    });
    var allChecked = Array.prototype.every.call(ck, e => {
      return e.checked == 1;
    });
    if (t === all) {
      ck.forEach(e => {
        e.checked = t.checked;
        _filter[t.name] = spliceValue(t.name, sourceData, 'all');
      });
      if (t.checked == false) {
        ck[0].checked = 1;
        _filter[t.name] = [spliceValue(t.name, sourceData, 'all')[0]];
      }
    } else {
      if (!haschecked) {
        return false;
        t.checked = 1;
      }
      t.checked
        ? _filter[t.name].splice(t.dataset.type - 1, 0, t.dataset.text)
        : _filter[t.name].splice(t.dataset.type - 1, 1);
      all.checked = allChecked;
    }
    document.querySelector('#result').innerHTML = returnTable();
  });
}
CheckBox('#region-radio-wrapper', spliceValue('region', sourceData), {
  text: '地区',
  name: 'region'
});
CheckBox('#product-radio-wrapper', spliceValue('product', sourceData), {
  text: '种类',
  name: 'product'
});
