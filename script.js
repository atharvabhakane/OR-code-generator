        let imgBox = document.getElementById("imgBox");
        let qrImage = document.getElementById("qrImage");
        let qrText = document.getElementById("qrText"); 

        function generateQR() {
            
            if (qrText.value.trim() === "") {
                alert("Please enter text or a URL to generate the QR code.");
                return;
            }
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        }