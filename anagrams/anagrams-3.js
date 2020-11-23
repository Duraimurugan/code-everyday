/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(!s1 || !s2 || s1.length > s2.length) return false;
    
    let map = new Map();
    for(let s of s1) {
		map.set(s, map.getOrDefault(s, 0) + 1);
	}
    let start = 0, end = 0, counter = map.size;

    while(end < s2.length) {
        if(map.has(s2[end])) {
            map.set(s2[end], map.get(s2[end]) - 1);
            if(map.get(s2[end]) === 0) counter--;
        }
        end++;        
        
        while(counter === 0) {
            if(map.has(s2[start])) {
                map.set(s2[start], map.get(s2[start]) + 1);
                if(map.get(s2[start]) > 0) counter++;
            }
            if(end - start === s1.length) return true;
            start++;
        }
    }
    return false;
}

Map.prototype.getOrDefault = function(key, value) {
    return this.has(key) ? this.get(key) : value
}
