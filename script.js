// Getting references to HTML elements
const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

// Initial size value
let size = sizes.value;

// Event listener for the "Generate" button
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQRCode();
});

// Event listener for size change
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    generateQRCode(); // Regenerate QR code when size changes
});

// Event listener for the "Download" button
downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');

    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAttr);
    } else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

// Function to check if input is empty before generating QR code
function generateQRCode() {
    if (qrText.value.length > 0) {
        qrContainer.innerHTML = "";
        new QRCode(qrContainer, {
            text: qrText.value,
            height: size,
            width: size,
            colorLight: "#fff",
            colorDark: "#000",
        });
    } else {
        alert("Enter the text or URL to generate your QR code");
    }
}
