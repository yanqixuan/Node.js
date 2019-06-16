const request = require('./request');

module.exports = (keyWord) =>{
  keyWord = encodeURIComponent(keyWord);
  const url = 'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + keyWord  ;
  return request(url);  //promise
  // return keyWord;
}