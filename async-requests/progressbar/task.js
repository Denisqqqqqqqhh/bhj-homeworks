        const progress = document.getElementById('progress');
        const form = document.getElementById('form');
        const sendButton = document.getElementById('send');
        const fileInput = document.getElementById('file');

        sendButton.addEventListener('click', async (event) => {
            event.preventDefault();

            if (!fileInput.files || !fileInput.files[0]) {
                alert('Пожалуйста, выберите файл для загрузки');
                return;
            }

            const formData = new FormData();
            formData.append('file', fileInput.files[0]);

            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

                xhr.upload.onprogress = (event) => {
                    if (event.lengthComputable) {
                        const percent = (event.loaded / event.total) * 100;
                        progress.value = percent;
                        progress.textContent = `${Math.round(percent)}%`;
                    }
                };

                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        alert('Файл успешно загружен!');
                        progress.value = 0;
                    } else {
                        alert('Произошла ошибка при загрузке файла');
                    }
                };

                xhr.onerror = () => {
                    alert('Произошла ошибка сети');
                };

                xhr.send(formData);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        });
