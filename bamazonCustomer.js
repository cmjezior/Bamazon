var mysql = require("mysql");
var inquirer = require("inquirer");
var orderItemID = 0;
var orderQuantity = 0;
var itemsRemaining = 0;
var itemName = '';
var itemPrice = 0;
var orderedItems = [];
var initialQuantities = [48, 76, 76, 5, 7, 12, 16, 22, 30, 30, 19, 19, 45, 45, 31, 31]

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

console.log('Welcome to Bamazon, your hipster gear headquarters!');
displayItems();

// list all available products
function displayItems() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var section = '----------------------------------------------------------------------------';
    console.log(section);
    for (var i = 0; i < res.length; i++) {
      console.log('ID: ' + res[i].item_id + ' | Product: ' + res[i].product_name + ' | Price: ' + res[i].price);
    } // close loop
    console.log('\n');
    takeOrder()
  });
} // close function, displayItems

// prompt user for their desired item and quantity
function takeOrder() {
  inquirer.prompt([{
      type: "input",
      name: "product",
      message: "Enter the ID of the Wine you'd like to purchase."
    },
    {
      type: "input",
      name: "quantity",
      message: "Enter the number of bottles you'd like to purchase."
    }
  ]).then(function(answer) {
    orderItemID = answer.product;
    orderQuantity = answer.quantity;
    getProductDetails()
  });
} // close function, takeOrder

// look up the necessary item details in the database
function getProductDetails() {
  connection.query('SELECT stock_quantity, product_name, price FROM products WHERE ?', {
    item_id: orderItemID
  }, function(err, result) {
    if (err) throw err;
    itemsRemaining = result[0].stock_quantity;
    itemName = result[0].product_name;
    itemPrice = result[0].price;
    giveOrderResponse()
  });
} // close function, getProductDetails

// notify user of the order status
function giveOrderResponse() {
  if (orderQuantity <= itemsRemaining) {
    console.log('\nWonderful! We knew this selection would please you.');
    fulfillOrder()
  } else {
    console.log("\nOur apologies, we only have " + itemsRemaining + ' ' + itemName + ' left. Please select less bottles or another type of wine.');
    takeOrder()
  }
} // close function, giveOrderResponse

// remove purchased items from stock_quantity and give total price to the user
function fulfillOrder() {
  var newQuantity = itemsRemaining - orderQuantity;
  connection.query("UPDATE products SET ? WHERE ?", [{
      stock_quantity: newQuantity
    },
    {
      item_id: orderItemID
    }
  ], function(err, res) {
    if (err) throw err;
    var rawTotal = orderQuantity * itemPrice;
    var totalPrice = rawTotal.toFixed(2);
    console.log('\nThank you! Your wine is ready. Your total cost is $' + totalPrice + '.\n');
    orderedItems.push(orderItemID)
    newOrder()
  });
} // close function, fulfillOrder

// ask use if they want to order additional items
function newOrder() {
  inquirer.prompt([{
    type: "confirm",
    message: "Do you want to buy any additional bottles?",
    name: "confirm",
    default: true
  }]).then(function(answer) {
    // console.log(answer);
    if (answer.confirm) {
      takeOrder()
    } else {
      console.log('Okay, we hope to see you again soon.');
      restockInventories();
    }
  });
} // close function, newOrder

// after all transactions are completed, restock all items to the initial quantities
function restockInventories() {
  var itemIndex = 0;
  var initialQuantity = 0;
  for (var i = 0; i < orderedItems.length; i++) {
    itemIndex = orderedItems[i] - 1;
    initialQuantity = initialQuantities[itemIndex];
    connection.query("UPDATE products SET ? WHERE ?", [{
        stock_quantity: initialQuantity
      },
      {
        item_id: orderedItems[i]
      }
    ], function(err, res) {
      if (err) throw err;
    });
  } // close loop
  connection.end();
} // close function, fulfillOrder
