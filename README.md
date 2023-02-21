# Arquitectura Micro-frontend

| container (React / Host) |||
|-------------------|------------------------  |------------------|
|                   | **Marketing (React/MF)** | *Home Page*      |
|                   |                          | *Pricing Page*   |
<!-- |                   |                          |                  |
|                   | **Auth (React/MF)**      | *Sign In Page*   |
|                   |                          | *Sign Up Page*   |
|                   |                          |                  |
|                   | **Dashboard (Vuejs/MF)** | *Dashboard Page* | -->


## Identificación de componentes
Para que se pueda diferenciar a simple vista cada microfrontends tiene un color especifico

* Marketing - borde en rojo
* Container - border en azul

# Instalación
```
npm run install
```
Esto instalará las dependecias de los mf y host
# Iniciar proyecto en modo desarrollo
```
npm run start
```
Esto levantará todos los mf y el host

Abrir el navegador para ver el [orquestador/container](http://localhost:8080/).

También puedes ver los microfrontends de forma aislada [la app del comercio](http://localhost:8081/)

# Stack utilizado
* Deploy
    * Amazon S3 + CloudFront (Servidor)
    * Github Action (Cada vez que se despliega nuevo código en un mf se ejecutará un job que solo desplegará el mf modificado)