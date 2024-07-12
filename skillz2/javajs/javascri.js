const button = document.querySelector("#sla");
const modal =document.querySelector("dialog");
const fechar= document.querySelector("#close-modal");


button.onclick= function login() {
    modal.showModal()
    }
fechar.onclick= function ()
{
modal.close()
}
