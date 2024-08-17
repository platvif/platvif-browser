type Service = {
    name: string;
    path: string;
}

type Microservice = {
    name: string;
    path: string;
    services: Service[];
}

export const url_services = {
    addresses: {
        base_url: 'localhost',
        port: '3000',
        base_protocol: 'http'
    },
    microserv: [
        {
            name: 'yelpService',
            path: '', // Agrega el path si es necesario
            microservices: []
        },
        {
            name: 'authService',
            path: '/api/user',
            microservices: [
                {
                    name: 'login',
                    path: 'login'
                },
                {
                    name: 'register',
                    path: 'register'
                },
                {
                    name: 'updateUser',
                    path: 'update'
                },
            ]
        }
    ]
}