$(document).ready(function() { 

    let correct = 0
    let incorrect = 0

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




    $('#startButton').on('click', function() {
        $('#startBanner').hide();
        let randomQues = gameQuestions[Math.floor(Math.random() * gameQuestions.length)]
        console.log(randomQues)

        $('#questionSection').text("Question: " + randomQues.question)
        $('#choicesSection').append('<p class="choices">' + randomQues.choices[0] + '</p>')
        $('#choicesSection').append('<p class="choices">' + randomQues.choices[1] + '</p>')
        $('#choicesSection').append('<p class="choices">' + randomQues.choices[2] + '</p>')
        $('#choicesSection').append('<p class="choices">' + randomQues.choices[3] + '</p>')

    });


});