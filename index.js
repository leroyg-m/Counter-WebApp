numberDisplayed = document.getElementById("number")

let number = 0;
//should have been a function but I understand it better this way
document.querySelector('.add').addEventListener('click',function(){
    number++;
    numberDisplayed.textContent = number;
});

document.querySelector('.subtract').addEventListener('click',function(){
    number--;
    numberDisplayed.textContent = number;
});

var modal = document.getElementById("infoModal")

document.querySelector('.info').onclick = function(){ //allows you to seee modal on click
    modal.style.display = "block";
}

document.querySelector('.close').onclick = function(){ //allows you to close using the button
    modal.style.display = "none";
}
window.onclick = function(event){ //allows you to click outside the modal to close
    if(event.target == modal){
        modal.style.display = "none"; 
    }
}