$(document).ready(function() { 

    let win = 0
    let losses = 0

    let roundTimer = 10


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
    ]







    // clicking start, removes start banner & shows the random question and answers -------
    $('#startButton').on('click', function() {

        $('#startBanner').hide();

        function gameCycle() {
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
                }
            })
        }
        gameCycle()
    });
});