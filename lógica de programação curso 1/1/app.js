alert('Hello, World');
let numeroSecreto = 3;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);


// se o chute for igual ao número secreto
if (numeroSecreto == chute ) {
    alert(`Acerto, Mizeravi ${numeroSecreto}`)
    console.log('ele acertou');
} else{
    alert('Errou Seu Merda')
    console.log('Errou');
}