var req = new XMLHttpRequest();
req.open("GET","./json/image_list.json");
req.onreadystatechange = function(){
    if(this.readyState==4){
        //console.log(this.response);
        var data = JSON.parse(this.response);
        const mainDiv = document.getElementById("main-itemList");
        
        for(var i = 0; i < data.length;i++){
            var imgDivList = document.createElement("div");
            
            imgDivList.setAttribute("class","image");
            
            var img = document.createElement("img");
                
                img.src = data[i];
            
                mainDiv.appendChild(imgDivList);
            
                imgDivList.appendChild(img);
        }
    }
}
req.send();


function MoveWay(){
    location.href="way.html";
}
function showPopup() { 
   alert("오픈 준비 중입니다.");
     }
const goNewsBtn = document.getElementById("newsBtn");
function MoveNewsPage(){
    location.href="News.html";
}
goNewsBtn.addEventListener("click",MoveNewsPage);