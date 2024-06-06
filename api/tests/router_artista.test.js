const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

let id = null

describe("API Artista", () => {
    test('Deve retornar 201 e um JSON no POST /artistas', async () => {
        const response = await request.post('/artista').send({autor: "teste autor", genero: "teste genero"});
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        id = response.body._id;
    })
    
    test('Deve retornar 422 e um JSON no POST /artistas', async() => {
        const response = await request.post('/artista').send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe('application/json');
    })

    test('Deve retornar 200 e um array no GET /artista', async() => {
        const response = await request.get("/artista");
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    })

    test('Deve retornar 200 e um JSON no GET /artista/id', async() => {
        const response = await request.get(("/artista/6661c96c62545e0a1d017bf5"));
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    })

    test('Deve retornar 404 e um JSON no GET/artista/id', async() => {
        const idErrado = "6661b93ad135209e910a1"  
        const response = await request.get(`/artista/${idErrado}`);
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    })

    test("Deve retornar 200 e um JSON no PUT /artista/id", async () => {
        const response = await request.put(`/artista/${id}`).send({autor:"novo autor", genero:"novo genero"});
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
      });
    
      test("Deve retornar 404 e um JSON no PUT /artista/id", async() => {
        const response = await request.put("/artista/6643e1f30514eb771f0b5cb3");    //id errado
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
      });
    
      test("Deve retornar 422 e um JSON no PUT /artista", async () => {
        const response = await request.put(`/artista/${id}`).send({});
        expect(response.status).toBe(422 );
        expect(response.type).toBe("application/json");
      });

      test("Deve retornar 204 e sem corpo no DELETE /artista/id", async () => {
        const response = await request.delete(`/artista/${id}`);
        expect(response.status).toBe(204);
        expect(response.type).toBe("");
      });
    
      test("Deve retornar 404 e um JSON no DELETE /artista/id", async () => {
        const response = await request.delete(`/artista/${id}`);
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
      });
});