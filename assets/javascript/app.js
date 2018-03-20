'use strict'

//Variables
    const qa1 = ['What type of apple was developed at the U?','honeycrisp','jazz','gala','granny smith','honeycrisp'];
    const qa2 = ['How can you get from place to place without going outside?','teleportation','skyway system', 'tunnels', 'not possible','tunnels' ];
    const qa3 = ['The U has the larget collection of which book series?', 'Aubrey Maturin', 'Tale of the City', 'The Chronicles of Narnia', 'Sherlock Holmes','Sherlock Holmes'];
    const qa4 = ['How many buildings make up the "Old Campus Historic District"?','7','21','13','17','13'];
    const qa5 = ['In the world, where does the U rank academically?','65th','52nd','47th','33rd','33rd'];
    const qa6 = ['Which U.S. vice president did not graduated from the U?', 'Walter Mondale','Henry A. Wallace','Herbert Humphrey','All of them did','Walter Mondale'];

    let qaBank = [qa1, qa2, qa3, qa4, qa5, qa6];
    let currentQA = qaBank[Math.floor(Math.random() * qaBank.length)];
    const runningQABank = function remove(qaBank, currentQA){
        const index = qaBank.indexOf(currentQA);
        if (index !== -1){
            qaBank.splice(index,1);
        }
        return qaBank;
    }

    let winCount = 0;
    let lossCount = 0;

    const instructions = '<p>A question will appear above.</p><p>You will have 10 seconds to select the correct answer to that question.</p><p>Subsequent questions will start automatically.</p><div class = "pop" id="start">&#9886; Start Game &#9887;</div>';
    const incorrect = "<br><p>Oh darn! That wasn't the correct answer.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";
    const correct = "<br><p>Hurray!</p><p>You selected the correct answer!</p><p>Let's see how you do on the next one.</p>";
    const noTime = "<br><p>Oh darn! Looks like you ran out of time.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";
    let correctGameOver = "<br><p>Woot woot! That's another correct answer!</p><p>Your final score is:</p><p>Wins:  "+winCount+"        Losses:  "+lossCount+"</p>";
    let incorrectGameOver = "<br><p>Oh darn! The correct answer was "+ currentQA[5] +"</p><p>Your final score is:</p><p>Wins:  "+winCount+"        Losses:  "+lossCount+"</p>";
    let noTimeGameOver = "<br><p>Oh darn! You ran out of time, but the correct answer was "+ currentQA[5] +"</p><p>Your final score is:</p><p>Wins:  "+winCount+"        Losses:  "+lossCount+"</p>";

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
                    if (qaBank.length > 0){
                        $('#instructions').empty();
                        $('#instructions').append(noTime);
                        $('.pop').css("visibility","visible");
                        lossCount++;
                        nextQSetup();
                    }
                //Game Over
                    else if (qaBank.length===0) {
                        $('#instructions').empty();
                        $('#instructions').append(noTimeGameOver);
                        $('.pop').css("visibility","visible");
                        lossCount++;
                        console.log('W ', winCount, 'L  ', lossCount)    
                    }
            }, 10000);
        //Click
        $('.answers').click(function(){
            let selectedAnswer = $(this).text();
            //Question Remaining
                //Correct Answer
                    if (selectedAnswer===currentQA[5] && qaBank.length>0){
                        $('#instructions').empty();
                        $('#instructions').append(correct);
                        $('.pop').css("visibility","visible");
                        window.clearTimeout(timer);
                        winCount++;
                        nextQSetup();
                    }
                //Incorrect Answer
                    else if (selectedAnswer!==currentQA[5] && qaBank.length>0){
                        $('#instructions').empty();
                        $('#instructions').append(incorrect);
                        $('.pop').css("visibility","visible");
                        window.clearTimeout(timer);
                        lossCount++;
                        nextQSetup();
                    }
            //Game Over
                //Correct Answer
                    else if (selectedAnswer===currentQA[5] && qaBank.length===0){
                        $('#instructions').empty();
                        $('#instructions').append(correctGameOver);
                        $('.pop').css("visibility","visible");
                        window.clearTimeout(timer);
                        winCount++;
                        console.log('W ', winCount, 'L  ', lossCount)
                    }
                //Incorrect Answer
                    else if (selectedAnswer!==currentQA[5] && qaBank.length===0){
                        $('#instructions').empty();
                        $('#instructions').append(incorrectGameOver);
                        $('.pop').css("visibility","visible");
                        window.clearTimeout(timer);
                        lossCount++;
                        console.log('W ', winCount, 'L  ', lossCount)
                    }
        });
    }


    //Setup next Q
        const nextQSetup = function(){
            currentQA = qaBank[Math.floor(Math.random() * qaBank.length)];
            runningQABank(qaBank,currentQA);
            $('#question').text(currentQA[0]);
            $('#a1').text(currentQA[1]);
            $('#a2').text(currentQA[2]);
            $('#a3').text(currentQA[3]);
            $('#a4').text(currentQA[4]);
            console.log('W ', winCount, 'L  ', lossCount)
            console.log(runningQABank(qaBank, currentQA));
            console.log(currentQA[0]);
            //Timer between questions
            const timer2 = setTimeout(function(){
                $('.pop').css("visibility","hidden");
                qFunction();
            }, 5000)            
        }


// start on click
$('#start').click(function(){
    $('.pop').css("visibility","hidden");
    qFunction();
})

        