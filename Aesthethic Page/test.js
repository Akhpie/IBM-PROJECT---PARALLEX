const searchInput = document.querySelector('.search-input');
const searchResultsContainer = document.querySelector('.search-results');

searchInput.addEventListener('input', function() {
  const query = searchInput.value;
  if (query.trim() === '') {
    searchResultsContainer.style.display = 'none';
    searchResultsContainer.innerHTML = '';
  } else {
    fetch(`https://www.google.com/complete/search?q=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        const suggestions = data[1];
        let html = '';
        suggestions.forEach(suggestion => {
          html += `<div class="search-result-item">${suggestion}</div>`;
        });
        searchResultsContainer.innerHTML = html;
        searchResultsContainer.style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching search suggestions:', error);
      });
  }
});

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
  }
});

searchResultsContainer.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('search-result-item')) {
    const suggestion = target.textContent;
    searchInput.value = suggestion;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(suggestion)}`);
    searchResultsContainer.style.display = 'none';
    searchResultsContainer.innerHTML = '';
  }
});