var main_index_page = document.getElementById("index_main_page");
var bgm0 = document.getElementById("audio");
var btn_effect = document.getElementById("btn_effect_music");
var home_boice = document.getElementById("choice_sound");
var home_boice0 = document.getElementById("choice_sound1");
var home_next_item = document.getElementById("home_next_item");

var find_trevel_page = document.getElementById("find_my_trevel");
var like_trevel_page = document.getElementById("my_like_trevel");

function init(){
    if(home_next_item){
        home_next_item.style.display = "none";
    }
    if(like_trevel_page){
        like_trevel_page.style.display = "none";
    }
    bgm0.muted = false;
    bgm0.volume = 0.15;
    if(btn_effect){
        btn_effect.src = "mp3/btn.mp3";
    }
    result_sound_job();
}
init();
function result_sound_job(){
    if(home_boice0){ 
        home_boice0.currentTime = 0;
        home_boice0.muted = false;
        home_boice0.volume = 1;
    }
}
//메인 인덱스
function next_page_home(){
    if(home_boice){
        home_boice.muted = true;
        home_boice.currentTime = 0;
        home_boice.volume = 1;
        home_boice.muted = false;
    }
    main_index_page.style.display = "none";
    home_next_item.style.display = "block";
}

// 나를 찾는 여행
function next_page_like_trevel(){
    find_trevel_page.style.display = "none";
    like_trevel_page.style.display = "block";
}
function back_next_page_like_trevel(){
    like_trevel_page.style.display = "none";
    find_trevel_page.style.display = "block";
}
function click_effect_btn_sound(){
    btn_effect.pause();
    btn_effect.currentTime = 0;
    btn_effect.volume = 0.5;
    btn_effect.play();
}