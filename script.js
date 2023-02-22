function carregar() {
  const msg = window.document.getElementById("#msg");
  const img = window.document.getElementById("#imagem");
  const data = new Date();
  const hora = data.getHours();
  msg.innerHTML = 'Bom dia!';

  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = "fotodaManhaAF.png";
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "FotodaTardeAF";
  } else {
    //Boa noite
    img.src = "FotodaNoiteAF";
  }
}


