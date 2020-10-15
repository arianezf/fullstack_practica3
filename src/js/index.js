import 'regenerator-runtime/runtime';

const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');

const cells = [topLeft, topRight, bottomLeft, bottomRight];

const randomElement = (cells) => {

    return (cells[Math.floor(Math.random() * cells.length)]);

};

const clickCells = (cells) => {

    return new Promise((resolve) => {

        for (const cell of cells) {

            cell.addEventListener('click', () => {

                addClassActive(cell);
                setTimeout(() => {
                    removeClassActive(cell);
                },500);
                
                resolve(cell);

            });

        }

    });

};



const addClassActive = (cell) => {

    if (cell.className === 'cell top-left') {

        cell.classList.add('top-left-active');

    }
    else if (cell.className === 'cell top-right') {

        cell.classList.add('top-right-active');

    }
    else if (cell.className === 'cell bottom-left') {

        cell.classList.add('bottom-left-active');

    }
    else if (cell.className === 'cell bottom-right'){

        cell.classList.add('bottom-right-active');

    }


}

const removeClassActive = (cell) =>{

            cell.classList.remove('top-left-active');
            cell.classList.remove('top-right-active');
            cell.classList.remove('bottom-left-active');
            cell.classList.remove('bottom-right-active');
}

const startSequence = (cell) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            if (cell.className === 'cell top-left') {

                cell.classList.add('top-left-active');

            }
            else if (cell.className === 'cell top-right') {

                cell.classList.add('top-right-active');

            }
            else if (cell.className === 'cell bottom-left') {

                cell.classList.add('bottom-left-active');

            }
            else {

                cell.classList.add('bottom-right-active');

            }

        }, 500);

        setTimeout(() => {

            cell.classList.remove('top-left-active');
            cell.classList.remove('top-right-active');
            cell.classList.remove('bottom-left-active');
            cell.classList.remove('bottom-right-active');

            resolve();

        }, 1000);

    });

};

const compareArray = (array1, array2) => {
    
    return (array1.length === array2.length && array1.every((value, index) => value === array2[index]));

};

const playerChoose = async (cells, randomCells) => {

    const result = [];
    
    for (let i = 0; i < randomCells.length; i++) {

        result.push(await clickCells(cells));

    }
    
    return new Promise((resolve) => {

        if (compareArray(result, randomCells)) {

            resolve(true);

        }

        else {

            resolve(false);

        }

    });
    
};


const startGame = async () => {
    
    const randomCells = [];
    
    let keepPlaying = true;
   

    while (keepPlaying) {
        
        randomCells.push(randomElement(cells));
        console.log(randomCells);
        
        for (const cell of randomCells) {
       
            await startSequence(cell);
            
        }

        if (!(await playerChoose(cells, randomCells))) {

            keepPlaying = false;
            
        }
    
    }
    
    alert('Game over');
    
};

const playButton = document.querySelector('button');

playButton.addEventListener('click', () => {

    startGame();
    
});
