El Schema es la base de una API en GraphQL, es el encargado de describir todos los tipos de información que va a contener.

Para la creación de este proyecto usaremos una herramienta llamada npx, para ello primero debes instalarlo con el comando:

npm i -g npx
Una vez instalado, dentro de la carpeta de nuestro proyecto vamos a correr el siguiente comando:

npx license mit > LICENSE && npx gitignore node && git init && npm init -y
Ya que termina de correr el comando es momento de añadir la dependencia de GraphQL a nuestro proyecto:

npm i graphql
Dentro de GraphQL contamos con distintos tipos de datos escalares:

String
Int
Float
Boolean
ID