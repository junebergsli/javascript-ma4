var createTodoCard = document.createElement('div');
createTodoCard.setAttribute('class', 'content'); //attributed 'content' so that it can be styled, and can make the cards as columns
document.body.appendChild(createTodoCard);
    
var todoInfo = fetch('https://jsonplaceholder.typicode.com/todos') //Fetching the JSON-file.
	.then(function(res){
		return res.json()
	})
  
.then(function(resultJson){
   	resultJson.forEach(object => {
			 
		var card = document.createElement('div');
		card.setAttribute('class', 'cards'); //attributed 'cards' so that it can be styled

		//Put the title on top since it's the most important one.
		var todoTitle = document.createElement('h1'); //Create a H1/Header element
		todoTitle.textContent = " Title: "+object.title;

		var todoUserId = document.createElement('h2'); //Create a H2/Smaller header element
		todoUserId.textContent = " User ID: "+object.userId;

		var todoId = document.createElement('p'); //Create a p/regular paragraph element
		todoId.textContent = " ID: "+object.id;		  
  
		var todoCompleted = document.createElement('p'); //Create a p/regular paragraph element
		todoCompleted.textContent = " Completed: "+object.completed;
		  
		//Create the multiple TODO cards
		createTodoCard.appendChild(card);
		card.appendChild(todoTitle);
		card.appendChild(todoUserId);
		card.appendChild(todoId);
		card.appendChild(todoCompleted);		  
  
	});

console.log(createTodoCard); //Console log the variable, that will create a "div" and insert the JSON info and create cards
  
}); 