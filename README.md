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

// To Improve:

## Connecting with Atlas cluster
Fue medio confuso realizar la conexión desde Robo 3T, pero intentaré explicarla a acontinuación:

1. Loguearse en https://cloud.mongodb.com, que es gratis el registro y puede ser con la cuenta de Google para quien lo prefiera.
2. Luego de entrar, nos encontramos frente al panel principal de la aplicación, y en el menú lateral izquierda seleccionamos Clusters
3. Ahora, a la derecha, seleccionamos CONNECT
4. En la nueva ventana seleccionamos la tercera opción: Connect using MongoDB Compass. Al menos en mi caso, elegir esta ruta me llevó a buen término.
5. En la siguiente sección, copiamos la cadena de conexión. Se puede usar el botón Copy para realizar dicha copia. Aquí vamos a poner la contraseña de nuestro usuario donde la cadena dice <password>
6. Ahora, cuando abrimos Robo 3T, lo primero que aparece es una ventana en la mitad de la pantalla que nos pregunta a dónde nos queremos conectar. La primera vez posiblemente no salga nada en la lista, así que damos click en Create:
7. Ahora, en los detalles de la conexión, le damos un nombre a la nuestra, que en este caso fue “platzi-connect”, y frente al botón From SRV pegamos la cadena de conexión extraida del punto 5.
8. Luego de lo anterior, se oprime el botón From SRV, y entonces la ventana muestra ahora otras cosas, como a continuación:
9. Y listo, si todo salió sin líos, llegamos a este punto, donde tenemos listada la conexión en nuestra ventana MongoDB Connections. Y al seleccionarla, oprimimos Connect
10. Para crear la base de datos, colecciones y demás, me fue bastante útil usar una serie de videos que comencé a revisar desde este (https://www.youtube.com/watch?v=t_1qhhfZS-0).
Espero sea útil para alguien como lo fue para mi.

## Docker compose
```
version: '3.7'

services:
  mongodb:
    image: mongo:latest
    environment:
      - MONGO_INITDB_ROOT_USERNAME=<username>
      - MONGO_INITDB_ROOT_PASSWORD=<password>
    ports:
      - "27017:27017"
```

And on db.js
```
const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}`;
```