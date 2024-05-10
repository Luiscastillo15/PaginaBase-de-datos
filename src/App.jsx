function App() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Base de Datos</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center shadow-sm">
            <a className="mr-5 hover:text-gray-900" href="#tema1">
              Inicio
            </a>
            <a className="mr-5 hover:text-gray-900" href="#tema2">
              Tipos
            </a>
            <a className="mr-5 hover:text-gray-900" href="#tema3">
              Manejadores
            </a>
            <a className="mr-5 hover:text-gray-900" href="#tema4-5">
              Entidad - relacion
            </a>
            <a className="mr-5 hover:text-gray-900" href="#tema6">
              Atributos
            </a>
            <a className="mr-5 hover:text-gray-900" href="#tema7">
              Cardinalidad
            </a>
            <a className="mr-5 hover:text-gray-900" href="#tema8">
              Modelo ER
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-600 body-font bg-slate-100" id="tema1">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <h1 className="font-mono consola text-center font-semibold mb-8 text-xl">
            BASE DE DATOS
          </h1>
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className=" object-center object-conver h-full w-full"
                src="./src/imagenes/bdd.jpg"
              />
            </div>
            <p className="leading-relaxed text-lg mb-8 text-justify pt-3">
              Una base de datos es una colección organizada de información
              estructurada, generalmente almacenada electrónicamente en un
              sistema informático. Su propósito es administrar grandes
              cantidades de datos de manera eficiente, permitiendo su acceso,
              consulta, modificación y análisis. Las bases de datos son
              esenciales para diversas aplicaciones, desde sistemas de gestión
              empresarial hasta sitios web de comercio electrónico.
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-slate-600" id="tema2">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="consola text-center font-semibold mb-8 text-xl text-gray-900 tracking-widest font-mono">
              TIPOS DE BASE DE DATOS
            </h2>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
                  src="./src/imagenes/bddrelacionales.jpg"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-black">
                    Bases de datos relacionales (SGBDR):
                  </h2>
                  <p class="mb-4 text-justify text-white">
                    Almacenan datos en tablas con filas y columnas, donde cada
                    fila representa un registro y cada columna representa un
                    atributo. Las relaciones entre tablas se establecen mediante
                    claves foráneas. Ejemplos: MySQL, PostgreSQL, Oracle
                    Database.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
                  src="./src/imagenes/bddNoSQL.jpg"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-black">
                    Bases de datos NoSQL:
                  </h2>
                  <p class="mb-4 text-justify text-white">
                    No siguen el modelo relacional, lo que las hace más
                    flexibles y escalables para manejar grandes volúmenes de
                    datos no estructurados o semiestructurados. Ejemplos:
                    MongoDB, Cassandra, CouchDB.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
                  src="./src/imagenes/bddrientadaobjetos.png"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-black">
                    Bases de datos orientadas a objetos:
                  </h2>
                  <p class="mb-4 text-justify text-white">
                    Almacenan objetos en lugar de datos simples, encapsulando
                    datos, métodos y comportamiento. Útiles para modelar
                    relaciones complejas entre entidades. Ejemplo: POET.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
                  src="./src/imagenes/bddnube.jpg"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-black">
                    Bases de datos en la nube:
                  </h2>
                  <p class="mb-4 text-justify text-white">
                    Ofrecen almacenamiento y gestión de bases de datos en
                    servidores remotos, accesibles a través de internet.
                    Ejemplos: Amazon RDS, Microsoft Azure SQL Database, Google
                    Cloud SQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font" id="tema3">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="./src/imagenes/manejadores.png"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-mono">
              Manejadores o Gestor de Base de Datos (SGBD):
            </h2>
            <p class="mb-8 leading-relaxed text-justify text-slate-900">
              Un SGBD es un software que permite crear, acceder, administrar y
              controlar una base de datos. Proporciona una interfaz para
              interactuar con la base de datos, definiendo la estructura de
              datos, manipulando registros y controlando el acceso de usuarios.
              Ejemplos: MySQL Workbench, PostgreSQL pgAdmin, Oracle SQL
              Developer.
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 bg-slate-300 body-font" id="tema4-5">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="consola text-center font-semibold mb-8 text-xl text-gray-900 tracking-widest font-mono">
              ENTIDAD - RELACION
            </h2>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left gap-5">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
                    src="./src/imagenes/entidad.png"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-xl title-font font-medium mb-3">
                      Entidad:
                    </h2>
                    <p class="leading-relaxed text-base text-justify">
                      En las bases de datos relacionales, una entidad representa
                      un objeto o concepto del mundo real que se desea almacenar
                      y gestionar. Se define como un conjunto de datos que
                      comparten características comunes y se puede identificar
                      de manera única. Ejemplos: Cliente, Producto, Pedido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left gap-5">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-left sm:mb-0 mb-4"
                    src="./src/imagenes/relacion.jpg"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-xl title-font font-medium mb-3">
                      Relación:
                    </h2>
                    <p class="leading-relaxed text-base text-justify">
                      Una relación representa la asociación entre dos o más
                      entidades en una base de datos relacional. Define cómo se
                      vinculan los datos de una entidad con los de otra. Las
                      relaciones se caracterizan por su cardinalidad (uno a uno,
                      uno a varios, varios a uno, varios a varios) y su
                      integridad referencial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="text-gray-600 bg-slate-100 body-font overflow-hidden"
        id="tema6"
      >
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-gray-900 text-3xl title-font font-medium mb-4 font-mono">
                Atributos:
              </h2>
              <p class="leading-relaxed mb-4 text-justify text-gray-800">
                Los atributos son las propiedades o características específicas
                de una entidad. Cada entidad tiene un conjunto de atributos que
                la describen y la diferencian de otras entidades. Los atributos
                pueden ser de diferentes tipos, como numéricos, textuales,
                fechas, booleanos, etc.
              </p>
            </div>
            <img
              alt="atributos"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
              src="./src/imagenes/atributo.png"
            />
          </div>
        </div>
      </section>

      <section class="text-black  bg-slate-600 body-font" id="tema7">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-mono">
              Cardinalidad
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              La cardinalidad define la cantidad de instancias de una entidad
              que pueden relacionarse con una o más instancias de otra entidad
              en una base de datos relacional. Existen cuatro tipos de
              cardinalidad:
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-2 font-mono">
                Uno a uno (1:1):
              </h2>
              <p class="leading-relaxed text-base mb-4 text-white text-justify">
                Una instancia de una entidad se relaciona con una y solo una
                instancia de otra entidad.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-2 font-mono">
                Uno a varios (1:N):
              </h2>
              <p class="leading-relaxed text-base mb-4 text-white text-justify">
                Una instancia de una entidad se relaciona con cero, una o más
                instancias de otra entidad.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-2 font-mono">
                Varios a uno (N:1):
              </h2>
              <p class="leading-relaxed text-base mb-4 text-white text-justify">
                Una o más instancias de una entidad se relacionan con una y solo
                una instancia de otra entidad.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-2 font-mono">
                Varios a varios (N:N):
              </h2>
              <p class="leading-relaxed text-base mb-4 text-white text-justify">
                Una o más instancias de una entidad se relacionan con cero, una
                o más instancias de otra entidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-800 body-font bg-slate-100" id="tema8">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <h1 className="font-mono consola text-center font-semibold mb-8 text-2xl text-black">
            Modelo ER (Entidad/Relación):
          </h1>
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-65 overflow-hidden">
              <img
                alt="content"
                className=" object-center object-contain h-full w-full"
                src="./src/imagenes/modeloer.jpg"
              />
            </div>
            <p className="leading-relaxed text-lg mb-8 text-justify pt-7">
              El modelo ER es una herramienta gráfica para representar la
              estructura de una base de datos relacional. Utiliza símbolos
              específicos para representar entidades, relaciones, atributos y
              cardinalidad. El modelo ER permite visualizar de manera clara y
              concisa la organización de los datos en la base de datos,
              facilitando su diseño, análisis y comprensión.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Fin de Base de Datos</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © Luis Castillo 08/05/2024
            <a
              href="https://www.instagram.com/luisangel_lacp?igsh=MXJodGJzdWU5Zzd3dQ=="
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @LuisAngel_LACP
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
