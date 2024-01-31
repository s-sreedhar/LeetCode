function dailyTemperatures(temperatures: number[]): number[] {
    const ans: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index: number = stack.pop()!;
            ans[index] = i - index;
        }
        stack.push(i);
    }

    return ans;
}

