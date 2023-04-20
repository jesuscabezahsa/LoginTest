import { removeItemFromLocalStorage } from "../../shared/utils/local-storage-util"

export const useLogout = () => {
    removeItemFromLocalStorage('token')
} 