var findArray = function(pref) {
     pre=pref[0];
        for( i=1;i<pref.length;++i){
            pref[i]=pre^pref[i];
            pre^=pref[i];
        }
        return pref;
};