function spotifyGoBack() {
    // Show the home screen
    document.getElementById('home-screen').style.display = 'grid';

    // Hide the app screen
    document.getElementById('spotify-app').style.display = 'none';
}


const apiKey = 'AIzaSyANnoLAQwA0e53sYDD9tkfFcox3x2q58d8'; // Replace with your actual API key
window.onload = function() {
  console.log('1')
    searchYouTube('trending song');
}
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-query').value;
    searchYouTube(query);
     console.log('2')
});

function searchYouTube(query) {
   
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${apiKey}`)
    
        .then(response => response.json())
        
        .then(data => {
          console.log('20')
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = ''; // Clear previous results

            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const channelName = item.snippet.channelTitle;
                const thumbnail = item.snippet.thumbnails.medium.url;

                const videoElement = document.createElement('div');
                videoElement.classList.add('video-item');
                videoElement.innerHTML = `
                    <img src="${thumbnail}" alt="${title}">
                    <div>
                        <p>${title}</p>
                        <p>${channelName}</p>
                    </div>
                `;
                videoElement.onclick = () => playVideo(thumbnail,videoId, title, channelName);

                resultsContainer.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Error fetching YouTube data:', error));
}

function playVideo(videoThumbnail, videoId, title, channelName) {
    const videoPlayerContainer = document.getElementById('video-player-container');
    videoPlayerContainer.style.display = 'block';

    const videoPlayer = document.getElementById('video-player');
    
    // Set the iframe to load the video at the lowest quality
    videoPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&vq=small" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

    updateVideoInfo(title, videoThumbnail);
}

function updateVideoInfo(title, thumbnailUrl) {
  const videoTitle = document.getElementById('player-title');
  const videoThumbnail = document.getElementById('player-thumbnail');

  videoTitle.textContent = title;
  videoThumbnail.src = thumbnailUrl;
}

// Example call to updateVideoInfo when a video is played
