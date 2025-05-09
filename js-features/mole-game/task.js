(() => {
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    let dead = 0;
    let lost = 0;

    const getHole = index => document.getElementById(`hole${index}`);

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', function() {
            if (this.classList.contains('hole_has-mole')) {
                dead++;
                deadCounter.textContent = dead;
                if (dead === 10) {
                    alert('Вы победили! Убито 10 кротов');
                    resetGame();
                }
            } else {
                lost++;
                lostCounter.textContent = lost;
                if (lost === 5) {
                    alert('Вы проиграли! Набрано 5 промахов');
                    resetGame();
                }
            }
        });
    }

    function resetGame() {
        dead = 0;
        lost = 0;
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
    }

    let playing = true,
        activeHole = 1;

    const stop = () => playing = false,
       deactivateHole = index =>
         getHole( index ).className = 'hole',
       activateHole = index =>
         getHole( index ).className = 'hole hole_has-mole',
       next = () => setTimeout(() => {
         if ( !playing ) {
           return;
         }
       deactivateHole( activeHole );
         activeHole = Math.floor( Math.random() );
         activateHole( activeHole );
         next();
       }, 800 );

    next();
})();
