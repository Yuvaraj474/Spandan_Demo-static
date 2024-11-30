function filterCategories() {
    // Get the search input
    const searchInput = document.getElementById('search').value.toLowerCase();

    // Get the category list items
    const categories = document.querySelectorAll('#category-list li');

    // Loop through the list items
    categories.forEach(function(category) {
        const categoryText = category.textContent.toLowerCase();

        if (categoryText.includes(searchInput)) {
            category.style.display = '';
        } else {
            category.style.display = 'none';
        }
    });
}
