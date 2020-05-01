$(document).ready(function() { 

    let win = 0
    let losses = 0

    let gameTimer = 10


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
        let randomQues = gameQuestions[Math.floor(Math.random() * gameQuestions.length)]

        // randomly chosen question with 4 choices
        $('#questionSection').text("Question: " + randomQues.question)
        $('#choicesSection').append('<p class="choice1">' + randomQues.choices[0] + '</p>')
        $('#choicesSection').append('<p class="choice2">' + randomQues.choices[1] + '</p>')
        $('#choicesSection').append('<p class="choice3">' + randomQues.choices[2] + '</p>')
        $('#choicesSection').append('<p class="choice4">' + randomQues.choices[3] + '</p>')



        // if user clicks the correct choice they win 1 point
        $('.choice1').on('click', function() {
            if (randomQues.choices[0] === randomQues.answer) {
                win++
                $('#wins').html('Wins: ' + win)
            } else if (randomQues.choices[0] !== randomQues.answer) {
                losses++
                $('#losses').html('Losses: ' + losses)
            }
        })

        $('.choice2').on('click', function() {
            if (randomQues.choices[1] === randomQues.answer) {
                win++
                $('#wins').html('Wins: ' + win)
            } else if (randomQues.choices[1] !== randomQues.answer) {
                losses++
                $('#losses').html('Losses: ' + losses)
            }
        })

        $('.choice3').on('click', function() {
            if (randomQues.choices[2] === randomQues.answer) {
                win++
                $('#wins').html('Wins: ' + win)
            }
        })

        $('.choice4').on('click', function() {
            if (randomQues.choices[3] === randomQues.answer) {
                win++
                $('#wins').html('Wins: ' + win)
            }
        })

    });

});