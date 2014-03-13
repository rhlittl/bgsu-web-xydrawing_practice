function getRandomColor(){
    var letters = "0123456789abcdef";
    var result = "#";

    for(var i = 0; i < 6; i++){
        result += letters.charAt(parseInt(Math.random() * letters.length));
    }

    return result;

}

function setSquares(){
    var squareContainer = document.getElementById("displayArea");

    for(var i = 0; i < 50; i++){
        var square = document.createElement("div");

        square.style.height = '50px';
        square.style.width = '50px';
        square.style.border = '2px solid black';
        square.style.backgroundColor = getRandomColor();
        square.style.position = 'absolute';
        square.style.top = Math.random() * 448 + 'px';
        square.style.left = Math.random() * 548 + 'px';
        squareContainer.appendChild(square);
    }

}

function addSquare(){
    var squareContainer = document.getElementById("displayArea");

    var square = document.createElement("div");

    square.style.height = '50px';
    square.style.width = '50px';
    square.style.border = '2px solid black';
    square.style.backgroundColor = getRandomColor();
    square.style.position = 'absolute';
    square.style.top = Math.random() * 448 + 'px';
    square.style.left = Math.random() * 548 + 'px';
    squareContainer.appendChild(square);
    
}

function resetSquares(){
    var squareContainer = document.getElementById("displayArea");

    while(squareContainer.firstChild){
        squareContainer.removeChild(squareContainer.firstChild);
    }

    setSquares();

}

function changeColors(){
    var squareContainer = document.getElementById("displayArea");
    var allSquares = squareContainer.getElementsByTagName("div");

    for(i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}

function bringToFront(){
    var squareContainer = document.getElementById("displayArea");
    var allSquares = squareContainer.getElementsByTagName("div");

    for(i = 0; i < allSquares.length; i++){
        if(allSquares[i] == event.target){
            allSquares[i].style.zIndex = '10';
        }
        else{
            allSquares[i].style.zIndex = '0';
        }
    }
}

function deleteSquare(){
    var squareContainer = document.getElementById("displayArea");
    var square = event.target;

    squareContainer.removeChild(square);
}