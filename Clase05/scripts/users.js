// promesa fetch


const URL = 'https://reqres.in/api/users';
fetch(URL).then(
    function (response) {
        console.log("Invoque correctamente a " + URL);
        return response.json();
    }
).then(
    function (json) {
       // '<div><div class="card">   <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:20%">   <div class="container">     <h4><b>' + nombres[index] + '</b></h4>     <p>Architect & Engineer</p>   </div> </div> </div>';
       const usuarios = json.data;
       let tarjetas = '<div>'

        for (const usuario of usuarios) {
            tarjetas +='<div><div class="card">   <img src="'+usuario['avatar']+'" alt="Avatar" style="width:20%">   <div class="container">     <h4><b>' + usuario['first_name'] + ' - ' +usuario['last_name']  + '</b></h4>     <p>'+usuario['email']+'</p>   </div> </div> </div>';
        }

        tarjetas += '</div>'

        document.getElementById('root').innerHTML = tarjetas;

        console.log(tarjetas);
    }
).catch(
    function (response) {
        console.log("Invoque Incorrectamente a " + URL);
    }
)