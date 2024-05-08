const saveBtns = document.querySelectorAll('.card button');
const savedItemsContainer = document.getElementById('saved-items');

// Get any existing saved items from localStorage
const savedItems = localStorage.getItem('savedItems') ? JSON.parse(localStorage.getItem('savedItems')) : [];

function displaySavedItems() {
  savedItemsContainer.innerHTML = ''; // Clear container content
  if (savedItems.length === 0) {
    savedItemsContainer.innerHTML = '<p>No item has been saved</p>';
  } else {
    savedItems.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}">
        <p>${item.name}</p>
        <p class="price">$${item.price}</p>
        <button data-id="${item.id}">Remove</button>
      `;
      savedItemsContainer.appendChild(card);
    });
  }
}

// Display initial saved items (if any)
displaySavedItems();

saveBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.parentElement;
    const imageUrl = card.querySelector('img').src;
    const name = card.querySelector('p:nth-child(2)').textContent; // Select second child paragraph
    const price = card.querySelector('.price').textContent.slice(1); // Extract price without '$'
    const id = this.dataset.id; // Get data-id attribute

    const newItem = { imageUrl, name, price, id }; // Create a new item object

    savedItems.push(newItem); // Add the new item to the savedItems array
    localStorage.setItem('savedItems', JSON.stringify(savedItems)); // Update localStorage

    displaySavedItems(); // Update saved items display
  });
});

// **New addition for saved.html**
if (savedItems.length === 0) { // Check if there are no saved items
  savedItemsContainer.classList.add('hidden'); // Add a hidden class to the container
} else {
  savedItemsContainer.classList.remove('hidden'); // Remove hidden class if items exist
}
