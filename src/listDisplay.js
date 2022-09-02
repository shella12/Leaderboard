const ulist = document.getElementById('ulist');

const list = (value) => {
  ulist.innerHTML = '';
  value.forEach((element) => {
    const listElement = `<li>${element.user}&nbsp;&nbsp;:&nbsp;&nbsp;${element.score}</li>`;
    ulist.innerHTML += listElement;
  });
};

module.exports = list;