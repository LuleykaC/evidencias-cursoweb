// Destructuracion

const persona = {
    nombre: 'Peter Parker',
    edad: 20,
    clave: 'Spiderman',
    superpoder: "Avienta telarañas"
};
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/

/* function imprimepersona(persona) {
    const { nombre:propiedad_nombre,edad,clave } = persona;
    console.log(`Hola ${propiedad_nombre} tienes ${edad} años y eres ${clave}`);
    
}

imprimepersona(persona);*/
/*
const imprimepersona = ({nombre,edad,clave,superpoder='Lanzar telarañas'}) =>{
   // console.log(`Hola ${nombre} tienes ${edad} años y eres ${clave} y su superpoder es ${superpoder}`)

    return {
        nombreClave:clave,
        nombreSuperpoder:superpoder
    }
};
const avenger = imprimepersona(persona);

console.log(avenger);
*/
// Destructuración

const nombre = 'Xenia';

const persona = {
    nombre: 'Peter Parker',
    edad: 20,
    clave: 'Spiderman',
    superpoder: 'Escalar paredes'
    
};

const { clave, nombre:propiedad_nombre,edad } = persona;



const imprimePersona = ({nombre='Nobody',edad,clave,superpoder='Lanzar telarañas'}) => {    
    // console.log(`Hola ${nombre} tienes ${edad} años y eres ${clave} y su superpoder es ${superpoder} `);
    return {
        nombreClave : clave,
        nombreSuperpoder: superpoder
    }
}

const avenger = imprimePersona( persona );

const {nombreClave:heroe, superpoder} = avenger;

console.log(heroe);