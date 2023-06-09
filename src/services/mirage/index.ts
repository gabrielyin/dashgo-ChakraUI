import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email()
                },
                createdAt() {

                },
            })
        },

        seeds(server) {

        },
        
        routes() {
            this.namespace = 'api'
            this.timing = 750;

            this.get('/users')
            this.post('/users')

            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}