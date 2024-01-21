class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        pre=pref[0];
        n=len(pref)
        for i in range(1,n):
            pref[i]=pre^pref[i]
            pre^=pref[i]
        return 