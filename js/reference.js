let href_down = [
    "pdf/기타1-마을 6종.pdf",
    "pdf/기타2-내가 좋아하는 것 카드.pdf"
]
let download_name = [
    "기타1-마을 6종",
    "기타2-내가 좋아하는 것 카드"
]
var link0 = document.getElementById("file0");
var link1 = document.getElementById("file1");


function init(){
    document.getElementById("home-ref-img").style.display = "none";
}
init();
function move_ref(){
    flag_change_windows(false);
    
}
function flag_change_windows(b_flag_window){
    b_flag_window = !b_flag_window;
    if(b_flag_window){
        setTimeout(() => {
            document.getElementById("home-main-img").style.display = "none";
            document.getElementById("home-ref-img").style.display = "block";
        }, 100);
    }else{
        setTimeout(() => {
            document.getElementById("home-ref-img").style.display = "block";
            document.getElementById("home-main-img").style.display = "none";
        }, 100);
    }
}

function clickdownload(){
        link0.href = href_down[0];
        link0.download = download_name[0];
        link1.href = href_down[1];
        link1.download = download_name[1];
        link1.click();
}

function back_home_page(){
    document.getElementById("home-ref-img").style.display = "none";
    document.getElementById("home-main-img").style.display = "block";
}
