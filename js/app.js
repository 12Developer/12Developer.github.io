console.log('linked');

$(() => {

  const $div = $('<div>').attr('id', 'board');
  // declared a div tag  with an id of board

  const $div1 = $('<div>').attr('id', 'circle');
  // declared a div tag with an id of circle

  const $h1 = $('<h1>').attr('id', 'title').text('Simon');
  // declared a h1 tag with an id of title

  const $p = $('<p>').text('Click the circle to start game');
  // delcared a p tag

  const $h2 = $('<h2>').attr('id', 'level').text('Level: 0');
  // declared a h2 tag with an id of level

  const $buttonGreen = $('<div>').addClass('button green').attr('id', 1);
  // declared a div tag with a class of button green, id 1

  const $buttonRed = $('<div>').addClass('button red').attr('id', 2);
  // declared a div tag with a class of button red, id 2

  const $buttonYellow = $('<div>').addClass('button yellow').attr('id', 3);
  // declared a div tag with a class of button yellow, id 3

  const $buttonBlue = $('<div>').addClass('button blue').attr('id', 4);
  // declared a div tag with a class of button blue, id 4

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

  $('#board').append($buttonGreen);
  // appended const $buttonGreen to id board

  $('#board').append($buttonRed);
  // appended const $buttonRed to id board

  $('#board').append($buttonYellow);
  // appended const $buttonYellow to id board

  $('#board').append($buttonBlue);
  // appended const $buttonBlue to id board

  var sequence = [];
  // // declared var sequence to empty array;
  var usedSequence = [];
  // // declared var usedSequence to empty array;
  var level = 0;
  // // declared var level to 0
  var checkGame = false;
  // // declared var checkGame to false

  addSequence = () => {
    var sequenceValue = randNum(1, 5);
    sequence.push(sequenceValue);
    // sequenceValue equals randNum between 1 and 4
  } // push sequenceValue to sequence array
  playSequence = () => {
    for (var i = 0; i < sequence.length; i++) {
      var delayTime = i * 800;
      setTimeout(lightButton, delayTime);
    }
  } // for loop that loops through sequence array
    // declared var delayTime to equal  i * 800
    // setTimeout takes a function lightButton and will execute it in 800 milliseconds (delayTime)
  lightButton = () => {
    var item = sequence.pop();
    checkGame = true;

    $('#' + item).animate({opacity: .2}, 300).animate({opacity: 1}, 200);
    usedSequence.push(item);
    if (sequence.length <= 0) {
      createClicks();
    }
  } // item is equal to the last element in sequence array
    // checkGame equals true
    // jQuery find the last element in sequence array and animate the opacity to 0.2 for 300 milliseconds
    // then animate the opacity to 1 for 200 milliseconds
    // push the last element from sequence array to the usedSequence array
    // if the length of the sequence array is less than or equal to 0 run the function createClicks

  createClicks = () => {
    $('.button').click(function() {

      var item = usedSequence.shift();

      var buttonId = $(this).attr('id');

      $(this).animate({opacity: .2}, 200).animate({opacity: 1}, 100)

      if (item == buttonId) {
        sequence.push(item);

      if (usedSequence.length <= 0) {
          level++;
          $('#level').html('Level: ' + level);
          removeClicks();
          addSequence();
          setTimeout(playSequence, 600);
    }
  } else {
        checkGame = false;
        $('h1').html('Game Over').css({
          fontSize: 45,
          marginBottom: 15,
          paddingTop: 15
    });
        $('p').html('Click the circle to restart');
        sequence = [];
        usedSequence = [];
  }
    });
  } // jQuery find the element with class of button on click run function
    // item equals the first element in usedSequence array
    // buttonId equals the button with the selected id
    // jQuery find the button animate the opacity to .2 for 200 milliseconds
    // then animate the opacity to 1 for 100 milliseconds
    // if item is equal to buttonId push item to sequence array
    // if the usedSequence length is less than or equal to 0
    // increment the Level
    // jQuery change the id selector level html to 'Level' + level
    // function removeClicks
    // function addSequence
    // setTimeout takes function playSequence and executes it in 600 milliseconds


  removeClicks = () => {
   $('.button').unbind();
 } // jQuery find the element with button and remove event handler from selected elements

  startGame = () => {
    removeClicks();
    resetGame();
    addSequence();
    playSequence();

  } // function startGame execute removeClicks, resetGame, addSequence, and playSequence.
  resetGame = () => {
    level = 0;
    $('#level').html('Level: ' + level);
    $('h1').html('Simon').css({
      fontSize: 45,
      marginBottom: 15,
      paddingTop: 15
    });
    $('p').html('Click the circle to start game');
  };
  $('#circle').click(function() {
    if(checkGame === false){
      startGame();
    }
  }); // level equals 0
      // jQuery find id level change html to Level: 0
      // jQuery change the h1 to Simon
      // change font size to 45
      // change marginBottom to 15
      // change paddingTop to 15
      // jQuery change the p to Click the circle to start game
      // jQuery circle on click if checkGame equals false startGame

  randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }; // function randNum will generate a randon numhber

});
