let decrementar = document.querySelector(".bi-dash-square");
let incrementar = document.querySelector(".bi-plus-square");
let txtQuantidade  = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(txtQuantidade.textContent);
count = 0
//console.log(decrementar);

incrementar.addEventListener("click",function(){
    // for(i=0; i>= decrementar.length; i++){
    quantidadeProduto++;
    txtQuantidade.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click",function(){
    // for(i=0; i>= decrementar.length; i++){
        if(quantidadeProduto<=1){
            alert("A quantidade de produtos nao poder ser menor que 1")
        }
        else{      
            quantidadeProduto--;
            txtQuantidade.innerHTML = quantidadeProduto;
        }

});

 

// script coração favoritar
let coracao = document.querySelector(".bi-heart-fill");
 coracao.addEventListener('click', function(event){
    //dentro da minha target tudo que tover o nome node==I
    if(event.target.nodeName === "I"){
        event.target.classList.toggle("red");
         //estrutura pronta do JS: event.target.nodeName == "red"
 }
});


// coracao.addEventListener("click", (event) => {
//     //dentro da minha target tudo que tover o nome node==LI
//     if(event.target.nodeName === "I")
//     //estrutura pronta do JS: event.target.nodeName == "CHECKBOX"
//     {
//         event.target.classList.toggle("color");//adiciona o checked na li e o togle desarma o cheked
//     }
// });
