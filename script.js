// Atividade 1
ArmazenarMaiorNumero(2, 1);

// Atividade 2
VerificarSinalNumero()

// Atividade 3
ArmazenarMaiorNumero(3, 1);

// Atividade 4
ArmazenarMaiorNumero(3, 2);

// Atividade 5
ArmazenarMedia(6);

// Atividade 6
ArmazenarMaiorNumero(4, 3);

// Atividade 7
SomarNumeros(6);

// Atividade 8
CalcularMediaDez(4);

// Atividade 9
VerificarSePodeVotar()

// Atividade 10
CalcularIMC();

// Atividade 11
Calculadora(2);


function ArmazenarMaiorNumero(quantidade, opcao) {
    var listaNumeros = [];
    var maiorNumero;
    var segundoMaiorNumero;
    var indice = 0;

    do {
        var listaLocal = prompt(`Digite o º${indice + 1} número: \n\nOBS: Digite um número diferente dos anteriores!!`);

        if (isNaN(listaLocal)) {
            ApresentarValorIncorreto();
        } else if (indice > 0 && listaNumeros.includes(parseInt(listaLocal))) {
            alert(`O número "${listaLocal}" é igual ao º${indice + 1} número digitado! Por favor digite outro valor`);
        } else {
            listaNumeros.push(parseInt(listaLocal));
            indice++;
        }

    } while (indice < quantidade);

    maiorNumero = VerificarMaiorNumero(listaNumeros);

    switch (opcao) {
        case 1:
            ApresentarNaTela("O maior número é " + maiorNumero + '.');
            break;
        case 2:
            segundoMaiorNumero = VerificarMaiorNumero(listaNumeros.filter(value => value < maiorNumero));
            ApresentarNaTela(`A soma dos dois maiores números, ${maiorNumero} e ${segundoMaiorNumero} é: ${maiorNumero + segundoMaiorNumero}`);
            break;
        case 3:
            ApresentarNaTela(`O primeiro número é ${listaNumeros[0]}, o ultimo número é ${listaNumeros[listaNumeros.length - 1]}, e o maior número é ${maiorNumero}.`);
            break;
        default:
            ApresentarValorIncorreto();
    }
}

function VerificarMaiorNumero(arrayNumeros = []) {
    var maior = arrayNumeros[0];
    for (var i = 0; i < arrayNumeros.length; i++) {
        maior = maior > arrayNumeros[i] ? maior : arrayNumeros[i];
    }

    return maior;
}

function VerificarSinalNumero() {
    var numeroSinal = parseFloat(prompt("Verificador de números Positivos, Negativos ou Zero \n\nDigite um número:"));

    var sinal = "";

    if (Math.sign(numeroSinal) != 0) {
        sinal = Math.sign(numeroSinal) === -1 ? "Negativo" : "Positivo";
    } else {
        sinal = "Zero";
    }

    ApresentarNaTela("O número que você digitou é " + sinal);
}

function ArmazenarMedia(quantidade) {
    var texto = "Os valores informados são ";
    var media = 0;
    var numeros = [];

    for (var i = 0; i < quantidade; i++) {
        numeros.push(prompt(`Digite o º${i + 1} número para calcular a média:`));
        texto += numeros[i] += i < quantidade ? ', ' : '';
    }

    media = CalcularMedia(numeros);
    ApresentarNaTela(`${texto} e a média é: ${media}`);
}

function CalcularMediaDez(quantidade) {
    var media = 0;
    var indice = 0;
    var numeros = [];

    do {
        var numeroLocal = prompt(`Digite o º${indice + 1} número para calcular a média: \n\nOBS: O número deve ser maior que 0 e menor que 10!`);

        if (isNaN(numeroLocal)) {
            ApresentarValorIncorreto();
        } else if (numeroLocal >= 0 && numeroLocal <= 10) {
            numeros.push(numeroLocal)
            indice++;
        } else {
            var zeroOuDez = numeroLocal < 0 ? 'menor que 0' : 'maior que 10';
            alert(`O número ${numeroLocal} é ${zeroOuDez}! Por favor, digite outro número.`)
        }
    } while (indice < quantidade)

    media = CalcularMedia(numeros);

    if (media > 5) {
        ApresentarNaTela("Você passou no teste!");
    } else {
        ApresentarNaTela("Tente novamente...");
    }

}

