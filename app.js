let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let Qrtext = document.getElementById("Qrtext");

function generateQr() {
  if (Qrtext.value.length > 0) {
    qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      Qrtext.value;
    imgbox.classList.add("show-img");
  } else {
    Qrtext.classList.add("error");
    setTimeout(() => {
      Qrtext.classList.remove("error");
      location.reload();
    }, 1000);
  }
}
function downloadQr() {
  if (qrimage.src && qrimage.src !== "") {
    window.open(qrimage.src, "_blank");
  }
}
