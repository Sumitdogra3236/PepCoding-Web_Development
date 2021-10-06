// To find the Highest Wicket Taker
const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard", cb);

function cb(err, res, html){
    if(err){
        console.log(err);
    }
    else {
        hwt(html);
    }
}

function hwt(html){
    let $ = cheerio.load(html);
    let teamArr = $(".match-info.match-info-MATCH .team");
    let wteamName;
    for(let i = 0; i < teamArr.length; i++){
        let hasclass = $(teamArr[i]).hasClass("team-gray");
        if(hasclass == false){
            wteamName = $(teamArr[i]).find(".name");
            wteamName = wteamName.text().trim();
            // console.log(wteamName);
        }
    }

    let inningArr = $(".card.content-block.match-scorecard-table .Collapsible");
    let inningHtml =  inningArr.html();
    
    for(let i = 0; i < inningArr.length; i++){
        let inningHtml = $(inningArr[i]).html();
        let teamNameEle = $(inningArr[i]).find(".header-title.label");
        teamName = teamNameEle.text();
        teamName = teamName.split("INNINGS");
        teamName = teamName[0].trim();
        if(teamName == wteamName){
            let bowlingtable = $(inningArr[i]).find(".table.bowler");
            let bowlingtablerows = bowlingtable.find("tr");
            
            for(let j = 0; j < bowlingtablerows.length; j++){
                // bowlingtablecols = bo
            }


        }

    }


}