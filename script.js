let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Function to open the specified app
function openApp(app) {
    // Hide the home screen
    document.getElementById('home-screen').style.display = 'none';

    // Load the app HTML
    if (app === 'contacts') {
        const appContainer = document.getElementById('contacts-app');
        appContainer.style.display = 'block';
    }
        else if (app === 'instagram') {
        const appContainer = document.getElementById('instagram-app');
        appContainer.style.display = 'block';
        }
        
        else if (app === 'messages') {
        const appContainer = document.getElementById('message-app');
        appContainer.style.display = 'flex';
        document.getElementById('message-feed').style.display = 'block';
        document.getElementById('plus-button').style.display = 'block';
        
     } else if (app === 'settings') {
        const appContainer = document.getElementById('settings-app');
        appContainer.style.display = 'flex';
     } else if (app === 'valet') {
        const appContainer = document.getElementById('valet-app');
        appContainer.style.display = 'flex';
     } else if (app === 'calculator') {
        const appContainer = document.getElementById('calculator-app');
        appContainer.style.display = 'flex';
        
     } else if (app === 'spotify') {
        const appContainer = document.getElementById('spotify-app');
        appContainer.style.display = 'block';
     } else if (app === 'gpay') {
        const appContainer = document.getElementById('gpay-app');
        appContainer.style.display = 'block';
    }else {
        document.getElementById('app-screen').style.display = 'flex';
    }
}

// Go back to the home screen
function goBack() {
    // Show the home screen
    document.getElementById('home-screen').style.display = 'grid';

    // Hide the app screen
    document.getElementById('app').style.display = 'none'; // Ensure the contacts app is hidden
}

// Call displayContacts initially to show saved contacts if available



function unlockScreen() {
    const lockScreen = document.getElementById('lock-screen');

    // Add the sliding class to trigger the slide-up effect
    lockScreen.classList.add('slide-up');

    // After the transition ends, hide the lock screen and show the home screen
    lockScreen.addEventListener('transitionend', () => {
        lockScreen.style.display = 'none'; // Hide the lock screen
        document.getElementById('home-screen').style.display = 'grid'; // Show the home screen
    }, { once: true }); // Only run this once
}

function updateDateTime() {
    const timeElement = document.getElementById('time-display');
    const dateElement = document.getElementById('date-display');
    
    const now = new Date();
    
    // Format time as HH:MM in 24-hour format
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    timeElement.textContent = timeString;

    // Format date as Day Name, Month Name Day of Month
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    dateElement.textContent = dateString;
}
function updateDateTime2() {
    const timeElement = document.getElementById('time-display2');
     const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    timeElement.textContent = timeString;
}
// Call this function to initialize the date and time
updateDateTime();
updateDateTime2();
// Optional: If you want to update the time every minute
setInterval(updateDateTime, 60000); // Update every minute // Update every minute


// Test data for a new post
const testPost = {
    username: "test_user",  // Example username
    text: "This is a test message",  // Example post message
    imageUrl: "https://example.com/test-image.jpg"  // Example image URL
};

function showNotification(username, text, imageUrl) {
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');

    // Add title "Instagram"
    const title = document.createElement('div');
    title.classList.add('notification-title');
    title.textContent = 'Instagram';  // Add the title text
    notification.appendChild(title);

    // Add "username: text" format
    const postText = document.createElement('div');
    postText.classList.add('notification-text');
    postText.textContent = `${username}: ${text}`; // Format: username: text
    notification.appendChild(postText);

    // If image URL exists, display the image
    if (imageUrl) {
        const imageElem = document.createElement('img');
        imageElem.classList.add('notification-image');
        imageElem.src = imageUrl;
        notification.appendChild(imageElem);
    }

    // Append notification to the body
    document.body.appendChild(notification);

    // Hide the notification after 4 seconds
    setTimeout(() => {
        notification.classList.add('hide');
    }, 4000);
}

// Main script to handle wallpaper functionality

// Function to set wallpaper and save it to localStorage

// Function to save app order to localStorage
// Function to save app order to localStorage
function saveAppOrder() {
    const mainApps = document.querySelectorAll('.app-container .app');
    const trayApps = document.querySelectorAll('.app-tray .app');
    
    const mainAppOrder = [];
    mainApps.forEach(app => mainAppOrder.push(app.id));
    
    const trayAppOrder = [];
    trayApps.forEach(app => trayAppOrder.push(app.id));
    
    // Save both orders to localStorage
    localStorage.setItem('mainAppOrder', JSON.stringify(mainAppOrder));
    localStorage.setItem('trayAppOrder', JSON.stringify(trayAppOrder));
}

// Function to load app order from localStorage
function loadAppOrder() {
    const mainAppOrder = JSON.parse(localStorage.getItem('mainAppOrder'));
    const trayAppOrder = JSON.parse(localStorage.getItem('trayAppOrder'));
    
    const appContainer = document.querySelector('.app-container');
    const appTray = document.querySelector('.app-tray');
    
    if (mainAppOrder) {
        mainAppOrder.forEach(appId => {
            const app = document.getElementById(appId);
            if (app) appContainer.appendChild(app);
        });
    }
    
    if (trayAppOrder) {
        trayAppOrder.forEach(appId => {
            const app = document.getElementById(appId);
            if (app) appTray.appendChild(app);
        });
    }
}

// Drag and drop event functions
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    const dropTarget = event.target.closest('.app');
    const appTray = document.getElementById('app-tray');
    
    // Check if dropping into the app tray and if the tray already has 4 apps
    if (appTray.contains(dropTarget) && appTray.children.length >= 5) {
        
        return;
    }

    if (draggedElement && dropTarget && draggedElement !== dropTarget) {
        const container = dropTarget.closest('.app-container') || appTray;

        if (container) {
            if (dropTarget.nextSibling === draggedElement) {
                container.insertBefore(draggedElement, dropTarget);
            } else {
                container.insertBefore(draggedElement, dropTarget.nextSibling);
            }

            // Save the new order to localStorage if needed
            saveAppOrder();
        }
    }
}
// Add drag and drop listeners to all apps
document.querySelectorAll('.app').forEach(app => {
    app.setAttribute('draggable', 'true');
    app.addEventListener('dragstart', dragStart);
    app.addEventListener('dragover', dragOver);
    app.addEventListener('drop', drop);
});

// Load the app order when the page loads
window.addEventListener('DOMContentLoaded', loadAppOrder);