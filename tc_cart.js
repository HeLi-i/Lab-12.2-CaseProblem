"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

    Author: Wilfred Dillon
    Date:   4/16/2024
   
   Filename: tc_cart.js
    
*/

//Creates the total variable

var orderTotal = 0;

//Holds a table with the cartHTML string

var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>"; 

//Loops for items in the cart
//also adds the properties of the items to the table
for (var i = 0; i < item.length; i++) {
    cartHTML += "<tr><td><img src='./tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td>" +
        "<td>$" + itemPrice[i] + "</td>" +
        "<td>" + itemQty[i] + "</td>";
//Get item cost
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>"; 
    orderTotal += itemCost;
}

//Adds tiems total cost together
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>"

document.getElementById("cart").innerHTML = cartHTML;