# Trabajo Práctico N° 3 - Programación 3

**Institución:** UTN La Rioja  
**Alumno:** Bruno Gonzalez  

## Descripción del Proyecto
Este repositorio contiene la resolución del Trabajo Práctico número 3, enfocado en el desarrollo frontend, la manipulación del DOM y la introducción a la programación declarativa. El proyecto está dividido en tres ejercicios principales, accesibles desde un menú de navegación central.

## Ejercicios Realizados

### Ejercicio 1: Flexbox y JavaScript (Catálogo de Hardware)
* **Archivo:** `Flexbox.html`
* **Objetivo:** Maquetación responsiva y renderizado dinámico.
* **Detalles:** Se generó una interfaz de tarjetas (cards) utilizando `display: flex`. Los 6 productos de hardware se inyectan dinámicamente en el DOM a partir de un arreglo en JavaScript. Incluye un botón interactivo que filtra el arreglo para mostrar únicamente los "Periféricos".

### Ejercicio 2: Manipulación del DOM (Registro de Pacientes)
* **Archivo:** `Persona.html`
* **Objetivo:** Manejo de eventos, captura de datos en formularios y manipulación directa del DOM.
* **Detalles:** Un sistema de registro médico donde se ingresan datos personales (nombre, apellido, edad, altura, peso). Mediante JavaScript común, se calcula el Índice de Masa Corporal (IMC) y se agrega una nueva fila a una tabla HTML. Cada fila incluye un botón funcional para eliminar el registro del DOM.

### Ejercicio 3: React (Registro de Pacientes con Estado)
* **Archivo:** `React.html`
* **Objetivo:** Resolución del Ejercicio 2 utilizando React sin librerías de UI externas.
* **Detalles:** Implementación mediante CDN de React. Se utilizan componentes funcionales y el hook `useState` para el manejo del formulario controlado y el almacenamiento de la lista de pacientes. El cálculo del IMC y las funciones de agregar/eliminar filas se manejan actualizando el estado de forma inmutable.

## 🛠️ Tecnologías Utilizadas
* HTML5 (Estructura semántica)
* CSS3 (Flexbox, variables, hover states)
* JavaScript Vanilla (ES6+, DOM, Arrays)
* React 18 (CDN, Hooks, JSX vía Babel)