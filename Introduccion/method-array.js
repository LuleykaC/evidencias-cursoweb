const tecnologias = ['Javascript','Java','React','php','Python'];

const tech01 = tecnologias.map(lenguaje => {
    if(lenguaje === 'React'){
        return 'Tecnologia detectada';
    }else {
        return lenguaje;
    }
});

const tech02 = tecnologias.filter(lenguaje => {
    return lenguaje === 'Java';
});


console.log(tecnologias);
console.log(tech01);
console.log(tech02);

const edades = [20,40,60,30,50,12,5,50,3,24,56,25,24,6,78,12];

/*const edadesfiltradas = edades.filter(edad =>{
    return edad > 30;
});*/ 

const arr30 = edades.filter(edad => edad >30);
const arrfind = edades.find(edad => edad >30);
const arrevery = edades.every(edad => edad >2);
const arrreduc = edades.reduce((total,edades) => edades+total,0);

console.log(edades);
console.log(arr30);
console.log(arrfind);
console.log(arrevery);
console.log(arrreduc);

/*
// Filtra los resultados dependiendo la condición
const arr30 = edades.filter(edad => edad > 30);

// Regresa la primer coincidencia encontrada
const arrFind = edades.find(edad => edad > 30);
console.log(arrFind);

// Comprueba que todos los elememtos que hay cumplan y regresa
// true o false
const arrEvery = edades.every(edad => edad > 2);
console.log(arrEvery);

// Reduce - Acumula en el total
const arryReduce = edades.reduce((total,edad) => edad + total,0 );
console.log(arryReduce);
*/


