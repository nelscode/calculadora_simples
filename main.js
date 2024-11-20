const botoes = document.querySelectorAll('.botoes') // capturei todos os botoes
const visor = document.querySelector('#visor') // capturei o visor

// essa variavel vai guardar a expressao
let expressao = ''

// o forEach vai percorrer todos os botoes
botoes.forEach((botao) => {
    botao.addEventListener('click', function(){ // e ao clicar no botao
        
        const textoDoBotao = botao.textContent // guardarei o texto dele na variavel

        if(textoDoBotao === 'AC'){ // se o texto for AC, 
            expressao = '' // a expressao continua vazia
            visor.textContent = '' // e o visor fica vazio

            return // saiu da condicional
        }

        // se o texto for igual
        if(textoDoBotao === '='){
            try {
                const expressaoCalculavel = expressao // a expressao calculavel é igual a expressao
                .replace('x', '*') // e tudo que tiver o x vira *
                .replace('÷', '/') // e tudo que tiver o simbolo de divisão vira /

                const resultado = eval(expressaoCalculavel) // o eval vai calcular o que estiver na string tipo: 1+1+1

                visor.textContent = resultado // o visor vai mostrar esse resultado
                expressao = resultado.toString() // e a expressao volta ser string

            } catch(erro){ // se isso der erro
                visor.textContent = 'Erro' // ele retorna erro no visor
                expressao = '' // e a expressao volta ser uma string vazia
            }

            return // saiumos da condicional
        }

        if(expressao.length >= 27){
            return
        } // a expressão não pode passar de 27 caracteres


        const ultimoCaractere = expressao.slice(-1) // se o ultimo caractere da expressao for um operador
        if(['+', '-', 'x', '÷', '.'].includes(textoDoBotao) && ['+', '-', 'x', '÷', '.'].includes(ultimoCaractere)){
            return // não acontecerá nada
        }

        // a expressao vai ser o que tiver nela concatenado com que estiver no textobotao
        expressao += textoDoBotao
        visor.textContent = expressao; // e o visor vai mostrar essa expressao
    })
})