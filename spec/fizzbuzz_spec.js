describe ('Fizzbuzz', function(){
  var result;

  beforeEach(function(){
    result = new Fizzbuzz();
  });

  it('result "fizz" if the number is divisable by 3', function(){
    expect(result.check(3)).toEqual('fizz');
  });

  it('result "buzz" if the number is divisable by 5', function(){
    expect(result.check(5)).toEqual('buzz');
  });

  it('result "fizzbuzz" if the number is divisable by 15', function(){
    expect(result.check(15)).toEqual('fizzbuzz');
  });
});
