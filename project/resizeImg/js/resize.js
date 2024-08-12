let widthInput = document.getElementById("widthInput");
let heightInput = document.getElementById("heightInput");

widthInput.addEventListener("change", function(e){
    if(document.getElementById("keepAspectCheckbox").checked){
        syncSize(widthInput.oldvalue, heightInput.oldvalue, widthInput.value, undefined);
    }
    this.oldvalue = this.value;
});

heightInput.addEventListener("change", function(e){
    if(document.getElementById("keepAspectCheckbox").checked){
        syncSize(widthInput.oldvalue, heightInput.oldvalue, undefined, heightInput.value);
    }
    this.oldvalue = this.value;
});

function syncSize(oldWidth, oldHeight, newWidth, newHeight){
    if(oldWidth && oldHeight){
        const ratio = parseInt(newWidth) / parseInt(newHeight);
        if(newWidth){
            newHeight = newWidth / ratio;
            heightInput.value = parseInt(newHeight);
            heightInput.oldvalue = heightInput.value;
        }
        else if (newHeight){
            newWidth = newHeight * ratio;
            widthInput.value = parseInt(newWidth);
            widthInput.oldvalue = widthInput.value;
        }
    }
}