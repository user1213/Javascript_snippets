/***
 * @desc: debounce implementation
 */

var debounce = (fn, wait, immediate) => {
    let timeout;
    return function(){
        const args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate){
                fn.apply(this, args);
            }
        }
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        setTimeout(later, wait);
        if(callNow){
            fn.apply(this, args);
        }
    }
}