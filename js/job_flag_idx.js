let video_style = document.getElementById("video_append");
streamvideo(localStorage.getItem("item"));
function streamvideo(num) {
    if (num == 0 || num == 1 || num == 4 || num == 5 || num == 8
        || num == 9 || num == 10 || num == 11 || num == 12 || num == 13) {
        video_style.src = "";
    }
    else if (num == 2) {
        video_style.src = "videos/smatrfram.mp4";
        video_style.style.width = "90%";
        video_style.style.marginTop = "-20%";
        video_style.style.marginLeft = "5.2%";
    }
    else if (num == 3) {
        video_style.src = "videos/create.mp4";
        video_style.style.width = "75%";
        video_style.style.marginTop = "-22%";
        video_style.style.marginLeft = "12.5%";
    }
    else if (num == 6) {
        video_style.src = "videos/dron.mp4";
        video_style.style.width = "90%";
        video_style.style.marginTop = "-20%";
        video_style.style.marginLeft = "5.2%";
    }
    else if (num == 7) {
        video_style.src = "videos/chracters.mp4";
        video_style.style.width = "90%";
        video_style.style.marginTop = "-20%";
        video_style.style.marginLeft = "5.2%";
    }
    clearLocalStorage();
}
function clearLocalStorage() {
    localStorage.length;
    localStorage.key(0);
    localStorage.removeItem('item');
    localStorage.clear();
    localStorage.length;
}
