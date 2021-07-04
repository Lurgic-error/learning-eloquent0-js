function findSolution(target){
    return find(1, '1')

    function find(current, history){
        if(current == target){
            return history
        }else if(current > target){
            return null
        }else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`)
        }
    }
}


console.log(`findSolution(24) :==>`, findSolution(13))