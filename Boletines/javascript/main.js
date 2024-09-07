//obtener los elementos de la clase close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
    // Agregar un elemento click a cada uno de ellos
    link.addEventListener("click", function(eve){
        eve.preventDefault();
        let content = document.querySelector('.content');

        //quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeIn");

        //agregarle clases para animar su salida
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOut");

        setTimeout(function(){
            location.href = "/boletines";
        }, 600);

        return false;
    });
});