/*let submenu = document.getElementById("submenuw2");
function togglemenu(){
    submenu.classList.toggle("open-class");


}

const data =[

    {
        title: "João Silva", 
        description:
            "Desenvolvedor Front-End"
    },
    {
        title: "Claúdia Costa", 
        description:
            "Professora de Inglês"
    },
    {
        title: "Lúcia Delvina", 
        description:
            "Desenvolvedora Back-End"
    }

];

const cards = document.querySelector(".cards");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
    cards.innerHTML = "";
   data.forEach(e => {
    cards.innerHTML += ` 
    <section class="cards">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
    </section>
    `
   })
}

searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search)
})

window.addEventListener("load", displayData.bind(null,data))

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})*/