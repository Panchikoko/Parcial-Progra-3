const datosAutos = {
    "Aston Martin DB11": {
        descripcion: "Gran turismo británico que combina elegancia y mucha potencia.",
        motor: "V8 4.0 biturbo",
        potencia: "503 CV",
        aceleracion: "4,0 s",
        velocidad: "300 km/h"
    },
    "Audi R8": {
        descripcion: "Superdeportivo de motor central con tracción integral quattro.",
        motor: "V10 5.2 atmosférico",
        potencia: "570 CV",
        aceleracion: "3,4 s",
        velocidad: "330 km/h"
    },
    "Chevrolet Corvette": {
        descripcion: "El deportivo americano con motor central en su versión más moderna.",
        motor: "V8 6.2",
        potencia: "495 CV",
        aceleracion: "3,0 s",
        velocidad: "312 km/h"
    },
    "Ford Mustang": {
        descripcion: "Un clásico muscle car, con el sonido inconfundible de su V8.",
        motor: "V8 5.0",
        potencia: "460 CV",
        aceleracion: "4,3 s",
        velocidad: "250 km/h"
    },
    "Mercedes-Benz AMG": {
        descripcion: "Deportivo de alto rendimiento con el sello de la división AMG.",
        motor: "V8 4.0 biturbo",
        potencia: "585 CV",
        aceleracion: "3,6 s",
        velocidad: "318 km/h"
    },
    "Porsche 911": {
        descripcion: "Un ícono deportivo con más de 60 años de historia.",
        motor: "Bóxer 6 cilindros 3.0 biturbo",
        potencia: "385 CV",
        aceleracion: "4,2 s",
        velocidad: "293 km/h"
    },
    "Audi A3": {
        descripcion: "Compacto premium, cómodo para la ciudad y con andar deportivo.",
        motor: "1.4 turbo",
        potencia: "150 CV",
        aceleracion: "8,5 s",
        velocidad: "220 km/h"
    },
    "Chevrolet Cruze": {
        descripcion: "Sedán familiar con buen espacio interior y equipamiento completo.",
        motor: "1.4 turbo",
        potencia: "153 CV",
        aceleracion: "8,9 s",
        velocidad: "215 km/h"
    },
    "Fiat Cronos": {
        descripcion: "Sedán práctico y económico, muy elegido para el día a día.",
        motor: "1.3 nafta",
        potencia: "109 CV",
        aceleracion: "11 s",
        velocidad: "180 km/h"
    },
    "Nissan Sentra": {
        descripcion: "Sedán amplio y confortable, pensado para viajes largos.",
        motor: "2.0 atmosférico",
        potencia: "149 CV",
        aceleracion: "9,5 s",
        velocidad: "200 km/h"
    },
    "Toyota Corolla": {
        descripcion: "Un clásico de confiabilidad, con versiones nafteras e híbridas.",
        motor: "2.0 nafta",
        potencia: "170 CV",
        aceleracion: "9,5 s",
        velocidad: "200 km/h"
    },
    "Volkswagen Golf": {
        descripcion: "Compacto deportivo que equilibra uso diario y diversión al volante.",
        motor: "2.0 TSI turbo",
        potencia: "245 CV",
        aceleracion: "6,3 s",
        velocidad: "250 km/h"
    }
};

const ventanaEmergente = document.getElementById("ventana-emergente");
const botonCerrar = document.getElementById("ventana-cerrar");
const tarjetasAutos = document.querySelectorAll(".tarjeta-auto");


function abrirVentana(tarjeta) {
    const nombre = tarjeta.querySelector("h3").textContent;
    const imagen = tarjeta.querySelector("img").src;
    const datos = datosAutos[nombre];

    document.getElementById("ventana-nombre").textContent = nombre;
    document.getElementById("ventana-imagen").src = imagen;
    document.getElementById("ventana-imagen").alt = nombre;
    document.getElementById("ventana-descripcion").textContent = datos.descripcion;
    document.getElementById("ventana-motor").textContent = datos.motor;
    document.getElementById("ventana-potencia").textContent = datos.potencia;
    document.getElementById("ventana-aceleracion").textContent = datos.aceleracion;
    document.getElementById("ventana-velocidad").textContent = datos.velocidad;

    ventanaEmergente.classList.add("abierto");
}

function cerrarVentana() {
    ventanaEmergente.classList.remove("abierto");
}


tarjetasAutos.forEach(function (tarjeta) {
    tarjeta.addEventListener("click", function () {
        abrirVentana(tarjeta);
    });
});

botonCerrar.addEventListener("click", cerrarVentana);

ventanaEmergente.addEventListener("click", function (evento) {
    if (evento.target === ventanaEmergente) {
        cerrarVentana();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrarVentana();
    }
});