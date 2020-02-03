"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Aspen Smith
   Date:   2-3-2020
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

//var containing a string of html
var cartHTML = "<table> <tr> <th>Item</th> <th>Description</th> <th>Price</th> <th>Qty</th> <th>Total</th> </tr>";

//for loop running through all entries in the item array
for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr> <td><img src='tc_'" + item[i] + "'.png' alt='item'/></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td> <td> $" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
   var itemCost = itemPrice * itemQty[i];
   cartHTML += "<td> $" + itemCost + "</td></tr>";
   orderTotal += itemCost; 
}

cartHTML += "<tr> <td colspan = '4'> Subtotal </td> <td>$" + orderTotal + "</td></tr></table>";

document.getElementById("cart").innerHTML

