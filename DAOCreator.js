const fs = require('fs');

let productArray = [], count = 0;
function randomizeProducts()
{
    count++;
    let descs = ["Descripción del producto"];
    let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];
    let classes = ["A", "B", "C", "D", "E"];
    let quants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,37, 38, 39, 40];
    let minEx = [5, 10, 15, 20, 25];
    let maxEx = [100, 150, 200, 250, 300];

    let descIdx = Math.floor(Math.random() * descs.length);
    let priceIdx = Math.floor(Math.random() * prices.length);
    let clasIdx = Math.floor(Math.random() * classes.length);
    let quantIdx = Math.floor(Math.random() * quants.length);
    let minExIdx = Math.floor(Math.random() * minEx.length);
    let maxExIdx = Math.floor(Math.random() * maxEx.length);

    let generatedProduct = {
        CLAVE: count,
        DESCRIPCION: descs[descIdx],
        PRECIO: prices[priceIdx],
        CLASIFICACION: classes[clasIdx],
        CANTIDAD: quants[quantIdx],
        EX_MIN: minEx[minExIdx],
        EX_MAX: maxEx[maxExIdx]
    };

    return generatedProduct;
}

function generateProducts()
{
    for (let i = 0; i < 80; i++)
    {
        productArray[i] = randomizeProducts();

        let formattedRegister = productArray[i].CLAVE + "," + productArray[i].DESCRIPCION + "," + productArray[i].PRECIO + "," + productArray[i].CLASIFICACION + "," + 
            productArray[i].CANTIDAD + "," + productArray[i].EX_MIN + "," + productArray[i].EX_MAX + "\n";

        fs.appendFileSync("DAO.inf", formattedRegister);
    }
}

try {
    generateProducts();
    console.log("Se genero el DAO.");
} catch (error) {
    console.error('Hubo un error, no se por que.', error);
}