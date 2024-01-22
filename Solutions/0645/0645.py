class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        duplicate=0

        for i,num in enumerate(nums):
            absNum = abs(num)
            if nums[absNum-1]<0:
                duplicate = absNum
            else:
                nums[absNum - 1] *= -1
        for i in range(len(nums)):
            if nums[i] > 0 :
                return [duplicate, i + 1]