const fs = require("fs")
const chalk = require("chalk")

const addClothes = (name,number)=>{
    const deliveries = loadDeliveries()
    const alreadySubmitted = deliveries.find((del)=>(del.name==name))
    if(number>20){
        return console.log(chalk.red("Number of clothes cannot be greater than 20"))
    }
    
    if(deliveries.length>3){
        return console.log(chalk.red("As we are in high demand , laundry is full , so we request you to come tommorow"))
    }
    
    if (!alreadySubmitted){
        deliveries.push({
            name:name, 
            number : number 
        })
        console.log(chalk.green("Your submission of " + number + " clothes for laundry has been received"))
    }
    else{
        console.log(chalk.red("You have already submitted clothes for Washing"))
    }
    saveDeliveries(deliveries)
}

const collectClothes = (name)=>{
    const deliveries = loadDeliveries()
    const deliveriesPresent = deliveries.filter((del)=>del.name!=name)
    if (deliveries.length!=deliveriesPresent.length){
        console.log(chalk.green(chalk.bold(name + "'s") + " clothes have been washed and returned"))
    }
    else{
        console.log(chalk.red("You have not submitted clothes yet"))
    }
    saveDeliveries(deliveriesPresent) 
}

const viewDeliveries = ()=>{
    const deliveries = loadDeliveries()
    console.log(chalk.yellow("The Deliveries are : "))
    deliveries.forEach(delivery => {
        console.log(chalk.bold(delivery.name) + " has submitted " + chalk.bold(delivery.number) + " clothes")
    });
}

const loadDeliveries = ()=>{
    try{
        const dataBuffer = fs.readFileSync("deliveries.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    } 
}

const saveDeliveries = (deliveries)=> {
    const dataJSON = JSON.stringify(deliveries)
    fs.writeFileSync("deliveries.json",dataJSON)
}

module.exports = {
    collectClothes : collectClothes , 
    addClothes : addClothes , 
    viewDeliveries : viewDeliveries
}