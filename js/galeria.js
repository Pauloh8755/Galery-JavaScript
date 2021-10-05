//Criando Slide Show
"use strict"
//  <a href="#imagem4" class="itens-galeria"><img src="img/imagem4.jpg"></a>
const imagens = [
    "./img/imagem1.jpg",
    "./img/imagem2.jpg",
    "./img/imagem3.jpg",
    "./img/imagem4.jpg",
    "./img/imagem5.jpg",
    "./img/imagem6.jpg",
    "./img/imagem7.jpg",
    "./img/imagem8.png"
];
//função para filtrar a url para identificar o ID
const filtrarId= item =>{
    //filtrando onde começa o nome da imagem através da posição da ultima barra com lastIndexOf
    const ultimaBarra = item.lastIndexOf("/") + 1;
    //filtrando onde termina o nome da imagem através da posição d0 ultimo ponto com lastIndexOf
    const ultimoPonto = item.lastIndexOf(".");
    //retornando conteúdo entre a posição da UltimaBarra e UltimoPonto
    return item.substring(ultimaBarra, ultimoPonto);

}
//função para criar itens da caleria dentro do container-galeria a partir da url
//utilizando += para concatenar innerHTML anterior com o proximo 
const criarItem = item =>{
    const container = document.querySelector(".container-galeria");
    //Criando um novo elemento <a>
    const novoLink = document.createElement("a");
    novoLink.href = `#${filtrarId(item)}`;
    //utilizando classlist para adicionar uma classe ao novoLink
    novoLink.classList.add("itens-galeria");
    //neste caso innerHtml esta funcionando na memoria então não atualiza a patgina
    novoLink.innerHTML = `<img src="${item}">`;
    //adicionando novoLink no Container 
    container.append(novoLink);


    //inserindo codigo html no container
    /*
        *entretando innerHTML trabalha direto no codigo fonte, apagando e 
        *recarregando tudo a cada innerHTML.
    */
    //container.innerHTML += `
    //    <a href="#imagem4" class="itens-galeria">
    //        <img src="${item}">
    //    </a>
    //`;
}

//Função responsavel por apresentar imagens da galeria
//percorrendo com .foreach, percorre array e manda pro callback
const carregarGaleria = imagens => imagens.forEach(criarItem);

carregarGaleria(imagens);

