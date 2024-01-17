class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer,Integer> count=new HashMap<>();
        HashSet<Integer> occurences=new HashSet<>();
        for(final int num:arr)
            count.merge(num,1,Integer::sum);
        for(final int value:count.values())
            if(!occurences.add(value))
                return false;
        return true;
    }
}