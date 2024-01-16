type NumArray struct {
    prefix []int;
}


func Constructor(nums []int) NumArray {
    prefix:=make([]int,len(nums)+1)
    prefix[0]=0
    for i:=0;i<len(nums);i++{
        prefix[i+1]=nums[i]+prefix[i]
    }
    return NumArray{prefix: prefix}
}


func (this *NumArray) SumRange(left int, right int) int {
    return this.prefix[right+1]-this.prefix[left]
}