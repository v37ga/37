const blocoCentralTitulo = document.querySelector("#bloco-central__titulo");
var hr = document.getElementsByTagName("hr");
const blocoCentralNav = document.querySelector(".bloco-central__nav");
var slime = document.querySelector(".slime")

const elementos = [blocoCentralTitulo,blocoCentralNav,hr[0]];
    console.log("Elementos:")
    console.log(elementos)
function trocaSessao(e){
    //1 = home para downloads.
    document.title = "LapTopCraft | Downloads"
    if(e == 1){
        blocoCentralTitulo.addEventListener("animationend", moveup)
        console.log("done")
    }else{

    }

    for (let i = 0;i <= elementos.length - 1; i++){
        slime.classList.add("moveup")
        elementos[i].classList.add("fadeout");       
    }

    
    function moveup(){
        console.log("entra")
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
    cria()
    }
    function cria(){
        $("<a>", { text: "../home", href: "#"}).appendTo(".query");
        const query = document.querySelector(".query")
        var voltar = query.children[0]

        voltar.classList.add("botaoVolta")
        
        query.children[0].addEventListener("click", ()=>{
            slime.classList.remove("moveup")
            slime.classList.remove("show")
            slime.classList.add("fadeout")
            query.classList.add("fadeout")
            
        })
        query.addEventListener("animationend", () => {
            slime.remove()
            //LOCAL <----------------------------
            window.open("../index.html","_self")
            //GIT <------------------------------------
            //window.open("https://v37ga.github.io/37/laptopcraft/","_self")
        })
    }
}