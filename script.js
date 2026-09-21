// Toggle Mobile Navigation
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Menu Category Filtering
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.tab-btn');

    // Filter Items
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Toggle Active Tab Style
    buttons.forEach(btn => {
        btn.classList.remove('bg-red-800', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-800');
    });

    event.currentTarget.classList.remove('bg-gray-200', 'text-gray-800');
    event.currentTarget.classList.add('bg-red-800', 'text-white');
}
