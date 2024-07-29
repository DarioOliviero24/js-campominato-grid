const square = parseInt( prompt('inserisci il numero'));

console.log('square',square, typeof square);

const container = document.getElementById('container');


for (let i = 0; i < square; i++){
    const newcell = document.createElement('div');
    newcell.innerHTML = (i + 1);
    
    newcell.addEventListener('click',function () {
    newcell.classList.toggle('dario');

    console.log(newcell.innerHTML);
    
});

container.append(newcell);
}
