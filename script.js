document.body.addEventListener('keydown', (event)=>{
    var w= new Audio('sounds/sound1.mp3');
    var a= new Audio('sounds/sound2.mp3');
    var s= new Audio('sounds/sound3.mp3');
    var d= new Audio('sounds/sound4.mp3');
    var j= new Audio('sounds/sound5.mp3');
    var k= new Audio('sounds/sound6.mp3');
    var l= new Audio('sounds/sound6.mp3');


    if (event.key==='w'){
        w.play();
    }
    if(event.key==='a'){
a.play();
    }
    if(event.key==='s'){
        s.play();
    }
    if(event.key==='d'){
        d.play();
    }
    if(event.key==='j'){
        j.play();
    }
    if(event.key==='k'){
        k.play();
    } if(event.key==='l'){
        l.play();
    }
})