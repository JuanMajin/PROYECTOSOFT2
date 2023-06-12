# Proyecto desarrollo de software II

Este es el proyecto desarrollado en el curso de desarollo de software II con el propósito de poner en práctica lo aprendido, principalmente el uso de devops que mejoran la calidad del software entregado y el trabajo en equipo; para el desarrollo usamos un reproductor de música usando react.js y Spotify Api para acceder a la información del usuario.

## Pipeline
Herramienta CI/CD Github actions
<p align="center">
    <img src="https://user-images.githubusercontent.com/95255931/245276970-dd276062-4477-420b-8d42-3f0872fa19df.jpg">
</p>

## Git clone
```
git clone https://github.com/JuanMajin/PROYECTOSOFT2.git
```

## Requerimientos

La aplicacion requiere: ```node 18.15.0``` ```docker```. Pueden instalarse mediante el archivo de requerimientos.

- Instalación del archivo ```requirements.txt```
```bash
 install -r requirements.txt
```

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
## Monitoreo y despliegue

El repositorio de github está conectado con un grupo de teams que envía notificaciones cada que se realiza push, y además para el despliegue se conecto con netlify la rama que usa para desplegar es develop

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
