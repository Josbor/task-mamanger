# task-mamanger

### Hola ! 👋,Bienvenid@ a mi proyecto
[![Cover](https://github.com/Josbor/Josbor/blob/main/wepik-cover-para-github-2022616-202029.png)](https://github.com/Josbor)


## About the project
Esta es la app construida en React la cual es uno de los proyectos del challenge para Infocasas.

## Requisitos

- 1 tener Node instalado , sugeriblemente las ultimas versiones.

- 2 tener clonado el repositorio del proyecto.

- 3 Haber clonado y configurado el repositorio de git de la api ,  sin ella no se podra ejecutar la app al 100%
  
  en caso de no tener el requisito 3 el repositorio es este [Repositorio Apitask](https://github.com/Josbor/api-taskmanager)

## Pasos
 
 1 - Clonar la aplicacion en una carpeta de tu preserencia
 
 
 2 - abrir la pestaña de comando en la ubicacion donde el repositorio fue instalado y ejecutar el comando ` npm install` en caso de haber errores con dependencias viejas usar `npm install --legacy-peer-deps`
 
 3 - ingresar la ruta de la api en el archivo `configApi.json` `task-mamanger/src/data/configApi.json` e ingresar la direccion del servidor dada por la ventana de comando una ves se levanta el serve de la api. ejemplo a continuacion:
 
 ```
 "baseUrl":"http://127.0.0.1:8000"
 
 ```
 
 en ``baseUrl` colocar la direccion incluyendo el protocolo `http://` y el puerto en el cual esta levantado el serve.
 
 4 - ejecutar levantar el servidor de pruebas usando el comando `npm run dev`
