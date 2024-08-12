function loadImageFromFile(){
    let fileInput = document.getElementById("file");
    let files = fileInput.files;

    if(files.length == 0){
        return;
    }

    let file = files[0];
    let fileReaders = new FileReader();
    fileReaders.onload = function (e){
        document.getElementById("image").src = e.target.result;
        document.getElementById("imageHidden").onload = function(){
            //ambil width awal dari imageHidden
            widthInput.value = document.getElementById("imageHidden").naturalWidth;
            //ambil height awal dari imageHidden
            heightInput.value = document.getElementById("imageHidden").naturalHeight;
            widthInput.oldvalue = widthInput.value;
            heightInput.oldvalue = widthInput.value;
        }
        document.getElementById("imageHidden").src = e.target.result;
    };
    fileReaders.onerror = function () {
        console.warn("something went wrong!");
    };
    fileReaders.readAsDataURL(file);
}