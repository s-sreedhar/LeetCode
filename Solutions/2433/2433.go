func findArray(pref []int) []int {
    pre:=pref[0];
        for i:=1;i<len(pref);i++{
            pref[i]=pre^pref[i];
            pre^=pref[i];
        }
        return pref;
}