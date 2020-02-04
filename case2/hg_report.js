"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Aspen Smith
   Date:   2-4-2020
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1> <h2> By: " + itemManufacturer + "</h2>"
gameReport+= "<img src='hg_" + itemID + ".png' alt= 'id' id='gameImg'/>" 
gameReport+= "<table> <tr><th>" + itemID + "</th> <td>id</td></tr>"
gameReport+= "<table> <tr><th>" + itemPrice + "</th> <td>price</td></tr>"
gameReport+= "<table> <tr><th>" + itemPlatform + "</th> <td>platform</td></tr>"
gameReport+= "<table> <tr><th>" + itemESRB + "</th> <td>esrb</td></tr>"
gameReport+= "<table> <tr><th>" + itemCondition +  "</th><td>condition</td></tr>"
gameReport+= "<table> <tr><th>" + itemRelease + "</th> <td>release</td></tr>"
gameReport+= "</table>" 