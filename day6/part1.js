function part1(data) {
    let fishes = data.split(',').map(fish => Number(fish));

    for (let i = 1; i <= 80; i++) {
        fishes.forEach((fish, i) => {
            if (fish === 0) {
                fishes[i] = 6;
                fishes.push(8);
                return;
            }
            fishes[i] = fish - 1;
        })
    }

    return fishes.length;
}

module.exports = part1;