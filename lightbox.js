let containerBox = document.getElementById('container');
let popUp = document.getElementById('popup');
let images = document.querySelectorAll('.animals');
//get our container, popup and all our images to do something with them

let popUpImg = document.getElementById('imgBx');
//get the invisible image box inside the popup
for (let i = 0; i < images.length; i++){
    images[i].onclick = function(){
        popUp.style.display = 'block';
        popUpImg.src = this.src;
        containerBox.style.display = 'none';
        document.body.style.backgroundColor = 'black';
        //upon the click the function makes the pic popup and the background styling changes
    };
};

let closer = document.getElementById('x');
closer.onclick = function(){
    popUp.style.display = 'none';
    containerBox.style.display = 'flex';
    document.style.backgroundColor = '#3f4547';
};