// Função que valida CPF
function validarCPF(cpf) {
// Remove caracteres não numéricos (pontos e traços)
cpf = cpf.replace(/[^\d]+/g, '');
// Verifica se tem 11 dígitos ou se é uma sequência repetida
if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
return false;
}
// Validação do primeiro dígito verificador
let soma = 0;
for (let i = 0; i < 9; i++) {
soma += parseInt(cpf.charAt(i)) * (10 - i);
}
let resto = (soma * 10) % 11;
if (resto === 10 || resto === 11) resto = 0;
if (resto !== parseInt(cpf.charAt(9))) return false;
// Validação do segundo dígito verificador
soma = 0;
for (let i = 0; i < 10; i++) {
soma += parseInt(cpf.charAt(i)) * (11 - i);
}
resto = (soma * 10) % 11;
if (resto === 10 || resto === 11) resto = 0;
return resto === parseInt(cpf.charAt(10));
}