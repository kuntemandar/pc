export const saveCredentials = (credentials) => sessionStorage.setItem('credentials', JSON.stringify(credentials))
export const clearCredentails = () => sessionStorage.removeItem('credentials')
export const getCredentials = () => sessionStorage.getItem('credentials')