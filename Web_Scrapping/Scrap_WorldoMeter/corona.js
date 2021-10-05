const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, html){
    if(err){
        console.log(err);
    }
    else {
        handlehtml(html);
    }
}

function handlehtml(html){
    let $ = cheerio.load(html);
    let contArray = $(".maincounter-number");
    
    // for(let i = 0; i < contArray.length; i++){
    //     let data = console.log("data" + $(contArray[i]).text());
    // }
    
    let total = $(contArray[0]).text();
    let death = $(contArray[1]).text();
    let recovered = $(contArray[2]).text();
    console.log(chalk.gray("Total Cases : ", total));
    console.log(chalk.red("Total Deaths : ", death));
    console.log(chalk.green("Total Recovered : ", recovered));
}