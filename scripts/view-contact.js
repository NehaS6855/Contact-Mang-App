import  * as ContactService from '../services/ContactService.js'

window.addEventListener('DOMContentLoaded',()=>{
    ContactService.getAllcontact().then((res)=>{
        const contacts=res.data;
        if(contacts){
            viewContact(contacts);
        }
    }).catch((error)=>{
        console.log(error);
    })
})

const viewContact=(contacts)=>{
    const viewContactRowElement=document.querySelector("#contact-row");



    
}
