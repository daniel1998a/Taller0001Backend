/*
console.log("Hola mundo");
//AMBITO DE LAS VARIABLES

const kilometros = 100;
console.log(kilometros);

/*if (1 == 1) {
  const kilometros = 300;
  console.log(kilometros);  
}

kilometros=50;
console.log(kilometros); */
//AREGLOS
/*
const arregloNumeros = [10, 20, 30];
arregloNumeros.push(40);

console.log(arregloNumeros);
//OBJETOS

const persona = {
  nombre: "Juan",
  apellido: "Diaz",
  edad: 40
}
console.log(persona);
persona.apellido = "Aux";
console.log(persona);

//CLASES
class Animal{
  constructor(patas, tamanio) {
    this.patas = patas;
    this.tamanio = tamanio;
  }
}

class Gato extends Animal{
  constructor(patas, tamanio, pelaje) {
    super(patas, tamanio);
    this.pelaje = pelaje;

  }
}

const perro = new Animal(4, "Mediano");
console.log(perro);

const felix = new Gato(4, "Pequeño", "Liso");
console.log(felix);

//Funciones
/*
function mensaje(nombre) {
  console.log("Hola el nombre es "+nombre);
}

mensaje("Anita");

//FUNCIONES DE FLECHA / FUNCTION ARROW

const mensaje = (nombre,edad) => { 
  console.log("Hola el nombre es " + nombre + "y tiene "+edad+" Años");
  const saludo = "Hola el nombre es " + nombre + " y tiene "+edad+" Años";
  return saludo;
}
*/
/*
const mensaje = (nombre, edad) => {
  console.log(`Hola el nombre es  ${nombre}  y tiene ${edad}  Años`);
  const saludo = `Hola el nombre es  ${nombre}  y tiene ${edad}  Años`;
  return saludo;
};

const suma = (op1,op2) => {
  const resultado =`El valor de la suma es ${(op1+ op2)}`;
  return resultado;
}

const resultado = mensaje("Juanita",30);

console.log(resultado);

console.log(suma(5, 4));

//TEMPLATE STRING ALT+96 BACKTICK ACENTO GRAVE
//`El valor de la suma es ${op1 + op2}`;


//DESESTRUCTURACIÓN DE OBJETOS

const web = {
  nombre: "Udenar",
  links: {
    sitio: "www.udenar.edu.co"
  },
  redesSociales: {
    youtube: {
      enlace: "www.youtube.com/udenar",
      nombre: "Youtube Udenar"
    },
    facebook:{
      enlace: "www.facebook.com/udenar",
      nombre: "Facebook Udenar"
    },
    instagram:{
      enlace: "www.instagram.com/udenar",
      nombre: "Instagram Udenar"
    }
  }
}

console.log(web);

const { instagram:instagramnuevo,facebook } = web.redesSociales;

console.log(instagramnuevo);

//OPERADOR DE PROPAGACION ...

const frutas = ["Manzana", "Pera", "Mango", "Fresa"];
console.log(frutas);
const dulces = ["Mermelada", "Manjar", "Helado"];

console.log(dulces);

const postres = [...frutas, ...dulces];

console.log(postres);
*/

import { PI, suma } from './modulo.js';

console.log(PI)
suma(5, 10)
