var bgm1 = document.getElementById("audio");
var home_boice = document.getElementById("choice_sound");
var btn_effect = document.getElementById("btn_effect_music");

function init(){
    // bgm1.currentTime =  60;
    bgm1.muted = true;
    bgm1.muted = false;
    bgm1.volume = 0.15;
    result_sound();

    if(btn_effect){
        btn_effect.src = "mp3/btn.mp3";
    }
}
init();

function result_sound(){
    if(home_boice){
        home_boice.muted = false;
        home_boice.volume = 1;
    }

}

function click_effect_btn_sound(){
    btn_effect.pause();
    btn_effect.currentTime = 0;
    btn_effect.volume = 0.5;
    btn_effect.play();
}