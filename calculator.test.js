/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = '<div id="fixture"><input id="x" type="text">' + 
      '<input id="y" type="text">' + 
      '<input id="z" type="text">' +
      '<input id="add" type="button" value="Add Numbers">' +
      '<input id="subtract" type="button" value="Subtract Numbers">' +
      '<input id="multiply" type="button" value="Multiply Numbers">' +
      '<input id="divide" type="button" value="Divide Numbers">' +
      '<input id="percent" type="button" value="Give Decimal">' +
      '<input id="squareRoot" type="button" value="Give Square Root">'+
      '<input id="change" type="button" value="Change the sign of a number">' +
      '<input id="memory+" type="button" value="Memory Plus">' +
      '<input id="memory-" type="button" value="Memory Minus">' +
      '<input id="memoryRec" type="button" value="Memory Recall">' +
      '<input id="equal" type="button" value="Carry out a function">' +
      '<input id="power" type="button" value="On/Off">' +
      '<input id="memoryCl" type="button" value="Memory Clear">' +
      'Result: <span id="result" /></div>';


    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  //Addition
  it('should return 3 for 1 + 2', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //MY TESTS
  //Existing Functionality:
  it('should return 17 for 10 + 7', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 7;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('17');
  });

  it('should return ERROR for invalid x value', function() {
    document.getElementById('x').value = 'Hello';
    document.getElementById('y').value = 7;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return ERROR for invalid y value', function() {
    document.getElementById('x').value = '10';
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //New Functionality:

  //Subtraction
  it('should return 4 for 10 - 6', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 6;
    document.getElementById('subtract').click();
    expect(document.getElementById('result').innerHTML).toBe('4');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'Not an integer';
    document.getElementById('y').value = 2;
    document.getElementById('subtract').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'not an integer either';
    document.getElementById('subtract').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });



  //Multiplication
  it('should return 40 for 10 * 4', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 4;
    document.getElementById('multiply').click();
    expect(document.getElementById('result').innerHTML).toBe('40');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'Not an integer';
    document.getElementById('y').value = 2;
    document.getElementById('multiply').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'not an integer either';
    document.getElementById('multiply').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });



  //Division
  it('should return 10 for 40 / 4', function() {
    document.getElementById('x').value = 40;
    document.getElementById('y').value = 4;
    document.getElementById('divide').click();
    expect(document.getElementById('result').innerHTML).toBe('10');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'Not an integer';
    document.getElementById('y').value = 2;
    document.getElementById('divide').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'not an integer either';
    document.getElementById('divide').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('Should return "UNDEFINED" if y value is 0', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 0;
    document.getElementById('divide').click();
    expect(document.getElementById('result').innerHTML).toBe('UNDEFINED');
  });



  //Percentage
  it('should return 0.10 for 10', function() {
    document.getElementById('x').value = 10;
    document.getElementById('percent').click();
    expect(document.getElementById('result').innerHTML).toBe('0.1');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'Not an integer';
    document.getElementById('y').value = 10
    document.getElementById('percent').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  // it('should return 50 for x=5 and y=10', function() {
  //   document.getElementById('x').value = 5;
  //   document.getElementById('y').value = 10;
  //   document.getElementById('percent').click();
  //   expect(document.getElementById('result').innerHTML).toBe('50');
  // });

  // it('should return "ERROR" for invalid y value', function() {
  //   document.getElementById('x').value = 5;
  //   document.getElementById('y').value = 'Not an integer';
  //   document.getElementById('percent').click();
  //   expect(document.getElementById('result').innerHTML).toBe('ERROR');
  // });



  //Change Sign
  it('should return -25 for 25', function() {
    document.getElementById('x').value = 25;
    document.getElementById('change').click();
    expect(document.getElementById('result').innerHTML).toBe('-25');
  });

  it('should return 45 for -45', function() {
    document.getElementById('x').value = -45;
    document.getElementById('change').click();
    expect(document.getElementById('result').innerHTML).toBe('45');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'Not an integer';
    document.getElementById('change').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });


  //Equal
  it('should return "ERROR" for invalid z value', function() {
    document.getElementById('x').value = 15;
    document.getElementById('y').value = 100;
    document.getElementById('z').value = "Hello";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //Equal - Addition
  it('should return 20 for 9 + 11', function() {
    document.getElementById('x').value = 9;
    document.getElementById('y').value = 11;
    document.getElementById('z').value = "+";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('20');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('z').value = "+";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 15;
    document.getElementById('y').value = 'Goodbye';
    document.getElementById('z').value = "+";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //Equal - Subtraction
  it('should return 15 for 45 - 30', function() {
    document.getElementById('x').value = 45;
    document.getElementById('y').value = 30;
    document.getElementById('z').value = "-";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('15');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('z').value = "-";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 15;
    document.getElementById('y').value = 'Goodbye';
    document.getElementById('z').value = "-";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //Equal - Multiplication
  it('should return 50 for 10 * 5', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 5;
    document.getElementById('z').value = "*";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('50');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('z').value = "*";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 15;
    document.getElementById('y').value = 'Goodbye';
    document.getElementById('z').value = "*";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //Equal - Division
  it('should return 5 for 100 / 20', function() {
    document.getElementById('x').value = 100;
    document.getElementById('y').value = 20;
    document.getElementById('z').value = "/";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('z').value = "/";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for invalid y value', function() {
    document.getElementById('x').value = 15;
    document.getElementById('y').value = 'Goodbye';
    document.getElementById('z').value = "/";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "UNDEFINED" for y value being 0', function() {
    document.getElementById('x').value = 15;
    document.getElementById('y').value = 0;
    document.getElementById('z').value = "/";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('UNDEFINED');
  });

  //Equal - Percent
  it('should return 0.5 for 50', function() {
    document.getElementById('x').value = 50;
    document.getElementById('z').value = "%";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('0.5');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'Not an integer';
    document.getElementById('z').value = "%";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  // it('should return 50 for x=5 and y=10', function() {
  //   document.getElementById('x').value = 5;
  //   document.getElementById('y').value = 10;
  //   document.getElementById('z').value = "%";
  //   document.getElementById('equal').click();
  //   expect(document.getElementById('result').innerHTML).toBe('50');
  // });

  // it('should return "ERROR invalid x value', function() {
  //   document.getElementById('x').value = 'Hello';
  //   document.getElementById('y').value = 10;
  //   document.getElementById('z').value = "%";
  //   document.getElementById('equal').click();
  //   expect(document.getElementById('result').innerHTML).toBe('ERROR');
  // });

  // it('should return "ERROR invalid y value', function() {
  //   document.getElementById('x').value = 5;
  //   document.getElementById('y').value = ;
  //   document.getElementById('z').value = "%";
  //   document.getElementById('equal').click();
  //   expect(document.getElementById('result').innerHTML).toBe('ERROR');
  // });



  //Equal - Sqrt
  it('should return 5 for 25', function() {
    document.getElementById('x').value = 25;
    document.getElementById('z').value = "sqrt";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = "hello";
    document.getElementById('z').value = "sqrt";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return ERROR for negtive x value', function() {
    document.getElementById('x').value = -25;
    document.getElementById('z').value = "sqrt";
    document.getElementById('equal').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });


  //Square Root
  it('should return 5 for 25', function() {
    document.getElementById('x').value = 25;
    document.getElementById('squareRoot').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });

  it('should return "ERROR" for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('squareRoot').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return "ERROR" for negative x value', function() {
    document.getElementById('x').value = -25;
    document.getElementById('squareRoot').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //Memory Plus/Memory Minus/Memory Recall
  it('should return 15 for 10 + 15', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 15;
    document.getElementById('z').value = '+';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('25');
  });

  it('should return 30 for 45 - 15', function() {
    document.getElementById('x').value = 45;
    document.getElementById('y').value = 15;
    document.getElementById('z').value = '-';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('30');
  });

  it('should return 55', function() {
    document.getElementById('memoryRec').click();
    expect(document.getElementById('result').innerHTML).toBe('55');
  });

  it('should return 20 for 5 * 4', function() {
    document.getElementById('x').value = 5;
    document.getElementById('y').value = 4;
    document.getElementById('z').value = '*';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('20');
  });

  it('should return 5 for 50 / 10', function() {
    document.getElementById('x').value = 50;
    document.getElementById('y').value = 10;
    document.getElementById('z').value = '/';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });
  
  it('should return 80', function() {
    document.getElementById('memoryRec').click();
    expect(document.getElementById('result').innerHTML).toBe('80');
  });

  it('should return 5 for 500', function() {
    document.getElementById('x').value = 500;
    document.getElementById('y').value = 10;
    document.getElementById('z').value = '%';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });

  it('should return 5 for 25', function() {
    document.getElementById('x').value = 25;
    document.getElementById('y').value = 10;
    document.getElementById('z').value = 'sqrt';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });

  it('should return 90', function() {
    document.getElementById('memoryRec').click();
    expect(document.getElementById('result').innerHTML).toBe('90');
  });

  it('should return 5 for 2 + 3', function() {
    document.getElementById('x').value = 2;
    document.getElementById('y').value = 3;
    document.getElementById('z').value = '+';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });

  it('should return 5 for 10 - 5', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 5;
    document.getElementById('z').value = '-';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('5');
  });

  it('should return 10 for 5 * 2', function() {
    document.getElementById('x').value = 5;
    document.getElementById('y').value = 2;
    document.getElementById('z').value = '*';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('10');
  });

  it('should return 10 for 100 / 10', function() {
    document.getElementById('x').value = 100;
    document.getElementById('y').value = 10;
    document.getElementById('z').value = '/';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('10');
  });

  it('should return 10 for 1000', function() {
    document.getElementById('x').value = 1000;
    document.getElementById('z').value = '%';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('10');
  });

  it('should return 10 for 100', function() {
    document.getElementById('x').value = 100;
    document.getElementById('z').value = 'sqrt';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('10');
  });

  it('should return 40', function() {
    document.getElementById('memoryRec').click();
    expect(document.getElementById('result').innerHTML).toBe('40');
  });

  // it('should return 0', function() {
  //   document.getElementById('memoryRec').dblclick();
  //   expect(document.getElementById('result').innerHTML).toBe('0');
  // });

  it('should return 0', function() {
    document.getElementById('memoryCl').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should return ERROR for invalid x value', function() {
    document.getElementById('x').value = 'Hello';
    document.getElementById('y').value = 15;
    document.getElementById('z').value = '+';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return ERROR for invalid x value', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 'goodybe';
    document.getElementById('z').value = '+';
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return ERROR for invalid x value', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 15;
    document.getElementById('z').value = 22;
    document.getElementById('memory+').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return ERROR for invalid x value', function() {
    document.getElementById('x').value = 'Hello';
    document.getElementById('y').value = 15;
    document.getElementById('z').value = '+';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return ERROR for invalid x value', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 'goodybe';
    document.getElementById('z').value = '+';
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  it('should return ERROR for invalid x value', function() {
    document.getElementById('x').value = 10;
    document.getElementById('y').value = 15;
    document.getElementById('z').value = 22;
    document.getElementById('memory-').click();
    expect(document.getElementById('result').innerHTML).toBe('ERROR');
  });

  //Power Button Clear Display
  it('should return ""', function() {
    document.getElementById('x').value = 5;
    document.getElementById('y').value = 15;
    document.getElementById('z').value = '+';
    document.getElementById('power').click();
    expect(document.getElementById('result').innerHTML).toBe('');
  });



});