import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

// We want to filter the data first bc there's too much data to go thru to grab specifics: data is over 18,000 lines long

//(a) Home Team name for 2014 world cup final
// 1. Need to Filter "Year" of 2014 & "Stage" of Final
// 2. Assign step one to new variable of - teamFinal2014
// 3. Apply filter() method to fifaData obj array
// 4. Set conditional 
//      a. Year key equals 2014
//      b. Stage key equals "Final"
// 5. Use console.log to check work on your teamFinal2014 thus far
// 6. Now grab the Home Team Name out of teamFinal2014 function

const teamFinal2014 = fifaData.filter(data => data.Year === 2014 && data.Stage === "Final");
console.log(teamFinal2014);
console.log(teamFinal2014[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final
console.log(teamFinal2014[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log(teamFinal2014[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
console.log(teamFinal2014[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
console.log(teamFinal2014[0]["Win conditions"]);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

// function getFinals(data) {
//    /* code here */ 
//    // setting up a new array
// const newArr = [];
// // using for loop to loop through fifaData array
// // if data beginning at 0 index at Stage key equal "Final", push the data into the new array
// for(let i=0; i<data.length; i++){
//     if (data[i].Stage === "Final"){
//         newArr.push(data[i]);
//     }
// }
// return newArr;
// }
// console.log(getFinals(fifaData));

function getFinals(data) {
    const newArr = fifaData.filter(function(data){
      if(data.Stage === "Final"){
       return data.Stage;
      }                       
   });
return newArr;
}

console.log(getFinals(fifaData)); 

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2. 
    - getFinals function is an array of all the teams that made it to the finals
3. Return an array called years containing all of the years in the getFinals data set*/
    // need to store getFinals info in a variable
    // need to store new array in a variable 

function getYears(array, getFinals){
    let finalYears = getFinals(fifaData);
    let years = finalYears.map(function(array){
      return array.Year;
    })
    return years;
  }
  console.log(getYears(fifaData, getFinals));

//   function getYears(array, getFinals){
//       // storing what is being returned from getFinals, (which takes an array parameter, in this case its 'fifaData') - into finalYears
//       // this makes an array
//     let finalYears = getFinals(fifaData);
//     //mapping over 'finalYears' & storing it to 'years' & to be whatever was returned from getFinals(fifaData)
//     //ie mapping over an array of items returned from getFinals(fifaData)
//     let years = finalYears.map(function(array){
//         // map must have a return
//         return array.Year;
//     })
//     // still gotta return the new years array
//     return years;
//   }
//   console.log(getYears(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array - OK
2. Receives the callback function getFinals from task 2 - OK - getFinals function is an array of all the teams that made it to the finals, it takes a parameter

3. Determines the winner (home or away) of each `finals` game. 
// I think I need a variable

4. Returns the names of all winning countries in an array called `winners` */ 
// I think I need another variable with .map
function getWinners(array, getFinals) {
    /* code here */
    let winner = getFinals(fifaData);
    let winners = winner.map(function(element){

        if(element["Home Team Goals"] > element["Away Team Goals"]){
            return element["Home Team Name"];
        }
        else if(element["Home Team Goals"] < element["Away Team Goals"]){
            return element["Away Team Name"];
        }
        
    });
    
    return winners;
}
console.log(getWinners(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array - OK
2. Receive a callback function getYears from task 3 -- gets all the final years of winners
3. Receive a callback function getWinners from task 4 -- gets all the winners country names from finals
4. Return an array of strings that say "In {year}, {country} won the world cup!" 
    - need a new array, if we need an array of strings 
    - we need to iterate over the new data set given (getWinners & getYears)
    - need to access the returns of the cb functions (years, winners), so we need to store that info in 2 new variables

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getYears, getWinners) {
    /* code here */
    // need a new array for storage of results
    let newArr = [];
    // // need year & country(winners) in array - so need 2 new variables to get & store this info
    let year = getYears(array);
    let winners = getWinners(array);
    // need to add a string for each of the final, so we need to iterate thru the array with say for loop
    for(let i=0; i< year.length; i++){
       // must push string to new array
       newArr.push(`In ${year[i]}, ${winners[i]} won the world cup!`)
    }
    console.log(newArr);
    return newArr;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument -- data of the teams that made it to the final stage, need to pass in 'data' as an argument

 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
    - need 3 variables
        * 1 to store all of the final games
        * 1 to store all of the home team scores combined
        * 1 to store all of the away team scores combined
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(data) {
   /* code here */
   // create a variable that stores result of final games
   // let finals = getFinals(fifaData);
   // create variable to store home team goals
   // going over data set, value is equal to current home team goals, total is equal to all of the goals combined (counter),
   //accessing value with [] & referencing the key, pulling out the value of the key & adding it to the total
   // the very end returns the total value (accumulator)
   let homeTeamGoals = getFinals(fifaData).reduce((total, value)=> {return total + value["Home Team Goals"]}, 0);
   let awayTeamGoals = getFinals(fifaData).reduce((total, value)=> {return total + value["Away Team Goals"]}, 0);
   // now we can create our average
   // adding 2 variables & dividing by the number of games (getFinals) function - 
   // use .toFixed method to round to decimal (2);
    return ((homeTeamGoals + awayTeamGoals) / getFinals(fifaData).length).toFixed(2);
   
}
//console.log(getAverageGoals(getFinals(fifaData)));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
