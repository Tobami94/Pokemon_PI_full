
# **PokeAPI** 

## **📌 OBJETIVOS DEL PROYECTO**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).



### **🖱 En el BACK-END**

Servidor construido en **NodeJS** y **Express**. Conectado a la base de datos mediante **Sequelize**.

El servidor cuenta con las siguientes rutas: 

#### **📍 GET | Detalles de rutas y posibilidades. 

-  Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
-  Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
-  El pokemon es recibido por parámetro (ID).
-  Incluye datos del tipo de pokemon al que está asociado.
-  Funciona para pokemons ya establecidos por la API y los creados en la base de datos. 
-  Se puede obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
-  Se puede buscar independientemente de mayúsculas o minúsculas.
-  Si no existe el pokemon, muestra un mensaje de error. 


#### **📍 POST | Detalles de rutas y posibilidades. 

-  Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
-  Toda la información es recibida por body.
-  Se puede crear un pokemon en la base de datos, y este esta relacionado con sus tipos indicados.

#### **📍 GET | Detalles de rutas y posibilidades. 

-  Obtiene un arreglo con todos los tipos de pokemones.
-  En una primera instancia, cuando la base de datos este vacía, podra guardar todos los tipos que encuentre en la API.
-  Estos deben ser obtenidos de la API. Luego de obtenerlos de la API, son guardados en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 En el FRONT-END**

La aplicación esta desarrollada en  **React** y **Redux**

**📍 LANDING PAGE |** Página de inicio o bienvenida. 

-  Detalles representativos al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** La página principal de la SPA contiene: 

-  SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda es exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
-  Sector en el que se vea un listado de cards con los pokemones. Al iniciar se cargan los primeros resultados obtenidos desde la ruta **`GET /pokemons`** y muestra su:
   -  Imagen.
   -  Nombre.
   -  Tipos.
-  Cuando se le hace click a una Card redirige al detalle de ese pokemon específico.
-  Botones/Opciones para **filtrar** por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
-  Paginado: el listado de pokemones se hará por partes. La SPA  contiene  un paginado que muestre un total de 12 pokemones por página.

<br />

**📍 DETAIL PAGE |** En esta vista se muestra toda la información específica de un pokemon:

-  ID.
-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Tipo.

<br />

**📍 FORM PAGE |** En esta vista se encuentra el formulario para crear un nuevo pokemon.

Este formulario es **controlado completamente con JavaScritp**. Cuenta con los campos: 

-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Posibilidad de seleccionar/agregar varios tipos en simultáneo.
-  Botón para crear el nuevo pokemon.


---

<br />

