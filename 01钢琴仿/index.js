let keyList = document.querySelectorAll('div');
let main = document.querySelector('main');


function createAudio(){
    for(let i=1;i<=9;i++){
        let temp=document.createElement('audio');
        temp.src=`notes/${i}.mp3`;
        main.appendChild(temp);
    }
}

function play(index) {
    document.querySelectorAll('audio')[index-1].play();
    console.log('play'+(index));
}
function stop(index) {
    document.querySelectorAll('audio')[index-1].pause();
    console.log('stop'+(index));
}




createAudio();

keyList.forEach(function (item, index, it) {
    item.onclick = function () {
        play(index+1);
    }
    item.addEventListener('mouseenter',function(){
        console.log('mouseenter'+(index+1))
        play(index+1);
    })
    // item.addEventListener('mouseleave',function(){
    //     console.log('mouseleave'+(index+1));
    //     stop(index+1);
    // })
})