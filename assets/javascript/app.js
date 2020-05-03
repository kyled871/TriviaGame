$(document).ready(function() { 

    let win = 0
    let losses = 0


    const gameQuestions = [
        {
            question: "What does Hank sell for a living?",
            choices: ['propane and propane accessories', 'beer', 'pest control products', 'cars'],
            answer: 'propane and propane accessories',
        },

        {
            question: "What is the name of Hank's son?",
            choices: ['Billy', 'Bobby', 'Chuck', 'Buckley'],
            answer: 'Bobby',
        },

        {
            question: "Kahn is Hank's neighbor. What is the name of his daughter?",
            choices: ['Kahn Souphanousinphone Jr', 'Dale', 'Connie', 'Lou Anne'],
            answer: 'Kahn Souphanousinphone Jr',
        },

        {
            question: "What is name of the Hill's family dog?",
            choices: ['Ladyblue', 'Birdy', 'Ladybird', 'Bluebird'],
            answer: 'Ladybird',
        },
        
        {
            question: "What brand of beer do the guys like to drink?",
            choices: ['budlight', 'heineken', 'propane jane', 'alamo'],
            answer: 'alamo',
        },

        {
            question: "What state does the show mainly take place?",
            choices: ['florida', 'arlington', 'texas', 'oklahoma'],
            answer: 'texas',
        },

        {
            question: "What is Dale's pest control company's name?",
            choices: ['Spray Ya Later', 'Dales Dead Bug', 'mr. kill', 'dales pest control'],
            answer: 'Dales Dead Bug',
        },

        {
            question: "Peggy is a champion at which word game?",
            choices: ['Scrabble', 'Boggle', 'Crossword Puzzles', 'Alphabear'],
            answer: 'Kahn Souphanousinphone Jr',
        },
    ]




    // clicking start, removes start banner & shows the random question and answers -------
    $('#startButton').on('click', function() {

        $('#startBanner').hide();



        function gameCycle() {
            timeLeft = 10
            $('#timeLeft').html('Time Left: ' + timeLeft)

            let countDown = setInterval(function() {
                if(timeLeft <= 0) {
                    losses++
                    $('#losses').html('Losses: ' + losses)
                    $('#timeLeft').html("Time's Up! Answer was: " + randomQues.answer + ".")
                    clearInterval(countDown)
                    setTimeout (function() {
                        $('#questionSection').html('')
                        $('.choice1').html('')
                        $('.choice2').html('')
                        $('.choice3').html('')
                        $('.choice4').html('')
                        gameCycle()
                        clearInterval(countDown)
                    }, 5000)
                } else {
                    $('#timeLeft').html('Time Left: ' + timeLeft)
                }
                timeLeft -= 1;
            }, 1000);


            let randomQues = gameQuestions[Math.floor(Math.random() * gameQuestions.length)]
            // randomly chosen question with 4 choices
            $('#questionSection').text("Question: " + randomQues.question)
            $('#choicesSection').append('<p class="choice1">' + randomQues.choices[0] + '</p>')
            $('#choicesSection').append('<p class="choice2">' + randomQues.choices[1] + '</p>')
            $('#choicesSection').append('<p class="choice3">' + randomQues.choices[2] + '</p>')
            $('#choicesSection').append('<p class="choice4">' + randomQues.choices[3] + '</p>')

    
            $('.choice1').on('click', function() {
                if (randomQues.choices[0] === randomQues.answer) {
                    win++
                    $('#wins').html('Wins: ' + win)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
    
                } else if (randomQues.choices[0] !== randomQues.answer) {
                    losses++
                    $('#losses').html('Losses: ' + losses)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
                }
            })

            $('.choice2').on('click', function() {
                if (randomQues.choices[1] === randomQues.answer) {
                    win++
                    $('#wins').html('Wins: ' + win)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
    
                } else if (randomQues.choices[1] !== randomQues.answer) {
                    losses++
                    $('#losses').html('Losses: ' + losses)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
                }
            })

            $('.choice3').on('click', function() {
                if (randomQues.choices[2] === randomQues.answer) {
                    win++
                    $('#wins').html('Wins: ' + win)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
    
                } else if (randomQues.choices[2] !== randomQues.answer) {
                    losses++
                    $('#losses').html('Losses: ' + losses)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
                }
            })

            $('.choice4').on('click', function() {
                if (randomQues.choices[3] === randomQues.answer) {
                    win++
                    $('#wins').html('Wins: ' + win)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
    
                } else if (randomQues.choices[3] !== randomQues.answer) {
                    losses++
                    $('#losses').html('Losses: ' + losses)
    
                    // resets board
                    $('#questionSection').html('')
                    $('.choice1').html('')
                    $('.choice2').html('')
                    $('.choice3').html('')
                    $('.choice4').html('')
                    gameCycle()
                    clearInterval(countDown)
                }
            })
        }
        gameCycle()
    });
});