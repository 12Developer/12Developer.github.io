console.log('linked');

$(() => {

  const $div = $('<div>').attr('id', 'board');
  // declared a div tag  with an id of board

  const $div1 = $('<div>').attr('id', 'circle');
  // declared a div tag with an id of circle

  const $h1 = $('<h1>').attr('id', 'title').text('Simon Says');
  // declared a h1 tag with an id of title

  const $p = $('<p>').text('Click the Circle to Start Game');
  // delcared a p tag

  const $h2 = $('<h2>').attr('id', 'level').text('Level: 0');
  // declared a h2 tag with an id of level

  const $buttonOne = $('<div>').addClass('button one').attr('id', 1);
  // declared a div tag with a class of button-one, id 1

  const $buttonTwo = $('<div>').addClass('button two').attr('id', 2);
  // declared a div tag with a class of button-two, id 2

  const $buttonThree = $('<div>').addClass('button three').attr('id', 3);
  // declared a div tag with a class of button-three, id 3

  const $buttonFour = $('<div>').addClass('button four').attr('id', 4);
  // declared a div tag with a class of button-four, id 4

  $('body').append($div);
  // appended const $div to the body

  $('#board').append($div1);
 // appended const $div1 to id board

  $('#circle').append($h1);
 // appended const $h1 to the id circle

  $('#circle').append($p);
 // appended const $p to the id circle

  $('#circle').append($h2);
 // appended const $h2 to the id circle

  $('#board').append($buttonOne);
  // appended const $buttonOne to id board

  $('#board').append($buttonTwo);
  // appended const $buttonTwo to id board

  $('#board').append($buttonThree);
  // appended const $buttonThree to id board

  $('#board').append($buttonFour);
  // appended const $buttonFour to id board

  let sequence = [];
  // declared const sequence to empty array;

  let usedSequence = [];
  // declared const usedSequence to empty array;

  let level = 0;
  // declared const level to 0

  let checkGame = false;
  // declared const checkGame to false

  addSequence = () => {
    let sequenceValue = randNum(1, 4);
    sequence.push(sequenceValue);
  }
  // push random number between 1 ands 4 to the end of sequence array

  playSequence = () => {
    for (let i = 0; i < sequence.length; i++) {
      let delayTime = i * 800;
      setTimeout(lightButton, delayTime);
    }
  }
  // for loops that loops through sequence array
  // function setTimeout will run after 800 milliseconds

});
