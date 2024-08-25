
        const scour = {
            wins: 0,
            losse: 0,
            Tie: 0
        };
        updateScour();
        function playgame(plyarmove) {
            pikcomputerMove();
            if (plyarmove === 'scissors') {

                if (computerMove === 'Rock') {
                    result = 'you loos';
                } else if (computerMove === 'paper') {
                    result = 'you win';
                } else if (computerMove === 'scissors') {
                    result = 'Tie'
                }
            }
            else if (plyarmove === 'paper') {

                if (computerMove === 'Rock') {
                    result = 'you win';
                } else if (computerMove === 'paper') {
                    result = 'Tie';
                } else if (computerMove === 'scissors') {
                    result = 'you loos';
                }

            }
            else if (plyarmove === 'Rock') {

                if (computerMove === 'Rock') {
                    result = 'Tie';
                } else if (computerMove === 'paper') {
                    result = 'you loos';
                } else if (computerMove === 'scissors') {
                    result = 'you win';
                }
            }
            if (result === 'you win') {
                scour.wins += 1;
            } else if (result === 'you loos') {
                scour.losse += 1;
            } else if (result === 'Tie') {
                scour.Tie += 1;
            }
            updateScour();
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves')
                .innerHTML = `you choose <img src="images/${plyarmove}-emoji.png" alt="">
       computer choose <img src="images/${computerMove}-emoji.png" alt=""> `;
        }
        let result = '';
        let computerMove = '';
        function updateScour() {
            document.querySelector('.js-scour')
                .innerHTML = `wins:${scour.wins}, loos:${scour.losse}, Tie:${scour.Tie}`;

        }


        function pikcomputerMove() {
            const randomNumer = Math.random();
            if (randomNumer >= 0 && randomNumer <= 1 / 3) {
                computerMove = 'Rock';
            } else if (randomNumer > 1 / 3 && randomNumer <= 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumer < 1) {
                computerMove = 'scissors';
            }
            return;
        }