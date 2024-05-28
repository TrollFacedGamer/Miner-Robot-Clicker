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
    if ( ore >= 10) {
        buff1LvValue = buff1LvValue + 1
        buff1Lv.innerText = buff1LvValue
        ore = ore - 10
        oreValue.innerText = ore
        buffLog("congratulationsn your Pickaxe Lv." + buff1LvValue + "have being upgraded to Pickaxe Lv." + buff1LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff2Upgrade() {
    if (ore >= 50) {
        buff2LvValue = buff2LvValue + 1
        buff2Lv.innerText = buff2LvValue
        ore = ore - 50
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Drone Lv." + buff2LvValue + "have being upgraded to Mining Drone Lv." + buff2LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff3Upgrade() {
    if (ore >= 100) {
        buff3LvValue = buff3LvValue + 1
        buff3Lv.innerText = buff3LvValue
        ore = ore - 100
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Robot Lv." + buff3LvValue + "have being upgraded to Mining Robot Lv." + buff3LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff4Upgrade() {
    if (ore >= 200) {
        buff4LvValue = buff4LvValue + 1
        buff4Lv.innerText = buff4LvValue
        ore = ore - 200
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Mech Lv." + buff4LvValue + "have being upgraded to Mining Mech Lv." + buff4LvValue)
    }
    else {
        WarningNoOre()
    }
}
function buff5Upgrade() {
    if (ore >= 400) {
        buff5LvValue = buff5LvValue + 1
        buff5Lv.innerText = buff5LvValue
        ore = ore - 400
        oreValue.innerText = ore
        buffLog("congratulationsn your Mining Machine Lv." + buff5LvValue + "have being upgraded to Mining Machine Lv." + buff5LvValue)
    }
    else {
        WarningNoOre()
    }
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
