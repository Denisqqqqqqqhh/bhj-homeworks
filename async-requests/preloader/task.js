        // Функция для загрузки курсов валют
        async function loadCurrencyRates() {
            try {
                // Показываем анимацию загрузки
                const loader = document.getElementById('loader');
                loader.classList.add('loader_active');
                
                // Отправляем GET-запрос
                const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
                
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                
                const data = await response.json();
                renderCurrencyRates(data);
                
            } catch (error) {
                console.error('Произошла ошибка:', error);
            } finally {
                // Скрываем анимацию загрузки
                const loader = document.getElementById('loader');
                loader.classList.remove('loader_active');
            }
        }

        // Функция для отображения курсов валют
        function renderCurrencyRates(data) {
            const itemsContainer = document.getElementById('items');
            itemsContainer.innerHTML = ''; // Очищаем контейнер
            
            // Получаем все валюты из ответа
            const currencies = Object.values(data.response.Valute);
            
            // Создаем элементы для каждой валюты
            currencies.forEach(currency => {
                const item = document.createElement('div');
                item.classList.add('item');
                
                // Создаем элементы кода валюты
                const codeElement = document.createElement('div');
                codeElement.classList.add('item__code');
                codeElement.textContent = currency.CharCode;
                
                // Создаем элементы значения
                const valueElement = document.createElement('div');
                valueElement.classList.add('item__value');
                valueElement.textContent = currency.Value.toFixed(2);
                
                // Создаем элементы валюты
                const currencyElement = document.createElement('div');
                currencyElement.classList.add('item__currency');
                currencyElement.textContent = 'руб.';
                
                // Добавляем все элементы в контейнер
                item.appendChild(codeElement);
                item.appendChild(valueElement);
                item.appendChild(currencyElement);
                
                itemsContainer.appendChild(item);
            });
        }

        // Запускаем загрузку при загрузке страницы
        window.addEventListener('load', loadCurrencyRates);
