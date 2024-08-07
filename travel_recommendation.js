async function fetchRecommendations() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const response = await fetch('travel_recommendation_api.json');
    const data = await response.json();
    const recommendations = data.recommendations[searchQuery];

    const recommendationsContainer = document.getElementById('recommendations');
    recommendationsContainer.innerHTML = '';

    if (recommendations) {
        recommendations.forEach(recommendation => {
            const recommendationElement = document.createElement('div');
            recommendationElement.classList.add('recommendation');
            recommendationElement.innerHTML = `
                <h2>${recommendation.name}</h2>
                <p>${recommendation.description}</p>
                <img src="${recommendation.image}" alt="${recommendation.name}">
            `;
            recommendationsContainer.appendChild(recommendationElement);
        });
    } else {
        recommendationsContainer.innerHTML = '<p>No recommendations found for your search.</p>';
    }
}
