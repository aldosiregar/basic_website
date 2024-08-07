function resizeImg(){
    const canvas = document.getElementById("canvasHidden");
    

    let width = document.getElementById("widthInput").value;
    let height = document.getElementById("heightInput").value;

    const MAX_WIDTH = document.getElementById("maxWidth").value;
    const MAX_HEIGHT = document.getElementById("maxHeight").value;

    if(width > height){
        if(width > MAX_WIDTH){
            height = height * (MAX_WIDTH / width);
            width = MAX_WIDTH;
        }
    }
    else{
        if(height > MAX_HEIGHT){
            width = width * (MAX_HEIGHT / height);
            height = MAX_HEIGHT;
        }
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    const imageHidden = document.getElementById("imageHidden");
    ctx.drawImage(imageHidden, 0, 0, canvas.width, canvas.height);
}