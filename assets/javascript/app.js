'use strict'

//Variables
    const qa1 = ['What type of apple was developed at the U?','honeycrisp','jazz','gala','granny smith','honeycrisp'];
    const qa2 = ['How can you get from place to place without going outside?','teleportation','skyway system', 'tunnels', 'not possible','tunnels' ];
    const qa3 = ['The U has the larget collection of which book series?', 'Aubrey Maturin', 'Tale of the City', 'The Chronicles of Narnia', 'Sherlock Holmes','Sherlock Holmes'];
    const qa4 = ['How many buildings make up the "Old Campus Historic District"?','7','21','13','17','13'];
    const qa5 = ['In the world, where does the U rank academically?','65th','52nd','47th','33rd','33rd'];
    const qa6 = ['Which U.S. vice president graduated from the U?', 'Walter Mondale','Henry A. Wallace','Herbert Humphrey','All of them did','Walter Mondale'];


    let qaBank = [qa1, qa2, qa3, qa4, qa5, qa6];
    let currentQA = qaBank[Math.floor(Math.random() * qaBank.length)];
    const runningQABank = function remove(qaBank, currentQA){
        const index = qaBank.indexOf(currentQA);
        console.log('index',index);
        if (index !== -1){
            qaBank.splice(index,1);
        }
    }

    let winCount = 0;
    let lossCount = 0;

    let instructions = '<p>A question will appear above.</p><p>You will have 10 seconds to select the correct answer to that question.</p><p>Subsequent questions will start automatically.</p><div class = "pop" id="start">&#9886; Start Game &#9887;</div>';
    let incorrect = "<br><p>Oh darn! That wasn't the correct answer.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";
    let correct = "<br><p>Hurray!</p><p>You selected the correct answer!</p><p>Let's see how you do on the next one.</p>";
    let noTime = "<br><p>Oh darn! Looks like you ran out of time.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";
    let correctGameOver = '<br><p>Woot woot! Another correct answer!</p><p>Your final score is:'+winCount+'  Wins & '+lossCount+'  Losses</p><div class = "pop" id="start">&#9886; Restart Game &#9887;</div>';
    let incorrectGameOver = '<br><p>Oh darn! The correct answer was '+ currentQA[5] +'</p><p>Your final score is:'+winCount+'  Wins & '+lossCount+'  Losses</p><div class = "pop" id="start">&#9886; Restart Game &#9887;</div>';
    let noTimeGameOver = '<br><p>Oh darn! You ran out of time, but the correct answer was '+ currentQA[5] +'</p><p>Your final score is:'+winCount+'  Wins & '+lossCount+'  Losses</p><div class = "pop" id="start">&#9886; Restart Game &#9887;</div>';

    var timer2;

    const popupWords = function(){
        instructions = '<p>A question will appear above.</p><p>You will have 10 seconds to select the correct answer to that question.</p><p>Subsequent questions will start automatically.</p><div class = "pop" id="start">&#9886; Start Game &#9887;</div>';
        incorrect = "<br><p>Oh darn! That wasn't the correct answer.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";
        correct = "<br><p>Hurray!</p><p>You selected the correct answer!</p><p>Let's see how you do on the next one.</p>";
        noTime = "<br><p>Oh darn! Looks like you ran out of time.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";
        correctGameOver = '<br><p>Woot woot! Another correct answer!</p><p>Your final score is:'+winCount+'  Wins & '+lossCount+'  Losses</p><div class = "pop" id="start">&#9886; Restart Game &#9887;</div>';
        incorrectGameOver = '<br><p>Oh darn! The correct answer was '+ currentQA[5] +'</p><p>Your final score is:'+winCount+'  Wins & '+lossCount+'  Losses</p><div class = "pop" id="start">&#9886; Restart Game &#9887;</div>';
        noTimeGameOver = '<br><p>Oh darn! You ran out of time, but the correct answer was '+ currentQA[5] +'</p><p>Your final score is:'+winCount+'  Wins & '+lossCount+'  Losses</p><div class = "pop" id="start">&#9886; Restart Game &#9887;</div>';
        }

