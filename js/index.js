var modal = document.getElementById('myModal');
var chatSequence = 0;
var chatTexts = ["May I have your name first?", "Hi ! please enter your message", "Also please provide your email-id !","Thank you for contacting"];
var chatText = '';
var element = '';
var uelement = '';
var chatSuper = document.getElementById('contact');
var chatIntro = document.getElementById('chatPrimaryInformation');
var chatSection = document.getElementById('contact-form');
var inputSection = document.getElementById('inputSection');

var userMessageObject = {name: '', email: '', message: ''};
var msgs = [];

var introElement = '<div id="chatPrimaryInformation"> <p>I have developed an interactive system to contact you. Please leave your mess </p> <button onclick="chat()" class="chatButton">Start Conversation</button></div>';

// inputSection.style.visibility = "hidden";

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



function chat() {
    chatIntro = document.getElementById('chatPrimaryInformation');
    var sendBtn = document.getElementById('chatSend');
    console.log('h');
    if(chatSequence == 0) {
        console.log('go here');
        chatIntro.remove();
        
        sendBtn.innerHTML = 'Send';
        sendBtn.style.visibility = 'visible';

        var p = "<p id='msg" + (chatSequence+1)+ "'" +"class= 'chatbox chat"+(chatSequence+1)+"'></p>";
        chatSection.insertAdjacentHTML('afterbegin', p);  
    }
    else {
     
        var prevChat = document.getElementById('msg'+chatSequence);
        var umsg = '<p class="chatbox uchat" id="umsg'+ (chatSequence+1) + '"' +'></p>';
        prevChat.insertAdjacentHTML('afterend', umsg);
        document.getElementById('umsg' + (chatSequence+1)).innerHTML = document.getElementById('userInput').value;
        msgs.push(document.getElementById('userInput').value);
        
        var nxtChat = document.getElementById('umsg' + (chatSequence+1));
        var nxtMsg = "<p id='msg" + (chatSequence+1)+ "'" +"class= 'chatbox chat"+(chatSequence+1)+"'></p>";
        nxtChat.insertAdjacentHTML('afterend', nxtMsg);
    }
    
    chatText = chatTexts[chatSequence];
    element = '.chat'+ (chatSequence+1);

     if(chatSequence == 1){
        
        var name = document.getElementById('userInput').value.split(' ')[0];
        var temp = chatTexts[chatSequence].split('!')[0] + name + '!! ';
        var chatText = temp + chatTexts[chatSequence].split('!')[1];
     }

    setTimeout(function(){
         Typed.new(element, {
            strings: [chatText],
            typeSpeed: 30,
            callback: function() {
                chatSequence += 1;
                if(chatSequence == 0){
                    inputSection.style.visibility = "visible";
                    document.getElementById('chatSend').style.visibility = 'visible';
                }
                if(chatSequence == 4){
                    console.log('here');
                    document.getElementById('userInput').style.visibility = 'hidden';
                    document.getElementById('chatSend').style.visibility = 'hidden';
                    console.log(msgs);
                    userMessageObject.name = msgs[0];
                    userMessageObject.email = msgs[2];
                    userMessageObject.message = msgs[1];
                    console.log(userMessageObject);
                    
                    document.getElementById('uemail').value = userMessageObject.email;
                    document.getElementsById('umessage').value = userMessageObject.message;
                    document.forms[contactForm].submit();
                    console.log('done');


                    setTimeout(function(){
                        closeModal();
                    }, 2000);
                    
                }
                document.getElementById('userInput').value = '';
                document.getElementById('userInput').style.visibility = 'visible';
                
            }
        });
    }, 500);
    chatSection.scrollTop = chatSection.scrollHeight;
}

function openModal() {
    modal.style.display = "block";
}

function closeModal(){
    
    console.log('chatsequence in closeModal', chatSequence)
    var chatSection = document.getElementById('contact-form');
    var inputSection = document.getElementById('inputSection');
    while (chatSection.firstChild) {
        chatSection.removeChild(chatSection.firstChild);
        console.log('deleting');
    }
    inputSection.style.visibility = "hidden";
    chatSuper.insertAdjacentHTML('afterbegin', introElement);
    modal.style.display = "none";
    chatSequence = 0;
    
    // var userMessage  = '<input id="userInput" placeholder="Enter your text here" />';
    // chatSection.insertAdjacentHTML('afterend', userMessage);
    
    // var msgSection = document.getElementById('chatSend').innerHTML = 'Start Chat';''
    // var sendButton = '<button onclick = "chat()" id="chatSend"></button>';
    // msgSection.insertAdjacentHTML('afterend', sendButton);

    // document.getElementById('chatSend').innerHTML = 'Start Chat';
    document.getElementById('userInput').style.visibility = 'hidden';
    chatIntro.style.visibility = "visible";
}
