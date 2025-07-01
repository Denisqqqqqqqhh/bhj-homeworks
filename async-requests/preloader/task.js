        async function loadCurrencyRates() {
            try {
                const loader = document.getElementById('loader');
                loader.classList.add('loader_active');
                
                const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
                
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                
                const data = await response.json();
                renderCurrencyRates(data);
                
            } catch (error) {
                console.error('Произошла ошибка:', error);
            } finally {
                const loader = document.getElementById('loader');
                loader.classList.remove('loader_active');
            }
        }

        function renderCurrencyRates(data) {
            const itemsContainer = document.getElementById('items');
            itemsContainer.innerHTML = ''; // Очищаем контейнер
            
            const currencies = Object.values(data.response.Valute);
            
            currencies.forEach(currency => {
                const item = document.createElement('div');
                item.classList.add('item');
                
                const codeElement = document.createElement('div');
                codeElement.classList.add('item__code');
                codeElement.textContent = currency.CharCode;
                
                const valueElement = document.createElement('div');
                valueElement.classList.add('item__value');
                valueElement.textContent = currency.Value.toFixed(2);
                
                const currencyElement = document.createElement('div');
                currencyElement.classList.add('item__currency');
                currencyElement.textContent = 'руб.';
                
                item.appendChild(codeElement);
                item.appendChild(valueElement);
                item.appendChild(currencyElement);
                
                itemsContainer.appendChild(item);
            });
        }

        window.addEventListener('load', loadCurrencyRates);
