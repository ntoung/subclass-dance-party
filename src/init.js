$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    dancer.$node.on('click', function(event) {
      $(this).remove();
    });

    dancer.$node.on('mouseover', function(event) {
      var restOfDancers = $('.dancer').toArray();
      var indexOfCurrentDancer = restOfDancers.indexOf(this);
      
      restOfDancers.splice(indexOfCurrentDancer, 1);

      var closestDancer = restOfDancers.reduce(function(acc, curr) {
        if (calculateDistance(dancer.$node[0], acc) < calculateDistance(dancer.$node[0], curr)) {
          return acc;
        } else {
          return curr;  
        }
      });

      // get out closest dancer
      restOfDancers.splice(restOfDancers.indexOf(closestDancer), 1);

      $(restOfDancers).fadeOut();

      $(this).animate({
        top: $('body').height() / 2 - 25,
        left: $('body').width() / 3
      }, {
        'duration': 4000
      });

      $(closestDancer).animate({
        top: $('body').height() / 2 - 25,
        left: $('body').width() / 3 * 2
      }, {
        'duration': 4000
      });

      console.log(closestDancer);
      

    });
  });

  $('#lineUpButton').on('click', function(event) {
    var dancers = $('.dancer');

    for (var i = 0; i < dancers.length; i++) {
      $(dancers[i]).animate({
        top: $('body').height() / 2 - 25,
        left: $('body').width() / dancers.length * i
      }, {
        'duration': 4000
      });
    }
  });

  var calculateDistance = function(dancerOne, dancerTwo) {
    console.log('dancerOne');
    return Math.sqrt(
      Math.pow(dancerOne.x - dancerTwo.x, 2) + 
      Math.pow(dancerOne.y - dancerTwo.y, 2));
  };
});

