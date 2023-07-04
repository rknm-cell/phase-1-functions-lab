function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42;
    }
    else {
        return 42 - block;
    }
}
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start -= destination) * 264;
    }
    else {
        return (destination -= start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    var distance = distanceTravelledInFeet(start, destination);
    if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
    else {
        return 0;
    }
}
