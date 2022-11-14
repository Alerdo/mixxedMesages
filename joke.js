
//Create a random nr generator 
function random(num) {
    return  Math.floor(Math.random() * num); 
}



///Create outcomes with diffrent outcomes and store it into an object

const outcomes = {
    day: ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weather: ['Sunny', 'Cloudy', 'Hot', 'Windy'],
    joke: ["Ha ha ha ", 'Bla bla bla', 'He he he']
}

/// Create output array
const personalWisdom = [];

//Iterate through the object's properties
for( prop in outcomes) {
    let propIndex = random(outcomes[prop].length) //finds random index of properties

    switch(prop){
        case 'day':
            personalWisdom.push(`Today is ${outcomes[prop][propIndex]}`)
            break;
        
        case 'weather':
            personalWisdom.push(`I am happy becase I like ${outcomes[prop][propIndex]} weather`)
            break;
        
        case 'joke':
            personalWisdom.push(`Hear me out: ` + outcomes[prop][propIndex])
            break;
        
        default:
            personalWisdom.push(`Not enough info to start to implement program`)
            break;
    }
}


//We format the text so each message shows up in a new line 

const formatText = text => {
    let edited = text.join('\n')
    console.log(edited)
}

//Run program 
formatText(personalWisdom)