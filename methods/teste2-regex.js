//Substituindo todos os hífens "-" por "/" em uma string de Data
let anoMesDia = '2007-12-31';
const exp1 = /-/g; //se não tivesse o g ele trocaria apenas o primeiro hífen
anoMesDia = anoMesDia.replace(exp1, '/');

console.log(anoMesDia);