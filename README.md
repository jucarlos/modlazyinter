# Modularizando una aplicación.


1. Crear carpetas separadas.
2. Crear un módulo por carpeta.
``` ng g m carpeta/nombre ```

3. Creado componentes y servicios

4. Crear las rutas de ese módulo

Creando el módulo y el fichero de rutas
ng g m carpeta/nombre --routing

ng g m usuarios --routing
ng g c usuarios/pages/login
ng g c usuarios/pages/registro
ng g c usuarios/pages/perfil

Lo mismo con proveedores.

1. Crear el módulo y el fichero de rutas
2. Crear los 3 componentes tipo página
3. Actualizar el fichero de rutas del módulo proveedores
4. Actualizr el fichero de rutas principal con lazy load.
