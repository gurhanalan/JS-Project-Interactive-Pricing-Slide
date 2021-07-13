"use strict";

// +++++++++++++++++ Selections

const formEl = document.querySelector(".card__upper");
const rangeEl = document.querySelector("#price-range");
const periodCheckboxEl = document.querySelector("#billing");
const pageViewEl = document.querySelector(".card__upper__page-views");
const priceEl = document.querySelector(".card__upper__price");
const periodEl = document.querySelector(".card__upper__period");
const btnEl = document.querySelector(".card__lower__btn");

//  Variables
let range = undefined;
let yearlyBilling = false;

const priceList = {
    1: [50, 10],
    2: [75, 13],
    3: [100, 16],
    4: [125, 18],
    5: [150, 20],
};

console.log(periodCheckboxEl.checked);

periodCheckboxEl.addEventListener("change", () => {
    yearlyBilling = periodCheckboxEl.checked;
    console.log(yearlyBilling);
});

btnEl.addEventListener("click", () => {
    formEl.reset();
});
