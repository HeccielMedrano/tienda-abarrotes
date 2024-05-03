const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let count1 = 0, count2 = 0, count3 = 0, count4 = 0;
let countClassesName = ['A', 'B', 'C', 'D', 'E'];
let countClasses = [0, 0, 0, 0, 0];
function listRegisters() {
    let data = fs.readFileSync("DAO.inf", "utf8");
    let lines = data.split('\n');

    lines.forEach(line => {
        let fields = line.split(',');
        if (fields[4] > 20) {
            count1++;
        }

        if (fields[4] < 15) {
            count2++;
        }

        if (fields[3] == "A" && fields[2] > 15.50) {
            count3++;
        }

        if (fields[2] > 20.30 && fields[2] > 45) {
            count4++;
        }

        if (fields[3] == "A")
        {
            countClasses[0]++;
        }
        if (fields[3] == "B")
        {
            countClasses[1]++;
        }
        if (fields[3] == "C")
        {
            countClasses[2]++;
        }
        if (fields[3] == "D")
        {
            countClasses[3]++;
        }
        if (fields[3] == "E")
        {
            countClasses[4]++;
        }
    });

    console.log("Número de productos con existencia mayor a 20: " + count1);
    console.log("Número de productos con existencia menos a 15: " + count2);
    console.log("Lista de productos con la misma clasificación y precio mayor 15.50: " + count3);
    console.log("Lista de productos con precio mayor a 20.30 y menor a 45.00: " + count4);
    console.log("Lista de productos con agrupados por sus clases:");
    
    for(let i = 0; i < countClasses.length; i++)
    {
        console.log("    Clase " + countClassesName[i] + ":" + countClasses[i]);
    }

    process.exit();
}

listRegisters();