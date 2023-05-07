/* javascript */
//listen for DOM
document.addEventListener("DOMContentLoaded", function(){
    //load API
//const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=99205';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a40c306524mshb63382ec118e953p1426e4jsnd79f0cf57123',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=99205', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(err => console.error(err));
    
    
    
//try {
//	const response = await fetch(url, options);
//	const result = await response.text();
//	console.log(result);
//} catch (error) {
//	console.error(error);
//}

});