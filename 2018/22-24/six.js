var scoreObject = {
  Tony: {
    Math: 95,
    English: 79,
    Music: 68
  },
  Simon: {
    Math: 100,
    English: 95,
    Music: 98
  },
  Annie: {
    Math: 54,
    English: 65,
    Music: 88
  }
};
var scoreArray = [];

function toArray(obj) {
  for (const key in obj) {
    var s = [];
    s.push(key);
    for (const key_1 in obj[key]) {
      s.push(obj[key][key_1]);
    }
    scoreArray.push(s);
  }
  console.log(scoreArray);
}
// toArray(scoreObject);

var menuArr = [
  [1, 'Area1', -1],
  [2, 'Area11', -1],
  [3, 'Area1-1', 1],
  [4, 'Area1-2', 1],
  [5, 'Area2-1', 2],
  [6, 'Area2-2', 2],
  [7, 'Area1-2-3', 4],
  [8, 'Area2-2-1', 6]
];

function toObject(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    var cur = arr[i];
    if (cur[2] == -1) {
      obj[cur[0]] = {
        name: cur[1],
        subMenu: {}
      };
    } else if (cur[2] == 1) {
      obj['1']['subMenu'][cur[0]] = {
        name: cur[1],
        subMenu: {}
      };
    } else if (cur[2] == 2) {
      obj['2']['subMenu'][cur[0]] = {
        name: cur[1],
        subMenu: {}
      };
    } else if (cur[2] == 4) {
      obj['1']['subMenu']['4']['subMenu'][cur[0]] = {
        name: cur[1],
        subMenu: {}
      };
    } else if (cur[2] == 6) {
      obj['2']['subMenu']['6']['subMenu'][cur[0]] = {
        name: cur[1],
        subMenu: {}
      };
    }
  }
  return obj;
}
console.log(toObject(menuArr));
