var findErrorNums = function(nums) {
    var duplicate;

    for (const num of nums) {
        const absNum = Math.abs(num);
        
        if (nums[absNum - 1] < 0) {
            duplicate = absNum;
        } else {
            nums[absNum - 1] *= -1;
        }
    }

    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) {
            return [duplicate, i + 1];
        }
    }
};