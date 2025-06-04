// Variable to hold the chosen device image URL

function settingsGoBack(curscreen) {
    // Show the home screen
    if (curscreen=== 'settings') {
    document.getElementById('home-screen').style.display = 'grid';
    // Hide the app screen
    document.getElementById('settings-app').style.display = 'none';
    
    
   
    } else if(curscreen=== 'appearance'){
     document.getElementById('settings-screen').style.display = 'block';
    // Hide the app screen
    document.getElementById('appearance-container').style.display = 'none'; 
    
    }
 }

let deviceImageUrl = null;

// Function to filter settings options based on the search input
function filterSettings() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const options = document.querySelectorAll('.setting-option');

    options.forEach(option => {
        const optionText = option.textContent.toLowerCase();
        if (optionText.includes(searchTerm)) {
            option.style.display = 'flex';  // Show option
        } else {
            option.style.display = 'none';  // Hide option
        }
    });
}

// Function to open a specific settings option container
function openOption(option) {
    const settingsScreen = document.getElementById('settings-screen');
    const container = document.getElementById(option + '-container');

    if (container) {
        settingsScreen.style.display = 'none';  // Hide the main settings screen
        container.style.display = 'block';  // Show the selected container
    } else {
        console.error("Container not found for option:", option);
    }
}

// Function to toggle between dark and light theme
function toggleTheme(theme) {
    console.log('theme chnaged')
}

// Function to update the cover color when the color picker is used
function updateCoverColor() {
    let color = document.getElementById('cover-color-picker').value;
    document.getElementById('screen').style= `box-shadow: 0 0 0 3px ${color};`
    localStorage.setItem('phonecover',color);
}

// Function to set wallpaper based on URL or device image
function setWallpaper() {
    const wallpaperURL = document.getElementById('wallpaper-url').value;

    if (wallpaperURL && deviceImageUrl) {
        alert('Please choose only one option: either upload an image from your device or enter a URL, not both.');
    } else if (wallpaperURL) {
        // Set wallpaper from URL
        localStorage.setItem('wallpaper', wallpaperURL);
        document.getElementById('wallpaper-preview').src = wallpaperURL;
        document.getElementById('wallpaper-preview').style.display = 'block';
        updateWallpaperOnHomeScreen(wallpaperURL);
    } else if (deviceImageUrl) {
        // Set wallpaper from device image
        localStorage.setItem('wallpaper', deviceImageUrl);
        document.getElementById('wallpaper-preview').src = deviceImageUrl;
        document.getElementById('wallpaper-preview').style.display = 'block';
        updateWallpaperOnHomeScreen(deviceImageUrl);
    } else if (!wallpaperURL && !deviceImageUrl){
        alert('Please provide a URL or choose an image from your device.');
    }
}

// Function to handle image selection from the device
function chooseWallpaper() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                deviceImageUrl = e.target.result;  // Save the device image URL
                document.getElementById('wallpaper-preview').src = deviceImageUrl;
                document.getElementById('wallpaper-preview').style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Function to update the wallpaper on the home screen with the chosen wallpaper
function updateWallpaperOnHomeScreen(wallpaperURL) {
    const homeScreenWallpaper = document.querySelector('.wallpaper');
    if (homeScreenWallpaper) {
        homeScreenWallpaper.style.backgroundImage = `url(${wallpaperURL})`;
    }
}

// Function to load the saved wallpaper when the page loads
window.onload = function() {
  console.log('loaded')
    const savedWallpaper = localStorage.getItem('wallpaper');
    const savedPhoneCover = localStorage.getItem('phonecover');
    if (savedWallpaper) {
        document.getElementById('wallpaper-preview').src = savedWallpaper;
        
        document.getElementById('wallpaper-preview').style.display = 'block';
        updateWallpaperOnHomeScreen(savedWallpaper);
        
    }
    if(savedPhoneCover){
      document.getElementById('screen').style=`box-shadow: 0 0 0 3px ${savedPhoneCover};`
    document.getElementById('cover-color-picker').value =savedPhoneCover;
      
    }
    
};