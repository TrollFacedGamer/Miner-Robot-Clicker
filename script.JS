//Audio
let music = new Howl({
    src: ['audios/emotional_piano.ogg'],
    autoplay: true, // start music immediately
    loop: true, // loop music endlessly
})
let soundMining = new Howl({
    src: ['audios/1965_glass-breaking-04.mp3'],
})
let soundPicaxe = new Howl({
    src: ['audios/knifesharpener2.mp3'],
})
let soundBeep = new Howl({
    src: ['audios/2052_beep-01.mp3'],
})
let soundShortBeep1 = new Howl({
    src: ['audios/1828_beep-short-01.mp3'],
})
let soundShortBeep2 = new Howl({
    src: ['audios/1829_beep-short-02.mp3'],
})
let soundMachine = new Howl({
    src: ['audios/2064_jackhammer-01.mp3'],
})
let soundWarning = new Howl({
    src: ['audios/warningbeep-Parking Garage Warning Buzzer 01.mp3'],
})

//Game
let ore = 0
let oreValue = document.getElementById("oreValue")

let clickingButtonImg = document.getElementById("clickingButtonImg")

function mine() {
    ore = ore + (buff1LvValue * 0.5)
    oreValue.innerText = ore
    clickingButtonImg.src = "images/mining.png"
    soundMining.play()
    setTimeout(() => {
        clickingButtonImg.src = "images/mine.png"
    }, 250);
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

let orePerClick = document.getElementById("orePerClick")
let orePerSecDrone = document.getElementById("orePerSecDrone")
let orePerSecRobot = document.getElementById("orePerSecRobot")
let orePerSecMech = document.getElementById("orePerSecMech")
let orePerSecMachine = document.getElementById("orePerSecMachine")
let orePerSecTotal = document.getElementById("orePerSecTotal")

setInterval("autoMine()", 5000);
function autoMine() {
    ore = ore + buff2LvValue * 1
    ore = ore + buff3LvValue * 10
    ore = ore + buff4LvValue * 50
    ore = ore + buff5LvValue * 150
    oreValue.innerText = ore
}
setInterval("updateOrePerSecTotal()", 500)
function updateOrePerSecTotal() {
orePerSecTotal.innerText = ((buff2LvValue * 1) + (buff3LvValue * 10) + (buff4LvValue * 50) + (buff5LvValue * 150))
}

function buff1Upgrade() {
    if ( ore >= buffCost1value) {
        buff1LvValue = buff1LvValue + 1
        buff1Lv.innerText = buff1LvValue
        ore = ore - buffCost1value
        updateBuff1Cost()
        oreValue.innerText = ore
        orePerClick.innerText = buff1LvValue * 0.5
        buffLog(
            "congratulationsn your Pickaxe Lv." + (buff1LvValue - 1) + " have being upgraded to Pickaxe Lv." + buff1LvValue,
            "congratulationsn your Pickaxe Lv." + (buff1LvValue - 2) + " have being upgraded to Pickaxe Lv." + (buff1LvValue - 1)
        )
        soundPicaxe.play()
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
        orePerSecDrone.innerText = buff2LvValue * 1
        buffLog(
            "congratulationsn your Mining Drone Lv." + (buff2LvValue - 1) + " have being upgraded to Mining Drone Lv." + buff2LvValue,
            "congratulationsn your Mining Drone Lv." + (buff2LvValue - 2) + " have being upgraded to Mining Drone Lv." + (buff2LvValue - 1)
            )
        soundShortBeep1.play()
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
        orePerSecRobot.innerText = buff3LvValue * 10
        buffLog(
            "congratulationsn your Mining Robot Lv." + (buff3LvValue - 1) + " have being upgraded to Mining Robot Lv." + buff3LvValue,
            "congratulationsn your Mining Robot Lv." + (buff3LvValue - 2) + " have being upgraded to Mining Robot Lv." + (buff3LvValue - 1)
            )
        soundShortBeep2.play()    
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
        orePerSecMech.innerText = buff4LvValue * 50
        buffLog(
            "congratulationsn your Mining Mech Lv." + (buff4LvValue - 1) + " have being upgraded to Mining Mech Lv." + buff4LvValue,
            "congratulationsn your Mining Mech Lv." + (buff4LvValue - 2) + " have being upgraded to Mining Mech Lv." + (buff4LvValue - 1),
            )
        soundBeep.play()
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
        orePerSecMachine.innerText = buff5LvValue * 150
        buffLog(
            "congratulationsn your Mining Machine Lv." + (buff5LvValue - 1) + " have being upgraded to Mining Machine Lv." + buff5LvValue, 
            "congratulationsn your Mining Machine Lv." + (buff5LvValue - 2) + " have being upgraded to Mining Machine Lv." + (buff5LvValue - 1)
        )
        soundMachine.play()
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

function buffLog (buff, ogBuff) {
    if (logSpaceUpgrade.innerText == repeatedLogsUpgrade + ogBuff) {
        repeatedLogsUpgrade = repeatedLogsUpgrade + 1
        logSpaceUpgrade.innerText = repeatedLogsUpgrade + buff
    }
    else {
        repeatedLogsUpgrade = 1
        logSpaceUpgrade.innerText = repeatedLogsUpgrade + buff
    }
}


function WarningNoOre() {
    if (logSpaceError.innerText == repeatedLogsError + "insufficient ore") {
        repeatedLogsError = repeatedLogsError + 1
        logSpaceError.innerText = repeatedLogsError + "insufficient ore"
    }
    else {
        repeatedLogsError = 1
        logSpaceError.innerText = repeatedLogsError + "insufficient ore"
    }
    soundWarning.play()
}


setInterval("updateBuffButton()", 500)
function updateBuffButton () {
    if (ore >= buffCost1value) {
        document.getElementById("buff1TButton").disabled = false;
    }
    else {
        document.getElementById("buff1TButton").disabled = true;
    }
    if (ore >= buffCost2value) {
        document.getElementById("buff2TButton").disabled = false;
    }
    else {
        document.getElementById("buff2TButton").disabled = true;
    }
    if (ore >= buffCost3value) {
        document.getElementById("buff3TButton").disabled = false;
    }
    else {
        document.getElementById("buff3TButton").disabled = true;
    }
    if (ore >= buffCost4value) {
        document.getElementById("buff4TButton").disabled = false;
    }
    else {
        document.getElementById("buff4TButton").disabled = true;
    }
    if (ore >= buffCost5value) {
        document.getElementById("buff5TButton").disabled = false;
    }
    else {
        document.getElementById("buff5TButton").disabled = true;
    }
}
toggleMusic = document.getElementById("toggleMusic")
function musicToggler() {
    if (toggleMusic.innerText == "mute") {      
        toggleMusic.innerText = "unmute"
        music.mute(true)
    }
    else {
        toggleMusic.innerText = "mute";
        music.mute(false);

    }
}

toggleSound = document.getElementById("toggleSound")
function soundToggler() {
    if (toggleSound.innerText == "mute") {      
        toggleSound.innerText = "unmute"
        soundMining.mute(true);
        soundPicaxe.mute(true);
        soundBeep.mute(true);
        soundShortBeep1.mute(true);
        soundShortBeep2.mute(true);
        soundMachine.mute(true);
        soundWarning.mute(true);
    }
    else {
        toggleSound.innerText = "mute"
        soundMining.mute(false);
        soundPicaxe.mute(false);
        soundBeep.mute(false);
        soundShortBeep1.mute(false);
        soundShortBeep2.mute(false);
        soundMachine.mute(false);
        soundWarning.mute(false);
    }
}