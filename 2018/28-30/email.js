const emailInput = document.getElementById('email-input');
const emailSugWrapper = document.getElementById('email-sug-wrapper');
const postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];

emailInput.addEventListener('input', function(e) {
  let value = emailInput.value.trim();
  emailSugWrapper.innerHTML = '';
  if (value) {
    for (let i = 0; i < postfixList.length; i++) {
      const ele = postfixList[i];
      emailSugWrapper.innerHTML += `<li>${value}@${ele}</li>`;
    }
  } else {
    emailSugWrapper.innerHTML = '';
  }
});
