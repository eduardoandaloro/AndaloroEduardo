
/* función y condicional*/
function calcularedad(){
    var edad = document.getElementById("edad").value;


    if(edad==18){

        alert("tú puedes entrar a nuestra pagina");

    }else{
        alert("este contenido es prohibido para ti");
    }
    
}

/* ciclon "for"*/
let n;
let i;
let m=0;
 for(i=1;i<=5;i++){
    n = parseInt(prompt("ingrese el dato "+i+" de 5"));
 } 

 m = m+n;

 console.log(`}la suma total es: ${m}`);
 console.log(`el promedio es: ${m/5}`);


/*switch*/
var medioPago = Number(prompt("ingrese el medio de pago: 1-efectivo 2-tarjeta 3-bitcoin"));

switch(medioPago){
    case 1:
        console.log("usted abonó con efectivo");
        break
    case 2:
        console.log("usted abonó con tarjeta");
        break
    case 3:
        console.log("usted abonó con bitcoin");
        break
    default:
        console.log("no ha ingresado un valor válido");
        break    
}