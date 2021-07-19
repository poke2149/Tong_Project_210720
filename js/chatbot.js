var bgm0 = document.getElementById("chat_audio");
var chatbot_sound_main = document.getElementById("chatbot_sound");
//#region 
//우편배달부
let chatbot_list0 = [
    "chat_sound/우편1.mp3",
    "chat_sound/우편2.mp3",
    "chat_sound/우편3.mp3",
    "chat_sound/우편4.mp3",
    "chat_sound/누리집.mp3"
]
//프로게이머
let chatbot_list1 = [
    "chat_sound/프로1.mp3",
    "chat_sound/프로2.mp3",
    "chat_sound/프로3.mp3",
    "chat_sound/프로4.mp3",
    "chat_sound/누리집.mp3"
]
// 스마트팜
let chatbot_list2 = [
    "chat_sound/팜1.mp3",
    "chat_sound/팜2.mp3",
    "chat_sound/팜3.mp3",
    "chat_sound/팜4.mp3",
    "chat_sound/누리집.mp3"
]
//크리에이터
let chatbot_list3 = [
    "chat_sound/크리1.mp3",
    "chat_sound/크리2.mp3",
    "chat_sound/크리3.mp3",
    "chat_sound/크리4.mp3",
    "chat_sound/누리집.mp3"
]
//요리사
let chatbot_list4 = [
    "chat_sound/요리1.mp3",
    "chat_sound/요리2.mp3",
    "chat_sound/요리3.mp3",
    "chat_sound/요리4.mp3",
    "chat_sound/누리집.mp3"
]
//사서
let chatbot_list5 = [
    "chat_sound/사서1.mp3",
    "chat_sound/사서2.mp3",
    "chat_sound/사서3.mp3",
    "chat_sound/사서4.mp3",
    "chat_sound/누리집.mp3"
]
//드론
let chatbot_list6 = [
    "chat_sound/드론1.mp3",
    "chat_sound/드론2.mp3",
    "chat_sound/드론3.mp3",
    "chat_sound/드론4.mp3",
    "chat_sound/누리집.mp3"
]
// 캐릭터 디자이너
let chatbot_list7 = [
    "chat_sound/캐릭1.mp3",
    "chat_sound/캐릭2.mp3",
    "chat_sound/캐릭3.mp3",
    "chat_sound/캐릭4.mp3",
    "chat_sound/누리집.mp3"
]
//운동선수
let chatbot_list8 = [
    "chat_sound/운동1.mp3",
    "chat_sound/운동2.mp3",
    "chat_sound/운동3.mp3",
    "chat_sound/운동4.mp3",
    "chat_sound/누리집.mp3"
]
//환경
let chatbot_list9 = [
    "chat_sound/환경1.mp3",
    "chat_sound/환경2.mp3",
    "chat_sound/환경3.mp3",
    "chat_sound/환경4.mp3",
    "chat_sound/누리집.mp3"
]
//재난
let chatbot_list10 = [
    "chat_sound/재난1.mp3",
    "chat_sound/재난2.mp3",
    "chat_sound/재난3.mp3",
    "chat_sound/재난4.mp3",
    "chat_sound/누리집.mp3"
]
//헬스
let chatbot_list11 = [
    "chat_sound/헬스1.mp3",
    "chat_sound/헬스2.mp3",
    "chat_sound/헬스3.mp3",
    "chat_sound/헬스4.mp3",
    "chat_sound/누리집.mp3"
]
let current_chatbot;
//#endregion

