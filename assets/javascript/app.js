'use strict'

//Variables
    const qa1 = ['What type of apple was developed at the U?','honeycrisp','jazz','gala','granny smith','honeycrisp'];
    const qa2 = ['How can you get from place to place without going outside?','teleportation','skyway system', 'tunnels', 'not possible','tunnels' ];
    const qa3 = ['The U has the larget collection of which book series?', 'Aubrey Maturin', 'Tale of the City', 'The Chronicles of Narnia', 'Sherlock Holmes','Sherlock Holmes'];
    const qa4 = ['How many buildings make up the "Old Campus Historic District"?','7','21','13','17','13'];
    const qa5 = ['In the world, where does the U rank academically?','65th','52nd','47th','33rd','33rd'];
    const qa6 = ['Which U.S. vice president did not graduated from the U?', 'Walter Mondale','Henry A. Wallace','Herbert Humphrey','All of them did','Walter Mondale'];

    let qaBank = [qa1, qa2, qa3, qa4, qa5, qa6];
    const currentQA = qaBank[Math.floor(Math.random() * qaBank.length)];
    let usedQA = [];
    const runningQABank = function remove(qaBank, currentQA){
        const index = qaBank.indexOf(currentQA);
        if (index !== -1){
            qaBank.splice(index,1);
        }
        return qaBank;
    }

    const instructions = '<p>A question will appear above.</p><p>You will have 10 seconds to select the correct answer to that question.</p><p>Subsequent questions will start automatically.</p><div class = "pop" id="start">&#9886; Start Game &#9887;</div>';
    const incorrect = "<br><p>Oh darn! That wasn't the correct answer.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";
    const correct = "<br><p>Hurray!</p><p>You selected the correct answer!</p><p>Let's see how you do on the next one.</p>";
    const noTime = "<br><p>Oh darn! Looks like you ran out of time.</p><p>Correct Answer :  "+ currentQA[5] +"</p><p>Better luck on the next question.</p>";

    let winCount = 0;
    let lossCount = 0;

// Initial State/View
    $('#instructions').append(instructions);
    $('#question').text(currentQA[0]);
    $('#a1').text(currentQA[1]);
    $('#a2').text(currentQA[2]);
    $('#a3').text(currentQA[3]);
    $('#a4').text(currentQA[4]);
    qaBank = runningQABank(qaBank,currentQA);
    console.log('W ', winCount, 'L  ', lossCount)

//Functions
    const nextQ = function(){

        
        const timer2 = setTimeout(function(){

        })
    }
//Game
    $('#start').click(function(){
        //Timer
        $('.pop').css("visibility","hidden");
        const timer = setTimeout(function(){
            $('#instructions').empty();
            $('#instructions').append(noTime);
            $('.pop').css("visibility","visible");
            lossCount++;
            console.log('W ', winCount, 'L  ', lossCount)
        }, 10000);
        //Click
        $('.answers').click(function(){
            let selectedAnswer = $(this).text();
            if (selectedAnswer===currentQA[5]){
                $('#instructions').empty();
                $('#instructions').append(correct);
                $('.pop').css("visibility","visible");
                clearTimeout(timer);
                winCount++;
                console.log('W ', winCount, 'L  ', lossCount)
            }
            else if (selectedAnswer!==currentQA[5]){
                $('#instructions').empty();
                $('#instructions').append(incorrect);
                $('.pop').css("visibility","visible");
                clearTimeout(timer);
                lossCount++;
                console.log('W ', winCount, 'L  ', lossCount)
            }
        });
    })   

