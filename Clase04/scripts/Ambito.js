// var let const 


// hoisting --> elevacion en ingles

// var era la forma de declarar en js

const VERSION = "V1.0";
// let y const 

function ciclar() {
    console.log("-->"+numero2);
    console.log("-->"+numero1);
    if(true){
        var numero1 = 10;
        var numero2 = 10;
    }
    console.log("-->"+numero2);
    console.log("-->"+numero1);
}

ciclar();

/*
function ciclar() {
var numero1;
var numero2;

    console.log("-->"+numero2);
    console.log("-->"+numero1);
    if(true){
         numero1 = 10;
         numero2 = 10;
    }
    console.log("-->"+numero2);
    console.log("-->"+numero1);
}


*/