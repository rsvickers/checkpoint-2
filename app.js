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
// FIXME I need help with this.
// function clickUpgradeCount() {
//     clickUpgrades.forEach(clickUpgrade => {
//         const clickUpgradeElem = document.getElementById('clickUpgrade')
//         clickUpgradeElem.innerText = clickUpgrade.multiplier[0] += clickUpgrade.multiplier[1]
//         drawWings()
//     })
// }




function buyRanch() {
    const ranch = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Ranch')
    if (wings >= ranch.price) {
        ranch.quantity++
        wings -= ranch.price
        drawWings()
        ranch.price *= 2
        drawRanch()
        // drawRanchUpgrade()
    }

}

function buyWater() {
    const water = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Water')
    if (wings >= water.price) {
        water.quantity++
        wings -= water.price
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
    statsElem.innerText = `${ranch.quantity} | ${ranch.name} | ${ranch.price}🍗`


}

function drawWater() {
    const waterElem = document.getElementById('Water')
    const statsElem = waterElem.querySelector('.clickStats')

    const water = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Water')
    statsElem.innerText = `${water.quantity} | ${water.name} | ${water.price}🍗`
}

function drawFriend() {
    const friendElem = document.getElementById('Friend')
    const statsElem = friendElem.querySelector('.autoStats')

    const friend = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Friend')
    statsElem.innerText = `${friend.quantity} | ${friend.name} | ${friend.price}🍗`
}

function drawJoey() {
    const joeyElem = document.getElementById('Joey Chestnut')
    const statsElem = joeyElem.querySelector('.autoStats')

    const joey = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Joey Chestnut')
    statsElem.innerText = `${joey.quantity} | ${joey.name} | ${joey.price}🍗`
}

function clickUpgradeCount() {

}

// clickUpgradeCount()
setInterval(calculateAutoUpgrades, 3000);