// To find the text of the last ball commentary.
const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary", cb);

function cb(err, res, html){
    if(err){
        console.log(err);
    }
    else {
        lbc(html);
    }
}

function lbc(html){
    let $ =  cheerio.load(html);
    let commentaryArr = $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    let lastBallCommentary_text = $(commentaryArr[0]).text();
    let lastBallCommentary_html = $(commentaryArr[0]).html();
    console.log(chalk.blue("Last Ball Commentary is : ",lastBallCommentary_text));
    console.log(chalk.yellow("Last Ball Commentary HTML is : ",lastBallCommentary_html)); 
}