/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixArray = new Set()

    for (let num of arr1){
        let str = num.toString()
        let prefix = ""

        for (let char of str){
            prefix +=char
            prefixArray.add(prefix)
        } 
    }
    let maxLength = 0

    for (let num of arr2){
        let str = num.toString()
        let prefix = ""

        for (let char of str){
            prefix +=char

            if (prefixArray.has(prefix)){
                maxLength =Math.max(maxLength , prefix.length)
            }
        }
    }
    return maxLength
};