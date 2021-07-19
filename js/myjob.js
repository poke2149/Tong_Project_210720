let dduck = 0;
let adven = 0;
let hands = 0;
let kind = 0;
let strong = 0;
let sincere = 0;
var count = 0;
var obj = document.getElementById("str-question");
var que_finished_name = document.getElementById("str-finished");
var que_finished = document.getElementById("que-finish");
var explanation_obj = document.getElementById("str-explanation");
var chracter_obj = document.getElementById("character_img");
var chracter_name_obj = document.getElementById("character_name");
var audio_sorced = document.getElementById("job_sound");
var bgm0 = document.getElementById("audio");
var effect_sound = document.getElementById("effect_sound2");
var btn_effect = document.getElementById("btn_effect_music");

var flag_play_audio = false;
let job_sound_list = [
    "mp3/뚝딱이.mp3",
    "mp3/탐험이.mp3",
    "mp3/멋쟁이.mp3",
    "mp3/친절이.mp3",
    "mp3/씩씩이.mp3",
    "mp3/성실이.mp3"
]
let str_complate =[
    "뚝딱이","탐험이","멋쟁이","친절이","씩씩이","성실이"
]
let str_explanation =[
    "손재주가 있거나 만들기를 좋아해요. 만들기에 필요한 <br/><br/> 도구나 기계를 잘 다뤄요. 그리고 활동적이고 <br/><br/> 몸을 움직이는 것을 좋아해요. 뚝딱이는 솔직하고<br/><br/> 성실하면서도 수줍음이 많은 편이에요."
    ,"세심히 관찰하거나 합리적이며 정확한 것을 좋아해요. <br/><br/> 창의적이고 새로운 일에 도전하는 것도 좋아하죠.<br/><br/>그래서 탐험이는 논리적이며 탐구심, 독립성, 호기심이 <br/><br/> 많다는 이야기도 자주 들어요."
    ,"감정이 풍부하고 상상력이 좋아서 자신만의 세계로 <br/><br/> 빠져드는 것을 좋아해요. 스스로 옷과 머리를 멋있게 꾸미거나<br/><br/>독특한 방식으로 자신을 표현해요. 멋쟁이 중에는 <br/><br/> 글쓰기, 음악, 미술을 좋아하는 친구들이 많답니다."
    ,"친구와 즐겁고 사이좋게 지내고 함께 활동하는 것을 좋아해요. <br/><br/> 어려운 사람을 보면, 무엇을 도와줄까 생각하고 학교나<br/><br/>집에서 봉사하는 것을 잘하죠. 친절이는 이해심이 많고 <br/><br/> 따뜻한 마음을 가진 사람이에요."
    ,"수업 시간에 자신 있게 발표를 잘하고 모든 일을 열심히 해요. <br/><br/><br/> 친구들을 설득하고 이끄는 능력이 있어요.<br/><br/><br/>씩씩이는 사람들과 잘 어울리고, 모험심이 강한 사람이에요."
    ,"자신이 계획한 것을 꾸준히 실천하는 것을 좋아하고, <br/><br/> 노트에 기록, 정리하는 일을 잘해요. 성실이는 정직하고<br/><br/>계산하는 것 을 좋아하죠. 그리고 책임감도 강하고, <br/><br/> 친구들과 약속이나 학교 규칙과 질서도 잘 지키는 사람이에요."
]
let str_index = [
    "1.친구와 함께\n\u00A0\u00A0운동하는 것을\n\u00A0\u00A0좋아한다.",
    "2.수학문제를\n\u00A0\u00A0잘 푼다.",
    "3.친구에 비하여\n\u00A0\u00A0별난 생각을\n\u00A0\u00A0많이 한다.",
    "4.나보다 어려운\n\u00A0\u00A0사람을 도와주는\n\u00A0\u00A0것을 좋아한다.",
    "5.소풍이나\n\u00A0\u00A0학급행사에\n\u00A0\u00A0사회 보는 것을\n\u00A0\u00A0좋아한다.",
    "6.친구와의\n\u00A0\u00A0약속 시간을\n\u00A0\u00A0잘 지킨다.",
    "7.도구와 연장을\n\u00A0\u00A0잘 다루는\n\u00A0\u00A0편이다.",
    "8.호기심이 많아\n\u00A0\u00A0관찰하는 것을\n\u00A0\u00A0좋아한다.",
    "9.만들기와 그림을\n\u00A0\u00A0잘 그리는\n\u00A0\u00A0손재주가 있다.",
    "10.다른 친구의\n\u00A0\u00A0\u00A0어려움과\n\u00A0\u00A0\u00A0아픔을 보면\n\u00A0\u00A0\u00A0도와주고 싶다.",
    "11.사람들과\n\u00A0\u00A0\u00A0대화하는 것을\n\u00A0\u00A0\u00A0좋아한다.",
    "12.성격이\n\u00A0\u00A0\u00A0꼼꼼한 편이다.",
    "13.조립용\n\u00A0\u00A0\u00A0로봇이나\n\u00A0\u00A0\u00A0비행기를\n\u00A0\u00A0\u00A0잘 만든다.",
    "14.책을 빨리\n\u00A0\u00A0\u00A0읽는 편이다.",
    "15.글짓기를 잘\n\u00A0\u00A0\u00A0하는 편이다.",
    "16.스스로\n\u00A0\u00A0\u00A0봉사하는\n\u00A0\u00A0\u00A0시간이 즐겁다.",
    "17.학급 임원을\n\u00A0\u00A0\u00A0하는 것이\n\u00A0\u00A0\u00A0재미있다.",
    "18.준비물을\n\u00A0\u00A0\u00A0잊지 않고\n\u00A0\u00A0\u00A0챙겨간다.",
    "\u00A0\u00A0완료 클릭하여\n\u00A0\u00A0다음으로 넘어가\n\u00A0\u00A0주세요!"
];
let char_img_list = [];
let char_name = [];
function init(){
    obj.innerText = str_index[count];
    obj.style.top = "220%";
    que_finished.style.display = "none";
    for(i= 0; i<6; i++){
        char_img_list[i] = "images/btn/page7_1button/character/" + (i) + ".png";
    }
    for(i= 0; i<6; i++){
        char_name[i] = "images/btn/page7_1button/title/" + (i) + ".png";
    }
}
init();
// 마우스 클릭
function checklist(num){
    if(num == 0){
        if(count == 17){
            resultVal(num);
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            resultVal(num);
            obj.innerText = str_index[count];
            click_effect_btn_sound();
            txt_pos_controll();
        }
    }
    else if(num == 1){
        if(count == 17){
            resultVal(num);
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            resultVal(num);
            obj.innerText = str_index[count];
            click_effect_btn_sound();
            txt_pos_controll();
        }
    }
    else if(num == 2){
        if(count == 17)
        {
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            obj.innerText = str_index[count];
            click_effect_btn_sound();
            txt_pos_controll();
        }
    }
    console.log(dduck,adven,hands,kind,strong,sincere);
}
// 점수 result값
function resultVal(num){
    switch(num)
    {
        case 0:
            if (obj.innerText == str_index[0]
                || obj.innerText == str_index[6]
                || obj.innerText == str_index[12]) {
                dduck += 3;
            }
            else if (obj.innerText == str_index[1]
                || obj.innerText == str_index[7]
                || obj.innerText == str_index[13]) {
                adven += 3;
            }
            else if (obj.innerText == str_index[2]
                || obj.innerText == str_index[8]
                || obj.innerText == str_index[14]) {
                hands += 3;
            }
            else if (obj.innerText == str_index[3]
                || obj.innerText == str_index[9]
                || obj.innerText == str_index[15]) {
                kind += 3;
            }
            else if (obj.innerText == str_index[4]
                || obj.innerText == str_index[10]
                || obj.innerText == str_index[16]) {
                strong += 3;
            }
            else if (obj.innerText == str_index[5]
                || obj.innerText == str_index[11]
                || obj.innerText == str_index[17]) {
                sincere += 3;
            }
            break;
        case 1:
            if (obj.innerText == str_index[0]
                || obj.innerText == str_index[6]
                || obj.innerText == str_index[12]) {
                dduck += 1;
            }
            else if (obj.innerText == str_index[1]
                || obj.innerText == str_index[7]
                || obj.innerText == str_index[13]) {
                adven += 1;
            }
            else if (obj.innerText == str_index[2]
                || obj.innerText == str_index[8]
                || obj.innerText == str_index[14]) {
                hands += 1;
            }
            else if (obj.innerText == str_index[3]
                || obj.innerText == str_index[9]
                || obj.innerText == str_index[15]) {
                kind += 1;
            }
            else if (obj.innerText == str_index[4]
                || obj.innerText == str_index[10]
                || obj.innerText == str_index[16]) {
                strong += 1;
            }
            else if (obj.innerText == str_index[5]
                || obj.innerText == str_index[11]
                || obj.innerText == str_index[17]) {
                sincere += 1;
            }
            break;
        default:
            alert("error!!");
            break;
    }
}
function complatedCheck(){
    bgm0.muted = true;
    effect_sound.currentTime = 0;
    effect_sound.muted = false;
    effect_sound.loop = false;

    var maxValueArr = [dduck , adven, hands,kind,strong,sincere];
    var max = Math.max.apply(null,maxValueArr);
    switch(max){
        case dduck:
            chracter_obj.style.marginTop = "-40.5%";
            chracter_obj.src = char_img_list[0];
            chracter_name_obj.src = char_name[0];
            explanation_obj.innerHTML = str_explanation[0];
            audio_sorced.src = job_sound_list[0];
            break;
        case adven:
            chracter_obj.src = char_img_list[1];
            chracter_name_obj.src = char_name[1];
            explanation_obj.innerHTML = str_explanation[1];
            audio_sorced.src = job_sound_list[1];
            break;
        case hands:
            chracter_obj.src = char_img_list[2];
            chracter_name_obj.src = char_name[2];
            explanation_obj.innerHTML = str_explanation[2];
            audio_sorced.src = job_sound_list[2];
            break;
        case kind:
            chracter_obj.src = char_img_list[3];
            chracter_name_obj.src = char_name[3];
            explanation_obj.innerHTML = str_explanation[3];
            audio_sorced.src = job_sound_list[3];
            break;
        case strong:
            chracter_obj.src = char_img_list[4];
            chracter_name_obj.src = char_name[4];
            explanation_obj.innerHTML = str_explanation[4];
            audio_sorced.src = job_sound_list[4];
            break;
        case sincere:
            chracter_obj.src = char_img_list[5];
            chracter_name_obj.src = char_name[5];
            explanation_obj.innerHTML = str_explanation[5];
            audio_sorced.src = job_sound_list[5];
            break;
    }
}
function clearwindows(){
    document.getElementById("que-select").style.display = "none";
    que_finished.style.display = "block";
}
function play_sound(){
    flag_play_audio = !flag_play_audio;
    if(flag_play_audio){
        audio_sorced.play();
    }
    else{
        audio_sorced.pause();
        audio_sorced.currentTime = 0;
    }
}
function txt_pos_controll(){
    if(obj.innerText == str_index[1]){
        obj.style.top = "230%";
    }
    else if(obj.innerText == str_index[2]){
        obj.style.top = "200%";
    }
    else if(obj.innerText == str_index[11]){
        obj.style.top = "250%";
    }
    else if(obj.innerText == str_index[12]){
        obj.style.top = "180%";
    }
    else if(obj.innerText == str_index[13]){
        obj.style.top = "250%";
    }
    else if(obj.innerText == str_index[15]){
        obj.style.top = "210%";
    }
}
function click_effect_btn_sound(){
    btn_effect.pause();
    btn_effect.currentTime = 0;
    btn_effect.volume = 0.5;
    btn_effect.play();
}
