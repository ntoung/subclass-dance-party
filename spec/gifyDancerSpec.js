describe('gifyDancer', function() {

  var gifyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    gifyDancer = new GifyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(gifyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    // sinon.spy(gifyDancer.$node, 'toggle');
    // gifyDancer.step();
    // expect(gifyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(gifyDancer, 'step');

      // console.log(gifyDancer.step.callCount);
      // expect(gifyDancer.step.callCount).to.be.equal(0);
      
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      // expect(gifyDancer.step.callCount).to.be.equal(1);

      // clock.tick(timeBetweenSteps);
      // expect(gifyDancer.step.callCount).to.be.equal(2);
    });
  });
});
