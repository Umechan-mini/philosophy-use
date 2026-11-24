'use strict';
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const colorDivision = document.getElementById('color-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(　//イベント検知設定の追加
  'click',　//クリックイベント
  () => { //　=>無名関数でアロー関数、イベントを検知したら実行される
   
    //TODO 今日の言葉表示エリアの作成
    resultDivision.innerText = ''; //divタグを空文字で上書きすることで、空にしている。
    tweetDivision.innerText = ''; //tweetのdiveタグも空にする。
    colorDivision.innerText = ''; //colorの結果を空にする

    //headerDivisionの作成
    const headerDivision = document.createElement('div'); //divタグの作成
    headerDivision.setAttribute('class','card-header');
    headerDivision.innerText = '今日の言葉'; //タグの内側のテキストを設定

    //bodyDivisionの作成
    const bodyDivision = document.createElement('div');　//divタグの作成
    bodyDivision.setAttribute('class','card-body');

    const paragraph =document.createElement('P'); //pタグの作成
    paragraph.setAttribute('class','card-text');
    const result = assessment();　//今日の言葉を作成
    paragraph.innerText = result.quote; //pタグの内側のテキストを設定
    bodyDivision.appendChild(paragraph);　//divタグの子要素として追加

    //哲学者の名前を表示する
    const philosopherName = document.createElement('p');
    philosopherName.innerText = result.name;
    bodyDivision.appendChild(philosopherName);

    // resultDivision に　Bootstrapのスタイルを適用する
    resultDivision.setAttribute('class','card');

    // headerDivision　と　bodyDivision　をresultDivisionに差し込む
    resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);

    // ラッキーカラーを取得する
    const colorResult = luckyColor();

    // ラッキーカラーの見出しを作成する
    const colorHeading = document.createElement('p');
    colorHeading.innerText = '今日のラッキーカラー';
    colorDivision.appendChild(colorHeading);

   // 色見本を作成する
   const colorSample = document.createElement('div');
   colorSample.setAttribute('class','color-sample');
   colorSample.style.backgroundColor = colorResult.color;
   colorDivision.appendChild(colorSample);

   // 色の名前を表示する
   const colorName = document.createElement('p');
   colorName.innerText = colorResult.name;
   colorDivision.appendChild(colorName);


    //　共有ボタンの作成
    tweetDivision.innerText = ''; //SNS共有のdiveタグも空にする。

    const button = document.createElement('button');
    button.innerText = '今日の言葉をSNSで共有しよう';

    button.addEventListener('click', function() {
  if (navigator.share) {
    navigator.share({
      title: 'DAILY PHILOSOPHY',
      text: result.quote + '-' + result.name
    });
  } else {
    alert('共有機能が利用できません');
  }
});

tweetDivision.appendChild(button);
    
  }
);

const answers = [
  {
    name: 'エピクテトス',
    quote: '人を苦しめるのは、物事そのものではなく、それについての考え方である。'
  },
  {
    name: 'セネカ',
    quote: '私たちは現実よりも、想像の中で苦しむことのほうが多い。'
  },
  {
    name: 'ニーチェ',
    quote: '私を殺さないものは、私を強くする。'
  },
  {
    name: 'マルクス・アウレリウス',
    quote: 'あなたの人生の幸福は、あなたの思考の質にかかっている。'
  },
  {
    name: 'アリストテレス',
    quote: '友人とは、もう一人の自分である。'
  },
  {
    name: 'ルソー',
    quote: '生きるとは、呼吸することではなく、行動することである。'
  },
  {
    name: 'スピノザ',
    quote: '人間の行為を笑わず、嘆かず、憎まず、ただ理解すること。'
  },
  {
    name: 'カント',
    quote: '自分自身の悟性を用いる勇気を持て。'
  },
  {
    name: 'エピクロス',
    quote: '持っていないものを欲しがって、今持っているものを台無しにしてはならない。'
  },
  {
    name: 'モンテーニュ',
    quote: 'この世で最も偉大なことは、自分自身のものであることを知ることだ。'
  }
];

//哲学者の言葉をランダムに取得する関数
function assessment(){
  const index = Math.floor(Math.random() * answers.length);
  const result = answers[index]; //配列から答えを取得
  return result;
  //今日の言葉を返す
}

//カラーリスト
const colors = [
  { name: 'セージグリーン', color: '#9CAF88' },
  { name: 'ラベンダー', color: '#B4A1D1' },
  { name: 'スカイブルー', color: '#92BBD9' },
  { name: 'ローズピンク', color: '#DBA0A7' },
  { name: 'マスタード', color: '#D6B45A' },
  { name: 'テラコッタ', color: '#C58066' },
  { name: 'アイボリー', color: '#F5E9D4' },
  { name: 'ネイビー', color: '#354B66' },
  { name: 'モスグリーン', color: '#687A50' },
  { name: 'ボルドー', color: '#803D4D' }
];

// ラッキーカラーをランダムに取得する関数
function luckyColor(){
  const index = Math.floor(Math.random() * colors.length);
  const result = colors[index];
  return result;
}