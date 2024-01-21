function findArray(pref: number[]): number[] {
    var pre:number=pref[0];
        for( var i=1;i<pref.length;++i){
            pref[i]=pre^pref[i];
            pre^=pref[i];
        }
        return pref;
};