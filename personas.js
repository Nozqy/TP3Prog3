
const formulario = document.getElementById('form-pacientes');
const cuerpoTabla = document.getElementById('cuerpo-tabla');


formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Calculamos el IMC
    const imc = (peso / (altura * altura)).toFixed(2); // .toFixed(2) deja solo 2 decimales

    // Creamos una nueva fila (tr)
    const nuevaFila = document.createElement('tr');


    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td><strong>${imc}</strong></td>
        <td><button class="btn-eliminar">Eliminar</button></td>
    `;

    // Lógica para el botón de eliminar de esta fila específica
    const btnEliminar = nuevaFila.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', function() {
        nuevaFila.remove(); // Quita la fila del DOM
    });


    cuerpoTabla.appendChild(nuevaFila);

    // Limpiamos el formulario para cargar otra persona
    formulario.reset();
});