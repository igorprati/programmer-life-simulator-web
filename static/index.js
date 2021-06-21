// -------------------FORMULÁRIO INICIAL----------------------- //

var form = document.getElementById('form');
var form_nome = document.getElementById('form-nome');
var form_idade = document.getElementById('form-idade');
var form_avatar = document.getElementsByName('avatar')
var tela_jogo = document.getElementById('tela-jogo');
var botao = document.getElementById('botao');
var texto_erro = document.getElementById('erro__texto');

botao.addEventListener('click', function(){
  
    if(form_nome.value == '' || form_idade.value == ''){
        mostrar_erro('Você precisa preencher todos os campos!')
        return
        // alert('Preencha os campos');
    }

    info_nome.innerText = `${form_nome.value}`;
    info_idade.innerText = `Idade: ${form_idade.value}`;

    document.getElementById('form').classList.add('hidden');
    document.getElementById('tela-jogo').classList.remove('hidden');

    if(document.getElementById('avatar_masc').checked){
        info_img.setAttribute('src', '../static/images/avatar_masc.png');
    } else{
        info_img.setAttribute('src', '../static/images/avatar_fem.png');
    }
})

function mostrar_erro(texto){
    document.getElementById('box').classList.remove('hidden');
    texto_erro.innerHTML = texto

    botaoEntendi = document.getElementById('erro__button');
    botaoEntendi.addEventListener('click', function(){
        document.getElementById('box').classList.add('hidden');
    })
}


// -------------------MOSTRAR INFORMAÇÕES NA TELA----------------------- //

var salario = 0
var salarioTela = document.getElementById('salario') ;
salarioTela.innerText = `R$${salario}/job`

function gastar_dinheiro(valor){
    if((dinheiro - valor) < 0 ){
        mostrar_erro(`Você possui apenas ${dinheiro}. Ação não realizada!`)
    }else{
        dinheiro -= valor
        dinheiroTela.innerText = `R$${dinheiro}`
    }
}

var dinheiro = 100
var dinheiroTela = document.getElementById('dinheiro') ;
dinheiroTela.innerText = `R$${dinheiro}`

var cargo = document.getElementById('info_cargo')
cargo.innerHTML = `Cargo atual: Desempregado`

var hora = 6
var dia = 0
var dataTela = document.getElementById('data');

function inicioDia(){
    hora = 6
    dia++
    dataTela.innerText = `Dia: ${dia} Hora: ${hora}`
}

inicioDia()

function avancaTempo(tempo){
    if((tempo + hora) > 24){
        mostrar_erro('Você não tem tempo suficiente para isto.. Vá dormir agora!')
        return
    } else{
        hora += tempo
        dataTela.innerText = `Dia: ${dia} Hora: ${hora}`
    }
}

function diminuir_energia(valor){
    energia -= valor
    info_energia.innerText = `Energia: ${energia}`
}

var energia = 100
let info_energia = document.getElementById('info_energia');
info_energia.innerText = `Energia: ${energia}`

function diminuir_energia(valor){
    if((energia - valor) > 0){
        energia -= valor
        info_energia.innerText = `Energia: ${energia}`
    }else{
        mostrar_erro(`Você não tem energia para esta ação!`)
    }
}


// ---------------------------------------------------- //

var info_nome = document.getElementById('info_nome');
var info_idade = document.getElementById('info_idade');
let info_cargo = document.getElementById('info_cargo');
var info_img = document.getElementById('info_img');

// ----------------------MOSTRAR SUB-MENUS ------------------------ //

var botao_estudar = document.getElementById('estudar');
var sub_menu_estudar = document.getElementById('submenu__estudar');
var botao_restaurar_energia = document.getElementById('restaurar-energia');
var sub_menu_restaurar_energia = document.getElementById('submenu__restaurar-energia');

botao_estudar.addEventListener('click', function(){
    if(sub_menu_estudar.classList.contains('hidden')){
        sub_menu_estudar.classList.remove('hidden');
    }else{
        sub_menu_estudar.classList.add('hidden');
    }
})

botao_restaurar_energia.addEventListener('click', function(){
    if(sub_menu_restaurar_energia.classList.contains('hidden')){
        sub_menu_restaurar_energia.classList.remove('hidden');
    }else{
        sub_menu_restaurar_energia.classList.add('hidden');
    }
})

// ---------------------- ESTUDAR ----------------------- //

var expHtml = 0
var expPython = 0
var estudarHtml = document.getElementById('html');
var estudarPython = document.getElementById('python');

