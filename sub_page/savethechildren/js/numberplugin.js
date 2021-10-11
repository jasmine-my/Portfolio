$(document).ready(function(){
    let excuted = false;       //waypoint, animatenumber 라이브러리 사용
        $(`.sec3`).waypoint(function(){
            if(!excuted){
                $(`.numAni`).animateNumber({ number: 57670 },1500);
                excuted = true;
            }
        },
        {
            offset: '70%'
        }
    );
});

