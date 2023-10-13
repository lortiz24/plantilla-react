# Iniciar proyecto React

Para comenzar un proyecto en react con Vite realizaremos los siguientes pasos:

## 1. Ejecutar comando para iniciar proyecto con Vite
   yarn create vite
   o
   npm create vite
## 2. Ejecutar yarn o npm i para instalar las dependencias
## 3. Establecer un sistema de carpetas para un mejor orden, recomiendo el siguiente
   - assets: Se guardan todos los recursos como imagenes, videos etc.
   - components:
     - common: Componentes que se usan en el proyecto. Son altamente relacionados con el modelo de negocio
     - routes: Se almacenaran las rutas principales 
     - layout: Los layout usados en todo el proyecto
     - ui: Componentes que no tienen que ver con el modelo de negocio, sino mas bien con estilos. Componentes estilizados para ser reusados en la aplicacion como feedbakcs.
     - views: Aqui guardamos los componentes principales, en otras palabras, componentes de rutas principales
   - config: Configuraciones que se vayan a aplicar al programa, como configuracion de librerias como mantine, firebase, etc. 
   - constants:
   - interfaces: Aqui van las interfaces que se usan en todo el proyecto
   - locales: Temas de localizaciones, para multiples lenguages
   - context: Aqui ponemos los context que tengamos a lo largo de nuestra app. Puedes crear una carpeta para tener mas segmentado cada context
   - style: Estilos globales, configuracion de material ui o mantine aqui.
   - utils: 
     - api: Llamadas a servicios externos
     - functions: Funciones que encapsulan una logica y que pueden ser llamadas a lo largo del proyecto
     - hooks: Hooks que se pueden usar a lo largo del proyecto
     - Constanst: Contantes que querras usar a lo largo de proyecto
     - data: Datos en formato json o ts o tsx que querrar que funjan como datos estaticos en el proyecto.
## 4. Es comun usar rutas en un proyecto React, por lo que instalamos react-router-dom 
   1. yarn add react-router-dom
   2. En el archivo main.tsx colocar 
   ```
   <BrowserRouter>
      ...
   </BrowserRouter>
   ```
## 5. Luego es una buena practica tener un lint de codigo, instalaremos el eslint y lo configuramos 
   1. yarn add eslint
   2. Ejecutar el siguiente comando en la consola: npx eslint --init
   3. Escoger la opcion "To check syntax and find problems"
   4. Escoger entre las opciones:
      1. JavaScript modules (import/export) //generalmente para front
      2. CommonJS (require/exports) // generalmente para backend
   5. Escoger el framework React
   6. Decir si trabajas con typescript o no, si iniciaste el proyecto vire con typescript pues escoger typescript en eslint
   7. Escoger donde se ejecutara el codigo de tu actual proyecto, en Browser (navegador) o en Node. Al ser proyecto react es en el navegador.
   8. What format do you want your config file to be in? => Escoger que extension quieres que tenga el archivo de config de eslint
   9. Luego darle que si a instalar las librerias necesarias para que te ahorres el paso, pero aqui te las dejo:
         1.  @typescript-eslint/eslint-plugin@latest 
         2.  eslint-plugin-react@latest 
         3.  @typescript-eslint/parser@latest
   10.  Ahora en el archivo eslintrc.cjs (si escogiste otra opcion de extension quiza sea ligeramente diferente) en rules, el cual es un array, podemos colocar las reglas y decir si queremos que no se valide, que se muestre una advertencia o que se muestre un error. a continuacion te muestro los siguientes estados:
        1.   off: No validado
        2.   warn: Advertencia
        3.   error: Error
   11. Ahora instalamos prettier
       1.  yarn add -D prettier
   12. Ahora creamos un archivo .prettierrc en el proyecto y aqui es donde colocaremos las reglas que queremos para cuando se formatee, es decir, si por ejemplo queremos que al formatear se agreguen los punto y coma al final, o si queremos que idente de una manera u otra, puedes buscar esas reglas en internet. Por el momento te dejo estas reglas para que las copies y pegues en el archivo que acabas de crear:
      ```
            {
               "useTabs": true,
               "trailingComma": "es5",
               "singleQuote": true,
               "jsxSingleQuote": true,
               "arrowParens": "always",
               "printWidth": 80
            }
      ```
   13. Luego instalamos eslint-config-prettier en las dependencias de desarrollo
       1.  yarn add -D eslint-config-prettier
   14. Luego vamos a agregar el eslint-config-prettier al archivo de .eslintrc en el apartado de extends; esto para que si hay algun conflicto entre las reglas de eslint y las de prettier, se quede con la de prettier, esto lo hacemos asi:
      ```
      extends: [
		   ...,
		   'eslint-config-prettier',
	   ],
      ```
   15. Ahora para que nos marque los errores en vscode de eslint debemos tener la extension "ESLint", la que este verificada por Microsoft.
   16. Tambien instalaremos la extension "Prettier - Code formatter", la que este verificada por Prettier. Debemos asegurarnos de que prettier sea el formateador por defecto en nuestro Vscode.
   17. Luego creamos los archivos ignore para prettier y para eslint:
       1.  Para eslint el archivo lo llamamos asi: ".eslintignore" y copiamos las sigueintes lineas:
         ```
         dist
         .eslintrc.cjs
         vite.config.ts
         ```
       2.  Para prettier el archivo lo llamamos asi: .prettierignore y copiamos las siguientes lineas:
       ```
       dist
       package-log.json

       ```
## 6.  Instalación y configuracion de Jest + React Testing Library

## En proyectos de React + Vite

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

****
  
