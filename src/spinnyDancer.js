var SpinnyDancer = function(top, left, timeBetweenSteps) {
  GifyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="spinnyDancer"></img>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // debugger;
  // this.oldStep = SpinnyDancer.prototype.step;

  this.$node.attr('src', images[Math.floor(Math.random() * 6)].src);
  this.setPosition(this.top, this.left);
};

var images = [
  {'src': 'http://i.giphy.com/NAYCJNIumrb6o.gif'},
  {'src': 'http://i.giphy.com/xT0GqsqooHW9db4V3O.gif'},
  {'src': 'http://i.giphy.com/e1RLRs00FOCTm.gif'},
  {'src': 'http://i.giphy.com/4fLr6kOk9uFrO.gif'},
  {'src': 'http://i.giphy.com/wjIDrGKbvuGxW.gif'},
  {'src': 'http://i.giphy.com/l46CpVl4pPPip4CoE.gif'}
];

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;
SpinnyDancer.prototype.oldStep = Dancer.prototype.step;

SpinnyDancer.prototype.step = function() {
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};