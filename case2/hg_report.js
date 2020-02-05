"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Aspen Smith
   Date:   2-4-2020
   
   Filename: hg_report.js
	
*/


//editing html code to input different values 
var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By: " + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

console.log(gameReport);

document.getElementsByTagName("article")[0].innerHTML = gameReport;

//variable setting the value of ratingssum to 0
var ratingsSum = 0;

//var stating that ratingscount = the length of the ratings array
var ratingsCount = ratings.length;

//for loop that adds ratings sum to the current value of ratings array
for (var i = 0; i < ratings.length; i++) {
   ratingsSum += ratings[i];
}

//var that = ratingssum divided by ratings count
var ratingsAvg = ratingsSum / ratingsCount;

//var = this html idk what it does tho
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + "out of 5 stars ( " + ratingsCount + " reviews)</h2>";


//for loop
for (var i = 0; i <= 2; i++) {
   //adding html to document
   ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td> " + ratingAuthors[i] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";

   //nested foor loop going through reviews and finding how many stars they need
   for (var x = 0; x < ratings[i]; x++) {
      ratingReport += "<img src='hg_star.png' />";
   }

   //var adding more html 
   ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;

