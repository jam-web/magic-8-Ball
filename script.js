  
    $(document).ready(function() {

      //*declare object*//
	     var magic8Ball = {};
       //*property of object=list of answers/data resides in an array*// 
        magic8Ball.listOfAnswers = 
        ["It is certain", "Yes - definitely", "As I see it, yes", "Most likely",
	       "Outlook good", "Yes", "No"
      ];
	
       //*hide answerside of ball*//
       $("#answer").hide();

        //*define the method as a property of the object*//
         magic8Ball.askQuestion = function (question) {
    	       $("#question").effect( "shake" );
             $("#question").attr(
             "src", 
             "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"
             );
          //*create a random number to index through array*// 
       		 var randomNumber = Math.random();
         //*random numbert has a valued between 0 and the number of items in array*//  		 
			     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	       //*round down the number to be a whole number*//     
		       var randomIndex = Math.floor(randomNumberForListOfAnswers);
	        //*use number to index a random number from the answers array*//	     
		        var answer = this.listOfAnswers[randomIndex];
          //*return an answer from array*//
            $("#answer").text(answer);
           //*answer fades in after 4 seconds*//
            $("#answer").fadeIn( 4000 );

            console.log(question);
            console.log(answer);
            }; //*end of method*//
     
            //*clicking button to open prompt window*//
            var onClick = function() { 
               $("#answer").hide(); 
               $("#question").attr(
                "src", 
                "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png"
                );
              //*set up prompt and tell code to wait*//
	             setTimeout(function () {
                   var question = prompt("Ask a yes or no question!");
                   magic8Ball.askQuestion(question);
	            }, 500);
              };//*end of prompt function*//

	           $("#questionButton").click( onClick );

            });
    