function CalcularMedia(arrayNumeros = []) {
    var resultado = 0;
    for (var i = 0; i < arrayNumeros.length; i++) {
        resultado += parseInt(arrayNumeros[i]);
    }
    return resultado / arrayNumeros.length;
}

function SomarNumeros(quantidade) {
    var i = 0;
    var resultadoSoma = 0;
    var numerosTexto = `os números digitados foram `;
    do {
        var numeroSoma = parseInt(prompt(`Digite o º${i + 1} número: \n\nOBS: Os números devem ser menor que 72!`));
        if (numeroSoma < 72) {
            i++;
            resultadoSoma += numeroSoma;
            numerosTexto += numeroSoma += i < quantidade ? ", " : "";
        } else if (numeroSoma >= 72) {
            alert(`O número ${numerosTexto} é maior que 72! Por favor digite novamente outro número`);
        } else {
            ApresentarValorIncorreto();
        }
    } while (i < quantidade);

    ApresentarNaTela(`O resultado da soma dos números é ${resultadoSoma} e ${numerosTexto}.`);
}

function VerificarSePodeVotar() {
    var anoAtual = 2024;
    var anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));


    if (anoNascimento > anoAtual) {
        ApresentarNaTela('Você provavelmente ainda não existe!');
    } else {
        var idade = anoAtual - anoNascimento;
        var texto = `Você tem ${idade} anos de idade e `;

        if (idade == 16 || idade == 17 || idade > 70) {
            ApresentarNaTela(texto + 'pode votar esse ano se quiser!');
        } else if (idade >= 18 && idade <= 70) {
            ApresentarNaTela(texto + 'pode votar esse ano!');
        } else {
            ApresentarNaTela(texto + 'não pode votar esse ano!');
        }
    }
}

function CalcularIMC() {
    var sexo = 0;
    var altura = 0;
    var pesoIdeal = 0;
    do {
        sexo = parseInt(prompt("Digite o número que corresponda ao seu sexo: \n\n[ 1 ] Masculino\n[ 2 ] Feminino"));

        if (sexo != 1 && sexo != 2) {
            ApresentarValorIncorreto();
        }
    } while (sexo != 1 && sexo != 2)

    altura = parseFloat(prompt('Digite sua altura: '));

    switch (sexo) {
        case 1:
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case 2:
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
    }

    ApresentarNaTela(`Seu peso ideal é: ${pesoIdeal.toFixed(2)}`);
}

function Calculadora(quantidade) {
    var valores = [];
    var tiposDeCalculo = 0;
    var resultado = 0;

    for (var i = 0; i < quantidade; i++) {
        valores.push(parseInt(prompt(`Digite o º${i + 1} número a ser calculado: `)));
    }

    do {
        tiposDeCalculo = prompt(`Digite o número que corresponda ao calculo que deseja: 
        \n\n[ 1 ] Adição
        \n\n[ 2 ] Subtração
        \n\n[ 3 ] Divisão
        \n\n[ 4 ] Multiplicação`);

        if (tiposDeCalculo < 1 || tiposDeCalculo > 4 || isNaN(tiposDeCalculo)) {
            tiposDeCalculo = 0;
            ApresentarValorIncorreto();
        }
    } while (tiposDeCalculo == 0);

    switch (parseInt(tiposDeCalculo)) {
        case 1:
            ApresentarNaTela(`O resultado da conta é: ${CalcularResultado(valores, '+')}`);      
            break;
        case 2:
            ApresentarNaTela(`O resultado da conta é: ${CalcularResultado(valores, '-')}`);
            break;
        case 3:
            ApresentarNaTela(`O resultado da conta é: ${CalcularResultado(valores, '/')}`);
            break;
        case 4:
            ApresentarNaTela(`O resultado da conta é: ${CalcularResultado(valores, '*')}`);
            break;
    }
}

function CalcularResultado(arrayValores = [], operador) {
    var resultadoCalculo = arrayValores[0];
    for (var i = 1; i < arrayValores.length; i++) {
        resultadoCalculo = eval(resultadoCalculo + operador + arrayValores[i]);
    }
    return resultadoCalculo;
}

function ApresentarNaTela(conteudo) {
    alert(conteudo);
    console.log(conteudo);
    document.write(conteudo + '<br>');
}

function ApresentarValorIncorreto() {
    alert("O valor digitado não corresponde com o que foi solicitado! Tente novamente...");
}