

const nombres = ["Octavio Robleto", "Analia Perez", "Nahuel Tobal"];

let cuerpo = "<div>";

for (let index = 0; index < nombres.length; index++) {

    console.log(nombres[index]);
    cuerpo += '<div><div class="card">   <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:20%">   <div class="container">     <h4><b>' + nombres[index] + '</b></h4>     <p>Architect & Engineer</p>   </div> </div> </div>';

}

cuerpo += "</div>";

document.getElementById("root").innerHTML= cuerpo;