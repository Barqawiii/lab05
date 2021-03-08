function helloFun(){
    alert("Hello");
}
 var numOfDays=0;
function days(){
     numOfDays=prompt("How many days do you want?  ");
    if (numOfDays>0){
        return numOfDays;
    }else{
        numOfDays=prompt("please enter again ..How many days do you want?  ");
    }
}
function theCost(days){
    alert("the total will be "+ 70*numOfDays+"JD :D");
}



helloFun();
alert("Because of Corona, there are flights within Jordan only")
var distination =prompt("where do you wanna go ? aqaba or deadsea? ");

while(distination !='aqaba' && distination !='deadsea'){

    distination =prompt("Wrong entry ..where do you wanna go ? aqaba or deadsea?");
}

days();
theCost();



