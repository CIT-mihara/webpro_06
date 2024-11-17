# webpro_06
*2024/11/5*
[須田准教授のホームページ](https://www.sudalab.net/)

## このプログラムについて

<!--
コード全部を載せるのは邪道
※必要な部分だけ載せて文量を減らす
-->

このフォルダは'''app5.js'''を用いて，Webブラウザを通して様々なサービスを提供するためのものである．


このプログラムは，Webブラウザを用いてコンピュータとじゃんけんを行うものである．

以下に実行手順を記載する．
また，プログラムの大まかなフローチャートも記載する．
***
#### 実行手順
1. ```app5.js```を起動する
1. Webブラウザで```localhost:8080/public/janken.html```にアクセスする
1. 自分の手を入力する

***
#### フローチャート
```mermaid
flowchart TD;
start["開始"];
end1["終了"]
myhand["自分の手を取得"]
if1{"コンピュータの手に勝てるか?"}
if2{"同じ手か?"}
win["勝ち"]
lose["負け"]
draw["引き分け"]
result["結果を表示"]
match["試合数をカウント"]

start --> myhand --> if1

    if1 -->|yes| win --> result
    if1 -->|no| if2 

    if2 -->|yes| draw --> result
    if2 -->|no| lose --> result

result --> match --> end1

***

## ファイル一覧
ここでは，じゃんけんプログラム実行に関わるファイルについて紹介する．

ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面
views/janken.ejs | じゃんけんのテンプレートファイル