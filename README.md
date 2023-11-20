
## Features
* Product Selection
* Product Delivery

## Installation

1. clone this repo
2. terminal `cd backend-machine-app/` 
3. run `npm install`
4. run `node ./bin/www`
5. `cd vending-machine-app/`
6. run `npm install`
7. run `npm start`

Open http://localhost:3000/ to use the app

Backend is stared on port http://localhost:8181/

## ISSUE with Mock data
if data is `loading...`
open with some editor file 'vending-machine-app/src' `main.tsx`, edit empty line or console.log() to debug

## Usage
* insert your coins, bills, click on in it

* choose what capacity of the product you want
* order button - and +

* Press Service Code Button
* selected how product you want
* click selected procut code button

 - if you have change it show in input
 - if the money is not enough for the purchase, display error message
 - if product capacity is not enough for the purchase, display error message

## Currency
* Leva
* 0.20, 0.50 , 1, 2 - coins
* 5, 10, 20 - bills