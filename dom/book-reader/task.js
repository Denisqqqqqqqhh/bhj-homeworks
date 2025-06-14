const fontSizeButtons = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        fontSizeButtons.forEach(btn => btn.classList.remove('font-size_active'));
        
        button.classList.add('font-size_active');
        
        const size = button.dataset.size;
        
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});

const textColorButtons = document.querySelectorAll('.text_color');
const bgColorButtons = document.querySelectorAll('.bg_color');

textColorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        textColorButtons.forEach(btn => btn.classList.remove('color_active'));
        
          button.classList.add('color_active');
        
        const color = button.dataset.textColor;
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        book.classList.add(`book_color-${color}`);
    });
});

bgColorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        bgColorButtons.forEach(btn => btn.classList.remove('color_active'));
        
        button.classList.add('color_active');
        
        const color = button.dataset.bgColor;
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${color}`);
    });
});
