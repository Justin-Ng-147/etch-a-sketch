const clearBtn = document.getElementById('clearButton');
const gridDiv = document.getElementById('grid');
let down = false;



function makeGrid(size){
    gridDiv.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${size},1fr)`;
    // gridDiv.style.backgroundColor = 'black';    
    setUpGrid(size);
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

function clearGrid(){
    let currentCount = gridDiv.childElementCount;
    let newCount = prompt('Enter Number of Grids'); 
    newCount = newCount > 100 ? 100 : newCount;
    for(let x = 0 ; x < currentCount; x++){
        gridDiv.removeChild(gridDiv.firstChild);
    }
    makeGrid(newCount);
}


clearBtn.onclick = clearGrid;

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
    // setUpGrid(16);
}