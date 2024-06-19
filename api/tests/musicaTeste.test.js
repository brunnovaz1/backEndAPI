const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

let id = null

describe("API-Musica", () => {
    test('Deve retornar 201 e um JSON no POST /musica', async () => {
        const response = await request.post('/musica').send({titulo: "Something", autor: 'The Beatles',  genero: "Rock"});
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json')
        id = response.body._id;
    }) 

    test('Deve retornar 422 e um JSON no POST /musica', async() => {
        const response = await request.post("/musica").send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    })

    test("Deve retornar 200 e um array no GET /musica", async() => {
        const response = await request.get("/musica");
        expect(response.status).toBe(200)
        expect(response.type).toBe("application/json")
        if (response.body.length > 0){
            id = response.body[0]._id.toString()
        }

    })
        
    test('deve retornar 200 e um JSON no GET /musicas/id', async() => {
        const response = await request.get(`/musica/${id}`)
        expect(response.status).toBe(200)
        expect(response.type).toBe("application/json")
        })
    
        test('Deve retornar 404 e um JSON no GET /musicas/id', async ()=> {
            const response = await request.get("/musica/id")
            expect(response.status).toBe(404)
            expect(response.type).toBe("application/json")
        })
    
        test("Deve retornar 200 e um JSON no PUT /musicas/id", async () => {
            const response = await request.put(`/musica/${id}`)
             .send({titulo: "Obstacle 1", autor: "Interpol", genero: "Indie Rock"});
            expect(response.status).toBe(200);
            expect(response.type).toBe("application/json");
          });
        
          test("Deve retornar 404 e um JSON no PUT /musicas/id", async() => {
            const response = await request.put("/musica/6643e1f30514eb771f0b5cb3");
            expect(response.status).toBe(404);
            expect(response.type).toBe("application/json");
          });
        
          test("Deve retornar 422 e um JSON no PUT /produtos", async () => {
            const response = await request.put(`/musica/${id}`).send({});
            expect(response.status).toBe(422 );
            expect(response.type).toBe("application/json");
          });
    
          test("Deve retornar 204 e sem corpo no DELETE /musicas/id", async () => {
            const response = await request.delete(`/musica/${id}`);
            expect(response.status).toBe(204);
            expect(response.type).toBe("");
          });
        
          test("Deve retornar 404 e um JSON no DELETE /musicas/id", async () => {
            const response = await request.delete(`/musica/${id}`);
            expect(response.status).toBe(404);
            expect(response.type).toBe("application/json");
          });
    
    
    
    
    



});