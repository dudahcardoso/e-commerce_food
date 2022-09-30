const btnAdd = document.querySelector("#addBtn"); // Pega o botão

// Cria um evento de click para o botão, que irá executar a function anonima:
btnAdd.addEventListener("click", function () {
   // Verifica se o input está vazio 
  const inputValue = document.querySelector("#myInput").value;
  if (inputValue === "") {
    alert("Você deve digitar algum texto para adicionar!");
  } else {
    //alert("LOGIN REALIZADO COM SUCESSO");
    // document.getElementById("myUL").appendChild(li); // Add a li na ul
    document.querySelector("#mensagem-ok").insertAdjacentHTML(
        "afterend",
        `
      <div class="card-teste">
              <span>LOGIN EFETUADO COM SUCESSO</span>
      </div>
      `
     
      );  
      
      const mensagem = document.querySelector('.card-teste');
      // closeMessage.addEventListener("click", function (){
      //   mensagem.style.display = "none";
      // });
      
      setTimeout(() => {
        mensagem.style.display = "none";
      }, 3000);
  }
  document.querySelector("#myInput").value = ""; // Zera o input
  });

 


 
