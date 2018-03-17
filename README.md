# Bamazon-Wine
A Node.js and MySQL CLI Storefront for wine.

Description
Bamazon-Wine is a simple Node.js and MySQL storefront application that allows users to select fine wine and buy it.

Customer (BamazonCustomer.js)

## Installation
Bamazon-Wine utilizes Node Package Manager (NPM) to install features. The user will need to install a number of packages in order to use the application.

Clone Bamazon Repository
In the console, navigate to the directory where you wish to install Bamazon-Wine.

Then type git clone (https://github.com/cmjezior/Bamazon) to clone the repository. This will create a local copy of Bamazon-Wine files on your system.

## Packages
All dependencies are tracked in the provided package.json and package-lock.json files. In the console, navigate into the cloned directory ("Bamazon-Wine") and type npm install This will install the following NPM packages:

mysql
inquirer
clear
MySQL Creation
There is one .sql file included in this repo (Bamazon-Wine.sql). The user will need a MySQL server running and a MySQL database management application such as Sequel Pro or MySQLWorkbench to get started. Run the MySQL commands in Bamazon-Wine.sql either by opening the file in your management application or by copying and pasting the commands and executing from within the application query. Once the tables are created, you will be able to run the Bamazon-Wine Node applications. Change the database connection parameters in each of the .js files if necessary (e.g. default settings for connecting to the MySQL server are user name "root" with no password, and a port is assigned in the files as well).

##Files
BamazonCustomer.js: Running this file in Node launches the Customer application. The customer is presented with the current items for sale and is able to make purchases or exit.
