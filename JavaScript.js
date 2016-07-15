// Create a variable called msg to hold a new message
var msg = 'Sign up to receive our newsletter for 10% off!';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {

	var addTagMsg = '<h2>' + msg + '</h2>'
  var el = document.getElementById('message').innerHTML = addTagMsg;

}

// Call the function
updateMessage();

// Challenge add 3 more divs about the 3 things you are 
// hoping to get out of this class. Then style the
//  divs just like the '3 traits about you section'
// 


// List: 
// 1) Create 3 different messages to print to divs 
// 2) Create those divs in your html with the specific ids
// 3) Make sure that works
// 4) Style them with bootstrap. Make sure they are on the
//    same row, and each has a col-md-4


var saying = 'Home sweet home';

var message = '<h2>Lower:</h2><h3>' + saying.replace('me','w') + '</h3>';



var element = document.getElementById('messageInABottle').innerHTML = message;













// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
var randomNum = Math.floor((Math.random() * 10) + 1);

// Write the number into that element
el.innerHTML = '<h2>Random Number:</h2><h3>' + randomNum + '</h3>';
// 

