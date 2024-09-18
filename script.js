// First Task
let myNumber = 100;
if (myNumber < 50) {
    console.log('ნაკლებია 50-ზე');
} else if (myNumber > 20) {
    console.log('მეტია 20-ზე');  
} else {
   console.log('შეცდომა!');
}

// Second Task
let myName = 'მარიამ';
if (myName == 'მარიამ') {
    console.log('true');
} else {
    console.log('false');
    
}

// Third Task
let secondName = 'მარიამ';
switch (secondName) {
    case 'მარიამ':
        console.log('true');
        break;
    default:
        console.log('false');
        break;
}