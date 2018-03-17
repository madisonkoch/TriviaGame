'use strict'

//Variables
    const qa1 = ['What type of apple was developed at the U?','honeycrip','jazz','gala','granny smith'];
    const qa2 = ['How can you get from place to place without going outside?','teleportation','skyway system', 'tunnels', 'not possible' ];
    const qa3 = ['The U has the larget collection of which book series?', 'Aubrey Maturin', 'Tale of the City', 'The Chronicles of Narnia', 'Sherlock Holmes'];
    const qa4 = ['How many buildings make up the "Old Campus Historic District"?','7','21','13','17'];
    const qa5 = ['In the world, where does the U rank academically?','65th','52nd','47th','33rd'];
    const qa6 = ['Which U.S. vice president did not graduated from the U?', 'Walter Mondale','Henry A. Wallace','Herbert Humphrey','All of them did'];
    const qa7 = ['Which one of the below has not taken residency in the Armory over the years?','Marching Band', 'Football Team','Physical Education Dept.','ROTC'];

    let qaBank = [qa1, qa2, qa3, qa4, qa5, qa6, qa7];
    let currentQA = qaBank[Math.floor(Math.random() * qaBank.length)];

    let selectedAnswer = '';
    const correctAnswers = ['honeycrisp', 'tunnels','Sherlock Holmes','13','33rd','Walter Mondale','Football Team'];

    // Initial Window View
    const displayQA = function(){
        $('#question').text(currentQA[0]);
        $('#a1').text(currentQA[1]);
        $('#a2').text(currentQA[2]);
        $('#a3').text(currentQA[3]);
        $('#a4').text(currentQA[4]);
    }
    displayQA();
//Functions
    $('.answers').click(function(){
        selectedAnswer = $(this).text();
        console.log(selectedAnswer);
    })



