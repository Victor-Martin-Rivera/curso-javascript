let i = 1; // Inicializar el While

do {
    if(i % 15 === 0){
        console.log(`${i} FIZZBUZZ!!!`);
    }
    else if( i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if( i % 5 === 0) {
        console.log(`${i} buzz`);
    }
    i++; // Incremento
} while(i < 100); // Condición