var images=[];
var sImages = [];
var check_cuplank = document.getElementById("check_cup");
var bgm0 = document.getElementById("audio");
var effect_sound = document.getElementById("effect_sound2");

var cnt=0;
var num=0;
var sNum = 0;
var cnt2=0;

function show(){
    document.getElementById('checkImg1').style.display = "none";
    for(i=0; i<8; i++)
    {
        images[i]= "images/food/" + (i) +".png";
    }
    images.sort(function(a,b){return 0.5 - Math.random()});
    showImg(num)
}

show(0);

function showImg(num){
    
    if (cnt2 == 4) {
        document.getElementById('checkImg0').style.display = "none";
        check_cuplank.src = "images/cup/4_food.jpg";
        setTimeout(() => {
        console.log("a");
        document.getElementById('checkImg2').style.display = "none";
        document.getElementById('checkImg0').style.display = "block";

        }, 1500);

    }

    if( cnt2 == 7){
        document.getElementById('checkImg0').style.display = "none";
        document.getElementById('checkImg2').style.display = "block";
        check_cuplank.src = "images/cup/last_food.jpg";
        setTimeout(() => {
        console.log("a");
        document.getElementById('checkImg2').style.display = "none";
        document.getElementById('checkImg0').style.display = "block";

        }, 1500);
    }
    document.getElementById('image').src=images[num];
    document.getElementById('images').src=images[num+1];
    cnt2++
}

function change(n) {
    if(cnt2<8)
    {
        cnt++;
        if(n == 0)
            sImages[sNum++] = images[num];
        else
            sImages[sNum++] = images[num+1];
        num+=2;
        showImg(num);
        if(cnt == images.length/2){
            for(i=0; i<sImages.length; i++){
                images[i] = sImages[i];
                sImages[i] = null;
            }
            images.splice(cnt);
            cnt = 0;
            num = 0;
            sNum = 0;
            showImg(num);
        }
    }
    else{
        if(n == 0){
            choicefood(n);
        }
        else{
            choicefood(n);
            }
        
    }
}

function choicefood(ch){
    if(ch == 0){
        document.getElementById('checkImg0').remove();
        document.getElementById('checkImg1').style.display = "block";
        document.getElementById('last-img').src=images[num];
        bgm0.muted = true;
        effect_sound.currentTime = 0;
        effect_sound.muted = false;
        effect_sound.loop = false;
    }
    else{
        document.getElementById('checkImg0').remove();
        document.getElementById('checkImg1').style.display = "block";
        document.getElementById('last-img').src=images[num+1];
        bgm0.muted = true;
        effect_sound.currentTime = 0;
        effect_sound.muted = false;
        effect_sound.loop = false;
    }
} //최종 음식 선택