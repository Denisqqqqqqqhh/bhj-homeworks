        async function fetchPoll() {
            try {
                const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
                
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных');
                }
                
                const data = await response.json();
                renderPoll(data);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        }

        function renderPoll(pollData) {
            const titleElement = document.getElementById('poll__title');
            const answersContainer = document.getElementById('poll__answers');
            
            answersContainer.innerHTML = '';
            
            titleElement.textContent = pollData.data.title;
            
            pollData.data.answers.forEach(answer => {
                const button = document.createElement('button');
                button.classList.add('poll__answer');
                button.textContent = answer;
                
                button.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!');
                });
                
                answersContainer.appendChild(button);
            });
        }

        window.addEventListener('load', fetchPoll);
