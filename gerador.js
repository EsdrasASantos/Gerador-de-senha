let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha="";

sizePassword.innerHTML= sliderElement.value;//valor desejado de senha

slider.oninput = function(){//função para fazer alteração automatica do tamanho atual do tamanho da senha
    sizePassword.innerHTML= this.value;
}

function generatePassword(){
    let pass="";

    for(let i=0, n=charset.length; i<sliderElement.value; ++i){//a função é refeita até que seja atingido o numero de caracteres desejado
    pass+= charset.charAt(Math.floor(Math.random()*n))//para cada 'volta' dada pelo for um novo dígito aleaório é adicionado a variável pass até que alcance o número selecionado no slider 
    //Math.floor para gerar numero inteiro, Math.random gerar numero aleatório
    }
    containerPassword.classList.remove("hide");//remove a classe hide para que a senha possa ser apresentada ao usuário
    password.innerHTML = pass;
    novaSenha=pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

//pensar solução para copiar varios itens sem precisar dar reload na pagina
