// Declarando la variable
let nota = 87

// Mensaje que indica la nota que obtuvo el alumno
console.log("Tu nota es:", nota);

// Verificando el valor de la nota obtenida
if (nota >= 90){
    console.log("Aprobaste con una nota Excelente.");
}else if(nota >=75 && nota <= 89){
    console.log("Aprobaste con una nota de Bien.");
}else if(nota >= 60 && nota <= 74){
    console.log("Aprobaste con una nota de Suficiente.");
}else{
    console.log("No aprobaste debido a que tu nota es menor a 60.")
}
