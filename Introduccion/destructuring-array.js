// Destructuring de arrays

const personajes = ['Iron Man','Spiderman','Thor','Mujer maravilla'];

const [,,,a] = personajes;

console.log(a);


const regresarArreglo = () => {
    return['ABC',123];
}

const [elemento,elemento2] = regresarArreglo();

console.log(elemento,elemento2);

// Ejercicio
const useState = (valor) =>{
    return[valor, ()=>{console.log('Hola Mundo')}]
};


const arreglo = useState('JavaScript');
console.log(arreglo);

arreglo[1]();
// Tarea: destructurar el arreglo y la funcion debera llamarte getSaludo
const[,getSaludo] = useState();

getSaludo();

