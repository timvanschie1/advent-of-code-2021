function part2(data) {
    let fishes = data.split(',').map(fish => Number(fish));

    const arrayWithAges = new Array(9).fill(null);
    const fishesPerAge = arrayWithAges.map((_, i) => fishes.filter(fish => fish === i).length);

    for (let i = 1; i <= 256; i++) {
        const breedingFishes = fishesPerAge.splice(0, 1);
        fishesPerAge.push(breedingFishes[0]);
        fishesPerAge[6] = fishesPerAge[6] + breedingFishes[0];
    }

    return fishesPerAge.reduce((currentValue, fishes) => currentValue + fishes, 0);
}

module.exports = part2;