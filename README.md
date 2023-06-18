# Proyecto desarrollo de software II

Este es el proyecto desarrollado en el curso de desarollo de software II con el propósito de poner en práctica lo aprendido, principalmente el uso de devops que mejoran la calidad del software entregado y el trabajo en equipo; para el desarrollo usamos un reproductor de música usando react.js y Spotify Api para acceder a la información del usuario.

## Diagrama pipeline
Herramienta CI/CD Github actions/Netlify
<p align="center">
    <img src="https://user-images.githubusercontent.com/95255931/246637630-308f79d5-ddec-4078-9b41-d550469573d8.jpg">
</p>

## Comunicación

El repositorio está conectado con teams para realizar notificaciones cada que se realiza push, otras notificaciones son recibidas por medio de correo y para la planeación y ejecución de las historias de usuario y demás tareas se utilizo jira.

## Herramienta de integración

Se utiliza github actions que cuenta con 3 flujos de trabajo, el principal llamado pipeline CI/CD realiza las instalaciones necesarias para posteriormente ejecutar pruebas, realizar el build y el despliegue y también ejecutar la imagen en docker, los otros flujos son para realizar el escaneo con sonarcloud y otro para el monitoreo con checkly.

## Pruebas

Las pruebas unitarias se realizan en la rama de test se utilizo jest y se ejecutan en el actions también en sonarcloud se revisa la cobertura y detecta otros posibles problemas en la calidad del código.

## Despliegue

El repositorio de github está conectado con Netlify que se actualiza cada que se realiza push a la rama develop.


## Monitoreo

Para monitorear la aplicación se utilizo chekly si bien es una plataforma paga, ofrece una muestra gratuita por cierto tiempo, en caso de finalizar existen otras herramientas similares que permiter realizar el monitoreo de manera gratuita.


## Git clone
```
git clone https://github.com/JuanMajin/PROYECTOSOFT2.git
```

## Requerimientos

La aplicacion requiere: ```node 18.15.0``` y ```docker```.

## Install dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
npm install
```

## Docker

```
docker build -t proyectosoft2
docker run -p 3000:3000 -d proyectosoft2
```

## Available Scripts 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# CI/CD Pipeline

Este es el flujo de CI/CD utilizando GitHub Actions.

## Pasos

1. **Checkout code**:
   - Utiliza: `actions/checkout@v2`

2. **Set up Node.js**:
   - Utiliza: `actions/setup-node@v2`
   - Versión de Node.js: 16

3. **Install dependencies**:
   - Comando: `npm install`

4. **Run tests**:
   - Comandos:
     ```
     npm test
     npm run test:coverage
     mkdir coverage-artifacts
     cp -r coverage/ coverage-artifacts/
     ```

5. **Upload Coverage Artifact**:
   - Utiliza: `actions/upload-artifact@v2`
   - Nombre del artefacto: `coverage`
   - Ruta: `coverage-artifacts`

6. **Deploy**:
   - Comando: `npm run deploy`

7. **Build Docker Image**:
   - Comando: `docker build -t proyectosoft2:latest .`

8. **Run Docker Image**:
   - Comando: `docker run proyectosoft2:latest`
