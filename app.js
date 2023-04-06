const yargs = require("yargs")
const laundry = require("./laundry.js")

yargs.command({
    command : "submit" ,
    describe : "submit clothes to the laundry",
    builder : {
        name : {
            describe : "Registration Number",
            demandOption : true ,
            type : "string"
        },
        number : {
            desribe : "Number of clothes" , 
            demandOption : true , 
            type : "number"
        }
    },
    handler:(argv) => laundry.addClothes(argv.name,argv.number)
})

yargs.command({
    command : "collect" ,
    describe : "Collect clothes from the laundry",
    builder : {
        name : {
            describe : "Registration Number",
            demandOption : true ,
            type : "string"
        }
    },
    handler:(argv)=>laundry.collectClothes(argv.name)
})

yargs.command({
    command : "view" ,
    describe : "View the Delivery",
    handler : ()=>laundry.viewDeliveries()
    
})

yargs.parse()