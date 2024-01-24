var singleNumber = function(nums) {
    var ones = 0
    var twos = 0

    for(num of nums){
    ones ^= (num & ~twos)
    twos ^= (num & ~ones)
    }
      

    return ones
};