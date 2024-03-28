// script.js
document.addEventListener('DOMContentLoaded', () => {
    const albumContainer = document.getElementById('album');
  
    // Fetch random photos from Unsplash API
    fetch('https://api.unsplash.com/photos/random?count=10&client_id=YOUR_ACCESS_KEY')
      .then(response => response.json())
      .then(data => {
        // Display photos in the album
        data.forEach(photo => {
          const photoElement = `
            <div class="photo">
              <img src="${photo.urls.regular}" alt="${photo.alt_description}">
              <div class="photo-info">${photo.user.name}</div>
            </div>
          `;
          albumContainer.innerHTML += photoElement;
        });
      })
      .catch(error => console.error('Error fetching photos:', error));
  });
  