const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

const character = 
[
  {shape: "あ", luck: 3, color: "red"},
  {shape: "い", luck: 2, color: "blue"},
  {shape: "う", luck: 2, color: "green"},
  {shape: "え", luck: 2, color: "yellow"},
  {shape: "お", luck: 3, color: "black"},

  {shape: "か", luck: 3, color: "red"},
  {shape: "き", luck: 3, color: "blue"},
  {shape: "く", luck: 1, color: "green"},
  {shape: "け", luck: 3, color: "yellow"},
  {shape: "こ", luck: 2, color: "black"},

  {shape: "さ", luck: 2, color: "red"},
  {shape: "し", luck: 1, color: "blue"},
  {shape: "す", luck: 1, color: "green"},
  {shape: "せ", luck: 3, color: "yellow"},
  {shape: "そ", luck: 1, color: "black"},

  {shape: "た", luck: 4, color: "red"},
  {shape: "ち", luck: 2, color: "blue"},
  {shape: "つ", luck: 1, color: "green"},
  {shape: "て", luck: 1, color: "yellow"},
  {shape: "と", luck: 2, color: "black"},

  {shape: "な", luck: 4, color: "red"},
  {shape: "に", luck: 3, color: "blue"},
  {shape: "ぬ", luck: 2, color: "green"},
  {shape: "ね", luck: 2, color: "yellow"},
  {shape: "の", luck: 1, color: "black"},

  {shape: "は", luck: 3, color: "red"},
  {shape: "ひ", luck: 1, color: "blue"},
  {shape: "ふ", luck: 4, color: "green"},
  {shape: "へ", luck: 1, color: "yellow"},
  {shape: "ほ", luck: 4, color: "black"},

  {shape: "ま", luck: 3, color: "red"},
  {shape: "み", luck: 2, color: "blue"},
  {shape: "む", luck: 3, color: "green"},
  {shape: "め", luck: 2, color: "yellow"},
  {shape: "も", luck: 3, color: "black"},

  {shape: "ら", luck: 2, color: "red"},
  {shape: "り", luck: 2, color: "blue"},
  {shape: "る", luck: 1, color: "green"},
  {shape: "れ", luck: 2, color: "yellow"},
  {shape: "ろ", luck: 1, color: "black"},

  {shape: "や", luck: 3, color: "red"},
  {shape: "ゐ", luck: 1, color: "blue"},
  {shape: "ゆ", luck: 2, color: "green"},
  {shape: "ゑ", luck: 1, color: "yellow"},
  {shape: "よ", luck: 2, color: "black"},

  {shape: "わ", luck: 2, color: "white"},
  {shape: "を", luck: 3, color: "white"},
  {shape: "ん", luck: 1, color: "white"},

  {shape: "が", luck: 5, color: "red"},
  {shape: "ぎ", luck: 5, color: "blue"},
  {shape: "ぐ", luck: 3, color: "green"},
  {shape: "げ", luck: 5, color: "yellow"},
  {shape: "ご", luck: 4, color: "black"},

  {shape: "ざ", luck: 4, color: "red"},
  {shape: "じ", luck: 3, color: "blue"},
  {shape: "ず", luck: 4, color: "green"},
  {shape: "ぜ", luck: 5, color: "yellow"},
  {shape: "ぞ", luck: 3, color: "black"},

  {shape: "だ", luck: 6, color: "red"},
  {shape: "ぢ", luck: 4, color: "blue"},
  {shape: "づ", luck: 3, color: "green"},
  {shape: "で", luck: 3, color: "yellow"},
  {shape: "ど", luck: 4, color: "black"},

  {shape: "ば", luck: 5, color: "red"},
  {shape: "び", luck: 3, color: "blue"},
  {shape: "ぶ", luck: 6, color: "green"},
  {shape: "べ", luck: 3, color: "yellow"},
  {shape: "ぼ", luck: 6, color: "black"},

  {shape: "ぱ", luck: 4, color: "red"},
  {shape: "ぴ", luck: 2, color: "blue"},
  {shape: "ぷ", luck: 5, color: "green"},
  {shape: "ぺ", luck: 2, color: "yellow"},
  {shape: "ぽ", luck: 5, color: "black"},

  {shape: "ぁ", luck: 1, color: "white"},
  {shape: "ぃ", luck: 1, color: "white"},
  {shape: "ぅ", luck: 1, color: "white"},
  {shape: "ぇ", luck: 1, color: "white"},
  {shape: "ぉ", luck: 1, color: "white"},

  {shape: "ゃ", luck: 1, color: "white"},
  {shape: "ゅ", luck: 1, color: "white"},
  {shape: "ょ", luck: 1, color: "white"},
  {shape: "っ", luck: 1, color: "white"},

];

