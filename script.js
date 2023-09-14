
// Definimos variables

const CALFLETE = document.getElementById('calcularFlete');
const CALPRECIO = document.getElementById('calcularPrecio');
const FLE = document.getElementById('costoF');
const PRE = document.getElementById('precioF');
let DOLAR = Number;
let costoGs = Number;
let costoTotal = Number;
let precioVenta = Number;

//<iframe width="400" height="300" src="http://www.cambioschaco.com.py/widgets/cotizacion/?lang=es" frameborder="0"></iframe>


CALFLETE.addEventListener('click', () => {
    //Verificamos si funciona el boton
    console.log('Se hizo click en flete!');
    //Leemos los valores y los asignamos a variables
    DOLAR = document.getElementById('cotizacion').valueAsNumber
    const PESO = document.getElementById('peso').valueAsNumber
    costoPESO = document.getElementById('costoKg').valueAsNumber
    //verificamos si se ingresó un valor
    if (costoPESO > 0){ 
    //si el valor es mayor a cero significa que el usuario ingresó un valor distinto al valor por defecto
    //en caso de que no se haya asignado un valor distinto se pasaría a asignar el valor por defecto

    //asignamos valor por defecto    
    } else { 
        costoPESO=22.5;
    }
    //calculamos el costo en guaraníes
    let costoGs = calcFlete(DOLAR, PESO, costoPESO);
    //mostramos el costo obtenido
    FLE.innerHTML = 'Costo del flete: ' + costoGs;

})
// Funcion para calcular el costo del flete
function calcFlete(DOLAR, PESO, costoPESO) {
    costoGs = DOLAR*PESO*costoPESO;
return costoGs 
}

CALPRECIO.addEventListener('click', () => {
    //Verificamos si funciona el boton
    console.log('Se hizo click precio!');
    //Leemos los valores y los asignamos a variables
    const costoProd = document.getElementById('costoProducto').valueAsNumber;
    const costoFLE = document.getElementById('costoFlete').valueAsNumber;
    const MAR = document.getElementById('margen').valueAsNumber;

    costoTotal=calcPrecio(costoProd, costoFLE, MAR);
    console.log(costoTotal);

    PRE.innerHTML = 'Precio final de venta: ' + costoTotal;

})


function calcPrecio(costoProd, costoFLE, MAR) {
    costoTotal = (costoProd+costoFLE)*100/MAR;
return costoTotal
}