const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describe("API-Musica", () => {
    test('Deve retornar 201 e um JSON no POST /musica', async () => {
        const response = await request.post('/musica').send({titulo: "Something", artista: 'The Beatles'});
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json')
        id = response.body._id;
    }) 

});