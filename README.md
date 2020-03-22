![](xumi_front/src/components/logo.svg)

# Xumi!

Este proyecto en REACTJS es parte de la materia Aplicaciones Interactivas.

Se desarrollaron servicios de backend (NodeJS, librerías Fastify), y servicios de Backend (ReactJS) con el objetivo de obtener una aplicación que permita la búsqueda de películas y el registro de un comentario de la misma en una base MongoDB.

También se permite un login y registro.


UADE - 2020

## Contenido

- [Estructura de carpetas](#estructura-de-carpetas)
- [Instalando](#instalando)
- [Iniciando los servicios](#iniciando-los-servicios)
  - [Backend](#backend)
  - [Frontend](#frontend)

## Estructura de carpetas
Después de bajar, el proyecto se verá así: 

```
xumi_una_de_peliculas/
  README.md
  .gitigonore
  xumi_back/
    controllers/
      rating.js
      user.js
    models/
      rating.js
      user.js
    package-lock.json
    package.json
    routes.js
    server.js
  xumi_front/
    .vscode
    package.json
    public/
      index.html
      xumi.png
    src/
      /components
        UserFunctions.js
        ShowGroupContainer.js
        ShowCellElement.js
        SearchProfile.js
        SearchGroupContainer.js
        SearchCellElement.js
        Register.js
        Profile.js
        no-cover.png
        Navbar.js
        MyMovies.js
        MovieFinder.js
        logo.svg
        Login.js
        Landing.js
        header.jpg
        GenericGroupContainer.js
        DeluxeSearch.js
        CommentFunctions.js
      /Controls
        TextFieldGroup.js
      App.css
      App.js
      App.test.js
      index.css
      index.js
      registerServiceWorker.js
```


## Instalando

Primero, para compilar el proyecto:
```
npm install

```

En cada uno de estos directorios:

* `xumi_back/` 
* `xumi_front/` 


## Iniciando los servicios

### Backend
```
node server

```
En

* `xumi_back/` 

Un mensaje de Conectado aparecerá si se estableció conexión con MongoDB

### Frontend
```
npm start

```
En

* `xumi_front/` 

Acceder mediante  [http://localhost:3000](http://localhost:3000)

