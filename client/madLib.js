Template.body.events({
	'submit form': function(event, template) {

		event.preventDefault();

		let exclamation = template.find('#exclamation').value;
		let adverb = template.find('#adverb').value;
		let animal = template.find('#animal').value;
		let verb = template.find('#verb').value;


		console.log('Hello, world');

		console.log( exclamation + '!  you say, as you ' + adverb 
			+' jump onto your '+ animal+' and '+ verb +' into the sunset.'  );
	}
});