const modal = document.querySelectorAll(".produtos-carrinho");
const excluir = document.querySelectorAll(".bi-trash");

for(let i = 0; i < excluir.length; i++){
    //console.log(excluir.length + "haha")
    excluir[i].addEventListener("click", function (event) {
        //console.log("cliquei")
        if (!event.target.classList.contains(".bi-trash")) {
            // modal.style.display = "none";
            modal[i].remove();
            //contains de conter
        }
    });
};


// window.addEventListener("click", function (event){
//     if(!event.target.classList.contains("modal-item")){
//         modal.style.display = "none";
//         //contains de conter
//     }
// }