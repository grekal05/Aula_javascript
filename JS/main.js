//---- introdução -----
//var nome =(" Grevisse Kalala");
//var idade = 29;
//var idade2 = 33 ;
//var frase = "Japão é melhor time do mundo"
//alert (nome + "tem" + idade + "anos" );
//alert(idade  + idade2)
//console.log(nome);
//console.log(idade  + idade2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));
//console.log(frase.toLocaleLowerCase ());

//----------------- array

//var lista =["maça", "laranja","pera"];
//lista.push("uva"); //para acresentar 
//lista.pop(); // para retirar o ultimo da lista
//console.log(lista.length);  a quatindade que tem na lista 
//console.log(lista.reverse()); // para inverter a lista
//console.log(lista.toString()[0]); // pegar a primeiro letra da maça
//console.log(lista[0]);
//console.log(lista.join("|")); // para separar 
//console.log(lista[1]);
//alert(lista[1]);

//----------------- Json

/*var fruta = {nome:"maça",cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

/*var frutas = [{nome:"maça",cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);*/

// -------- Condição ------
/*var idade = prompt("Qual sua idade")
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/*var count = 0;
while(count < 5){
    console.log(count);
    //count = count + 1;
    count++;
};*/

/*var count;
for(count=0;count <= 5;count++){
    alert(count);

};

var d= new Date();
// alert(d.getMonth() + 1);
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());*/

//-------- function
/*
function soma(n1,n2){
    return n1+n2 ;
}
var validar = 0;

function validaIdade(idade){
    if (idade >=18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}
var idade = prompt("qual sua idade");
validaIdade(idade)
console.log(validar);*/

//function setReplace(frase,nome,novo_nome){
   // return frase.replace(nome,novo_nome)
//}
//alert(soma(5,10));
//alert(setReplace("Vai Japão","Japão","Brasil"));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<i>obrigado por Clicar</i>";
    //console.log(document.getElementById("agradecimento"))
    //alert('Obrigado por clicar');
}

function redirecionar( ){
   // window.open("https://totidiversidade.com.br/");
    window.location.href ="https://totidiversidade.com.br/";
}

function trocar(elemento){
 //document.getElementById("mousemove").innerHTML="Obrigado de passar o mouse"
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado de passar o mouse de volta"
    elemento.innerHTML = "Passar o mouse aqui"
}

function load(){
    alert(" carregar a pagina");
}

function funcaoChange(elemento){
 console.log(elemento.value)
}