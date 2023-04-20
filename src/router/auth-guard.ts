import {isAutenticated} from '../Login/infrastructure/autentication-service'

export const isAutetincatedGuardForAnimalRandom = (to: Object, from: Object, next: Function) => {
    const userIsAutenticated = isAutenticated();
    if (userIsAutenticated) {
        next();
    } else {
        next({ name: 'Login' });
    }
}

export const isAutetincatedGuardForLogin = (to: Object, from: Object, next: Function) => {
    const userIsAutenticated = isAutenticated();
    if (userIsAutenticated) {
        next({ name: 'AnimalRandom'});
    } else {
        next();
    }
}
