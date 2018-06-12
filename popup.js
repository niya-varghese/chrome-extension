function myfunc(){
	document.getElementById('exp').value += this.id;
}

function clearfn(){
	document.getElementById('exp').value = '';
}

function evalExp(){
	document.getElementById('exp').value = eval(document.getElementById('exp').value);
}

document.getElementById('1').addEventListener('click',myfunc);
document.getElementById('2').addEventListener('click',myfunc);
document.getElementById('3').addEventListener('click',myfunc);
document.getElementById('4').addEventListener('click',myfunc);
document.getElementById('5').addEventListener('click',myfunc);
document.getElementById('6').addEventListener('click',myfunc);
document.getElementById('7').addEventListener('click',myfunc);
document.getElementById('8').addEventListener('click',myfunc);
document.getElementById('9').addEventListener('click',myfunc);
document.getElementById('0').addEventListener('click',myfunc);
document.getElementById('+').addEventListener('click',myfunc);
document.getElementById('-').addEventListener('click',myfunc);
document.getElementById('/').addEventListener('click',myfunc);
document.getElementById('*').addEventListener('click',myfunc);
document.getElementById('c').addEventListener('click',clearfn);
document.getElementById('=').addEventListener('click',evalExp);

