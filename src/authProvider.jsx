import decodeJwt from 'jwt-decode';

export default {
    login: ({ username, password }) => {
        const request = new Request('http://localhost:8080/login/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                const decodedToken = decodeJwt(token);
                localStorage.setItem('token', token);
                localStorage.setItem('auth', JSON.stringify(decodedToken));
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { id, fullName, avatar } = decodeJwt(localStorage.getItem('token'));
            return Promise.resolve({ id, fullName, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => {
        const decodedToken = decodeJwt(localStorage.getItem('token'));
        const role = decodedToken.permissions;
        return role ? Promise.resolve(role) : Promise.reject();
    }
};