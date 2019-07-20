const request = require('request');
const cheerio = require('cheerio');

request('https://www.smzdm.com/youhui/',(err,res)=>{
    if(!err){
        // console.log(res.body);
        const $ = cheerio.load(res.body,{
            decodeEntities:false        //不解析html中的entitie元素 Entities &nbsp
        });

        $('.list.list_preferential').each(function(){
            const price = $('.listTitle .red',this).text();
            const img = $('.picLeft img',this).attr('src');
            const desc = $('.lrInfo',this).text().trim();
            let title = $('.itemName a',this).html();
            title = title.replace(/<.*>/g,'');
            console.log({
                title,price,img,desc
            });
            // console.log(price);
        })

    }
})
