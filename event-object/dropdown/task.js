const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        if (event.target.classList.contains('dropdown__value')) {
            event.preventDefault();
            dropdown.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
        }
    });

    dropdown.addEventListener('click', (event) => {
        if (event.target.classList.contains('dropdown__link')) {
            event.preventDefault();
            const newValue = event.target.textContent;
            dropdown.querySelector('.dropdown__value').textContent = newValue;
            dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        }
    });
});
