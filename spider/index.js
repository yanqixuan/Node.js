const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio'); //服务端的 $ 符
const url = 'https://movie.douban.com/top250';
const imageDir = './images/';   //保存目录

function spiderMovies(start){
    https.get(url + `?start=${start}`,(res)=>{  //把返回的结果放入res
        res.setEncoding('utf-8');
        // 源源不断收到数据     收到一次触发data
        let html =''
        res.on('data',(chunk)=>{    //片段
            html += chunk;
            // console.log(chunk);
        });
        // 数据发完了
        res.on('end',()=>{
            // 可以使用  html
            const $ = cheerio.load(html);
            let movies =[];
            $('.item').each(function(){ //this 限制.item作用域之内查找      默认全局
                const picUrl = $('.pic a img',this).attr('src'); //拿到每一项类名为item 下的 pic 下的 a标签 下的 img标签下的 src属性
                // 名字
                const title = $('.title',this).text();
                // 评分
                const star = $('.info .star .rating_num',this).text();
                // 入库 ---
                // 详情
                const link = $('a',this).attr('href');
                const movie = { //拼装
                    title,star,link,picUrl
                }
                movies.push(movie);
                // console.log(picUrl);
                // downloadImg(picUrl);
            })
            // 保存到本地
            // 文件名上标识数据是第几页的
            saveLocalData(start/25,movies);
            // console.log(movies)
        })
    })
}

const dataDir = './moviesData/'

function saveLocalData(page,movies){
    // console.log(movies);
    fs.writeFile(dataDir + `data${page}.json`,JSON.stringify(movies),(err)=>{ //保存路径    需要保存的数据    回调函数
        if(!err){
            console.log('保存成功');
        } else {
            console.log(err);
        }
    })
}

function downloadImg(picUrl){
    https.get(picUrl,(res)=>{
        res.setEncoding('binary');
        let imageData = '';
        res.on('data',(chunk)=>{
            imageData += chunk;
        })
        res.on('end',()=>{  //提取出用 '/' 隔开的path的最后一部分
            fs.writeFile(imageDir + path.basename(picUrl),imageData,'binary',(err)=>{
                if(!err){
                    console.log('保存成功',path.basename(picUrl));
                }
            }) //写入文件
        })
    })
}

// es6 generate函数
function* doSpider(x){
    let start = 0;
    while(start < x){
        yield start
        // 告诉我们扒第几页
        spiderMovies(start);
        start += 25;
    }
}

for(let x of doSpider(250)){
    console.log('爬取第',x/25,'页');
}