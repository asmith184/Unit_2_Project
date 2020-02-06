"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Aspen Smith
   Date:   2-6-2020
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

//inserting the title
var reportHTML = "<h1>" + raceTitle + "</h1>"

//for loop that loops through the contents of the race array
for (var i = 0; i < race.length; i++) {
   var totalVotes = 0;
   votes[i].forEach(calcSum);
   reportHTML += "\
   <table>\
   <caption>" + race[i] + "</caption>\
   <tr><th>Candidate</th><th>Votes</th></tr>";

   reportHTML += candidateRows(i, totalVotes);
   reportHTML += "</table>";
}

//:)
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

//function to write individual rows for each candidate showing details
function candidateRows(raceNum, totalVotes) {
   var rowHTML = "";
   for (var x = 0; x < 3; x++) {
      var candidateName = candidate[raceNum][x];
      var candidateParty = party[raceNum][x];
      var candidateVotes = votes[raceNum][x];
      var candidatePercent = calcPercent(candidateVotes, totalVotes);
      rowHTML += "\
      <tr>\
      <td>" + candidateName + " (" + candidateParty + ")</td>\
      <td>" + candidateVotes.toLocaleString() + " (" + candidatePercent.toFixed(1) + "% )</td>";
      for (var y = 0; y < candidatePercent; y++){
         rowHTML += createBar(candidateParty);
      }
      rowHTML += "</tr>";
   }
   return rowHTML;
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100 * value / sum);
}

function createBar(partyType) {
   var barHTML = "";
   switch (partyType) {
      case 'D': barHTML += "<td class='dem'></td>";
      break;
      case 'R': barHTML += "<td class='rep'></td>"
      break;
      case 'I': barHTML += "<td class='ind'></td>"
      break;
   }
   return barHTML;
}