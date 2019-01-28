const result = [];

const losowanie = function(){
	
	if(result.length === 6) 
	{
		return;
	}
	
	const wynikLosowania = Math.floor(Math.random() * 49 + 1);
	
	for(let i = 0; i < result.length; i++){
		if(wynikLosowania === result[i]){
			console.log("ta sama liczba!");
			return losowanie();
		}
	}
	
	const div = document.createElement("div");
	div.textContent = wynikLosowania;
	document.body.appendChild(div);
	result.push(wynikLosowania); //dodajemy do tablicy wyników
	
}
//pobieramy element na którym pracujemy
const button = document.querySelector("html button");
//nasłuchiwanie na kliknięcie
button.addEventListener("click", losowanie);
