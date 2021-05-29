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

## Cofiguración Base de datos

1. Creen una cuenta en MongoDB Atlas (https://account.mongodb.com/account/login)
2. Creen un nuevo cluster
3. En el nuevo cluster, hagan click en Connect
3.1 Coloquen en lista blanca su IP
3.2 Creen un usuario para la BD con su contraseña
3.3 Creen un nuevo enlace de conexión
4. En robot3t hagan click en Create en la ventana MongoDB Connections
4.1 Peguen el enlace de conexión generado en (3.2)
4.2 Hagan click en From SRV
5. Hagan click en Connect en la ventana MongoDB Connections

1. Install via Homebrew
```
brew install mongodb/brew/mongodb-community-shell
```

2. Add <your mongo shell's download directory>/bin to your $PATH variable

3. Run your connection string in your command line

Replace myFirstDatabase with the name of the database that connections will use by default. You will be prompted for the password for the Database User, julian. When entering your password, make sure all special characters are URL encoded.
```
//mongo "mongodb+srv://cluster0.wjmyb.mongodb.net/myFirstDatabase" --username julian
mongo "mongodb+srv://cluster0.wjmyb.mongodb.net/graphQLTest" --username julian
```

Quick-Start Guide to mLab
https://docs.mlab.com/

Robo 3T - Formely Robomongo - Native MongoDB management tool (Admin UI)
https://robomongo.org/

## MongoDB commands
https://docs.mongodb.com/manual/reference/mongo-shell/
