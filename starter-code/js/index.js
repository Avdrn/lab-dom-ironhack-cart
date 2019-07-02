// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// GET TOTAL PRICE + TOTAL PRICE ALL


var quantities = document.getElementsByClassName("quantity");
var prices = document.getElementsByClassName("price");
var totalPrice = document.getElementsByClassName("totalPrice");
var totalAll = document.getElementById("totalAll");

document.getElementById("calculPrice").onclick = function (){
  for (var i = 0; i < quantities.length; i++){
    let q = quantities[i].value;
    let p = parseInt(prices[i].innerHTML)
    totalPrice[i].innerHTML = p*q
  }
}

totalAll.innerHTML =  parseInt(totalAll.innerHTML)+p*q


// DELETE


var btnDelete = document.getElementsByClassName("btn-delete");

function deleteItem (e) {
 var row = e.currentTarget.parentNode.parentNode;
 document.getElementsByTagName("body")[0].removeChild(row)
}

for(var i = 0; i<btnDelete.length ; i++){
      btnDelete[i].onclick = deleteItem    
    }

// CREATE NEW ITEM *Ongoing

var allDeleteBtn = document.getElementsByClassName("btn-delete");


function duplic(){
  debugger
    
  var itemClone = document.getElementsByClassName("item")[0];
  var allItems = document.getElementsByClassName("item");
  var newItem = document.getElementsByClassName("newItem")[0].value;
  var newPrice = document.getElementsByClassName("newPrice")[0].value;
  var allPrice = document.getElementsByClassName("price");
  var cloneNode = itemClone.cloneNode(true); 
  document.getElementsByTagName("body")[0].appendChild(cloneNode);
  document.getElementsByClassName("item-name")[allItems.length -1].innerHTML = newItem;
  document.getElementsByClassName("price")[allItems.length -1].innerHTML = newPrice;
  document.getElementsByClassName("btn-delete")[allItems.length -1].onclick = deleteItem;
  debugger
}

var createItemBtn = document.getElementById("create-Item");
createItemBtn.onclick = duplic;


// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// // window.onload = function(){
// //   var calculatePriceButton = document.getElementById('calc-prices-button');
// //   var createItemButton = document.getElementById('new-item-create');
// //   var deleteButtons = document.getElementsByClassName('btn-delete');

// //   calculatePriceButton.onclick = getTotalPrice;
// //   createItemButton.onclick = createNewItem;

// //   for(var i = 0; i<deleteButtons.length ; i++){
// //     deleteButtons[i].onclick = deleteItem;
// //   }
// // };