// 메인이미지와 질문이미지 전환 변수
let flag_chat_main = [
    document.getElementById("select_chat"),
    document.getElementById("explanation_chat")
]
// 메인 이미지
let exp_list = [
    document.getElementById("exp0"),
    document.getElementById("exp1"),
    document.getElementById("exp2"),
    document.getElementById("exp3"),
    document.getElementById("exp4"),
    document.getElementById("top_img")
]
//#region 각이미지 변수 저장
// 끝번호 확인 필수!!
// 질문 리스트 이미지 0
// 질문을 선택 했을때 이미지 1
// 질문 설명 2
// 우체국
let chat_list0_0 = [
    "images/chatbot/1/1.png",
    "images/chatbot/1/2.png",
    "images/chatbot/1/3.png",
    "images/chatbot/1/4.png",
    "images/chatbot/1/5.png",
    "images/chatbot/1/5_a_link1.png",
    "images/chatbot/1/5_a_link2.png"
]
let chat_list0_1 = [
    "images/chatbot/1/1_2.png",
    "images/chatbot/1/2_2.png",
    "images/chatbot/1/3_2.png",
    "images/chatbot/1/4_2.png",
    "images/chatbot/1/5_2.png"
]
let chat_list0_2 = [
    "images/chatbot/1/1_a.png",
    "images/chatbot/1/2_a.png",
    "images/chatbot/1/3_a.png",
    "images/chatbot/1/4_a.png",
    "images/chatbot/1/5_a.png"
]
// 프로그래머
let chat_list1_0 = [
    "images/chatbot/2/1.png",
    "images/chatbot/2/2.png",
    "images/chatbot/2/3.png",
    "images/chatbot/2/4.png",
    "images/chatbot/2/5.png",
    "images/chatbot/2/5_a_link.png",
    "images/chatbot/top_img/top_02.png"
]
let chat_list1_1 = [
    "images/chatbot/2/1_2.png",
    "images/chatbot/2/2_2.png",
    "images/chatbot/2/3_2.png",
    "images/chatbot/2/4_2.png",
    "images/chatbot/2/5_2.png"
]
let chat_list1_2 = [
    "images/chatbot/2/1_a.png",
    "images/chatbot/2/2_a.png",
    "images/chatbot/2/3_a.png",
    "images/chatbot/2/4_a.png",
    "images/chatbot/2/5_a.png"
]
//스마트팜
let chat_list2_0 = [
    "images/chatbot/3/1.png",
    "images/chatbot/3/2.png",
    "images/chatbot/3/3.png",
    "images/chatbot/3/4.png",
    "images/chatbot/3/5.png",
    "images/chatbot/3/5_a_link1.png",
    "images/chatbot/3/5_a_link2.png",
    "images/chatbot/3/5_a_link3.png",
    "images/chatbot/3/5_a_link4.png",
    "images/chatbot/3/5_a_link5.png",
    "images/chatbot/top_img/top_07.png"
]
let chat_list2_1 = [
    "images/chatbot/3/1_2.png",
    "images/chatbot/3/2_2.png",
    "images/chatbot/3/3_2.png",
    "images/chatbot/3/4_2.png",
    "images/chatbot/3/5_2.png"
]
let chat_list2_2 = [
    "images/chatbot/3/1_a.png",
    "images/chatbot/3/2_a.png",
    "images/chatbot/3/3_a.png",
    "images/chatbot/3/4_a.png",
    "images/chatbot/3/5_a.png"
]
// 크리에이터
let chat_list3_0 = [
    "images/chatbot/4/1.png",
    "images/chatbot/4/2.png",
    "images/chatbot/4/3.png",
    "images/chatbot/4/4.png",
    "images/chatbot/4/5.png",
    "images/chatbot/4/5_a_link1.png",
    "images/chatbot/4/5_a_link2.png",
    "images/chatbot/top_img/top_11.png"
]
let chat_list3_1 = [
    "images/chatbot/4/1_2.png",
    "images/chatbot/4/2_2.png",
    "images/chatbot/4/3_2.png",
    "images/chatbot/4/4_2.png",
    "images/chatbot/4/5_2.png"
]
let chat_list3_2 = [
    "images/chatbot/4/1_a.png",
    "images/chatbot/4/2_a.png",
    "images/chatbot/4/3_a.png",
    "images/chatbot/4/4_a.png",
    "images/chatbot/4/5_a.png"
]
//요리사
let chat_list4_0 = [
    "images/chatbot/5/1.png",
    "images/chatbot/5/2.png",
    "images/chatbot/5/3.png",
    "images/chatbot/5/4.png",
    "images/chatbot/5/5.png",
    "images/chatbot/5/5_a_link1.png",
    "images/chatbot/5/5_a_link2.png",
    "images/chatbot/top_img/top_03.png"
]
let chat_list4_1 = [
    "images/chatbot/5/1_2.png",
    "images/chatbot/5/2_2.png",
    "images/chatbot/5/3_2.png",
    "images/chatbot/5/4_2.png",
    "images/chatbot/5/5_2.png"
]
let chat_list4_2 = [
    "images/chatbot/5/1_a.png",
    "images/chatbot/5/2_a.png",
    "images/chatbot/5/3_a.png",
    "images/chatbot/5/4_a.png",
    "images/chatbot/5/5_a.png"
]
// 사서
let chat_list5_0 = [
    "images/chatbot/6/1.png",
    "images/chatbot/6/2.png",
    "images/chatbot/6/3.png",
    "images/chatbot/6/4.png",
    "images/chatbot/6/5.png",
    "images/chatbot/6/5_a_link1.png",
    "images/chatbot/6/5_a_link2.png",
    "images/chatbot/6/5_a_link3.png",
    "images/chatbot/top_img/top_04.png"
]
let chat_list5_1 = [
    "images/chatbot/6/1_2.png",
    "images/chatbot/6/2_2.png",
    "images/chatbot/6/3_2.png",
    "images/chatbot/6/4_2.png",
    "images/chatbot/6/5_2.png"
]
let chat_list5_2 = [
    "images/chatbot/6/1_a.png",
    "images/chatbot/6/2_a.png",
    "images/chatbot/6/3_a.png",
    "images/chatbot/6/4_a.png",
    "images/chatbot/6/5_a.png"
]
// 드론
let chat_list6_0 = [
    "images/chatbot/7/1.png",
    "images/chatbot/7/2.png",
    "images/chatbot/7/3.png",
    "images/chatbot/7/4.png",
    "images/chatbot/7/5.png",
    "images/chatbot/7/5_a_link1.png",
    "images/chatbot/7/5_a_link2.png",
    "images/chatbot/7/5_a_link3.png",
    "images/chatbot/7/5_a_link4.png",
    "images/chatbot/top_img/top_08.png"
]
let chat_list6_1 = [
    "images/chatbot/7/1_2.png",
    "images/chatbot/7/2_2.png",
    "images/chatbot/7/3_2.png",
    "images/chatbot/7/4_2.png",
    "images/chatbot/7/5_2.png"
]
let chat_list6_2 = [
    "images/chatbot/7/1_a.png",
    "images/chatbot/7/2_a.png",
    "images/chatbot/7/3_a.png",
    "images/chatbot/7/4_a.png",
    "images/chatbot/7/5_a.png"
]
//캐릭터디자이너
let chat_list7_0 = [
    "images/chatbot/8/1.png",
    "images/chatbot/8/2.png",
    "images/chatbot/8/3.png",
    "images/chatbot/8/4.png",
    "images/chatbot/8/5.png",
    "images/chatbot/8/5_a_link1.png",
    "images/chatbot/8/5_a_link2.png",
    "images/chatbot/8/5_a_link3.png",
    "images/chatbot/8/5_a_link4.png",
    "images/chatbot/top_img/top_09.png"

]
let chat_list7_1 = [
    "images/chatbot/8/1_2.png",
    "images/chatbot/8/2_2.png",
    "images/chatbot/8/3_2.png",
    "images/chatbot/8/4_2.png",
    "images/chatbot/8/5_2.png"
]
let chat_list7_2 = [
    "images/chatbot/8/1_a.png",
    "images/chatbot/8/2_a.png",
    "images/chatbot/8/3_a.png",
    "images/chatbot/8/4_a.png",
    "images/chatbot/8/5_a.png"
]
//운동선수
let chat_list8_0 = [
    "images/chatbot/9/1.png",
    "images/chatbot/9/2.png",
    "images/chatbot/9/3.png",
    "images/chatbot/9/4.png",
    "images/chatbot/9/5.png",
    "images/chatbot/9/5_a_link.png",
    "images/chatbot/top_img/top_05.png"
]
let chat_list8_1 = [
    "images/chatbot/9/1_2.png",
    "images/chatbot/9/2_2.png",
    "images/chatbot/9/3_2.png",
    "images/chatbot/9/4_2.png",
    "images/chatbot/9/5_2.png"
]
let chat_list8_2 = [
    "images/chatbot/9/1_a.png",
    "images/chatbot/9/2_a.png",
    "images/chatbot/9/3_a.png",
    "images/chatbot/9/4_a.png",
    "images/chatbot/9/5_a.png"
]
//환경미화원
let chat_list9_0 = [
    "images/chatbot/10/1.png",
    "images/chatbot/10/2.png",
    "images/chatbot/10/3.png",
    "images/chatbot/10/4.png",
    "images/chatbot/10/5.png",
    "images/chatbot/10/5_a_link.png",
    "images/chatbot/top_img/top_06.png"
]
let chat_list9_1 = [
    "images/chatbot/10/1_2.png",
    "images/chatbot/10/2_2.png",
    "images/chatbot/10/3_2.png",
    "images/chatbot/10/4_2.png",
    "images/chatbot/10/5_2.png"
]
let chat_list9_2 = [
    "images/chatbot/10/1_a.png",
    "images/chatbot/10/2_a.png",
    "images/chatbot/10/3_a.png",
    "images/chatbot/10/4_a.png",
    "images/chatbot/10/5_a.png"
]
//재난관리
let chat_list10_0 = [
    "images/chatbot/11/1.png",
    "images/chatbot/11/2.png",
    "images/chatbot/11/3.png",
    "images/chatbot/11/4.png",
    "images/chatbot/11/5.png",
    "images/chatbot/11/5_a_link1.png",
    "images/chatbot/11/5_a_link2.png",
    "images/chatbot/11/5_a_link3.png",
    "images/chatbot/top_img/top_10.png"
]
let chat_list10_1 = [
    "images/chatbot/11/1_2.png",
    "images/chatbot/11/2_2.png",
    "images/chatbot/11/3_2.png",
    "images/chatbot/11/4_2.png",
    "images/chatbot/11/5_2.png"
]
let chat_list10_2 = [
    "images/chatbot/11/1_a.png",
    "images/chatbot/11/2_a.png",
    "images/chatbot/11/3_a.png",
    "images/chatbot/11/4_a.png",
    "images/chatbot/11/5_a.png"
]
//헬스케어
let chat_list11_0 = [
    "images/chatbot/12/1.png",
    "images/chatbot/12/2.png",
    "images/chatbot/12/3.png",
    "images/chatbot/12/4.png",
    "images/chatbot/12/5.png",
    "images/chatbot/12/5_a_link1.png",
    "images/chatbot/12/5_a_link2.png",
    "images/chatbot/top_img/top_12.png"
]
let chat_list11_1 = [
    "images/chatbot/12/1_2.png",
    "images/chatbot/12/2_2.png",
    "images/chatbot/12/3_2.png",
    "images/chatbot/12/4_2.png",
    "images/chatbot/12/5_2.png"
]
let chat_list11_2 = [
    "images/chatbot/12/1_a.png",
    "images/chatbot/12/2_a.png",
    "images/chatbot/12/3_a.png",
    "images/chatbot/12/4_a.png",
    "images/chatbot/12/5_a.png"
]
//#endregion
let chat_exp_list0; // chat 
let chat_exp_list1;
let chat_url_list = [];
change_chat_exp_list(localStorage.getItem("item"));
//각 직업별 함수
function change_chat_exp_list(num){
    if (num == 0)
    {
        exp_list[0].src = chat_list0_0[0];
        exp_list[1].src = chat_list0_0[1];
        exp_list[2].src = chat_list0_0[2];
        exp_list[3].src = chat_list0_0[3];
        exp_list[4].src = chat_list0_0[4];
        chat_exp_list0 = chat_list0_1;
        chat_exp_list1 = chat_list0_2;
        chat_url_list[0] = chat_list0_0[5];
        chat_url_list[1] = chat_list0_0[6];
        current_chatbot = chatbot_list0;
    }
    else if(num == 1){
        exp_list[0].src = chat_list1_0[0];
        exp_list[1].src = chat_list1_0[1];
        exp_list[2].src = chat_list1_0[2];
        exp_list[3].src = chat_list1_0[3];
        exp_list[4].src = chat_list1_0[4];
        exp_list[5].src = chat_list1_0[6];
        chat_exp_list0 = chat_list1_1;
        chat_exp_list1 = chat_list1_2;
        chat_url_list[0] = chat_list1_0[5];
        current_chatbot = chatbot_list1;
    }
    else if(num == 2){
        exp_list[0].src = chat_list2_0[0];
        exp_list[1].src = chat_list2_0[1];
        exp_list[2].src = chat_list2_0[2];
        exp_list[3].src = chat_list2_0[3];
        exp_list[4].src = chat_list2_0[4];
        exp_list[5].src = chat_list2_0[10];
        chat_exp_list0 = chat_list2_1;
        chat_exp_list1 = chat_list2_2;
        chat_url_list[0] = chat_list2_0[5];
        chat_url_list[1] = chat_list2_0[6];
        chat_url_list[2] = chat_list2_0[7];
        chat_url_list[3] = chat_list2_0[8];
        chat_url_list[4] = chat_list2_0[9];
        current_chatbot = chatbot_list2;
    }
    else if(num == 3){
        exp_list[0].src = chat_list3_0[0];
        exp_list[1].src = chat_list3_0[1];
        exp_list[2].src = chat_list3_0[2];
        exp_list[3].src = chat_list3_0[3];
        exp_list[4].src = chat_list3_0[4];
        exp_list[5].src = chat_list3_0[7];
        chat_exp_list0 = chat_list3_1;
        chat_exp_list1 = chat_list3_2;
        chat_url_list[0] = chat_list3_0[5];
        chat_url_list[1] = chat_list3_0[6];
        current_chatbot = chatbot_list3;
    }
    else if(num == 4){
        exp_list[0].src = chat_list4_0[0];
        exp_list[1].src = chat_list4_0[1];
        exp_list[2].src = chat_list4_0[2];
        exp_list[3].src = chat_list4_0[3];
        exp_list[4].src = chat_list4_0[4];
        exp_list[5].src = chat_list4_0[7];
        chat_exp_list0 = chat_list4_1;
        chat_exp_list1 = chat_list4_2;
        chat_url_list[0] = chat_list4_0[5];
        chat_url_list[1] = chat_list4_0[6];
        current_chatbot = chatbot_list4;
    }
    else if(num == 5){
        exp_list[0].src = chat_list5_0[0];
        exp_list[1].src = chat_list5_0[1];
        exp_list[2].src = chat_list5_0[2];
        exp_list[3].src = chat_list5_0[3];
        exp_list[4].src = chat_list5_0[4];
        exp_list[5].src = chat_list5_0[8];
        chat_exp_list0 = chat_list5_1;
        chat_exp_list1 = chat_list5_2;
        chat_url_list[0] = chat_list5_0[5];
        chat_url_list[1] = chat_list5_0[6];
        chat_url_list[2] = chat_list5_0[7];
        current_chatbot = chatbot_list5;
    }
    else if(num == 6){
        exp_list[0].src = chat_list6_0[0];
        exp_list[1].src = chat_list6_0[1];
        exp_list[2].src = chat_list6_0[2];
        exp_list[3].src = chat_list6_0[3];
        exp_list[4].src = chat_list6_0[4];
        exp_list[5].src = chat_list6_0[9];
        chat_exp_list0 = chat_list6_1;
        chat_exp_list1 = chat_list6_2;
        chat_url_list[0] = chat_list6_0[5];
        chat_url_list[1] = chat_list6_0[6];
        chat_url_list[2] = chat_list6_0[7];
        chat_url_list[3] = chat_list6_0[8];
        current_chatbot = chatbot_list6;
    }
    else if(num == 7){
        exp_list[0].src = chat_list7_0[0];
        exp_list[1].src = chat_list7_0[1];
        exp_list[2].src = chat_list7_0[2];
        exp_list[3].src = chat_list7_0[3];
        exp_list[4].src = chat_list7_0[4];
        exp_list[5].src = chat_list7_0[9];
        chat_exp_list0 = chat_list7_1;
        chat_exp_list1 = chat_list7_2;
        chat_url_list[0] = chat_list7_0[5];
        chat_url_list[1] = chat_list7_0[6];
        chat_url_list[2] = chat_list7_0[7];
        chat_url_list[3] = chat_list7_0[8];
        current_chatbot = chatbot_list7;
    }
    else if(num == 8){
        exp_list[0].src = chat_list8_0[0];
        exp_list[1].src = chat_list8_0[1];
        exp_list[2].src = chat_list8_0[2];
        exp_list[3].src = chat_list8_0[3];
        exp_list[4].src = chat_list8_0[4];
        exp_list[5].src = chat_list8_0[6];
        chat_exp_list0 = chat_list8_1;
        chat_exp_list1 = chat_list8_2;
        chat_url_list[0] = chat_list8_0[5];
        current_chatbot = chatbot_list8;
    }
    else if(num == 9){
        exp_list[0].src = chat_list9_0[0];
        exp_list[1].src = chat_list9_0[1];
        exp_list[2].src = chat_list9_0[2];
        exp_list[3].src = chat_list9_0[3];
        exp_list[4].src = chat_list9_0[4];
        exp_list[5].src = chat_list9_0[6];
        chat_exp_list0 = chat_list9_1;
        chat_exp_list1 = chat_list9_2;
        chat_url_list[0] = chat_list9_0[5];
        current_chatbot = chatbot_list9;
    }
    else if(num == 10){
        exp_list[0].src = chat_list10_0[0];
        exp_list[1].src = chat_list10_0[1];
        exp_list[2].src = chat_list10_0[2];
        exp_list[3].src = chat_list10_0[3];
        exp_list[4].src = chat_list10_0[4];
        exp_list[5].src = chat_list10_0[8];
        chat_exp_list0 = chat_list10_1;
        chat_exp_list1 = chat_list10_2;
        chat_url_list[0] = chat_list10_0[5];
        chat_url_list[1] = chat_list10_0[6];
        chat_url_list[2] = chat_list10_0[7];
        current_chatbot = chatbot_list10;
    }
    else if(num == 11){
        exp_list[0].src = chat_list11_0[0];
        exp_list[1].src = chat_list11_0[1];
        exp_list[2].src = chat_list11_0[2];
        exp_list[3].src = chat_list11_0[3];
        exp_list[4].src = chat_list11_0[4];
        exp_list[5].src = chat_list11_0[7];
        chat_exp_list0 = chat_list11_1;
        chat_exp_list1 = chat_list11_2;
        chat_url_list[0] = chat_list11_0[5];
        chat_url_list[1] = chat_list11_0[6];
        current_chatbot = chatbot_list11;
    }
}
let chat_yes = document.getElementById("exp_yes");
let chat_no = document.getElementById("exp_no");
let chat_q1_pos = document.getElementById("chat_q1_pos");
let chat_choice_exp0 = document.getElementById("choice_exp0");
let chat_choice_exp1 = document.getElementById("choice_exp1");
let chat_open = document.getElementById("open_img");
let chat_select = document.getElementById("choice_img");
let chat_closed = document.getElementById("close_img");
let explanation_txt = document.getElementById("explanation_txt");
let url_txt_list = [
    document.getElementById("url_txt0"),
    document.getElementById("url_txt1"),
    document.getElementById("url_txt2"),
    document.getElementById("url_txt3"),
    document.getElementById("url_txt4")
]
function init() {
    bgm0.muted = false;
    bgm0.volume = 1;
    bgm0.loop = false;
    chat_choice_exp0.style.display = "none";
    flag_chat_main[1].style.display = "none";
    chat_open.style.display = "none";
    chat_closed.style.display = "none";
    chat_select.style.display = "none";
    url_txt_list[0].style.display = "none";
    url_txt_list[1].style.display = "none";
    url_txt_list[2].style.display = "none";
    url_txt_list[3].style.display = "none";
    url_txt_list[4].style.display = "none";
    helth_care();
}// 초기 비활성화 이미지들
init();
function select_exp(num) {
    switch (num) {
        case 0:
            exp_onoff();
            init_select_img(0);
            chat_choice_exp0.src = chat_exp_list0[0];
            chat_choice_exp0.style.marginLeft = "28%";
            chat_choice_exp1.src = chat_exp_list0[0];
            explanation_txt.src = chat_exp_list1[0];
            pos_init();
            smartfram();
            dron();
            pause_all_sound();
            chatbot_play_sound(current_chatbot[0]);
            break;
        case 1:
            exp_onoff();
            init_select_img(1);
            chat_choice_exp0.src = chat_exp_list0[1];
            chat_choice_exp0.style.marginLeft = "25%";
            chat_choice_exp1.src = chat_exp_list0[1];
            explanation_txt.src = chat_exp_list1[1];
            pos_init();
            smartfram();
            creater();
            art();
            pause_all_sound();
            chatbot_play_sound(current_chatbot[1]);
            break;
        case 2:
            exp_onoff();
            init_select_img(2);
            chat_choice_exp0.src = chat_exp_list0[2];
            chat_choice_exp0.style.marginLeft = "25%";
            chat_choice_exp1.src = chat_exp_list0[2];
            explanation_txt.src = chat_exp_list1[2];
            pos_init();
            smartfram();
            creater();
            dron();
            art();
            pause_all_sound();
            chatbot_play_sound(current_chatbot[2]);
            break;
        case 3:
            exp_onoff();
            init_select_img(3);
            chat_choice_exp0.src = chat_exp_list0[3];
            chat_choice_exp0.style.marginLeft = "35%";
            chat_choice_exp1.src = chat_exp_list0[3];
            explanation_txt.src = chat_exp_list1[3];
            pos_init();
            smartfram();
            creater();
            dron();
            art();
            pause_all_sound();
            chatbot_play_sound(current_chatbot[3]);
            break;
        case 4:
            init_select_img();
            exp_onoff();
            url_check();// url 종류 개수 확인 함수
            chat_choice_exp0.src = chat_exp_list0[4];
            chat_choice_exp0.style.marginLeft = "25%";
            chat_choice_exp1.src = chat_exp_list0[4];
            explanation_txt.src = chat_exp_list1[4];
            pos_init();
            creater();
            dron();
            art();
            pause_all_sound();
            chatbot_play_sound(current_chatbot[4]);
            break;
    }
}
function pos_init(){
    if(localStorage.getItem("item") == 2){
        explanation_txt.style.marginTop = "25%";
        chat_q1_pos.style.marginTop = "99%";
        chat_yes.style.marginTop = "110%";
        chat_no.style.marginTop = "110%";
        chat_open.style.marginTop = "127%";
        chat_select.style.marginTop = "127%";
        chat_closed.style.marginTop = "140%";
    }
    if(localStorage.getItem("item") == 3 || localStorage.getItem("item") == 6){
        chat_q1_pos.style.marginTop = "88%";
        chat_yes.style.marginTop = "101%";
        chat_no.style.marginTop = "101%";
        chat_open.style.marginTop = "121%";
        chat_select.style.marginTop = "119%";
        chat_closed.style.marginTop = "135%";
    }

    if(localStorage.getItem("item") == 5){
        url_txt_list[2].style.marginTop = "48%";
        chat_q1_pos.style.marginTop = "68%";
        chat_yes.style.marginTop = "81%";
        chat_no.style.marginTop = "81%";
        chat_open.style.marginTop = "101%";
        chat_select.style.marginTop = "99%";
        chat_closed.style.marginTop = "115%";
    }

    if(localStorage.getItem("item") == 6){
        chat_q1_pos.style.marginTop = "101%";
        chat_yes.style.marginTop = "115%";
        chat_no.style.marginTop = "115%";
        chat_open.style.marginTop = "130%";
        chat_select.style.marginTop = "130%";
        chat_closed.style.marginTop = "141%";
    }
    if(localStorage.getItem("item") == 11){
        chat_choice_exp0.style.width = "50%";
        chat_choice_exp1.style.width = "50%";

        chat_choice_exp0.style.marginLeft = "37%";
        chat_choice_exp1.style.marginLeft = "47%";
    }
}
function url_check(){
    url_txt_list[0].style.display = "block";
    url_txt_list[0].src = chat_url_list[0];

    if(chat_url_list[1] != null){
        chat_q1_pos.style.marginTop = "59%";
        chat_yes.style.marginTop = "72%";
        chat_no.style.marginTop = "72%";
        chat_open.style.marginTop = "92%";
        url_txt_list[1].style.display = "block";
        url_txt_list[1].src = chat_url_list[1];
    }
    if(chat_url_list[2] != null){
        chat_q1_pos.style.marginTop = "90%";
        chat_yes.style.marginTop = "105%";
        chat_no.style.marginTop = "105%";
        chat_open.style.marginTop = "125%";
        chat_select.style.marginTop = "125%";
        chat_closed.style.marginTop = "138%";
        url_txt_list[2].style.display = "block";
        url_txt_list[2].src = chat_url_list[2];
    }
    if(chat_url_list[3] != null){
        url_txt_list[3].style.display = "block";
        url_txt_list[3].src = chat_url_list[3];
    }
    if(chat_url_list[4] != null){
        chat_q1_pos.style.marginTop = "96%";
        chat_yes.style.marginTop = "109%";
        chat_no.style.marginTop = "109%";
        url_txt_list[4].style.display = "block";
        url_txt_list[4].src = chat_url_list[4];
    }

    if(localStorage.getItem("item") == 6){
        url_txt_list[2].style.marginTop = "48%";
        url_txt_list[3].style.marginTop = "58%";
    }
    if(localStorage.getItem("item") == 7){
        url_txt_list[0].style.marginTop = "38%";
        url_txt_list[1].style.marginTop = "48%";
        url_txt_list[2].style.marginTop = "58%";
        url_txt_list[3].style.marginTop = "68%";
    }
    if(localStorage.getItem("item") == 10){
        url_txt_list[2].style.marginTop = "48%";
    }
}
// 네 더알고 싶어요 / 아니요 이미지 칸 위치 보정
function init_select_img(num){
    chat_q1_pos.style.marginTop = "64%";
    chat_yes.style.marginTop = "77%";
    chat_no.style.marginTop = "77%";
    chat_open.style.marginTop = "97%";
    chat_select.style.marginTop = "95%";
    chat_closed.style.marginTop = "111%";

    if(num == 0 && localStorage.getItem("item") == 3){
        chat_q1_pos.style.marginTop = "85%";
        chat_yes.style.marginTop = "100%";
        chat_no.style.marginTop = "100%";
        chat_open.style.marginTop = "115%";
        chat_select.style.marginTop = "115%";
        chat_closed.style.marginTop = "131%";    
    }
    else if(num == 1 && localStorage.getItem("item") == 3){
        chat_q1_pos.style.marginTop = "55%";
        chat_yes.style.marginTop = "70%";
        chat_no.style.marginTop = "70%";
        chat_open.style.marginTop = "85%";
        chat_select.style.marginTop = "85%";
        chat_closed.style.marginTop = "101%";    
    }
    else if(num == 0 || num == 1 && localStorage.getItem("item") == 4){
        chat_q1_pos.style.marginTop = "70%";
        chat_yes.style.marginTop = "84%";
        chat_no.style.marginTop = "84%";
        chat_open.style.marginTop = "103%";
        chat_select.style.marginTop = "103%";
        chat_closed.style.marginTop = "121%";    
    }
    else if(num == 1 && localStorage.getItem("item") == 6){
        chat_q1_pos.style.marginTop = "97%";
        chat_yes.style.marginTop = "110%";
        chat_no.style.marginTop = "110%";
        chat_open.style.marginTop = "125%";
        chat_select.style.marginTop = "125%";
        chat_closed.style.marginTop = "141%";    
    }
    else if(num == 1 && localStorage.getItem("item") == 7){
        chat_q1_pos.style.marginTop = "97%";
        chat_yes.style.marginTop = "110%";
        chat_no.style.marginTop = "110%";
        chat_open.style.marginTop = "125%";
        chat_select.style.marginTop = "125%";
        chat_closed.style.marginTop = "141%";    
    }
    else if(num == 1 && localStorage.getItem("item") == 10){
        chat_q1_pos.style.marginTop = "87%";
        chat_yes.style.marginTop = "100%";
        chat_no.style.marginTop = "100%";
        chat_open.style.marginTop = "115%";
        chat_select.style.marginTop = "115%";
        chat_closed.style.marginTop = "131%";    
    }
    else if((num == 4 || num == 2) && localStorage.getItem("item") == 10){
        chat_q1_pos.style.marginTop = "64%";
        chat_yes.style.marginTop = "77%";
        chat_no.style.marginTop = "77%";
        chat_open.style.marginTop = "97%";
        chat_select.style.marginTop = "95%";
        chat_closed.style.marginTop = "111%";  
    }
}
function change_exp(num){
    if(num == 0){
        pause_all_sound();
        chat_choice_exp0.style.display = "none";
        chat_open.style.display = "block";
        setTimeout(() => {
            url_txt_list[0].style.display = "none"; // url 링크
            url_txt_list[1].style.display = "none"; // url 링크
            url_txt_list[2].style.display = "none"; // url 링크
            url_txt_list[3].style.display = "none"; // url 링크
            url_txt_list[4].style.display = "none"; // url 링크
            chat_select.style.display = "none";
            chat_closed.style.display = "none";
            flag_chat_main[0].style.display = "block";
            flag_chat_main[1].style.display = "none";
            chat_open.style.display = "none";
        }, 700);
    }
    else if(num == 1){// 쳇봇 닫기 
        pause_all_sound();
        chat_select.style.display = "block";
        chat_closed.style.display = "block";
        setTimeout(() => {
            clearLocalStorage();
            window.close();
        }, 800);
    }
}
function helth_care() {
    if(localStorage.getItem("item") == 11){
        chat_choice_exp0.style.width = "45%";
        chat_choice_exp1.style.width = "50%";
        exp_list[2].style.marginTop = "73%";
        exp_list[3].style.marginTop = "83%";
        exp_list[4].style.marginTop = "93%";
    }
}// 헬스케어 질문 리스트 위치 보정 2번째 크기가 달라 따로 init작업이 필요
function smartfram(){
    if(localStorage.getItem("item") == 2){
        chat_q1_pos.style.marginTop = "70%";
        chat_yes.style.marginTop = "84%";
        chat_no.style.marginTop = "84%";
        chat_open.style.marginTop = "105%";
        chat_select.style.marginTop = "105%";
        chat_closed.style.marginTop = "121%";   
    }
}
function creater(){
    if(localStorage.getItem("item") == 3){
        chat_q1_pos.style.marginTop = "64%";
        chat_yes.style.marginTop = "77%";
        chat_no.style.marginTop = "77%";
        chat_open.style.marginTop = "98%";
        chat_select.style.marginTop = "98%";
        chat_closed.style.marginTop = "111%";   
    }
}
function dron(){
    if(localStorage.getItem("item") == 6){
        chat_q1_pos.style.marginTop = "83%";
        chat_yes.style.marginTop = "96%";
        chat_no.style.marginTop = "96%";
        chat_open.style.marginTop = "115%";
        chat_select.style.marginTop = "115%";
        chat_closed.style.marginTop = "127%";   
    }
}
function art(){
    if(localStorage.getItem("item") == 7){
        explanation_txt.style.marginTop = "25%";
        chat_q1_pos.style.marginTop = "90%";
        chat_yes.style.marginTop = "103%";
        chat_no.style.marginTop = "103%";
        chat_open.style.marginTop = "122%";
        chat_select.style.marginTop = "122%";
        chat_closed.style.marginTop = "134%";   
    }
}
function exp_onoff() {
    chat_choice_exp0.style.display = "block";
    setTimeout(() => {
        flag_chat_main[0].style.display = "none";
        flag_chat_main[1].style.display = "block";
    }, 700);
}
function clearLocalStorage() {
    localStorage.length;
    localStorage.key(0);
    localStorage.removeItem('item');
    localStorage.clear();
    localStorage.length;
}

function chatbot_play_sound(_url){
    bgm0.pause();
    bgm0.currentTime = 0;
    setTimeout(() => {
        chatbot_sound_main.pause();
        chatbot_sound_main.src = _url;
        chatbot_sound_main.currentTime = 0;
        chatbot_sound_main.muted = false;
        chatbot_sound_main.volume = 1;
        chatbot_sound_main.play();
    }, 700);
}

function pause_all_sound(){
    bgm0.pause();
    bgm0.currentTime = 0;
    chatbot_sound_main.pause();
    chatbot_sound_main.currentTime = 0;
}