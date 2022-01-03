//Extrair os códigos contatenados que por padrão que começa com uma letra e termina com 1 ou mais dígitos, em um array para poder usar em verificações:
var codigos = 'A121B12112C12212F12G01';
var exp3 = /[A-Za-z]\d+/g;
var codigosExtraidos = codigos.match(exp3);

console.log(codigosExtraidos);