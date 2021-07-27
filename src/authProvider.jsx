import decodeJwt from 'jwt-decode';

const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(`${process.env.REACT_APP_API_URL}/auth/login/`, {
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
                const upperName = decodedToken.id.charAt(0).toUpperCase() + decodedToken.id.slice(1);
                localStorage.setItem('permissions', JSON.stringify({"role": decodedToken.permissions, "id": decodedToken.login, "name": upperName}));
            });
    },
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject({ redirectTo: '/login' });
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        const location = window.location.href;
        if (location.endsWith("public/stations") || location.endsWith("public/groups")) {
            return Promise.resolve();
        }
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
    },
    logout: () => {
        const request = new Request(`${process.env.REACT_APP_API_URL}/auth/logout/`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        fetch(request);
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { id, avatar } = decodeJwt(localStorage.getItem('token'));
            const fullName = id;
            return Promise.resolve({ id, fullName, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => {
        const role = JSON.parse(localStorage.getItem("permissions"));
        return role ? Promise.resolve(role) : Promise.resolve({"role": "public"});
    }
};

export default authProvider;