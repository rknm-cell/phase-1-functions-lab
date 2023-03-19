// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    let blockDistance
    if (blocks > 42){
        blockDistance = blocks - 42;
    } else if (blocks < 42){
        blockDistance = 42 - blocks;
    } return blockDistance;
};
function distanceFromHqInFeet(streets){
    let blockFeet
    if (streets > 42){
        blockFeet = (streets - 42) * 264;
    } else if (streets < 42){
        blockFeet= (42 - streets) * 264;
    } return blockFeet;
};
function distanceTravelledInFeet(start, destination) {
    let distanceTravelled
    if (start > destination){
        distanceTravelled = (start - destination) * 264;
    }else if (start < destination){
        distanceTravelled = (destination - start) * 264;
    } return distanceTravelled;
};
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    } else if (distance >= 400 && distance <= 2000){
        return ((distance -400) * 0.02);
    } else if (distance > 2000 && distance <2500){
        return 25;
    } else if (distance >=2500)
        return "cannot travel that far"
}