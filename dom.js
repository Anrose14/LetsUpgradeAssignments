/*console.log(document);

console.log(document.querySelector('.first'));
console.log(document.querySelector('.second'));
console.log(document.querySelector('#hi'));

document.querySelector('.first').innerText="woooww"

console.log(document.querySelector('.first').innerText);

document.querySelector("#sec").innerText="LetsUpgrade"*/

function printing(){
  let name=document.querySelector("#txt").value;
  console.log(name)
  document.querySelector("#sec").innerHTML='<h1>${name}</h1>';
}

printing();

