const qrText =document.getElementById('qr-text');
const Sizes= document.getElementById('sizes');

const generatebtn= document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrContainer = document.querySelector('qr-body');

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault;
    genrateCode();
});
function genrateCode(){
    qrContainer.innerHTML="";
    new QrCode(qrContainer, {
        text:qrText.value,
        height :size,
        width:size,
        colorLight: "#fff",
        colorDark : "#000",

    })

}
