# Formulario Reactivo - Angular

Este proyecto consiste en un formulario de registro desarrollado con Angular utilizando Formularios Reactivos (Reactive Forms). Incluye validaciones, un validador personalizado para confirmar contraseña y un resumen de los datos registrados.

## Requisitos

Antes de ejecutar el proyecto debes tener instalado:

- Node.js
- Angular CLI

Puedes verificar que estén instalados con los siguientes comandos:

```bash
node -v
npm -v
ng version
```

## Instalación

1. Clonar o descargar el proyecto.

2. Abrir una terminal en la carpeta del proyecto.

3. Instalar las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo ejecuta:

```bash
ng serve
```

Luego abre el navegador en la siguiente dirección:

```
http://localhost:4200
```

## Funcionalidades

- Registro de usuario mediante Formularios Reactivos.
- Validaciones de todos los campos.
- Validación de correo electrónico.
- Validación de edad.
- Validación del nombre de usuario mediante expresión regular.
- Confirmación de contraseña mediante un validador personalizado.
- Aceptación obligatoria de términos y condiciones.
- Mostrar y ocultar contraseña.
- Botón de registro habilitado únicamente cuando el formulario es válido.
- Visualización de un resumen con los datos registrados (sin mostrar la contraseña).

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS