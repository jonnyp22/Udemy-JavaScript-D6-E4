function repetir(){
    
    let vuelta= 0;
    let repetido = prompt("Ingrese un número para repetir");


    while(repetido==vuelta)
    {
    
        console.log("Hola Mundo");
        alert("Número de vuelta "+vuelta);
        vuelta++;
    
    }

}

let lista = ["prueba", "pruebaDos","pruebaTres"];
function iteracion(){

    for(let letra of lista){
        document.write("<p>"+letra+"</p>");
    }

}

function sumados(){

    let suma = +document.getElementById("c1").value;
    let miArray = [5, 9, 6, 4, 8];
    for ( let sumar of miArray){
        document.write("<p>La suma es  "+ (sumar+suma) +"</p>");
        console.log(sumar);
    }

}

function roto(){

    let miArray = [5, 9, 6, 4, 8];
    for( let lista of miArray){
        if(lista <6 ){
            console.log("Número: "+lista)
        }
        else{ console.log("Hasta aquí");
              break;        
    }
    }
}
function rotoDos(){

    let miArray = [5, 9, 6, 4, 8];
    for( let lista of miArray){
        if(lista <6 ){
            console.log("Número: "+lista)
        }
        else{ 
              continue;        
    }
    }
}
function rotoTres(){

    let miArray = ['A', 'A', 'B', 'A', 'B', 'B', 'A'];
    let contador=0;
    for( let lista of miArray){
        if(lista=="A"){
            contador++;
            console.log("Letra: "+lista+contador)
            
        }
        else{ 
              continue;        
    }
    }
}