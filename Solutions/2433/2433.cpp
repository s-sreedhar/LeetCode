class Solution {
public:
    vector<int> findArray(vector<int>& pref) {
        int pre=pref[0];
        for(int i=1;i<pref.size();++i){
            pref[i]=pre^pref[i];
            pre^=pref[i];
        }
        return pref;
    }
};