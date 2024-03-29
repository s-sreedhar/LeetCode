var dailyTemperatures = function(temperatures) {
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();
            ans[index] = i - index;
        }
        stack.push(i);
    }

    return ans;
};