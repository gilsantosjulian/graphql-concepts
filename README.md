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

## Aliases and Fragments

Dentro de GraphQL podemos correr más de una petición a la vez y nombrarlas de distinta manera para poder identificarlas, esto es posible gracias a los Aliases o simplemente Alias.

La sintaxis de un Alias es bastante simple:

```
nombreDelAlias: tipoDeDato(argumento: tipo) {
  datos
}
```

Además de los Alias, podemos agrupar campos para ser reutilizados en distintas peticiones gracias a los Fragments.

´´´
{
  AllCourses: courses {
    _id
    title
  }
  
  Course1: course (id: "60b190f089a3510b4a6d462f") {
    _id
    title
  }
  
  Course2: course (id: "60b190f089a3510b4a6d4630") {
    _id
    title
  }
  
  Student1: student (id: "60c0b8e8d49024996265f206") {
    name
  }
  
}
´´´

Other example: 
´´´
{
  AllCourses: courses {
    ...CourseFields
  }
  
  Course1: course (id: "60b190f089a3510b4a6d462f") {
    ...CourseFields
    teacher
  }
  
  Course2: course (id: "60b190f089a3510b4a6d4630") {
    ...CourseFields
    topic
  }
  
  Student1: student (id: "60c0b8e8d49024996265f206") {
    name
  }
  
}

fragment CourseFields on Course {
  _id
  title
  description
  people {
    _id
    name
  }
}
´´´

## Variables

```
mutation AddPersonToCourse2 ($course: ID!, $person: ID!) {
  
  addPeople(courseID: $course, personID: $person) {
    _id
    title
  }
  
}

// variables
{
  "course": "60c036b276e51e938b888a5b",
  "person": "60c0b8e8d49024996265f206"
}
```

## Enums
Los Enums o enumeration types son tipos de datos escalares cuyos valores son configurables. Si definimos un tipo de dato como enum sus valores posibles solamente serán aquellos que se encuentren entre los definidos en el enum.

```
mutation CreateNewCourse ($createInput: CourseInput!) {
  createCourse (input: $createInput) {
    _id
    title
    description
    level
  }
}

// variables
{
  "createInput": {
    "title": "Course 5",
    "teacher": "Teacher Course 5",
    "description": "Description Course 5",
    "topic": "Topic Course 5",
    "level": "beginner"
  }
}
```

## Interfaces - Monitor type
Las interfaces son muy importantes y útiles cuando nos encontramos con tipos de datos similares. Una interfaz nos permite definir un tipo de dato padre que utilizando la palabra implements va a implementar los campos que tenga definidos dentro del tipo de dato que queramos.

```
// Create Monitor
mutation CreateNewMonitor ($monitorInput: PersonInput!) {
  createPerson (input: $monitorInput) {
    _id
    name
  }
}

// Variables
{
  "monitorInput": {
    "name": "Monitor 1",
    "email": "monitor1@gmail.com",
    "phone": "3001234567"
  }
}
```

Get People using fragments
```
{
  people {
    _id
    name
    email
    ...on Monitor {
      phone
    }
    ...on Student {
      avatar
    }
  }
}
```

## Directives
Las directivas son una instrucción que permite agregar condicionales a nuestras peticiones. Podemos modificar de manera dinámica nuestra query simplemente añadiendo:

```
@include(if: Boolean) {
  datos
}
```

Example:
```
query getPeopleData ($monitor: Boolean!, $avatar: Boolean!) {
  people {
    _id
    name
    email
    ...on Monitor @include (if: $monitor) {
      phone
    }
    ...on Student @include (if: $avatar) {
      avatar
      email
    }
  }
}

// Variables
{
  "monitor": false,
  "avatar": true
}
```

### Using @deprecated
Is useful to mention that one property is deprecated. GraphQL will display a message to the user (The field is deprecated)

## Unions
Unions permite agrupar varios custom types sin importar si tienen algo en común, su sintaxis es la siguiente:

```
union SearchResult = CustomType1 | CustomType2 | CustomType3
```

Create indices
```
db.courses.createIndex({"$**": "text"})
db.students.createIndex({"$**": "text"})
```

Example of Global Search and Union
```
{
  searchItems (keyword: "1") {
    __typename
    ...on Course {
      title
      description
    }
    ...on Monitor {
      name
      phone
    }
    ...on Student {
      name
      email
    }
  }
}
```

Al momento de realizar una query que retorna una union podemos identificar el tipo de dato solicitando el campo __typename.


## API to Production
Para que nuestra API sea accesible desde cualquier lugar debemos añadir el middleware cors a express, primero debemos instalarlo con el siguiente comando:

```
npm i cors
```