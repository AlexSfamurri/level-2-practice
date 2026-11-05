// Day 4 — Loops: practice the for loop
// A loop runs the same code once for every item in a list.
// Tomorrow's graded work uses for loops, so practice them here.

// TODO first: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
  { name: "Taco", price: 4.5 },
  { name: "Burrito", price: 9 },
  { name: "Nachos", price: 6.25 },
  { name: "Churro", price: 3 },
];


// ---------- Step 1: A for loop ----------
// Example: log every item's name.
for (let i = 0; i < menu.length; i++) {
  console.log("for loop:", menu[i].name);
}

// TODO: Write a for loop that logs every item's PRICE.


// ---------- Step 2: A sentence for each item ----------
// TODO: Write a for loop that logs a sentence for each item, like "Taco costs $4.5".
// Hint: menu[i].name + " costs $" + menu[i].price


// ---------- Step 3: Put the menu on the page ----------
// Same move as your Menu Card. Example: one item.
const menuText = document.querySelector("#menu-text");
menuText.textContent = "Example: " + menu[0].name;

// TODO: Use a for loop to show EVERY item on the page, with its name and price.
// Start with  menuText.textContent = "";  before the loop.
// Inside the loop, keep what's there and add more:
//   menuText.textContent = menuText.textContent + ... + "\n";
// Then delete the example line above.


// ---------- Step 4: A loop that adds up ----------
// TODO: Use a for loop to add up every price into a total. Log the total.
// Hint: start with  let total = 0;  then add each price inside the loop.


// ---------- Extra practice (if you finish early) ----------
// 1. Count how many items cost less than $5 (a loop + an if).
// 2. Find the most expensive item. Hint: start with  let most = menu[0];
//    then use a loop + an if to check each item's price.
