function add(a) {
    return function(b) {
        if(b) {
            return add(a+b);
        }
        return a;
    }
}

add = (a) => (b) => b ? add(a+b) : a;

add(100)(12)(23)(); // => 135