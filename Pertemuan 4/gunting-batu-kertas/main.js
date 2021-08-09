document.getElementById('gunting').addEventListener('click', pilihGunting)
document.getElementById('batu').addEventListener('click', pilihBatu)
document.getElementById('kertas').addEventListener('click', pilihKertas)

function pilihGunting() {
  const pilihan_anda = document.getElementById('pilihanAnda')
  pilihan_anda.setAttribute('src', 'gunting.png')
  pilihan_anda.style.visibility = 'visible'
  
  randomPilihanKomputer()
}

function pilihBatu() {
  const pilihan_anda = document.getElementById('pilihanAnda')
  pilihan_anda.setAttribute('src', 'batu.png')
  pilihan_anda.style.visibility = 'visible'
  
  randomPilihanKomputer()
}

function pilihKertas() {
  const pilihan_anda = document.getElementById('pilihanAnda')
  pilihan_anda.setAttribute('src', 'kertas.png')
  pilihan_anda.style.visibility = 'visible'
  
  randomPilihanKomputer()
}

function randomPilihanKomputer() {
  const random_number = Math.floor(Math.random() * 3)
  const pilihanKomputer = document.getElementById('pilihanKomputer')
  if (random_number == 0) {
	  pilihanKomputer.setAttribute('src', 'gunting.png')
  }
  else if (random_number == 1) {
	  pilihanKomputer.setAttribute('src', 'batu.png')
  }else {
	  pilihanKomputer.setAttribute('src', 'kertas.png')
  }
  pilihanKomputer.style.visibility = 'visible'
}