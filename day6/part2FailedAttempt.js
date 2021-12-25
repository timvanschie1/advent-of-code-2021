function part2(data) {
    let fish = data.split(',').map(fish => Number(fish));

    let numberOfFishes = fish.length;

    function getAverage (daysLeft) {
        const daysLeftAfterFirst = daysLeft - 9;
        const nrOfOtherFish = Math.floor(daysLeftAfterFirst / 7);
        return (9 + nrOfOtherFish * 7) / (nrOfOtherFish + 1);
    }

    fish.forEach((timer) => {
        const daysLeft = 256 - timer;
        const toThePowerOf = Math.floor((daysLeft) / getAverage(daysLeft));
        numberOfFishes = numberOfFishes + 2 ** toThePowerOf;
    })

    return numberOfFishes;
}

module.exports = part2;