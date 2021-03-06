
// console.log('loaded');

var triviaGame = {
	'question1' : {	//Q&A 1
		'title' : 'Charm and intelligence made him famous during his trial. Confessed to murdering 30 people, but actual toll is said to be around 100 between the years 1974 to 1979. Would decapitate 12 of hiss victims and save them as momentos.',
		'choices' : [ 
			'Ted Bundy',
			'Charles Manson',
			'John Wayne Gacy',
			'Richard Chase'
					],
		'answer' : 'Ted Bundy',
	
	
	'question2' : {	//Q&A 2
		'title' : 'Suspected of killing between 5 to 37 people in 1968 to 1969. Bragged to local newspaper with cryptic messages for years. To this day is still at large and unkown.',
		'choices' : [ 
			'Jack the Ripper',
			'New Bedford Highway Killer',
			'Zodiac Killer',
			'Alphabet Killer'
					],
		'answer' : 'Ted Bundy',
	

	'question3' : {  //Q&A 3
		'title' : 'Between 1988 to 1991 he murdered 17 men, the 18th victim escaped which led to his arrest. He dismembered and comsumed his victims, storing body parts through out his house.',
		'choices' : [
				'Charles Manson',
				'Dennis Rader',
				'Son of Same',
				'Jeffrey Dahmer'
					],
		'answer' : 'Jeffrey Dahmer',
	

	'question4' : {  //Q&A 4
		'title' : 'Shot 6 people, wounded 7, between 1976 to 1977. Claimed to be following orders from a demon who manifested into his neighbors dog.',
		'choices' : [
				'Jeffrey Dahmer',
				'Richard Ramirez',
				'Son of Sam',
				'Charles Manson'
					],
		'answer' : 'Son of Sam',

	
		'question5' : {  //Q&A 5
		'title' : 'Convicted of 3 murders, suspected of 5 more, in 1924 to 1932. He murdered children and discussed ways he would consume his victims.  His final sentence was the electric chair.',
		'choices' : [
				'Albert Fish',
				'Fritz Haarman',
				'H.H. Holmes',
				'Ottis Toole'
					],
		'answer' : 'Albert Fish',
	
	
		'question6' : {  //Q&A 6
		'title' : 'Was said to mostly involve prostitutes who lived and worked in the slums of the East End of London, cutting their throats and mutilating the abdomen. It was suspected that the murder had anatomical or surical knowledge with how the victims were left.',
		'choices' : [
				'Zodiac Killer',
				'Jack the Ripper',
				'Axeman of New Orleans',
				'Lake Bodom Murderer'
					],
		'answer' : 'Jack the Ripper',
		}
	   }
	  }
	 }
	}
   }
  }


 questions = 0
 title = 0,
 choices = 0,
 wins = 0,
 losses = 0,
 score = 0,
 choices = 0,
 submit = true,
 answer = true,
 wrongAnswer = false
 player = 0,

//setting up the questions and answers


$( document ).ready(function(){

	var audio = new Audio('assets/music/thedoors.mp3');
	audio.play();

	window.onload = function(){
	$('#start').on('click', stopwatch.start);
	$('#reset').on('click', stopwatch.reset);
};


	setTimeout(oneMinute, 1000 * 1);
	setTimeout(timeUp, 1000 * 2);

	function oneMinute() {
		$('#time-left').html('<h2>One minute left!</h2>');
		alert('One minute left!')
	}

	function timeUp() {
		console.log('done');
		$('#time-left').html('<h2>Time is Up!</h2>');
		alert('Time is up');
	}



	$('#player').on('click', function(checkbox){
		if('choices' == 'answer'){
			wins++;
		}
		else if('choices' !== 'answer'){
			losses++
		}
	});

	function triviaGameResult(result, questionAnswer) {
		if (result === questionAnswer) {
			wins++;
			$('#wins').html('<h4>' + wins + '</h3>');
		}
		else{
			losses++;
			$('#losses').html('<h4>') +losses + ('</h4>');
		}

	$('.submitButton').click(function(){
  		document.location.reload(true);
});

	



