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


function buyRanch() {
    const ranch = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Ranch')
    if (wings >= ranch.price) {
        ranch.quantity++
        wings -= ranch.price
        drawWings()
        drawRanch()
        ranch.price *= 2
    }

}


function buyWater() {
    const water = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Water')
    if (wings >= water.price) {
        water.quantity++
        wings -= water.price
        drawWings()
        drawWater()
        water.price *= 2
    }
}



function buyAFriend() {
    const friend = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Friend')
    if (wings >= friend.price) {
        friend.quantity++
        wings -= friend.price
        drawWings()
        drawFriend()
        friend.price *= 2
    }

}

function buyJoeyChestnut() {
    const joey = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Joey Chestnut')
    if (wings >= joey.price) {
        joey.quantity++
        wings -= joey.price
        drawWings()
        drawJoey()
        joey.price *= 2
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


function drawRanch() {
    const ranchElem = document.getElementById('Ranch')
    const statsElem = ranchElem.querySelector('.clickStats')

    const ranch = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Ranch')
    statsElem.innerText = `${ranch.quantity} | ${ranch.name}`
    drawWings()
}

function drawWater() {
    const waterElem = document.getElementById('Water')
    const statsElem = waterElem.querySelector('.clickStats')

    const water = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Water')
    statsElem.innerText = `${water.quantity} | ${water.name}`
}

function drawFriend() {
    const friendElem = document.getElementById('Friend')
    const statsElem = friendElem.querySelector('.autoStats')

    const friend = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Friend')
    statsElem.innerText = `${friend.quantity} | ${friend.name}`
}

function drawJoey() {
    const joeyElem = document.getElementById('Joey Chestnut')
    const statsElem = joeyElem.querySelector('.autoStats')

    const joey = automaticUpgrades.find(autoUpgrade => autoUpgrade.name == 'Joey Chestnut')
    statsElem.innerText = `${joey.quantity} | ${joey.name}`
}


// function upgradeRanch() {
//     clickUpgrades.forEach(ranch => {
//         ranch.price++

//     })
// }

// function restartMonsters(){
//     monsters.forEach(monster => {
//       monster.level++
//       monster.maxHealth = monster.maxHealth * monster.level
//       monster.health = monster.maxHealth
//     })

setInterval(calculateAutoUpgrades, 3000);