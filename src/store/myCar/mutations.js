import {SYNC_UPDATE} from "./const"
export default {
    [SYNC_UPDATE](state,newCars){ //外部传入newCars  
        state.cars = newCars;
    }
}

//state相当于state.js中的{ cars:[] }对象