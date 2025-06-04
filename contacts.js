console.log(`contacts.js loaded`);

function contactsGoBack() {
    // Show the home screen
    document.getElementById('home-screen').style.display = 'grid';

    // Hide the app screen
    document.getElementById('contacts-app').style.display = 'none';
}

let SavedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Access contacts anywhere in your functions in this file

// Display the contacts in the table
function displayContacts(filteredContacts = contacts) {
    const contactsList = document.getElementById('contacts-list');
    contactsList.innerHTML = filteredContacts
        .map(contact => 
            `<tr class="contact-row-box" ('${contact}')">
                <td>${contact}</td>
            </tr>`
        )
        .join('');
}

// Search/filter contacts in real time
function filterContacts() {
    const query = document.querySelector('.search-box').value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.toLowerCase().includes(query)
    );
    displayContacts(filteredContacts);
}

// Open the form to add a new contact
function openNewContactForm() {
    document.getElementById('newContactForm').style.display = 'block';
}

// Add a new contact and update the list
function addNewContact() {
    const name = document.getElementById('newContactName').value;
    const number = "";

    if (name) {
        contacts.push(`${name}`);
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Save contacts to Local Storage
        document.getElementById('newContactForm').style.display = 'none';
        displayContacts(); // Refresh the contact list
    } else {
        alert("Please enter a name");
    }
}

// Close the add contact form
function closeAddContactForm() {
    document.getElementById('newContactForm').style.display = 'none'; // Ensure it hides correctly
}



