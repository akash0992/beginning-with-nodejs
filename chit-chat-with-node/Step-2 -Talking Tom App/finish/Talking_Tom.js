/**
 * Created by deepak.m.shrma@gmail.com on 15/1/15.
 */

////Talking_Tom.js
var message = 'something creepy going to happen ;)'
console.log(message);

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('$ my_style >');
rl.prompt();
rl.on('line', function (line) {
    var lowerLine = line.trim().toLowerCase();
    var thisEndOfTheWorld = 'EXIT', itsQuestion = 'QUESTION', itsAnAnswer = 'ANSWER';
    var myMessageType = itsAnAnswer;
    if (lowerLine == 'bye') {
        myMessageType = thisEndOfTheWorld;
    }
    else if (lowerLine.indexOf('?') > -1) {
        myMessageType = itsQuestion;
    }
    else {
        myMessageType = itsAnAnswer;
    }

    switch (myMessageType) {
        case thisEndOfTheWorld:
            rl.close()
            break
        case itsQuestion :
            //ask same question
            console.log(line);
            break;
        case itsAnAnswer :
            //give same answer which is My name is Tom n I love cookies
            console.log('My name is Tom n I love cookies');
            break;
        default:
            console.log('Something fishy happened.. :/');
            break;
    }
    rl.prompt();
})
rl.on('close', function () {
    console.log('This is the end of the world.. :/ Have a great day!');
    process.exit(0);
});
