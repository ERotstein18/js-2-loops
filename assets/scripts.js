// console.log('Everything is working as it should.')
//let userName = 'Eyrma'
// let customText = document.querySelector('.custom-intro')
//customText.textContent = `${username} welcome to my site. Let\'s practice some loops.`

/* 
INSTRUCTIONS

1.Use a while loop to iterate through the newInventoryCarModels array to get see car's data type.
Remember to initialize your i variable to 0 before starting the loop! 
Print out each car models in a console.log statement.


2. Make a new variable called typeS1Count and initialize it to 0. 
Inside your loop from step 2, check and see if the car type is equal to "S1". 
If it is, increment the typeS1Count variable by one. 
Outside the loop, log "Number of S1 Cars is:" and then the value of the typeS1Count variable. 
Hint: You will need to make an if statment inside your loop!


3. Stop and check: Run your code and see what prints out. 
It should be counting three "S1" cars, so you should see a console.log statement printing "Number of S1 Cars is: 3".


4.Perhaps you've just learned that "T1" and "S1" types are nearly identical. 
Try changing the original array and change the "T1" types to "S1" and run the code again. 
Does it now print "Number of S1 Cars is: 4"?


5. Write another loop but this time use a for loop. 
Remember, we are just using the loops to iterate through an array. 
We can use either type and accomplish the same objective.


6. Outside of this second loop, make a variable called lorrieCount. 
Create an if statement inside of your for loop that checks if the Car Model is "Lorrie". 
After the loop is closed, print out how many lorries you found.


7. Stop and check: Did you get three "Lorries"?

*/

let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]
let typeS1Count = 0;
let lorrieCount = 0;
let numberOfCars = 12;

/*  This is commented out because it was just a while loop in order to learn them better,
but I wanted to show you a better wayto write concise code below,
by including bot 'if' statements

let i = 0;

while (i < newInventoryCarModels.length) {
    console.log(newInventoryCarModels[i])
    if (newInventoryCarModels[i] === 'S1') {
        typeS1Count++
    }
    i++
}


for (let i = 0; i < newInventoryCarTypes.length; i++) {
    console.log(newInventoryCarTypes[i])
    if (newInventoryCarTypes[i] === 'Lorrie') {
        lorrieCount++
    }
    if (newInventoryCarModels[i] === 'S1') {
        typeS1Count++
    }
}
*/
/*
console.log(`Number of S1 Cars is: ${typeS1Count}`)
console.log(`Number of Lorries is: ${lorrieCount}`)
*/

function carCounter(preExistingCars) {
    console.log(preExistingCars)
    let typeS1Count = 0;
    let lorrieCount = 0;
    let totalCars = lorrieCount + typeS1Count + preExistingCars
    for (let i = 0; i < newInventoryCarTypes.length; i++) {
        console.log(newInventoryCarTypes[i])
        if (newInventoryCarTypes[i] === 'Lorrie') {
            lorrieCount++
        }
        if (newInventoryCarModels[i] === 'S1') {
            typeS1Count++
        }
    }
    console.log(`Number of S1 Cars is: ${typeS1Count}`)
    console.log(`Number of Lorries is: ${lorrieCount}`)
    console.log(`Previous total number of cars was: ${numberOfCars}`)
    console.log(`Total number of cars is: ${lorrieCount + typeS1Count + preExistingCars}`)
    numberOfCars = totalCars
    return totalCars

}

let totalCars = carCounter(numberOfCars)
console.log(totalCars)

/* 
function truckCounter() {
    function carCounter() {
        for (let i = 0; i < newInventoryCarTypes.length; i++) {
            console.log(newInventoryCarTypes[i])
            if (newInventoryCarTypes[i] === 'Lorrie') {
                lorrieCount++
            }
            if (newInventoryCarModels[i] === 'S1') {
                typeS1Count++
            }
        }
        console.log(`Number of S1 Cars is: ${typeS1Count}`)
        console.log(`Number of Lorries is: ${lorrieCount}`)
    }
} 

truckCounter()
*/



