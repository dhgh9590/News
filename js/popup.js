$(document).ready(function(){

    let myPopup = document.querySelector(".popup"),
    checkbox = document.querySelector("#popup"),
    popupclose = document.querySelector(".close");

    //쿠키 생성
    function setCookie(name,value,day){
        let date = new Date(); //현재 날짜 지정.
        date.setDate(date.getDate() + day);

        let mycookie = "";
        mycookie += name + "=" + value+";";
        mycookie += "Expires=" + date.toUTCString();

        document.cookie = mycookie; //쿠키 설정, 생성
    }
    //setCookie("OH.com","Main",3);//OH.com 쿠키의 이름

    //쿠키 삭제
    function delCookie(name){
        let date = new Date();

        date.setDate(date.getDate() - 1);

        let setCookie = "";

        setCookie += name+"=Main;";
        setCookie += "Expires=" + date.toUTCString();

        document.cookie = setCookie; //쿠키 설정, 생성
    }

    //쿠키 확인
    function checkCookie(name){
        let cookies = document.cookie.split(";");
        let visited = false; //방문 거짓

        for(let i in cookies){
            if(cookies[i].indexOf(name) > -1){
                visited = true;
            }
        }

        if(visited){
            //재방문
            myPopup.style.display = "none";
        }else{
            //신규방문
            myPopup.style.display = "block";
        }
    }
    checkCookie("OH.com");//OH.com 쿠키가 있는지 확인

    popupclose.addEventListener("click",function(){
        if(checkbox.checked){
            //체크가 되어 있다면 팝업을 다시 안보겠다. 팝업은 닫고, 쿠키 생성.
            setCookie("OH.com","Main",1); //하루 안보기 1,일주일 안보기 7
            myPopup.style.display = "none";
        }else{
            //체크를 하지 않는다면 팝업을 계속 본다.팝업은 닫고 , 쿠키 제거.
            myPopup.style.display = "none";
            delCookie("OH.com");
        }
    });
 });