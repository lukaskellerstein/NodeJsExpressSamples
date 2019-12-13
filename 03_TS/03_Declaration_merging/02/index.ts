

// ----------------------------------------
// Two namespaces was merged together
// ----------------------------------------


namespace Prague {

    export interface Building {}

    export class GovernmentBuilding {
        address: string;
        departments: string[]
    }

    export function destroyGovernmentBuilding(building: GovernmentBuilding){
        building = null;
    }
}

namespace Prague {

    export interface Car {}

    export class GovernmentCar {
        id: string;
        price: number;
    }

    export function destroyGovernmentCar(car: GovernmentCar){
        car = null;
    }
}



const testBuilding: Prague.GovernmentBuilding = null;
const testCar: Prague.GovernmentCar = null;
