import  * as ContactService from '../services/ContactService.js'

window.addEventListener('DOMContentLoaded',()=>{
    ContactService.getAllcontact().then((res)=>{
        const contacts=res.data;
        displayTableofContact(contacts);

    }).catch((error)=>{
        console.log(error);
    })
})

const displayTableofContact=(contacts)=>{
    const contactTableBodyElement=document.querySelector("#contact-table-body");

    let tableRowElement =" ";

    contacts.map((contact,index)=>{
        
        tableRowElement += `<tr>
        
        <td>${contact.id,index+1}</td>
        
        <td> <img style="width: 50px;"class="image-fluid rounded-circle" src="${contact.imageUrl}"></td>

        <td>${contact.name}</td>
        
        <td>${contact.mobile}</td>

        <td>${contact.title}</td>

        <td>${contact.company}</td>

        <td>
        <a  class='btn btn-primary' href='../pages/edit-contact.html?contactId=${contact.id}'><i class="fa-solid fa-pen-to-square"></i></a>

        <a class='btn btn-danger' href='../pages/delete-contact.html?contactId=${contact.id}'><i class="fa-solid fa-trash-can"></i></a>
        </td>

        </tr>`
    })

    contactTableBodyElement.innerHTML=tableRowElement;
}