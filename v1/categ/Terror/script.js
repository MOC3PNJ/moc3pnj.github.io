 document.addEventListener('DOMContentLoaded', () => {
     const movieGrid = document.getElementById('movieGrid');
     const searchInput = document.getElementById('searchInput');
     let allMovies = [];
 

     fetch('https://moc3pnj.github.io/BD/data.js')
         .then(response => response.text())
         .then(data => {
             // Extract the JSON object from the JavaScript file
             const startIndex = data.indexOf('{');
             const endIndex = data.lastIndexOf('}');
             const jsonString = data.substring(startIndex, endIndex + 1);
             allMovies = JSON.parse(jsonString).movies;
             displayMovies(allMovies.filter(movie =>
                 movie.category.some(cat => cat.toLowerCase() === 'terror' || cat.toLowerCase() === 'horror')
             ));
         })
         .catch(error => console.error('Error fetching data:', error));
 

     function displayMovies(movies) {
         movieGrid.innerHTML = '';
         movies.forEach(movie => {
             const movieCard = document.createElement('div');
             movieCard.classList.add('movie-card');
 

             const ratingSpan = document.createElement('span');
             ratingSpan.classList.add('rating');
             ratingSpan.textContent = movie.rating;
 

             const img = document.createElement('img');
             img.src = movie.poster;
             img.alt = movie.title;
 

             const movieInfo = document.createElement('div');
             movieInfo.classList.add('movie-info');
             const title = document.createElement('h3');
             title.textContent = movie.title;
             movieInfo.appendChild(title);
 

             movieCard.appendChild(ratingSpan);
             movieCard.appendChild(img);
             movieCard.appendChild(movieInfo);
             movieGrid.appendChild(movieCard);
         });
     }
 

     searchInput.addEventListener('input', (e) => {
         const searchTerm = e.target.value.toLowerCase();
         const filteredMovies = allMovies.filter(movie =>
             (movie.title.toLowerCase().includes(searchTerm) ||
              movie.description.toLowerCase().includes(searchTerm)) &&
             movie.category.some(cat => cat.toLowerCase() === 'terror' || cat.toLowerCase() === 'horror')
         );
         displayMovies(filteredMovies);
     });
 });
