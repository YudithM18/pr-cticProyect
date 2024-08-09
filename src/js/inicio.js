
const btnJugar = document.getElementById("btnJugar")

const intruccion = document.getElementById("instruccion")

btnJugar.addEventListener("click", function () {
    
    intruccion.innerText = "INICIANDO PARTIDA"

    setTimeout(() => {
        location.href = "index.html"
    }, 2000);

})

const gif = document.getElementById("gif")

