var subjectArr = ["Hackathon is going great", "Debater next steps", "Forming teams for the Hackathon", "Debater job interviews", "Kendama import of 1000 units", "Kendama sales plan"];
var maxScore = 5;
function generateScore(projectName, maxScore){
	var counter =0;
	subjectArr.forEach((subject) => {
		// console.log(subject);
		var words = subject.split(" ");
		// console.log(words);
		words.forEach((word) => {
			if (word === projectName){
				counter++;
			}
		});
		// console.log(counter);
	});
	return counter/maxScore;
}
