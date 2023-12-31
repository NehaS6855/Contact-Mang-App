import  * as ContactService from '../services/ContactService.js'

window.addEventListener('DOMContentLoaded',()=>{

    populateGroupDataFromServer()

    populateFormDataFromServer()

});

const imageElement=document.querySelector('#image-input');

const displayImageElement=document.querySelector('#display-image');

imageElement.addEventListener('change',(event)=>{
    const imageUrl=event.target.value;
    displayImageElement.setAttribute('src',imageUrl);
});

const formElement=document.querySelector('#edit-contact-form');

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    sendDataToServer()
});

const populateGroupDataFromServer =()=>{
    ContactService.getAllGroups().then((res)=>{
        const groups=res.data;

        if(groups){
            displayGroups(groups)
        }
    }).catch((error)=>{
        console.log(error);
    })
}

const populateFormDataFromServer=()=>{
    const contactId=window.location.href.split('=')[1];
    if(contactId){
        ContactService.getContact(contactId).then((res)=>{
            const contact=res.data

            if(contact){
                populateDataToForm(contact)
            }

        }).catch ((error)=>{
            console.log(error);
        })
    }
}

const displayGroups=(groups)=>{

    const selectElement=document.querySelector('#group-select-input');

    let optionElement =
    
    `<option value="" >Select your Group</option>`;

    for (let Gr of groups){
        optionElement += `<option value="${Gr.id}">${Gr.name}</option>`;
    }
    
    selectElement.innerHTML =optionElement;

};

const populateDataToForm=(contact)=>{
        document.querySelector('#name-input').value=contact.name;
        document.querySelector('#image-input').value=contact.imageUrl;
        document.querySelector('#mobile-input').value=contact.mobile;
        document.querySelector('#email-input').value=contact.email;
        document.querySelector('#company-input').value=contact.company;
        document.querySelector('#title-input').value=contact.title;
        document.querySelector('#group-select-input').value=contact.groupId;
        document.querySelector('#display-image').value=contact.imageUrl;

}

const sendDataToServer=()=>{
    const contact={
        name: document.querySelector('#name-input').value,
        imageUrl: document.querySelector('#image-input').value,
        mobile: document.querySelector('#mobile-input').value,
        email: document.querySelector('#email-input').value,
        company: document.querySelector('#company-input').value,
        title: document.querySelector('#title-input').value,
        groupId:document.querySelector('#group-select-input').value

    }

const contactId=window.location.href.split('=')[1];

if(contact && contactId){
    ContactService.updateContact(contact,contactId).then((res)=>{
        if(res && res.data){
            window.location.href ="../pages/admin-contacts.html"
        }
    }).catch((error)=>{
        console.log(error);
    })
}
}
