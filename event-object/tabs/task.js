const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach(tabsContainer => {
    const tabNavigation = tabsContainer.querySelector('.tab__navigation');
    const tabs = tabNavigation.querySelectorAll('.tab');
    const tabContents = tabsContainer.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('tab_active'));
            tabContents.forEach(content => content.classList.remove('tab__content_active'));

            tab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});
