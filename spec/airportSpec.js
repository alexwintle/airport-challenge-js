describe('Airport', function() {
  let airport;

  beforeEach(function() {
    airport = new Airport();
  })

  describe('airportManagement: ', function() {
    it('should return the number of planes at the airport', function() {
      expect(airport.airportManagement()).toEqual('Planes at the airport: 0');
    });

    it('should return the number of planes at the airport', function() {
      airport.land();
      airport.land();
      airport.takeOff();
      expect(airport.airportManagement()).toEqual('Planes at the airport: 1');
    });
  });

  describe('isFlying: ', function() {
    it('should return false if the plane has landed', function() {
      airport.land();
      expect(airport.isFlying()).toEqual(false);
    });

    it('should return true if the plane has taken off/flying', function() {
      airport.land();
      airport.takeOff();
      expect(airport.isFlying()).toEqual(true);
    });
  });


  describe('takeOff: ', function() {
    it('should return a flying status', function() {
      airport.land();
      airport.takeOff();
      expect(airport.isFlying()).toEqual(true)
    });

    it('should return a take off message if there are no planes at the airport', function() {
      expect(airport.takeOff()).toEqual('There are no planes to take off.')
    });

    it('should subtract 1 from the current capacity', function() {
      airport.land();
      airport.land();
      airport.takeOff();
      expect(airport.airportManagement()).toEqual('Planes at the airport: 1');
    });

    it('should confirm the plane is no longer at the airport', function() {
      airport.land();
      expect(airport.takeOff()).toEqual('Plane has left the airport.');
    });
  });




  describe('land: ', function() {
    it('should return a flying status', function() {
      airport.land();
      expect(airport.isFlying()).toEqual(false)
    });

    it('should add 1 to the current capacity', function() {
      airport.land();
      expect(airport.airportManagement()).toEqual('Planes at the airport: 1')
    });

    it('should instruct the plane to land', function() {
      expect(airport.land()).toEqual('Land the plane at the airport.')
    });

    it('should stop the plane from landing if at capacity', function() {
      airport.land();
      airport.land();
      airport.land();
      airport.land();
      airport.land();
      expect(airport.land()).toEqual('The plane cannot land. Airport is at capacity.');
    });
  });
})