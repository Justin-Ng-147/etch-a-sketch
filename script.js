
const gridDiv = document.getElementById('grid');
let down = false;

function makeGrid(size){
    gridDiv.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${size},1fr)`;
    // gridDiv.style.backgroundColor = 'black';    
}

function setUpGrid(size){
    for(let i = 0 ; i< size*size ; i++){
        const gridEvent = document.createElement('div');
        gridEvent.addEventListener('mousedown', (e)=>{
            // if(down){
            e.target.style.backgroundColor='black';
            // }
        });
        gridEvent.addEventListener('mouseenter', (e)=>{
            if(down){
            e.target.style.backgroundColor='black';
            }
        });
        // console.log('test');
        gridDiv.appendChild(gridEvent);
    }
}

window.onmousedown = ()=>{
    down=true;
    console.log('down');
};
window.onmouseup = ()=>{
    down=false;
    console.log('up');
};

window.onload = ()=>{
    makeGrid(16);
    setUpGrid(16);
}