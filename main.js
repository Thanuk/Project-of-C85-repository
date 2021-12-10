canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_image_width = 75;
greencar_image_height = 100;

greencar_image_x = 5;
greencar_image_y = 225;

function add() {
	background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;
    
    greencar_img_tag = new Image();
    greencar_img_tag.onload = uploadgreencar;
    greencar_img_tag.src = greencar_image;
}
function uploadBackground(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar(){
    ctx.drawImage(greencar_img_tag, greencar_image_x, greencar_image_y, greencar_image_width, greencar_image_height);
}

window.addEventListener("keydown", Key_Down);

function Key_Down(e){
    keypress = e.keyCode;
    console.log(keypress);

    if (keypress == 37){
        Left();
        console.log("Left Key");
    }

    if (keypress == 38){
        Up();
        console.log("Up Key");
    }

    if (keypress == 39){
        right();
        console.log("Right Key");
    }

    if (keypress == 40){
        Down();
        console.log("Down Key");
    }
}

function Up(){
    if(greencar_image_y >= 0){
        greencar_image_y = greencar_image_y - 10;
        console.log("When Up Arrow is pressed x = " + greencar_image_x + "| y = " + greencar_image_y);
        uploadBackground();
        uploadgreencar();
    }
}

function Left(){
    if(greencar_image_x >= 0){
        greencar_image_x = greencar_image_x - 10;
        console.log("When Left Arrow is pressed x = " + greencar_image_x + "| y = " + greencar_image_y);
        uploadBackground();
        uploadgreencar();
    }
} 

function right(){
    if(greencar_image_x <= 700){
        greencar_image_x = greencar_image_x + 10;
        console.log("When Right Arrow is pressed x =." + greencar_image_x + "| y = " + greencar_image_y);
        uploadBackground();
        uploadgreencar();
    }
}

function Down(){
    if(greencar_image_y <= 300){
        greencar_image_y = greencar_image_y + 10;
        console.log("When Down Arrow is pressed x = " + greencar_image_x + "| y = " + greencar_image_y);
        uploadBackground();
        uploadgreencar();
    } 
}
