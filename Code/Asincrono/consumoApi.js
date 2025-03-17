let data = [];
let button = document.querySelector(".btn");
let respuesta = document.querySelector(".respuesta")

button.addEventListener("click", async function(){
    let userTC = getDatos();
    

    // // Then y catch
    // userTC.then(json => console.log("userTC ", json))
    //     .catch(response => new Error("userTC ", response));

    // Async / Await
    try {
        let userAA = await getDatos();
        console.log(userAA)
        printData(userAA);
    } catch (error) {
        new Error("Datosa no obtenidos")
    }
})

function getDatos(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
}

function printData(data){

    data.forEach(user => {
        let elemento = `
         <tr class="usuario">
            <td>${user.id}</td>
            <td>${user.title}</td>
            <td>${user.body}</td>
            <td>${user.userId}</td>
        </tr>`

        respuesta.innerHTML += elemento;
    });
}