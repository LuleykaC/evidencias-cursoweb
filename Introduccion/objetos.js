const persona = {
    nombre:'Luleyka',
    edad:30,
    direccion:{
        calle:'Tecnológico Ensenada',
        numero:4000,
        cp:22090
    }
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion.calle);
console.log(persona.direccion.numero);
const persona2={...persona};
persona2.nombre='Aurora';
console.log(persona);
console.log(persona2);
console.log(persona2.edad);
console.log(persona2.direccion);

/*console.table(persona);*/

/* agregar al arreglo  push */
const alimentos = ['pan','manzana','agua'];

alimentos.push('tamales');
alimentos.push('jamon');
/* alimentos.push({nombre:'Jackson',edad:20});
 for(let i=0;i < alimentos.length;i++){
    console.log(alimentos[i])*/

/* for of 
for(const item of alimentos){
    console.log(item);
}    */

for(const item in alimentos){
    console.log(alimentos[item]);
}

/* Agregar elemento al inicio del arreglo*/
alimentos.unshift('Atole');
alimentos.splice(1,0,'Soda');
for(const item in alimentos){
    console.log(alimentos[item]);
}


