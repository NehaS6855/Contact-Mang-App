import  * as ContactService from '../services/ContactService.js'

window.addEventListener('DOMContentLoaded',()=>{
    ContactService.getAllGroups().then((res)=>{
        const groups=res.data;

        if(groups){
            displayGroups(groups);
        }
    }).catch((error)=>{
        console.log(error);
    })
})

const displayGroups=(groups)=>{

    const selectElement=document.querySelector('#group-select-input');

    let optionElement =
    
    `<option value="" >Select your Group</option>`;

    for (let Gr of groups){
        optionElement += `<option value="${Gr.id}">${Gr.name}</option>`;
    }
    
    selectElement.innerHTML =optionElement;

};


// Submit for data//

const formElement =document.querySelector('#add-contact-form')

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();

    const contact ={
        name: document.querySelector('#name-input').value,
        imageUrl: document.querySelector('#image-input').value,
        mobile: document.querySelector('#mobile-input').value,
        email: document.querySelector('#email-input').value,
        company: document.querySelector('#company-input').value,
        title: document.querySelector('#title-input').value,
        groupId:document.querySelector('#group-select-input').value

    }

    if(contact){
        ContactService.createContact(contact).then((res)=>{
            if(res && res.data){
                window.location.href ="../pages/admin-contacts.html"
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    
})

//change event on image field

const imageElement=document.querySelector('#image-input');
const displayImageElement=document.querySelector('#display-image');
imageElement.addEventListener('change',(event)=>{
    const imageUrl=event.target.value;
    displayImageElement.setAttribute('src',imageUrl);
})







