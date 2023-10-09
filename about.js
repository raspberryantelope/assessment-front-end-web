console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submission sent successfully.');
}

let cat = document.querySelector("#cat");
cat.addEventListener("mouseover" , function(){
	alert("You're looking nice today...");
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

