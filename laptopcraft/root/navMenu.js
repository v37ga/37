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
        slime.classList.remove("show")
        elementos[i].classList.remove("show");
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
        var home = $("<a>", { text: "../home", href: "#", class:"slideLeft"}).appendTo(".query");
        
        const query = document.querySelector(".query")
        var voltar = query.children[0]

        voltar.classList.add("botaoVolta")
        
        query.children[0].addEventListener("click", ()=>{
            slime.classList.remove("moveup")
            slime.classList.remove("show")
            slime.classList.add("fadeout")
            query.classList.add("fadeout")
            query.addEventListener("animationend", () => {
                slime.remove()
                //LOCAL <----------------------------
                // window.open("index.html","_self")
                //GIT <------------------------------------
                window.open("https://v37ga.github.io/37/laptopcraft/","_self")
            })
        })

    //botoes
            $("<div>", {class: "query__div"}).appendTo(".query");

            var client = $("<a>", { text: "download client", 
            href: "https://github.com/v37ga/LapTopCraft/raw/main/files/lastest/LapTopCraft.rar",
            class: "client slideLeft"}).appendTo(".query__div");

            var server = $("<a>", { text: "download server",
            href: "https://v37ga.github.io/37/laptopcraft/",
            class: "server slideLeft"}).appendTo(".query__div"); 
        
        
        
    }
}