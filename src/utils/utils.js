export const calculateIsActive = (requirements, attributes) => {
    for (let item in attributes) {
        if(attributes[item] < requirements[item]){
            return false;
        }
    }
    return true;
}

export const calculateModifier = (points) => {
    return Math.floor((points - 10)/2)
};