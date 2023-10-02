// SECTION arrays



let userInput = ''

const clickUpgrades = [
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

const automaticUpgrades = [
    {
        name: 'Friend',
        price: 500,
        quantity: 0,
        multiplier: 10
    },
    {
        name: 'Joey Chestnut',
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
    // console.log(wings);
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

function clickUpgradeCount() {
    let total = 0
    clickUpgrades.forEach(clickUpgrade => {
        // drawWings()
        total += clickUpgrade.quantity * clickUpgrade.multiplier
    })
    const clickUpgradeElem = document.getElementById('clickUpgrades')
    clickUpgradeElem.innerText = total + 1
}

function autoUpgradeCount() {
    let total = 0
    automaticUpgrades.forEach(autoUpgrade => {
        total += autoUpgrade.quantity * autoUpgrade.multiplier
    })
    const autoUpgradeElem = document.getElementById('automaticUpgrades')
    autoUpgradeElem.innerText = total
}


function buyRanch() {
    const ranch = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Ranch')
    if (wings >= ranch.price) {
        ranch.quantity++
        wings -= ranch.price
        drawWings()
        ranch.price *= 2
        clickUpgradeCount()
        drawRanch()
        // drawRanchUpgrade()
    }

}

function buyWater() {
    const water = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Water')
    if (wings >= water.price) {
        water.quantity++
        wings -= water.price
        clickUpgradeCount()
        drawWings()
        water.price *= 2
        drawWater()
    }
}



function buyAFriend() {
    const friend = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Friend')
    if (wings >= friend.price) {
        friend.quantity++
        wings -= friend.price
        drawWings()
        friend.price *= 2
        autoUpgradeCount()
        drawFriend()
    }

}

function buyJoeyChestnut() {
    const joey = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Joey Chestnut')
    if (wings >= joey.price) {
        joey.quantity++
        wings -= joey.price
        drawWings()
        joey.price *= 2
        autoUpgradeCount()
        drawJoey()
    }
}

function calculateAutoUpgrades() {
    automaticUpgrades.forEach(autoUpgrade => {
        const autoTotal = autoUpgrade.multiplier * autoUpgrade.quantity
        let autoUpgradeElem = document.getElementById
        wings += autoTotal

        // console.log(autoUpgrade.name, 'is eating', autoTotal, 'wings')
    })
    drawWings()
}


function drawRanch() {
    let ranchElem = document.getElementById('Ranch')
    let statsElem = ranchElem.querySelector('.clickStats')

    let ranch = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Ranch')
    statsElem.innerText = `Qty: ${ranch.quantity} | ${ranch.name} | Price: ${ranch.price}🍗`


}

function drawWater() {
    const waterElem = document.getElementById('Water')
    const statsElem = waterElem.querySelector('.clickStats')

    const water = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Water')
    statsElem.innerText = `Qty: ${water.quantity} | ${water.name} |Price: ${water.price}🍗`
}

function drawFriend() {
    const friendElem = document.getElementById('Friend')
    const statsElem = friendElem.querySelector('.autoStats')

    const friend = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Friend')
    statsElem.innerText = `Qty: ${friend.quantity} | ${friend.name} |Price: ${friend.price}🍗`
}

function drawJoey() {
    const joeyElem = document.getElementById('Joey Chestnut')
    const statsElem = joeyElem.querySelector('.autoStats')

    const joey = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Joey Chestnut')
    statsElem.innerText = `Qty: ${joey.quantity} | ${joey.name} |Price: ${joey.price}🍗`
}

// function clickUpgradeCount() {

// }

// clickUpgradeCount()
setInterval(calculateAutoUpgrades, 3000);