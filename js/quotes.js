const quotes = [
    {
        quote: "날지 않는 돼지는 그냥 돼지일 뿐이야",
        author: "<붉은 돼지>"
    },
    {
        quote: "원하는 걸 포기한다면 그것은 원하는 게 아니다",
        author: "<폼포코 너구리 대작전>"
    },
    {
        quote: "오늘이 안 되면 내일이 있다. 언제라도 내일은 있다",
        author: "<추억은 방울방울>"
    },
    {
        quote: "한 번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이다",
        author: "<센과 치히로의 행방불명>"
    },
    {
        quote: "너는 너 자신이 되어야 해",
        author: "<고양이의 보은>"
    },
    {
        quote: "역시 난 그녀를 늘 좋아했었다고 그렇게 느낀 순간이었다",
        author: "<바다가 들린다>"
    },
    {
        quote: "좋아, 시즈쿠 네가 믿는 대로 살아 보렴. 하지만 남달리 사는 건 쉽지 않을 거야. 누구 탓도 할 수 없거든",
        author: "<귀를 기울이면>"
    },
    {
        quote: "푸른 옷을 입고 황금 벌판에 내려선 자, 잃어버린 대지와의 인연을 다시 맺어 우리를 푸른 대지로 인도하리라",
        author: "<바람계곡의 나우시카>"
    },
    {
        quote: "바람이 분다, 살아야겠다",
        author: "<폴 발레리>"
    },
    {
        quote: "작품에 가장 알맞은 사람을 찾아가다 보면 도착지는 언제나 히사이시 조였다",
        author: "<미야자키 하야오>"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;