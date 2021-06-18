import { AdminWindowAction, AdminWindowActionTypes } from "../../types";

export default class AdminWindowActions {
    public static enterSettings = (): AdminWindowAction => ({
        type: AdminWindowActionTypes.ENTER_SETTINGS,
    })

    public static exitSettings = (): AdminWindowAction => ({
        type: AdminWindowActionTypes.EXIT_SETTINGS,
    })
}
