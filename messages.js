// Load saved messages from localStorage
const contactsTest = SavedContacts
function MessagesGoBack(curscreen) {
    // Show the home screen
    if (curscreen=== 'messageFeed') {
    document.getElementById('home-screen').style.display = 'grid';
    // Hide the app screen
    document.getElementById('message-app').style.display = 'none';
    
    document.getElementById('plus-button').style.display = 'none';
    
    
    } else if (curscreen=== 'newMessageScreen'){
     document.getElementById('message-feed').style.display = 'block';
     
     document.getElementById('plus-button').style.display = 'block';
     
    // Hide the app screen
    document.getElementById('new-message-screen').style.display = 'none'; 
    } else if (curscreen=== 'contactPickerScreen'){
     document.getElementById('new-message-screen').style.display = 'block';
    // Hide the app screen
    document.getElementById('contact-picker-screen').style.display = 'none'; 
    } else if(curscreen=== 'messagingScreen'){
     document.getElementById('message-feed').style.display = 'block';
    // Hide the app screen
    document.getElementById('messaging-screen').style.display = 'none'; 
    document.getElementById('plus-button').style.display = 'block';
    }
 }
function loadMessagesFromLocalStorage() {
    const savedMessages = localStorage.getItem('messagesData');
    return savedMessages ? JSON.parse(savedMessages) : {};
}

// Save messages to localStorage
function saveMessagesToLocalStorage(messagesData) {
    localStorage.setItem('messagesData', JSON.stringify(messagesData));
}

