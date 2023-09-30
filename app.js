// SECTION arrays



let userInput = ''

let clickUpgrades = [
    {
        name: 'Ranch',
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'Water',
        price: 50,
        quantity: 0,
        multiplier: 5
    }
];

let automaticUpgrades = [
    {
        name: 'Friend',
        price: 500,
        quantity: 0,
        multiplier: 10
    },
    {
        name: 'Joey',
        price: 1000,
        quantity: 0,
        multiplier: 100
    }
];

let wings = 0;
// variable to store total amount of resource (wings) gotten through click upgrades


// SECTION functions

function eatWings() {
    // console.log(wings);
    wings++
    console.log(wings);


    clickUpgrades.forEach(clickUpgrade => {
        const multiplierTotal = clickUpgrade.multiplier * clickUpgrade.quantity
        wings += multiplierTotal
    })

    drawWings()

}

function drawWings() {
    const wingTotalElem = document.getElementById('wingTotal')
    wingTotalElem.innerText = wings
}


function buyRanch() {
    const ranch = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Ranch')
    if (wings >= 10) {
        ranch.quantity++
        wings -= ranch.price
        drawWings()
    }
}


function buyWater() {
    const water = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Water')
    if (wings >= 50) {
        water.quantity++
        wings -= water.price
        drawWings()
    }
}



function buyAFriend() {
    const friend = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Friend')
    if (wings >= friend.price) {
        friend.quantity++
        wings -= friend.price
        drawWings()
    }

}

function buyJoeyChestnut() {
    const joey = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Joey')
    if (wings >= joey.price) {
        joey.quantity++
        wings -= joey.price
        drawWings()
    }
}

function calculateAutoUpgrades() {
    automaticUpgrades.forEach(autoUpgrade => {
        const autoTotal = autoUpgrade.multiplier * autoUpgrade.quantity
        wings += autoTotal

        // console.log(autoUpgrade.name, 'is eating', autoTotal, 'wings')
    })
    drawWings()
}





setInterval(calculateAutoUpgrades, 3000);