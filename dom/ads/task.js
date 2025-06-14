        const rotators = document.querySelectorAll('.rotator');

        function initRotator(rotator) {
            const cases = rotator.querySelectorAll('.rotator__case');
            let currentIndex = 0;
            let intervalId;

            cases.forEach(caseElement => {
                const color = caseElement.dataset.color;
                caseElement.style.color = color;
            });

            function changeSlide() {
                cases[currentIndex].classList.remove('rotator__case_active');
                currentIndex = (currentIndex + 1) % cases.length;
                cases[currentIndex].classList.add('rotator__case_active');
            }

            function startRotator() {
                const speed = parseInt(cases[currentIndex].dataset.speed);
                intervalId = setInterval(changeSlide, speed);
            }

            function stopRotator() {
                clearInterval(intervalId);
            }

            startRotator();
        }

        rotators.forEach(rotator => initRotator(rotator));
