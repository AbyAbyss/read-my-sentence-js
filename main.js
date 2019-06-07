(() => {
	read("Hi there, what's your name?")
	var name = prompt("Hi there, what's your name?")
	var intro = read(`Hello ${name}, please enter what u want me to read`);
	setTimeout( () => {
		var sen = prompt(`Hello ${name}, please enter what u want me to read`);
		var senArr = sen.split(".");
		senArr.forEach(e => {
			read(e);
		})
	}, 2000);


    read = (sen) => {
        var msg = new SpeechSynthesisUtterance(sen);
        window.speechSynthesis.speak(msg);
    	// speechSynthesis.cancel();
    }
	
})();
