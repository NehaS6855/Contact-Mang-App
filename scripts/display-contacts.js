import * as ContactService from '../services/ContactService.js'


window.addEventListener('DOMContentLoaded', () => {
    ContactService.getAllcontact().then((res) => {
        const contacts = res.data
        displayContacts(contacts)
    }).catch((error)=>{
        console.log(error);
    })
})


const displayContacts = (contacts) => {

    const contactsRowElement = document.querySelector('#Contacts-row')

    let contactCard = " ";

    for (let o of contacts){

    contactCard +=
    `<div class="col-sm-3">
    <div class="card shadow-lg">
        <div class="card-header text-center">
            <a href="../pages/view-contact.html?contactId=${o.id}">
                <img src="${o.imageUrl}" alt="" class="img-fluid w-50 rounded-circle shadow-lg">
            </a>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">
                    Name: <span class="fw-bold">${o.name}</span>
                </li>
                <li class="list-group-item">
                    Mobile: <span class="fw-bold">${o.mobile}</span>
                </li>
                <li class="list-group-item">
                    Title: <span class="fw-bold">${o.title.toUpperCase()}</span>
                </li>
            </ul>
        </div>
    </div>
</div>`
    }

    contactsRowElement.innerHTML=contactCard;

}