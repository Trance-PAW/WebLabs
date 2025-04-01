
## Laboratorios FING

```
Creador: Isaay Sosa ISCH
```


Comandos básicos:
```
npm run dev -> Incia el servidor http://localhost:3000
npm install -> Instala todas las dependencias necesarias
```
1.  Clona el repositorio
1.  Dentro de la carpeta 'LABORATORIOS_UACH ejecuta el comando 'npm install'
1.  Ejecuta el servidor

Build
docker build -t test:etiqueta .
Run
docker run -p 4000:4000 -d test:etiqueta
Execute Forever
docker run --restart always -p 4000:4000 -d test:etiqueta
