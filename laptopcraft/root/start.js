(function () {
    var blocoCentral = document.querySelector(".bloco-central");
    var hr = document.getElementsByTagName("hr");
    var botao = document.querySelectorAll(".botao")
    var slime = document.querySelector("#slime")
    console.log(botao)

    var itens = [hr[0],botao[0],botao[1],slime]
    console.log(itens.length)
    console.log(itens)

    for (let i = 0; i <= (itens.length - 1); i++){
        
        if (i == 0){
            blocoCentral.addEventListener("animationend", () =>{
                itens[i].classList.add("show");
                itens[i].classList.remove("hidden")       
            })
        }else{
            itens[i-1].addEventListener("animationend", () =>{
                itens[i].classList.add("show");
                itens[i].classList.remove("hidden")       
            })
        }  
    }

    botao[0].style.background ="rgb(26, 177, 26)";
    botao[1].style.background ="rgb(92, 37, 124)";
    
})();