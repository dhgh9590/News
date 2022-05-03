
let news = [];
let menu = document.querySelectorAll(".menu ul li");

menu.forEach((menus,index) => {
    menus.addEventListener("click",(event) => {
        event.preventDefault();
        for(let i=0; i<index;i++){
            menu[i].classList.remove("active");
        }
        menus.classList.add("active");
        getNewsByTopic(event);
    })
});

const getLatestNews = async(topic,menuText) => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=5`); //api주소
    let header = new Headers({"x-api-key" : "3K0SLW5UDazJsqaZhKmES2cDL0UcHWbmWnYWu2zWPgg"}); //api key

    await fetch(url,{headers:header})
            .then(res => res.json())
            .then((data) => {
                news = data.articles; //데이터를 받아서 news배열에 넣기
                render(news,menuText); //랜더 함수 생성후 news배열 파라미터로 전달
            });
    //console.log(news);
};

const getNewsByTopic = (event) => {
    menuText = event.target.textContent;
    let topic = menuText.toLowerCase();
    getLatestNews(topic,menuText);
}

const render = (news,menuText) => {
    let newsWrap = document.querySelectorAll(".news_wrap"); //들어가야할곳 변수선언
    news.forEach(function(item,index){
        //news데이터 마다 할 일, html 태그들 변수에 담기
        let newsHTML =`
            <div class="item">
                <a href="${item.link}" target="blink">
                    <div class="latest"><em>${menuText}</em></div>
                    <img src="${item.media}" alt="">
                    <div class="item_text">
                        <em class="date">${item.published_date}</em>
                        <h3 class="title">${item.title}</h3>
                    </div>
                    <div class="address"><em>${item.rights}</em></div>
                </a>
            </div>`;
        newsWrap[index].innerHTML = newsHTML;//변수에 담긴 html을 newsWrap에 할당
    });


}
getLatestNews("news","Latest");