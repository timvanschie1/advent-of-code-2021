function part1(data) {
    const octopuses = data.split('\n').map(line => line.split('').map(octopus => Number(octopus)));
    const containsTens = () => octopuses.some(line => line.some(octopus => octopus === 10));

    function increaseAll() {
        octopuses.forEach((line, y) => {
            line.forEach((octopus, x) => {
                octopuses[y][x] = octopus + 1;
            })
        })
    }

    function increase(x, y) {
        if (octopuses[y] === undefined || octopuses[y][x] === undefined) return;
        if (octopuses[y][x] === 10) return;
        if (octopuses[y][x] === 'flashed') return;
        octopuses[y][x] = octopuses[y][x] + 1;
    }

    function flash(x, y) {
        increase(x - 1, y - 1);
        increase(x - 1, y);
        increase(x - 1, y + 1);
        increase(x, y - 1);
        increase(x, y + 1);
        increase(x + 1, y - 1);
        increase(x + 1, y);
        increase(x + 1, y + 1);
        octopuses[y][x] = 'flashed';
    }

    function setFlashedToZero() {
        octopuses.forEach((line, y) => {
            line.forEach((octopus, x) => {
                if (octopus !== 'flashed') return;
                octopuses[y][x] = 0;
            })
        })
    }

    let amountOfFlashed = 0;
    for (let i = 1; i <= 100; i++) {
        increaseAll();

        while (containsTens()) {
            octopuses.forEach((line, y) => {
                line.forEach((octopus, x) => {
                    if (octopus === 10) {
                        flash(x, y);
                        amountOfFlashed = amountOfFlashed + 1;
                    }
                })
            });
        }

        setFlashedToZero();
    }

    return amountOfFlashed;
}

module.exports = part1;