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

  const $buttonOne = $('<div>').addClass('button-one');
  // declared a div tag with a class of button-one

  const $buttonTwo = $('<div>').addClass('button-two');
  // declared a div tag with a class of button-two

  const $buttonThree = $('<div>').addClass('button-three');
  // declared a div tag with a class of button-three

  const $buttonFour = $('<div>').addClass('button-four');
  // declared a div tag with a class of button-four

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

  const sequence = [];
  // declared const sequence to empty array;

  const usedSequence = [];
  // declared const usedSequence to empty array;

  const level = 0;
  // declared const level to 0

  const checkGame = false;
  // declared const checkGame to false
});
