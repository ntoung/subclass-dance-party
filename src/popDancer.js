var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // debugger;
  // this.oldStep = PopDancer.prototype.step;
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;
PopDancer.prototype.oldStep = Dancer.prototype.step;

PopDancer.prototype.step = function() {
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};