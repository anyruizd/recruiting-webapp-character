export const calculateIsActive = (requirements, attributes) => {
    for (let item in attributes) {
        if(attributes[item] < requirements[item]){
            return false;
        }
    }
    return true;
}