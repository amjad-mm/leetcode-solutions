const judgeCircle = (moves: string): boolean => {
    if (moves.length & 1) return false;

    let [x, y]: [number, number] = [0, 0];

    const dir: Record<string, [number, number]> = {
        'U': [0, 1],
        'D': [0, -1],
        'L': [-1, 0],
        'R': [1, 0],
    };

    for (const c of moves) {
        const [dx, dy] = dir[c];
        x += dx;
        y += dy;
    }

    return !x && !y;
};