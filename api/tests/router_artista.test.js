const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);
let id = null

describe("API Artista", () => {
    test('Deve retornar 201 e um JSON no POST /artistas', async () => {
        const response = await request.post('/artista').send({autor: "Chorao", genero: "rock"});
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json')
        id = response.body._id;
    }) 

});