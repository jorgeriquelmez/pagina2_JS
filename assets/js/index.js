document.addEventListener("DOMContentLoaded", function() {
  function cambiarEstadoMarco() {
    const foto = document.getElementById("foto");
    foto.classList.toggle("marco");
  }

  document.getElementById("foto").addEventListener("click", cambiarEstadoMarco);
});


function verificar() {
  let sumaTotal = Number(document.getElementById("numero1").value) +
    Number(document.getElementById("numero2").value) +
    Number(document.getElementById("numero3").value);
  if (sumaTotal <= 10) {
    document.getElementById("mensaje").innerHTML = `Llevas ${sumaTotal} stickers`;
  } else if (sumaTotal > 10) {
    document.getElementById("mensaje").innerHTML = `Llevas demasiados stickers`;
  };
}

function ingresar() {
  let accessCode = document.getElementById("dato1").value +
    document.getElementById("dato2").value + document.getElementById("dato3").value;
  if (accessCode == 911) {
    document.getElementById("ingresaClave").innerHTML = `password 1 correcto`
  }
  else if (accessCode == 714) {
    document.getElementById("ingresaClave").innerHTML = `password 2 correcto`
  } else {
    document.getElementById("ingresaClave").innerHTML = `password incorrecto`
  };

}