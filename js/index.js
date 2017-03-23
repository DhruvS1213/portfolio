document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('chatSend').innerHTML = 'Start Chat';
    document.getElementById('userInput').style.visibility = 'hidden';
    setTimeout(function() {
        Typed.new('.nameIntro', {
        strings: ["Hi, my name is DHRUV."],
        typeSpeed: 30,
        callback: function() {}
    });
    }, 0);

    setTimeout(function() {
        Typed.new('.workIntro', {
        strings: ["I am a Full-Stack Web Developer", 'I develop web applications using Javascript and NodeJS', 'I possess keen interest in Digital Solutions'],
        typeSpeed: 30,
        backDelay: 750,
        loopCount: 3,
        loop: true,
        callback: function(){
            
        }
    })
    },2000);

    setTimeout(function() {
        document.getElementById('download-resume-button').style.visibility = 'visible';
    }, 4000);

      

  });

var chatSequence = 0;
var chatTexts = ["May I have your name first?", "Hi ! please enter your message", "Also please provide your email-id !","Thank you for contacting"];
var chatText = '';
var element = '';
var uelement = '';

 function startChat() {
     console.log('start');
     chatText = chatTexts[chatSequence];
     
     if(chatSequence != 0 ){
        uelement = 'umsg' + (chatSequence+1);
        console.log(uelement);
        document.getElementById(uelement).innerHTML = document.getElementById('userInput').value;
     }

     if(chatSequence == 1){
        document.getElementById('chatSend').innerHTML = 'Send'
        var name = document.getElementById('userInput').value.split(' ')[0];
        var temp = chatTexts[chatSequence].split('!')[0] + name + '!! ';
        var chatText = temp + chatTexts[chatSequence].split('!')[1];
     }

     

     element = '.chat' + (chatSequence+1);
     console.log(element);
     console.log(chatText);
     setTimeout(function(){
        Typed.new(element, {
            strings: [chatText],
            typeSpeed: 30,
            callback: function() {
                chatSequence += 1;
                if(chatSequence == 3){
                    console.log('here');
                    document.getElementById('userInput').style.visibility = 'hidden';
                    document.getElementById('chatSend').style.visibility = 'hidden';
                }
                document.getElementById('userInput').value = '';
                document.getElementById('userInput').style.visibility = 'visible';
            }
        });
     }, 500);
 }