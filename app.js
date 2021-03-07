var nameOfChild=prompt("What is your name ??");

alert("HI "+nameOfChild+":D");
alert("Let's learn the numbers");

var favoriteFruit =prompt("What more do you prefer, apple or banana??");
while(favoriteFruit !='apple' && favoriteFruit !='banana'){
    favoriteFruit =prompt("Wrong entry .. What more do you prefer, apple or banana??");
}
var itemFruit=' ';
if (favoriteFruit=="apple"){
    itemFruit='<img src="apple.png" width="200" height="200"/>';
}else{
    itemFruit='<img src="banana.png" width="200" height="200"/>';
}

var numberOfFruit=prompt("enter a number");
var result=' ';

     for(var i=0;i<numberOfFruit; i++){
        result=result+itemFruit;
     }
     document.write(result);


