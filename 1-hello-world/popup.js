const _name = document.getElementById('name');

_name.addEventListener('keyup', function(e) {
  console.log(e.target);
  const _greet = document.getElementById('greet');
  _greet.innerText = `Hello ${e.target.value}`;
});