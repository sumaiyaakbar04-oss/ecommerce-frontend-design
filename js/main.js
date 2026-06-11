
const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  }
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

const allCategory = document.querySelector('.all-category');
allCategory.addEventListener('click', () => {
  alert('Category menu coming in Week 2!');
});

const cart = document.querySelector('.icon-item.cart');
cart.addEventListener('click', () => {
  alert('Cart is empty!');
});
