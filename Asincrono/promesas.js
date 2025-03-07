let productos = [
    {
        "nombre": "Arroz",
        "precio": 4000,
        "presentacion": "Bolsa",
        "imagen": ""
    },
    {
        "nombre": "Aceite",
        "precio": 5000,
        "presentacion": "Botella",
        "imagen": ""
    },
    {
        "nombre": "Panela",
        "precio": 4500,
        "presentacion": "Pack",
        "imagen": ""
    }
]

// Función para obtener productos
let getProductsSync = (data) => {
    return data;
}

let getProductsAsync = (data) => {
    return new Promise((resolve, reject) => {
        // Simular base de datos
        setTimeout(() => {
            if(data.length != 0){
                resolve(data);
            } else {
                reject("No hay datos");
            }
        }, 2000)
        
    });
}

 getProductsAsync(productos).then(res => {
    console.log("Asincrono", res);
 }).catch(res => {
    console.log("Asincrono", res)
 })

console.log("Sincronico: ", getProductsSync(productos));

let getProductsAsyncAwait = async () => {
    try {
        let data = await getProductsAsync(productos)
        console.log(data)
    } catch (error) {
        
    }
}

console.log(getProductsAsyncAwait())


