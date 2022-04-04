const blocoCentralTitulo = document.querySelector("#bloco-central__titulo");
var hr = document.getElementsByTagName("hr");
const blocoCentralNav = document.querySelector(".bloco-central__nav");
var slime = document.querySelector(".slime")

const elementos = [blocoCentralTitulo,blocoCentralNav,hr[0]];
    console.log("Elementos:")
    console.log(elementos)
function trocaSessao(e){
    //1 = home para downloads.
    
    if(e == 1){
        blocoCentralTitulo.addEventListener("animationend", moveup)
        
        console.log("done")
    }else{

    }

    for (let i = 0;i <= elementos.length - 1; i++){
            switch(e){
            case 1:
                slime.classList.add("moveup")
                elementos[i].classList.add("fadeout");
            break;
        }
    }

    
    function moveup(){
        console.log("entra")
        var slime = document.querySelector(".slime")
        slime.classList.add("moveup")
        slime.addEventListener("animationend", apaga())
        slime.children[0].style.margin = "90px 0 0 0"
    }

    var index = 0
    function apaga(){
        while(index <= elementos.length){
            $(elementos[index]).remove()
            console.log("teste>"+index)
            index++
        }
    }


}