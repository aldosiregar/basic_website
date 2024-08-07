document.getElementById("presetSelect") = -1;
document.getElementById("presetSelect").addEventListener("change", async function (e) {
    usePreset();
});

function usePreset(){
    let presetSelect = document.getElementById("presetSelect");
    if(presetSelect.selectedIndex != -1){
        let selectedOption = presetSelect.selectedOptions[0];
        widthInput.value = selectedOption.value.split("x")[0];
        heightInput.value = selectedOption.value.split("x")[1];
        presetSelect.selectedIndex = -1;
    }
}