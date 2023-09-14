
// Definimos variables

const CALFLETE = document.getElementById('calcularFlete');
const CALPRECIO = document.getElementById('calcularPrecio');
const FLE = document.getElementById('costoF');
let DOLAR = Number;
let costoGs = Number;

//<iframe width="400" height="300" src="http://www.cambioschaco.com.py/widgets/cotizacion/?lang=es" frameborder="0"></iframe>


CALFLETE.addEventListener('click', () => {
    FLE.innerHTML = '';
    //Verificamos si funciona el boton
    console.log('Se hizo click en flete!');
    //Leemos los valores y los asignamos a variables
    DOLAR = document.getElementById('cotizacion').value
    const PESO = document.getElementById('peso').value
    costoPESO = document.getElementById('costoKg').value
    
    console.log(costoPESO);
    console.log(typeof(costoPESO));
    //verificamos si se ingresó un valor
    if (costoPESO > 0){ 

    //asignamos valor por defecto    
    } else { 
        costoPESO=22.5;
    }
    let costoGs = calcFlete(DOLAR, PESO, costoPESO);
    FLE.innerHTML = 'Costo del flete: ' + costoGs;
    FLE.style.display = 'block';

})
// Funcion para calcular el costo del flete
function calcFlete(DOLAR, PESO, costoPESO) {
    costoGs = DOLAR*PESO*costoPESO;
return costoGs 
}

CALPRECIO.addEventListener('click', () => {
    console.log('Se hizo click precio!');
    const costoProd = document.getElementById('costoProducto').value;
    const costoFLE = document.getElementById('costoFlete').value;
    const MAR = document.getElementById('margen').value;
    //validamos que se cargue un dato:
    
    console.log(costoProd);
    console.log(costoFLE);
    console.log(MAR);
})