estudarHtml.addEventListener('click', function(){
    if(hora>=22 || energia < 15){
        mostrar_erro('Você não tem tempo/energia para executar esta ação. Vá dormir!')
    }else{
        expHtml += 1
        avancaTempo(4);
        diminuir_energia(15);
        mostrar_erro(`Você estudou HTML e sua experiência aumentou para ${expHtml}`)

        if(expHtml == 5 || expPython == 15){
            salario = 200
            mostrar_erro('Parabéns!! Você agora possui experiência de Programador Júnior. Pode começar a trabalhar!')
            var salarioTela = document.getElementById('salario') ;
            salarioTela.innerText = `R$${salario}/job`
            cargo.innerHTML = `Cargo atual: Programador Júnior`
         
        }else if(expHtml == 10 || expPython == 10){
            salario = 500
            mostrar_erro('Parabéns!! Você agora possui experiência de Programador Pleno. Seu salário aumentou para R$500,00')
            var salarioTela = document.getElementById('salario') ;
            salarioTela.innerText = `R$${salario}/job`
            cargo.innerHTML = `Cargo atual: Programador Pleno`
           
            
        }else if(expHtml == 15 || expPython == 15){
            salario = 1000
            mostrar_erro('Parabéns!! Você agora possui experiência de Programador Sênior. Seu salário aumentou para R$1.000,00')
            var salarioTela = document.getElementById('salario') ;
            salarioTela.innerText = `R$${salario}/job`
            cargo.innerHTML = `Cargo atual: Programador Sênior`
        }
    }
})
    
estudarPython.addEventListener('click', function(){
    if(hora>=22 || energia < 15){
        mostrar_erro('Você não tem tempo/energia para executar esta ação. Vá dormir!');
    }else{
        expPython += 1
        avancaTempo(4);
        diminuir_energia(15);
        mostrar_erro(`Você estudou HTML e sua experiência aumentou para ${expPython}`);

        if(expHtml == 5 || expPython == 15){
            salario = 200
            mostrar_erro('Parabéns!! Você agora possui experiência de Programador Júnior. Pode começar a trabalhar!');
            salarioTela.innerText = `R$${salario}/job`
            cargo.innerHTML = `Cargo atual: Programador Júnior`
         
        }else if(expHtml == 10 || expPython == 10){
            salario = 500
            mostrar_erro('Parabéns!! Você agora possui experiência de Programador Pleno. Seu salário aumentou para R$500,00');
            salarioTela.innerText = `R$${salario}/job`
            cargo.innerHTML = `Cargo atual: Programador Pleno`
           
            
        }else if(expHtml == 15 || expPython == 15){
            salario = 1000
            mostrar_erro('Parabéns!! Você agora possui experiência de Programador Sênior. Seu salário aumentou para R$1.000,00');
            salarioTela.innerText = `R$${salario}/job`
            cargo.innerHTML = `Cargo atual: Programador Sênior`
        }
    }
})

// ---------------------- TRABALHAR ----------------------- //

var botao_trabalhar = document.getElementById('trabalhar');
var contador_trabalho = false;

botao_trabalhar.addEventListener('click', function(){
    
    if(expHtml < 5 && expPython < 5){
        mostrar_erro('Você precisa de pelo menos 5 níveis de experiência em Html ou Python!');
    }else{
        if(contador_trabalho == false){
            dinheiro += salario
            mostrar_erro(`Você trabalhou e ganhou ${salario}`);
            dinheiroTela.innerText = `R$${dinheiro}`
            contador_trabalho = true
        }else{
            mostrar_erro('Você já trabalhou hoje. Tente novamente amanhã!');
        }
    }
})

// ---------------------- DORMIR ----------------------- //

function dormir(){
    inicioDia()
    mostrar_erro('Você foi dormir.... Clique para acordar.')
    contador_trabalho = false
    return
}

// ---------------------- RESTAURAR ENERGIA ----------------------- //

function restaurar_energia(valor){
    if((valor + energia) > 100){
        energia = 100
    }else if(energia == 100){
        mostrar_erro('Sua energia já está no valor máximo!')
    }else{
        energia += valor
    }
    info_energia.innerText = `Energia: ${energia}`
    
}

energetico = document.getElementById('energetico')
descansar = document.getElementById('descansar')
cafezinho = document.getElementById('cafezinho')

energetico.addEventListener('click', function(){
    restaurar_energia(15)
    avancaTempo(1)
    gastar_dinheiro(50)
})

descansar.addEventListener('click', function(){
    restaurar_energia(25)
    avancaTempo(3)
    gastar_dinheiro(0)
})

cafezinho.addEventListener('click', function(){
    restaurar_energia(10)
    avancaTempo(1)
    gastar_dinheiro(30)
})







