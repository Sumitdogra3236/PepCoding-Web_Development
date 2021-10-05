const cheerio = require("cheerio");
const request = require("request");
const chalk = require("chalk");

request("https://www.espncricinfo.com/series/ipl-2021-1249214/rajasthan-royals-vs-mumbai-indians-51st-match-1254093/live-cricket-score", cb);

function cb(err, res, html){
    if(err){
        console.log(err);
    }
    else {
        scrapcricinfo(html);
    }
}


function scrapcricinfo(html){
    let $ = cheerio.load(html);
    let manofthematch = $(
      ".playerofthematch-player-detail .playerofthematch-name");
    console.log(chalk.blue("Man of the Match is : ",$(manofthematch).text()));
}