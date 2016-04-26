describe('FizzBuzz', function(){
  it('should return 1 when passed 1', function() {
  	expect( fizzBuzz(1) ).toBe(1);
  });
  it('should return 2 when passed 2', function() {
  	expect( fizzBuzz(2) ).toBe(2);
  });

  it('should return fizz when passed 3', function() {
  	expect( fizzBuzz(3) ).toBe('fizz');
  });
  it('should return fizz when passed 6', function() {
  	expect( fizzBuzz(6) ).toBe('fizz');
  });
  it('should return fizz when passed 9', function() {
  	expect( fizzBuzz(9) ).toBe('fizz');
  });

  it('should return buzz when passed 5', function() {
  	expect( fizzBuzz(5) ).toBe('buzz');
  });
  it('should return buzz when passed 10', function() {
  	expect( fizzBuzz(10) ).toBe('buzz');
  });
  it('should return buzz when passed 20', function() {
  	expect( fizzBuzz(20) ).toBe('buzz');
  });

  it('should return fizzbuzz when passed 15', function() {
  	expect( fizzBuzz(15) ).toBe('fizzbuzz');
  });
  it('should return fizzbuzz when passed 30', function() {
  	expect( fizzBuzz(30) ).toBe('fizzbuzz');
  });

});

