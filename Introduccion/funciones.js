
/*function saludar(nombre){
    return `Hola ${nombre}`;
}*/
const alimentos = ['pan','manzana','agua'];

const saludar = (nombre) => {
    return nombre;
}

/* console.log(`Saludando a ${saludar('Luleyka')}`); */

/* console.log(saludar('Luleyka')); */

alimentos.map(elemento=>{
    console.log(elemento);
})

const newarr = alimentos.map(elemento => {
    return elemento.toUpperCase();
})
console.log(newarr);

