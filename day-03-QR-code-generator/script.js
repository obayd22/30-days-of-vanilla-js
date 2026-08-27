let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

const button = document.getElementById("button");

function generateQR() {
    
    // handling 
    if (qrText.value.trim() === "") {
        qrText.classList.add("error")               
        setTimeout(() => {
            qrText.classList.remove("error")               
        }, 1000);
        return;
    }

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        encodeURIComponent(qrText.value);
    
    imgBox.classList.add("show-img")
}

button.addEventListener("click", () => {
    generateQR();
});