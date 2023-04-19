import {isAutenticated} from '../Login/aplication/autentication-service'

const isAutetincatedGuard = (to: Object, from: Object, next: Function) => {
    const userIsAutenticated = isAutenticated();
    if (userIsAutenticated) {
        console.log('Autenticado: true')
        next();
    } else {
        console.log('Autenticado: false')
        next({ name: 'Login' });
    }
}

export default isAutetincatedGuard;