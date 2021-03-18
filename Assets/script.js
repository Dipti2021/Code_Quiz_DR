
//Helping the browser to fully loaded the required HTML files, and to build the DOM tree

document.addEventListener('DOMContentLoaded', function (){
 //creating required  global variables
   var recordsArray = [];
   var still = 60;
	var time = 60;
	var score = 0;
	var number = 0;
	var timer;
	var answers = document.querySelectorAll('#responses button');
	// exchanging data(to and from) and after receiving the string data, convert it into a js file
  (localStorage.getItem('recordsArray')) ? recordsArray = JSON.parse(localStorage.getItem('recordsArray')): recordsArray = [];
  
	
	// declaration for hiding and unhiding the arguments as and when required
	var show_hidden= function(element){
		let find = document.querySelectorAll("section");
		Array.from(find).forEach(function(items){
			items.classList.add('hide_1');
		});
		call_el(element).classList.remove('hide_1');
	}

	// function declaration to start the display again by resetting the score
	var start_display = function(){
        call_el('#up_score div').innerHTML = ""; 
		var i = 1;
		recordsArray.sort((x, y) => y.score - x.score);
		Array.from(recordsArray).forEach(function(check)
		{
			var high_score = document.createElement("div");
			high_score.innerHTML = i + ". " + check.start_data + " - " + check.score;
			call_el('#up_score div').appendChild(high_score);i++
		});
		i = 0;
		Array.from(answers).forEach(function(answer){
			answer.classList.remove('stop');
		});
	}

	// setting all the questions alongwith the choices
	var no_of_ques = function(){
		call_el('#responses p').innerHTML = questions[number].quest; call_el('#responses #first').innerHTML = `a) ${questions[number].choices[0]}`; call_el('#responses #second').innerHTML = `b) ${questions[number].choices[1]}`;call_el('#responses #third').innerHTML = `c) ${questions[number].choices[2]}`;call_el('#responses #fourth').innerHTML = `d) ${questions[number].choices[3]}`;
	}

	
	// FUNCTION to more quickly call elements less typing means less chance for errors
	var call_el =function(element){
		return document.querySelector(element);
	}
    
    
	
	// changing the questions and determining if the answers are correct and incorrect
	var comment = function(ans){
		call_el('#show_score p').innerHTML = ans; call_el('#show_score').classList.remove('hide_0', show_score());
		Array.from(answers).forEach(answer =>
		{
			answer.classList.add('stop');
		});

		// when time is out, leave the the questions section
		setTimeout(function(){
			if (number === questions.length) {
				show_hidden("#done");time = 0;
				call_el('#time').innerHTML =time;
			} else {
				no_of_ques();
				Array.from(answers).forEach(function(answer) {
					answer.classList.remove('stop');
				});
			}
		}, 800);
	}

	// changing or decreasing the time as the quiz progresses
	var new_time = function(){
		if (time > 0) {
			time--;
			call_el('#time').innerHTML = time;
		} else {
			clearInterval(start_time);
			call_el('#score').innerHTML = score;
			show_hidden("#done");
		}
	}


	// starting the quiz questions 
	var start_time;
	call_el("#detail button").addEventListener("click", function(){
		//call above function to set Initial data in questionHolder section
		no_of_ques();
		show_hidden("#responses");
		start_time = setInterval(new_time, 800);
	});

    //timeout function used if the format is not correct or if next question is answered before current timeout 
	let show_score = function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
		    call_el('#show_score').classList.add('hide_0');
		}, 800);
	}


	// Create an array of selected divs and finalising the correct and incorrect answers and decreasing the timer and increasing the score accordingly
	Array.from(answers).forEach(function(check) {
		check.addEventListener('click', function () {
			// Handles events if a question is answered correctly
			if (this.innerHTML.substring(3, this.length) === questions[number].answer) {
				score++;number++;
				comment("Correct Choice &#128519");
			}else{
				
				time = time - 5;number++;
				comment("Wrong Answer &#128532");
			}
		});
	});



	// if you enter wrong initials, the following messages will be displayed
	let incorrect =function(){
		clearTimeout(timer);
		timer = setTimeout(function() {
			call_el('#wrong').classList.add('hide_0');
		}, 3000);
	}

    call_el("#details button").addEventListener("click", function() {
		let start_data = call_el('#init').value;
		if (start_data === ''){
			call_el('#wrong p').innerHTML = "Enter atleast a character";call_el('#wrong').classList.remove('hide_0', incorrect());
		} else if (start_data.match(/[[A-Za-z]/) === null) {
			call_el('#wrong p').innerHTML = "Enter the initials of your name"; call_el('#wrong').classList.remove('hide_0',incorrect());
		} else { 
			recordsArray.push({"start_data": start_data,"score": score});
			//local storage 
			localStorage.setItem('recordsArray', JSON.stringify(recordsArray));
			call_el('#up_score div').innerHTML = '';show_hidden("#up_score");start_display();call_el("#init").value = '';
		}
	});



	
	// when the quiz ends various functions for clearing the highscores(if you want)from all the locations
	call_el("#clear").addEventListener("click", function(){
		details_line = [];call_el('#up_score div').innerHTML = "";
		localStorage.removeItem('recordsArray');
	});


	// if you want to see your high scores accumulated till now
	call_el("#high_score").addEventListener("click",function(e){
		e.preventDefault();
		clearInterval(start_time);
		call_el('#time').innerHTML = 0;
		time = still;
		score = 0;
		number = 0;
		show_hidden("#up_score");
		start_display();
	});
  
	// after clearing,restart the quiz again from the start time and score along with the introductory message
	call_el("#reset").addEventListener("click",function(){
		time = still;
		score = 0;
		number  = 0;
		show_hidden("#detail");
	});

});


