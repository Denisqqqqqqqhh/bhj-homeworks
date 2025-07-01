const tooltipElements = document.querySelectorAll('.has-tooltip');

function showTooltip(event) {
    const title = event.target.getAttribute('title');
    
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    
    tooltip.textContent = title;
    
    document.body.appendChild(tooltip);
    
    const rect = event.target.getBoundingClientRect();
    
    const left = rect.left + rect.width + 10;
    const top = rect.top - 10; 
    
    Object.assign(tooltip.style, {
        left: `${left}px`,
        top: `${top}px`
    });
    
    tooltip.classList.add('tooltip_active');
    
    setTimeout(() => {
        tooltip.remove();
    }, 2000);
}

tooltipElements.forEach(element => {
    element.addEventListener('click', showTooltip);
});
