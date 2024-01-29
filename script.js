const qrText = document.getElementById('qr-text');
const Sizes = document.getElementById('Sizes');  
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');
const qrContainer = document.querySelector('.qr-body');
let size = Sizes.value;

generatebtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
    generateCode();
    
    
});

Sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
});
function isEmptyInput(){
    if(qrText.value.length > 0){
       

    }
    else{
        alert("enter the text or url to generate");
    }

}

function generateCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {  
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}
