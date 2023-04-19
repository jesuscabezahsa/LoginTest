
const setItemToLocalStorage = (key: string, value: any) => { 
    localStorage.setItem(key, JSON.stringify(value))
}

const getItemFromLocalStorage = (key: string) => { 
    const value = localStorage.getItem(key)
    if (!value) return null
    return JSON.parse(value)
}

export { setItemToLocalStorage, getItemFromLocalStorage }