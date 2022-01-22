const _ = {
// Clamp method
    clamp(num, lower, upper) {
        if(num >= lower && num <= upper){
            return num;
        }
        else if(num < lower){
            return lower;
        }
        else if(num > upper){
            return upper;
        }
    },

 /*   clamp(number, lower, upper){
        var lowerClampedValue = Math.max(number, lower);
        var clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    }
*/

//InRange
    inRange(number, start , end){
        let num = number
        let sValue = start
        let eValue = end

        if(end == null){
            sValue = 0
            eValue = start
        }
        if(start > end){
            sValue = end
            eValue = start
        }
        if(num >= sValue && num < eValue){
            return true
        }
        else{

            return false
        }
    }
};

//_.inRange(2, 1, 3)
//_.inRange(0, 1, 4)




// Do not write or modify code below this line.
module.exports = _;