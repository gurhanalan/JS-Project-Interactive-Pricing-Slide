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
let range = 3;
let yearlyBilling = false;
let page = 100;
let price = 16;

const priceList = {
    1: [50, 10],
    2: [75, 13],
    3: [100, 16],
    4: [125, 18],
    5: [150, 20],
};

// FUNCTIONS

function display() {
    if (yearlyBilling) {
        price = (price * 12 * 3) / 4;
        periodEl.innerHTML = "year";
    } else {
        periodEl.innerHTML = "month";
    }
    pageViewEl.innerHTML = page;
    priceEl.innerHTML = price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

console.log(periodCheckboxEl.checked);

periodCheckboxEl.addEventListener("change", () => {
    yearlyBilling = periodCheckboxEl.checked;
    [page, price] = priceList[range];
    display();
    console.log(yearlyBilling);
});

rangeEl.addEventListener("change", () => {
    range = rangeEl.value;

    console.log(range);
    console.log(priceList[range]);
    [page, price] = priceList[range];
    // if (yearlyBilling) {
    //     price = price * 12 * 0.75;
    // }
    display();
});

btnEl.addEventListener("click", () => {
    formEl.reset();
});
