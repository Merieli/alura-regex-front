const alvo = '11a22b33c';
const exp = new RegExp('(\\d\\d)(\\w)', 'g');
let resultado = exp.exec(alvo);
console.log(resultado);
console.log(exp.lastIndex);