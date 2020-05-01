var questions = [
    'Namastey! Welcome to the world of Shiksha Mitra<br/><br/>What\'s your name ?',
    'Where are you from?',
    'What\'s your age?',
    'What may I assist you with?<br/>Worried about college/school notes?<br/>Select one of these options<br/>1.College Notes<br/>2.School Notes',
    '1)	B.Tech(All Streams Covered)<br/>Source: Lecture Notes<br/>URL: https://lecturenotes.in/course/btech<br/><br/>Enter a character and press enter for next',
    '2)	BBA<br/>Source: Studynama<br>URL: https://drive.google.com/open?id=1Hk5hmIDIrvi-11UEb-hxICmp9d8lFZA5<br/><br/>Enter a character and press enter for next',
    '3)	BCA<br/>Source: BCAnotes<br/>URL: https://drive.google.com/open?id=18P0Ngmeel5mJlqLwvHlWe1Heu-kvREmB<br/><br/>Enter a character and press enter for next',
    '4)	MCA<br/>Source: Lecture Notes<br/>URL: https://lecturenotes.in/course/all/mca/master-of-computer-application<br/><br/>Enter a character and press enter for next',
    '5) Computer science<br/>Source : DU notes<br/>https://du-notes.firebaseapp.com/notes/computer_science<br/><br/>Enter a character and press enter for next',
    '6) Commerce<br/>Source : DU notes<br/>https://du-notes.firebaseapp.com/notes/commerce<br/><br/>Enter a character and press enter for next',
    '7) Economics<br/>Source: DU notes<br/>https://du-notes.firebaseapp.com/notes/economics<br/><br/>Enter a character and press enter for next',
    '8) English<br/>Source : DU notes<br/>https://du-notes.firebaseapp.com/notes/english<br/><br/>Enter a character and press enter for next',
    '9) Geography<br/>Source : DU notes<br/>https://du-notes.firebaseapp.com/notes/geography<br/><br/>Enter a character and press enter for next',
    '10) Hindi<br/>Source : DU notes<br/>https://du-notes.firebaseapp.com/notes/hindi<br/><br/>Enter a character and press enter for next',
    '11) Mathematics<br/>Source : DU notes<br/>https://du-notes.firebaseapp.com/notes/mathematics<br/><br/>Enter a character and press enter for next',
    '12) Microbiology<br/>Source : DU notes<br/>https://du-notes.firebaseapp.com/notes/microbiology<br/><br/>Enter a character and press enter for next',
    '13) Physics<br/>Source: DU notes<br/>https://du-notes.firebaseapp.com/notes/physics<br/><br/>Enter a character and press enter for next',
    '14)Political Science<br/>Source: DU notes<br/>https://du-notes.firebaseapp.com/notes/political_science<br/><br/>Enter a character and press enter for next',
    '15) Zoology<br/>Source: DU notes<br/>https://du-notes.firebaseapp.com/notes/zoology<br/><br/>Enter a character and press enter for next',
    '1) Class 10<br/>Science<br/>Source: Ncerthelp<br/>URL: https://ncerthelp.com/text.php?ques=science+notes+for+class+10+cbse+board+download+pdf<br/><br/>Enter a character and press enter for next',
    '2) Class 10<br/>Mathematics<br/>Source: Ncerthelp<br/>URL: https://ncerthelp.com/text.php?ques=maths+notes+for+class+10+download+pdf<br/><br/>Enter a character and press enter for next',
    '3) Class 11<br/>Science<br/>Source: iitianscareer<br/>URL: https://iitianscareer.com/<br/><br/>Enter a character and press enter for next',
    '4) Class 11<br/>Mathematics<br/>Source: iitianscareer<br/>URL: https://iitianscareer.com/<br/><br/>Enter a character and press enter for next',
    '5) Class 12<br/>Science<br/>Source: iitianscareer<br/>URL: https://iitianscareer.com/<br/><br/>Enter a character and press enter for next',
    '6) Class 12<br/>Mathematics<br/>Source: iitianscareer<br/>URL: https://iitianscareer.com/<br/><br/>Enter a character and press enter for next',
    'It was nice talking you :)'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  var ch = 0
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {
    output.innerHTML = `Hii ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    output.innerHTML = `${input} must be a good place`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 2) {
    output.innerHTML = `So you are ${2020 - input} born`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 3) {
    ch = input;
    if(ch==1){
        num = 3;
        output.innerHTML = `Awesome!! You want college notes`;
        inputBox.value = "";
        inputBox.setAttribute("placeholder", "Wait for 2 secs");
        ++num;
        setTimeout(changeQuestion, 2000);
    }
    else if(ch==2){
        num = 18;
        output.innerHTML = `Awesome!! You want school notes`;
        inputBox.value = "";
        inputBox.setAttribute("placeholder", "Wait for 2 secs");
        ++num;
        setTimeout(changeQuestion, 2000);
    }
  } else if(num == 4) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 5) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 6) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 7) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 8) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 9) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 10) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 11) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 12) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 13) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 14) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 15) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 16) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 17) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 18) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    num = 25;
    setTimeout(changeQuestion, 0);
  } else if(num == 19) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 20) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 21) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 22) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 23) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  } else if(num == 24) {
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 0);
  }
  }
}

function changeQuestion() {
  if(num >= 4 && num <=24){
      inputBox.setAttribute("placeholder","Surf the url");
  }
  else{
      inputBox.setAttribute("placeholder", "Enter your response");
  }
  output.innerHTML = questions[num];
  if(num == 25) {
    inputBox.style.display = "none";
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();

