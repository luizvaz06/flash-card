const flashcards = [

{
pergunta:"Qual é o carro mais vendido da história?",
resposta:"Toyota Corolla."
},

{
pergunta:"Qual marca produz o Mustang?",
resposta:"Ford."
},

{
pergunta:"Qual carro é conhecido como Fusca em português?",
resposta:"Volkswagen Beetle."
},

{
pergunta:"Qual fabricante criou o Civic?",
resposta:"Honda."
},

{
pergunta:"Qual é o país de origem da Ferrari?",
resposta:"Itália."
}

];

let atual = 0;

const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const card = document.querySelector(".card");
const barra = document.getElementById("barra");

function mostrar(){

    pergunta.innerHTML = flashcards[atual].pergunta;

    resposta.innerHTML = flashcards[atual].resposta;

    card.classList.remove("virado");

    barra.style.width=((atual+1)/flashcards.length)*100+"%";

}

document.getElementById("flashcard").onclick=()=>{

card.classList.toggle("virado");

}

function proximo(){

    atual++;

    if(atual>=flashcards.length){

        atual=0;

    }

    mostrar();

}

function anterior(){

    atual--;

    if(atual<0){

        atual=flashcards.length-1;

    }

    mostrar();

}

mostrar();