function str_length_floor(target_str, max_length){
  target_str.splice(target_str.length - max_length + 1, target_str.length - max_length);
  return target_str;
}

function check_char(target_str){
  let error = false;
  target_str.forEach(value => {
      character.find(id => id.shape === value)? null : error = true;
  });
  return error;
}

function get_char_info(target_str){
  let target_info = [];
  target_str.forEach(value => {
      target_info.push(character.find(id => id.shape === value));
  });
  return target_info;
}

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else if( num==3 ) luck = '小吉';
  else if( num==4 ) luck = '吉';
  else if( num==5 ) luck = '末吉';
  else if( num==6 ) luck = '凶';

  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  let result = 0;
  let judgement = '';

  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  switch(hand){
    case "グー":
      switch(cpu){
        case "グー":
          result = 0;
          break;
        case "チョキ":
          result = 1;
          break;
        case "パー":
          result = -1;
          break;
      }
      break;
    case "チョキ":
      switch(cpu){
        case "グー":
          result = -1;
          break;
        case "チョキ":
          result = 0;
          break;
        case "パー":
          result = 1;
          break;
      }
      break;
    case "パー":
      switch(cpu){
        case "グー":
          result = 1;
          break;
        case "チョキ":
          result = -1;
          break;
        case "パー":
          result = 0;
          break;
      }
      break;
  }
  // 今はダミーで人間の勝ちにしておく
  switch(result){
    case 1:
      judgement = "勝ち";
      win += 1;
      break;
    case 0:
      judgement = "引き分け";
      break;
    case -1:
      judgement = "負け";
      break;
  }
  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/seimei", (req, res) => {
  const split_num = 3;

  let first_name = req.query.first;
  let family_name = req.query.family;

  let first_str = first_name.split("");
  let family_str = family_name.split("");

  first_str = str_length_floor(first_str, split_num);
  family_str = str_length_floor(family_str, split_num);

  let error = check_char(first_str) || check_char(family_str);

  if(!error){
    first_info = get_char_info(first_str);
    family_info = get_char_info(family_str);

    let name_info = first_info.concat(family_info);

    let color_num = new Map; 
    name_info.forEach(id => {
        let count = -~color_num.get(id.color);
        color_num.set(id.color, count);
    });

    let max = 0;
    color_num.forEach(value => {
        value > max? max = value:null;
    });

    let max_color = new Map(Array.from(color_num).filter(value => 
      value[1] === max
    ));

    let colorful = max_color.size > 1;

    let luck_color = "";
    let strength_color = "";

    if(colorful === false){
      if      (max_color.has("red"))    {luck_color="赤色";}
      else if (max_color.has("blue"))   {luck_color="青色";}
      else if (max_color.has("green"))  {luck_color="緑色";}
      else if (max_color.has("yellow")) {luck_color="黄色";}
      else if (max_color.has("black"))  {luck_color="黒色";}
      else if (max_color.has("white"))  {luck_color="白色";}
    }
    else luck_color = "虹色";

    if(max <= 3)  strength_color = "薄い";
    else          strength_color = "濃い";

    let luck_total = name_info.reduce((sum, id) => {return sum + id.luck},0);
    let luck_power = "";

    if(luck_total <= 5) luck_power = "凶";
    else if(luck_total <= 10) luck_power = "吉";
    else if(luck_total <= 13) luck_power = "中吉";
    else luck_power = "大吉";

    const display = {
      first: first_str.join(""),
      family: family_str.join(""),
      color: luck_color,
      strength: strength_color,
      power: luck_power
    }
    res.render('seimei',display);
  }
  else {
    res.render('seimei_error');
  }
});

app.get("/day", (req, res) => {
  let date = req.query.date;
  let date_info = date.split("-");

  let year = Number(date_info[0]);
  let month = Number(date_info[1]);
  let days = Number(date_info[2]);
  
  let y = month<3? year-1:year;
  let Y = y%100;
  let m = month<3? month+12:month;
  let d = days;
  
  let _day1 = Y+Math.floor(Y/4)-2*Math.floor(y/100)+Math.floor(y/400);
  let _day2 = Math.floor((26*(m+1))/10)+d;
  let day_number = (_day1+_day2)%7;
  
  let day_name = "";

  switch(day_number){
    case 0:
      day_name = "土曜";
      break;
    case 1:
      day_name = "日曜";
      break;
    case 2:
      day_name = "月曜";
      break;
    case 3:
      day_name = "火曜";
      break;
    case 4:
      day_name = "水曜";
      break;
    case 5:
      day_name = "木曜";
      break;
    case 6:
      day_name = "金曜";
      break;
  }

  const display = {
    year: year,
    month: month,
    days: days,
    day: day_name
  };
  
  res.render('day',display);
}) 

app.listen(8080, () => console.log("Example app listening on port 8080!"));
