

var displayDay = function(dayNum){
    switch (dayNum) {
            case 1:
            console.log(`Monday`);
            break;
            case 2:
            console.log(`Tuesday`);
            
            case 3:
            console.log(`Wednesday`);
            break;
            case 4:
            console.log(`Thursday`);
            break;
            case 5:
            console.log(`Friday`);
            break;
            case 6:
            console.log(`Saturday`);
            break;
            case 7:
            console.log(`Sunday`);
            break;
    
        default:
            console.log(`Invalid data : ${dayNum}`);
            break;
    }
   
}
displayDay(2);
displayDay(7);
displayDay(9);
displayDay(null);
displayDay(undefined);
displayDay(-12)

















