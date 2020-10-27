$(() => {
    var hasFlippedCard = false;
    var firstCard, secondCard;
    var lockBoard = false;
    
    function flipCard() {
        if(lockBoard) return;
        // if($(this) === firstCard) return;

        $(this).addClass('flip');
        if(!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = $(this);
            return;
        }
    
        secondCard = $(this);
        hasFlippedCard = false;
        checkForMatch();
    }
    
    function checkForMatch() {
        if(firstCard.attr('data-card') === secondCard.attr('data-card')) {
            disableCards();
            return;
        }
    
        unflipCards();
    }
    
    function disableCards() {
        firstCard.off('click', flipCard);
        secondCard.off('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.removeClass('flip');
            secondCard.removeClass('flip');

            resetBoard();
        },1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    //Invoked function
    // (function shufle() {
    //     $('.card').on((card) => {
    //         let randomPosition = Math.floor(Math.random() * 12);
    //         card.css('order', randomPosition);
    //     });
    // })();

    $('.card').on('click', flipCard);

});
