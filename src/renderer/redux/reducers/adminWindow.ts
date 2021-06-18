import { AdminWindowActionTypes, AdminWindowState } from "../../types";

const initialState: AdminWindowState = {
    inSettings: false,
}

export default (state = initialState, action: { type: AdminWindowActionTypes }): AdminWindowState => {
    switch (action.type) {
        case AdminWindowActionTypes.ENTER_SETTINGS:
            return {
                inSettings: true,
            }
        case AdminWindowActionTypes.EXIT_SETTINGS:
            return {
                inSettings: false,
            }
        default:
            return state;
    }
}
