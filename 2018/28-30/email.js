const emailInput = document.getElementById('email-input');
const emailSugWrapper = document.getElementById('email-sug-wrapper');
const postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];

emailInput.oninput = function() {
  // 获取用户输入，生成提示框中的提示内容，将提示内容添加到email - sug - wrapper中
  const value = userInput();
  // 控制email - sug - wrapper的显示 / 隐藏状态
  disPlay(value);
};

function userInput() {
  var html = emailInput.value;
  var temp = document.createElement('div');
  temp.textContent != undefined
    ? (temp.textContent = html)
    : (temp.innerText = html);
  var output = temp.innerHTML;
  temp = null;
  return output;
}

function getUlList(value) {
  let list = ``;
  if (value.indexOf('@') != -1) {
    const index = value.indexOf('@');
    const valueS = value.slice(0, index);
    if (index > -1) {
      var valueL = value.slice(index + 1);
    }
    value = valueS;
  }
  for (let i = 0; i < postfixList.length; i++) {
    const ele = postfixList[i];
    if (valueL) {
      if (ele.includes(valueL)) {
        list += `<li>${value}@${ele}</li>`;
      }
    } else {
      list += `<li>${value}@${ele}</li>`;
    }
  }
  return list;
}

function setUlList(value) {
  const list = getUlList(value);
  emailSugWrapper.innerHTML = list;
}

function disPlay(value) {
  if (!value) {
    hideUl();
  } else {
    showUl(value);
  }
}

function hideUl() {
  emailSugWrapper.innerHTML = '';
}

function showUl(value) {
  setUlList(value);
}

// 第二步 鼠标点击确认内容

// 解码HTML 
function htmlDecode(text) {
  var temp = document.createElement('div');
  temp.innerHTML = text;
  var output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}
emailSugWrapper.addEventListener('click', function(e) {
  const li = e.target;
  emailSugWrapper.innerHTML = '';
  emailInput.value = htmlDecode(li.innerHTML);
  emailInput.focus();
});

// 第三步  方向键控制
let i = 0;

emailInput.onkeydown = function(e) {
  const lis = emailSugWrapper.children;
  // xia
  if (e.keyCode == 40) {
    i = i + 1;
    if (i > lis.length - 1) {
      i = 0;
    }
  }
  // shang
  if (e.keyCode == 38) {
    i = i - 1;
    if (i < 0) {
      i = lis.length - 1;
    }
  }
  if (e.keyCode == 27) {
    emailInput.select();
  }
  // huich
  if (e.keyCode == 13) {
    emailInput.value = htmlDecode(lis[i].innerHTML);
    emailSugWrapper.innerHTML = '';
    emailInput.focus();
  }
  for (let j = 0; j < lis.length; j++) {
    const element = lis[j];
    element.className = '';
  }
  if (lis) {
    lis[i].className = 'select';
  }

};
