//  Arreglo con 6 elementos (Hardware y Periféricos)
const productosHardware = [
    { 
        nombre: "Teclado Mecánico Redragon UCAL MAX", 
        categoria: "Periféricos", 
        detalle: "Layout US International, switches intercambiables y retroiluminación." 
    },
    { 
        nombre: "Placa de Video GTX 1070 8GB", 
        categoria: "Componentes", 
        detalle: "Excelente rendimiento para diseño, renderizado y trazado de gráficos." 
    },
    { 
        nombre: "Mouse Óptico Logitech G502", 
        categoria: "Periféricos", 
        detalle: "Sensor de alta precisión y botones programables para macros." 
    },
    { 
        nombre: "Procesador AMD Ryzen 5", 
        categoria: "Componentes", 
        detalle: "6 núcleos y 12 hilos, ideal para multitarea y desarrollo de software." 
    },
    { 
        nombre: "Memoria RAM Corsair Vengeance 16GB", 
        categoria: "Componentes", 
        detalle: "Módulo DDR4 optimizado para alta frecuencia y disipación térmica." 
    },
    { 
        nombre: "Auriculares HyperX Cloud II", 
        categoria: "Periféricos", 
        detalle: "Sonido envolvente 7.1 con almohadillas de memory foam." 
    }
];


const contenedor = document.getElementById('contenedor-tarjetas');
const btnFiltrar = document.getElementById('btn-filtrar');
const btnRestablecer = document.getElementById('btn-restablecer');


function cargarCatalogo(listaProductos) {

    contenedor.innerHTML = '';


    listaProductos.forEach(producto => {
        const divTarjeta = document.createElement('div');
        divTarjeta.classList.add('tarjeta');

        divTarjeta.innerHTML = `
            <div>
                <h2>${producto.nombre}</h2>
                <span class="categoria">${producto.categoria}</span>
                <p class="detalle-tecnico">${producto.detalle}</p>
            </div>
        `;

        contenedor.appendChild(divTarjeta);
    });
}


cargarCatalogo(productosHardware);


btnFiltrar.addEventListener('click', () => {

    const perifericos = productosHardware.filter(prod => prod.categoria === "Periféricos");
    cargarCatalogo(perifericos);
});

btnRestablecer.addEventListener('click', () => {
    cargarCatalogo(productosHardware);
});