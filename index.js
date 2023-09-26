const Coche = {
    marca:"",
    modelo:"",
    matricula:""
}

const Casa = {
    codPostal:"",
    calle:"",
    portal:"",
    piso:""
}

const FullStackDeveloper = {
    "lenguajes":[],
    "proyectos":[]
}

const Perro = {
    nombre:"",
    raza:"",
    color:"",
    edad:"",
    ladrar: function(){
        console.log('Guau');
    },
    popo: function(){
        return Math.random()*3;
    }
}


const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil["marca"];

const grupos = Concierto.grupos;

const RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = "P345";

cartelera = Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new Date();

Impresora.imprimiendo = {
    nombreArchivo:"",
    copias:"",
    numPaginas:""
}


const Noticia = {
    titular:"",
    cuerpo:""
}

const Persona = {
    nombre:"",
    apellidos:"",
    edad:""
}

const Avion = {
    numPasajeros:"",
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando");
    }
}

const Paquete = {
    contenido:[]
}

const Pais = {
    numHabitantes:"",
    continente:"",
    gentilicio:""
}


const codError = O_Error.codigo;

let integrantes = Grupo.integrantes;
Grupo.numIntegrantes = 5;

const nivelesTinta = Impresora.tinta;

const pixeles = Pantalla.pixeles;

const especificaciones = Movil["especificaciones"];

Pantalla.dimensiones = '1920x1080';

Led.encendido = false;

Movil.temperatura = '20º';