// Initial State/View
    $('#instructions').append(instructions);
    $('#question').text(currentQA[0]);
    $('#a1').text(currentQA[1]);
    $('#a2').text(currentQA[2]);
    $('#a3').text(currentQA[3]);
    $('#a4').text(currentQA[4]);
    console.log('W ', winCount, 'L  ', lossCount)
    console.log(runningQABank(qaBank, currentQA));
    console.log(currentQA[0]);

//Functions
    //Q function call to start
    const qFunction = function(){
        //Timer for questions
            let timer = setTimeout(function(){
                //Questions Remaining -- when i click and clear timer does the function get performed?
                    if (qaBank.length > 1){
                        $('#instructions').empty();
                        popupWords();
                        $('#instructions').append(noTime);
                        $('.pop').css("visibility","visible");
                        lossCount++;
                        nextQSetup();
                        nextQTimer();
                    }
                //Game Over
                    else if (qaBank.length===1) {
                        $('#instructions').empty();
                        popupWords();
                        $('#instructions').append(noTimeGameOver);
                        $('.pop').css("visibility","visible");
                        lossCount++;
                        $('#winLoss').text(`Wins:  ${winCount}   Losses:  ${lossCount}`);
                        console.log('W ', winCount, 'L  ', lossCount)    
                    }
            }, 10000);
        //Click
        $('.answers').click(function(){
            let selectedAnswer = $(this).text();
            //Question Remaining
                //Correct Answer
                    if (selectedAnswer===currentQA[5] && qaBank.length>1){
                        $('#instructions').empty();
                        popupWords();
                        $('#instructions').append(correct);
                        $('.pop').css("visibility","visible");
                        clearTimeout(timer);
                        winCount++;
                        nextQSetup();
                        nextQTimer();
                    }
                //Incorrect Answer
                    else if (selectedAnswer!==currentQA[5] && qaBank.length>1){
                        $('#instructions').empty();
                        popupWords();
                        $('#instructions').append(incorrect);
                        $('.pop').css("visibility","visible");
                        clearTimeout(timer);
                        lossCount++;
                        nextQSetup();
                        nextQTimer();
                    }
            //Game Over
                //Correct Answer
                    else if (selectedAnswer===currentQA[5] && qaBank.length===1){
                        $('#instructions').empty();
                        popupWords();
                        $('#instructions').append(correctGameOver);
                        $('.pop').css("visibility","visible");
                        clearTimeout(timer);
                        winCount++;
                        $('#winLoss').text(`Wins:  ${winCount}   Losses:  ${lossCount}`);
                        console.log('W ', winCount, 'L  ', lossCount)
                    }
                //Incorrect Answer
                    else if (selectedAnswer!==currentQA[5] && qaBank.length===1){
                        $('#instructions').empty();
                        popupWords();
                        $('#instructions').append(incorrectGameOver);
                        $('.pop').css("visibility","visible");
                        clearTimeout(timer);
                        lossCount++;
                        $('#winLoss').text(`Wins:  ${winCount}   Losses:  ${lossCount}`);
                        console.log('W ', winCount, 'L  ', lossCount)
                    }
        });
    }


    //Setup next Q
        const nextQSetup = function(){
            runningQABank(qaBank,currentQA);
            currentQA = qaBank[Math.floor(Math.random() * qaBank.length)];
            console.log(currentQA[0]);
            $('#question').text(currentQA[0]);
            $('#a1').text(currentQA[1]);
            $('#a2').text(currentQA[2]);
            $('#a3').text(currentQA[3]);
            $('#a4').text(currentQA[4]);
            console.log('W ', winCount, 'L  ', lossCount)
        }

    //Timer2
        const nextQTimer = function(){
            timer2 = setTimeout(function(){
                $('.pop').css("visibility","hidden");
            }, 5000)   
        }

    //Resart Game?
        
// start on click
$('#start').click(function(){
    $('.pop').css("visibility","hidden");
    qFunction();
})

        