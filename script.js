function carregar() {
  const msg = window.document.getElementById('msg')
  const img = window.document.getElementById('imagem')
  const data= new Date()
  const hora = data.getHours()
  msg.innerHTML =  hora + 'hs'




}
