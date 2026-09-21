const boton = document.getElementById("btnAbrir");

const inicio = document.getElementById("inicio");

const regalo = document.getElementById("regalo");


boton.addEventListener("click", function () {

    // Desaparece la pantalla inicial
    inicio.style.opacity = "0";


    setTimeout(function () {

        // Ocultamos completamente el inicio
        inicio.style.display = "none";


        // Mostramos el regalo
        regalo.classList.remove("oculto");


        // Activamos las animaciones
        setTimeout(function () {

            regalo.classList.add("animar");

        }, 50);


    }, 800);

});