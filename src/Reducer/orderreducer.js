const intiatialstate = []

export default function orderreducer (state=intiatialstate,action){
    const {type,payload} = action;
    switch(type){
        case "ADDORDER":
            return [...state,payload]
        default:
            return state
    }
}