document.addEventListener("DOMContentLoaded", function() {
    const recentMessagesContainer = document.getElementById('message-feed');
    const newMessageScreen = document.getElementById('new-message-screen');
    const contactPickerScreen = document.getElementById('contact-picker-screen');
    const contactPickerList = document.getElementById('contact-picker-list');
    const contactNameDisplay = document.getElementById('selected-contact');
    contactNameDisplayInScreen = document.getElementById('contact-name');  // reference for "To: " text
    document.getElementById('Mheading').innerText = 'Messages';

    let selectedContact = '';
    let messagesData = loadMessagesFromLocalStorage(); // Load messages from localStorage on page load

    // Function to display recent chats with the last message preview
    function displayRecentChats() {
        recentMessagesContainer.innerHTML = ''; // Clear previous content
        document.getElementById('plus-button').style.display = 'block';
        for (const contact in messagesData) {
            if (messagesData[contact].length > 0) {
                const recentContact = document.createElement('div');
                recentContact.classList.add('recent-contact-item');

                // Create a container for profile picture and contact name
                const contactInfo = document.createElement('div');
                contactInfo.classList.add('contact-info');

                // Create profile image
                const profilePic = document.createElement('img');
                profilePic.src = 'profile.png'; // Replace with actual image path
                profilePic.alt = 'Profile picture';
                contactInfo.appendChild(profilePic);

                // Contact name
                const contactName = document.createElement('span');
                contactName.innerText = contact;
                contactInfo.appendChild(contactName);

                // Append contact info to recent contact item
                recentContact.appendChild(contactInfo);

                // Last message preview
                const lastMessage = messagesData[contact].slice(-1)[0]; // Get the last message
                const messagePreview = document.createElement('div');
                messagePreview.classList.add('message-preview');
                const messageText = lastMessage.text.length > 30 ? lastMessage.text.substring(0, 30) + '...' : lastMessage.text;
                messagePreview.innerText = messageText;
                recentContact.appendChild(messagePreview);

                recentContact.addEventListener('click', function() {
                    document.getElementById('plus-button').style.display = 'none';
                    document.getElementById('message-feed').style.display = 'none';
                    openMessagingScreen(contact);
                    selectedContact = contact;
                    
                });

                recentMessagesContainer.appendChild(recentContact);
            }
        }
    }

    // Initial display of recent chats
    displayRecentChats();

    // Show the new message screen when the plus button is clicked
    document.getElementById('send-message').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input'); // Replace with correct input ID
    const messageText = messageInput.value.trim();

    if (messageText && selectedContact) {
        // Add new sent message to the messagesData object
        if (!messagesData[selectedContact]) {
            messagesData[selectedContact] = [];
        }
        messagesData[selectedContact].push({ text: messageText, type: 'sent' });

        // Update messages display and reset the input field
        loadMessages(selectedContact);
        messageInput.value = ''; // Clear input field
        saveMessagesToLocalStorage(messagesData);

            // Update recent messages and reset the input field
            displayRecentChats();
    } else {
        alert(messageInput + 'Please enter a message before sending.');
    }
});
    document.getElementById('plus-button').addEventListener('click', function() {
        newMessageScreen.style.display = 'block'; // Show new message screen
        document.getElementById('plus-button').style.display = 'none';
        document.getElementById('message-feed').style.display = 'none';
        contactNameDisplay.innerText = 'To: '; // Reset the contact display
        selectedContact = 'To: '; // Reset selected contact
    });

    // Open the contact picker window when the small plus button is clicked
    document.getElementById('small-plus-button').addEventListener('click', function() {
        contactPickerScreen.style.display = 'block'; // Show contact picker window
        newMessageScreen.style.display = 'none'; // Hide new message screen
        contactPickerList.innerHTML = ''; // Clear previous content inside contact picker

        // Create the contact list
        contactsTest.forEach(contact => {
            const contactItem = document.createElement('div');
            contactItem.classList.add('contact-item');
            contactItem.innerText = contact;
            contactItem.addEventListener('click', function() {
                selectedContact = contact;
                contactNameDisplay.innerText = 'To: ' + contact; // Display chosen contact's name
                contactPickerScreen.style.display = 'none'; // Hide contact picker
                newMessageScreen.style.display = 'block';
            });
            contactPickerList.appendChild(contactItem);
        });
    });

    // Send a new message from the new message screen
    document.getElementById('send-new-message').addEventListener('click', function() {
        const newMessageInput = document.getElementById('new-message-input');
        const messageText = newMessageInput.value.trim();

        if (messageText && selectedContact) {
            // Add new sent message to the messagesData object
            if (!messagesData[selectedContact]) {
                messagesData[selectedContact] = [];
            }
            messagesData[selectedContact].push({ text: messageText, type: 'sent' });

            // Save updated messages to localStorage
            saveMessagesToLocalStorage(messagesData);

            // Update recent messages and reset the input field
            displayRecentChats();
            newMessageInput.value = ''; // Clear input field
            
            newMessageScreen.style.display = 'none'; // Close new message screen
            document.getElementById('plus-button').style.display = 'block'; // Show the main plus button
            openMessagingScreen(selectedContact);
        } else if (!selectedContact) {
            alert('Please select a contact before sending a message.');
        } else {
            alert('Please enter a message before sending.');
        }
    });

    // Open messaging screen for the selected contact
    function openMessagingScreen(contactName) {
        // Hide other screens and show messaging screen
        document.getElementById('plus-button').style.display = 'none';
        document.getElementById('messaging-screen').style.display = 'block';

        // Display contact's name
        document.getElementById('contact-name').innerText = contactName;

        // Load messages for the selected contact
        loadMessages(contactName);
    }

    // Load messages for a specific contact
    function loadMessages(contactName) {
        const messagesContainer = document.getElementById('messages');
        messagesContainer.innerHTML = ''; // Clear previous messages

        const messages = messagesData[contactName] || [];
        messages.forEach(msg => {
            // Create a container for the message
            const messageBox = document.createElement('div');
            messageBox.classList.add('message-box', msg.type === 'sent' ? 'sent' : 'received');

            const messageText = document.createElement('div');
            messageText.innerText = msg.text;
            messageBox.appendChild(messageText);

            // Add the message box to the container
            messagesContainer.appendChild(messageBox);
        });

        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
    }
});