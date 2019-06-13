const $ = require('cheerio');
const puppeteer = require('puppeteer');
const url = "https://juejin.im/books";

async function run() {
  const browser = await puppeteer.launch({
    headless:false
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUnitl: 'networkidle0'
  })
  // 拿出页面
  const html = await page.content();
  // console.log('html',html)
  // 分析页面
  const books = $('.info', html);
  let totalSold = 0
  let totalSale = 0
  let totalBooks = books.length
  // 遍历册子节点，分别统计它的购买人数，和销售额总和
  books.each(function () {
    const book = $(this)
    const price = $(book.find('.price-text')).text().replace('￥', '')
    const count = book.find('.message').last().find('span').text().split('人')[0]
    totalSale += Number(price) * Number(count)
    totalSold += Number(count)
  })

  // 最后打印出来
  console.log(
    `共 ${totalBooks} 本小册子`,
    `共 ${totalSold} 人次购买`,
    `约 ${Math.round(totalSale / 10000)} 万`
  )
    const evalResult = await page.evaluate(()=>{
      const node = document.querySelector('.poster-img');
      // 输出到puppeteer浏览器的控制台中
      console.log('这段文字来自 puppeteer')
      return node.dataset.src;
    });
    console.log('封面',evalResult)
}
run()