// var blueBox = document.createElement('div');

// document.body.appendChild(blueBox);

// blueBox.setAttribute('class', 'blueBox');

// var yellowBox = document.createElement('div');

// document.body.appendChild(yellowBox);

// yellowBox.setAttribute('class', 'yellowBox');

// var redBox = document.createElement('div');

// document.body.appendChild(redBox);

// redBox.setAttribute('class', 'redBox');





// This does the same thing as the first 17 lines of code, but in 13 lines.
// I could further reduce this into a smaller amount of code by removing whitespace
// The whole point is to not repeat code over and over
// because one or two words need to be changed

var boss = ['blue', 'yellow', 'red'];

for(var i = 0; i < boss.length; i++) {

  var box = document.createElement('div');

  document.body.appendChild(box);

  box.setAttribute('class', 'fun');

  box.style.backgroundColor = boss[i];;

};
