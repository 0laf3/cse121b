
  // JavaScript Code
  document.addEventListener('DOMContentLoaded', () => {
    const albumContainer = document.getElementById('album');

    // Fetch random photos from Unsplash API
    fetch('https://api.unsplash.com/photos/random?count=14&client_id=rAieM468A0eC5ZC7ON_gzBw8FOYaLvG9fJNp7vausOk')
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
