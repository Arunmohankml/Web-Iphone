// Instagram Go Back Function
function InstagramGoBack() {
    // Show the home screen
    document.getElementById('home-screen').style.display = 'grid';

    // Hide the app screen
    document.getElementById('instagram-app').style.display = 'none';
}

// Function to handle login and store credentials
document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;

    // Store username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Hide the login page and show the feed page
    document.getElementById("instagram-login").style.display = "none";
    document.getElementById("instagram-feed").style.display = "flex";
    
    // Clear post input (optional)
    document.getElementById("post-input").value = '';
});

// Function to log the user out
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    
    // Show the login page and hide the feed page
    document.getElementById("instagram-login").style.display = "flex";
    document.getElementById("instagram-feed").style.display = "none";
}

// Function to handle file upload for post image
document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        
        // Upload to Cloudinary
        fetch(`https://api.cloudinary.com/v1_1/dhnosj6qj/image/upload?upload_preset=Webphone`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Get the image URL after successful upload
            const imageUrl = data.secure_url;

            // Store the image URL immediately in localStorage
            localStorage.setItem('uploaded-image-url', imageUrl);
            document.getElementById('uploaded-image-url').value = imageUrl; // Store in the hidden input
        })
        .catch(error => console.error('Error uploading image:', error));
    }
});

// Function to handle post button functionality
document.getElementById("post-button").addEventListener("click", function() {
    const input = document.getElementById("post-input");
    const text = input.value;
    let imageUrl = localStorage.getItem('uploaded-image-url'); // Retrieve the image URL from localStorage

    const username = localStorage.getItem('username'); // Get the username from localStorage

    // Check if the image URL exists before posting
    if (imageUrl || text) {
        const postsContainer = document.querySelector(".posts");

        // Create a new post element
        const post = document.createElement("div");
        post.classList.add("postbox");

        // Add username and text to the post
        let postContent = `<div class="username">${username}</div>`;

        if (text) {
            postContent += `<div class="text">${text}</div>`;
        }

        // Handle the image if there is one
        if (imageUrl) {
            postContent += `<img src="${imageUrl}" alt="Attached Image" class="post-image" />`;
        }

        // Add like button
        postContent += `<div class="like-icon" onclick="toggleLike(this)"></div>`;

        post.innerHTML = postContent;

        // Insert the new post at the beginning
        postsContainer.insertBefore(post, postsContainer.firstChild);


      showNotification(username, text, imageUrl);

        // Save the post in localStorage
        savePosts();

        // Clear the input fields
        input.value = '';
        document.getElementById('uploaded-image-url').value = ''; // Clear the stored image URL
        localStorage.removeItem('uploaded-image-url'); // Clear the image URL from localStorage after posting

        // Scroll to the top to see the latest post
        postsContainer.scrollTop = 0;
    } else {
        // If there's no image or text, notify user
        alert("Please add an image or some text to post.");
    }
});

// Function to save posts in localStorage
function savePosts() {
    const postsContainer = document.querySelector(".posts");
    const posts = Array.from(postsContainer.children); // Get all the current posts
    const postsData = posts.map(post => {
        const username = post.querySelector('.username').innerText;
        const text = post.querySelector('.text') ? post.querySelector('.text').innerText : '';
        const image = post.querySelector('.post-image') ? post.querySelector('.post-image').src : null;
        const isLiked = post.querySelector('.like-icon').classList.contains('liked'); // Get like status

        return { username, text, image, isLiked }; // Include isLiked flag
    });

    localStorage.setItem('posts', JSON.stringify(postsData)); // Save posts data in localStorage
}

// Function to load posts from localStorage
function loadPosts() {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
        const postsData = JSON.parse(savedPosts);
        const postsContainer = document.querySelector(".posts");

        // Loop through saved posts and render them
        postsData.forEach(postData => {
            const post = document.createElement("div");
            post.classList.add("postbox");

            let postContent = `<div class="username">${postData.username}</div>`;
            
            if (postData.text) {
                postContent += `<div class="text">${postData.text}</div>`;
            }

            if (postData.image) {
                postContent += `<img src="${postData.image}" alt="Attached Image" class="post-image" />`;
            }
            
            postContent += `<div class="like-icon ${postData.isLiked ? 'liked' : ''}" onclick="toggleLike(this)"></div>`;

            post.innerHTML = postContent;
            postsContainer.appendChild(post);
        });
    }
}

// Load posts and check if user is logged in when the page loads
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // If username exists in localStorage, show the Instagram feed
    if (savedUsername && savedPassword) {
        document.getElementById("instagram-login").style.display = "none";
        document.getElementById("instagram-feed").style.display = "flex";
    } else {
        // If no login data, show login screen
        document.getElementById("instagram-login").style.display = "flex";
        document.getElementById("instagram-feed").style.display = "none";
    }

    // Load posts from localStorage
    loadPosts();
};

// Handle the like button functionality
function toggleLike(icon) {
    icon.classList.toggle('liked'); // Toggle the liked status

    // Save the updated posts data with the new like status
    savePosts();
}