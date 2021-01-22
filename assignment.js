
github link-


// Work-01-kilometerToMeter

function kilometerToMeter(kilo) {
        var input=kilo;
    if (input<0) {
        console.log("negative value is not allowed");
    }
    else { 
        var meter=kilo*1000;
        return meter;
    }
}




// work-02-budgetCalculator

function budgetCalculator(watch,phone,laptop) {
            var input =watch,phone,laptop;
   
   if (watch<0 || phone<0 ||laptop<0) {
            console.log("negative value is not allowed")
   }
   else {
            var sum=watch*50+phone*100+laptop*500;
            return sum;

   }      
}





// work-03-hotelCost


function hotelCost(stayingHotel){
        var cost=0;
    if (stayingHotel<=10) {
        cost=stayingHotel*100;
}
    else if (stayingHotel<=20) {
        var firstTen=stayingHotel*100;
        var discountDay=stayingHotel-10;
        var secondTen=discountDay*80;
        cost=firstTen+secondTen;

}
    else{
        var firstTen=10*100;
        var secondTen=10*80;
        var discountDay=stayingHotel-20;
        var otherDays= discountDay*50;
        cost=firstTen+secondTen+otherDays;
}
    return cost;
}
    


// work-04-megaFriend

function  megaFriend(friendName){
    if(friendName.length==0){
        return("give a proper value.")
    }
    var biggestSize=friendName[0].length;
    var biggestName=friendName[0];
    for(var i=0; i<friendName.length;i++){
        var element=friendName[i].length;
        if (element>biggestSize){
            biggestName=friendName[i];
            biggestSize=element;
        }
    }
    return biggestName;
}
