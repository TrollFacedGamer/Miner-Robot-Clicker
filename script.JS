let ore = 0
let oreValue = document.getElementById("oreValue")

function mine() {
    ore = ore + (buff1LvValue * 0.5)
    oreValue.innerText = ore
}
let buff1LvValue = 1
let buff2LvValue = 0
let buff3LvValue = 0
let buff4LvValue = 0
let buff5LvValue = 0

let buff1Lv = document.getElementById("buff1Lv")
let buff2Lv = document.getElementById("buff2Lv")
let buff3Lv = document.getElementById("buff3Lv")
let buff4Lv = document.getElementById("buff4Lv")
let buff5Lv = document.getElementById("buff5Lv")

setInterval("autoMine()", 5000);
function autoMine() {
    ore = ore + buff2LvValue * 1
    ore = ore + buff3LvValue * 10
    ore = ore + buff4LvValue * 50
    ore = ore + buff5LvValue * 150
    oreValue.innerText = ore
}
function buff1Upgrade() {
    if ( ore >= buffCost1value) {
        buff1LvValue = buff1LvValue + 1
        buff1Lv.innerText = buff1LvValue
        ore = ore - buffCost1value
        updateBuff1Cost()
        oreValue.innerText = ore
        buffLog("congratulationsn your Pickaxe Lv." + (buff1LvValue - 1) + " have being upgraded to Pickaxe Lv." + buff1LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff2Upgrade() {
    if (ore >= buffCost2value) {
        buff2LvValue = buff2LvValue + 1
        buff2Lv.innerText = buff2LvValue
        ore = ore - buffCost2value
        updateBuff2Cost()
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Drone Lv." + (buff2LvValue - 1) + " have being upgraded to Mining Drone Lv." + buff2LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff3Upgrade() {
    if (ore >= buffCost3value) {
        buff3LvValue = buff3LvValue + 1
        buff3Lv.innerText = buff3LvValue
        ore = ore - buffCost3value
        updateBuff3Cost()
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Robot Lv." + (buff3LvValue - 1) + " have being upgraded to Mining Robot Lv." + buff3LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff4Upgrade() {
    if (ore >= buffCost4value) {
        buff4LvValue = buff4LvValue + 1
        buff4Lv.innerText = buff4LvValue
        ore = ore - buffCost4value
        updateBuff4Cost()
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Mech Lv." + (buff4LvValue - 1) + " have being upgraded to Mining Mech Lv." + buff4LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff5Upgrade() {
    if (ore >= buffCost5value) {
        buff5LvValue = buff5LvValue + 1
        buff5Lv.innerText = buff5LvValue
        ore = ore - buffCost5value
        updateBuff5Cost()
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Machine Lv." + (buff5LvValue - 1) + " have being upgraded to Mining Machine Lv." + buff5LvValue)
    }
    else {
        WarningNoOre()
    }
}

let buffCost1 = document.getElementById("buffCost1")
let buffCost2 = document.getElementById("buffCost2")
let buffCost3 = document.getElementById("buffCost3")
let buffCost4 = document.getElementById("buffCost4")
let buffCost5 = document.getElementById("buffCost5")
let buffCost1value = 10
let buffCost2value = 50
let buffCost3value = 100
let buffCost4value = 200
let buffCost5value = 400
function updateBuff1Cost () {
    buffCost1value = buffCost1value + Math.round(buff1LvValue ** 1.35)
    updateBuffCostDisplay()
}
function updateBuff2Cost () {
    buffCost2value = buffCost2value + Math.round(buff2LvValue ** 1.35)
    updateBuffCostDisplay()
}
function updateBuff3Cost () {
    buffCost3value = buffCost3value + Math.round(buff3LvValue ** 1.35)
    updateBuffCostDisplay()
}
function updateBuff4Cost () {
    buffCost4value = buffCost4value + Math.round(buff4LvValue ** 1.35)
    updateBuffCostDisplay()
}
function updateBuff5Cost () {
    buffCost5value = buffCost5value + Math.round(buff5LvValue ** 1.35)
    updateBuffCostDisplay()
}

function updateBuffCostDisplay() {
    buffCost1.innerText = buffCost1value
    buffCost2.innerText = buffCost2value
    buffCost3.innerText = buffCost3value
    buffCost4.innerText = buffCost4value
    buffCost5.innerText = buffCost5value
}


let logSpaceUpgrade = document.getElementById("logSpaceUpgrade")
let logSpaceError = document.getElementById("logSpaceError")
let repeatedLogsUpgrade = 0
let repeatedLogsError = 0
function buffLog (buff) {
    if (logSpaceUpgrade.innerText = buff) {
        repeatedLogsUpgrade = repeatedLogsUpgrade + 1
        logSpaceUpgrade.innerText = repeatedLogsUpgrade + buff
    }
    else {
        repeatedLogsError = 1
        logSpaceUpgrade.innerText = repeatedLogsUpgrade + buff
    }
}
function WarningNoOre() {
    if (logSpaceError.innerText = "insufficient ore") {
        repeatedLogsError = repeatedLogsError + 1
        logSpaceError.innerText = repeatedLogsError + "insufficient ore"
    }
    else {
        repeatedLogsError = 1
        logSpaceError.innerText = repeatedLogsError + "insufficient ore"
    }
}
