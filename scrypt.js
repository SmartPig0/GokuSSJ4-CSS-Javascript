var btn = document.getElementById('clicker');
var ssj = document.getElementById('goku');

btn.onclick = function(){
    if(btn.value === 'Transformar'){
        ssj.src= './lib/gokussj.jpg';
        btn.value = 'Acalmar'
        btn.innerHTML = 'Acalmar'
    } else {
        ssj.src='./lib/goku.jpg'
        btn.value = 'Transformar'
        btn.innerHTML= 'Transformar'
        }
}