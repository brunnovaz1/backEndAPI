const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);






let id = null;

describe("API de Coleções de Músicas", () => {

  test('Deve retornar 201 e um JSON no POST /colecoes', async () => {
    const response = await request.post('/colecoes').send({
      nome: "Piores",
      autor: "Caio",
      musicas: [
        {
          titulo: "Música 1",
          artista: "Artista 1"
        },
        {
          titulo: "Música 2",
          artista: "Artista 2"
        }
      ]
    });
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    id = response.body._id;
  });

 
  test("Deve retornar 422 e um JSON no POST /colecoes", async () => {
    const response = await request.post("/colecoes").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  
  test("Deve retornar 200 e um objeto no GET /colecoes", async () => {
    const response = await request.get("/colecoes");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    if (response.body.length > 0) {
      id = response.body[0]._id.toString();
    }
  });
  

  test("Deve retornar 200 e um JSON no GET /colecoes/id", async () => {
    const response = await request.get(`/colecoes/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });
  
  test("Deve retornar 404 e um JSON no GET /colecoes/id", async () => {
    const response = await request.get("/colecoes/66685429f4bfdb80a778f6d0");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });


  test("Deve retornar 200 e um JSON no PUT /colecoes/id", async () => {
    const response = await request.put(`/colecoes/${id}`).send({
      nome: "Piores",
      autor: "Caio",
      musicas: [
        {
          titulo: "Música 1x",
          artista: "Artista 1x"
        },
        {
          titulo: "Música 2x",
          artista: "Artista 2x"
        }
      ]
    });
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });
    

  test("Deve retornar 404 e um JSON no PUT /colecoes/id", async () => {
    const response = await request.put("/colecoes/60d21b4667d0d8992e610c85");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });
  

  test("Deve retornar 422 e um JSON no PUT /colecoes", async () => {
    const response = await request.put(`/colecoes/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });


  test("Deve retornar 204 e sem corpo no DELETE /colecoes/id", async () => {
    const response = await request.delete(`/colecoes/${id}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
  });
  
  test("Deve retornar 404 e sem corpo no DELETE /colecoes/id", async () => {
    const response = await request.delete(`/colecoes/${id}`);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

});

// Total de 10 testes

// API de Coleções de Músicas
// √ Deve retornar 201 e um JSON no POST /colecoes 
// √ Deve retornar 422 e um JSON no POST /colecoes 
// √ Deve retornar 200 e um objeto no GET /colecoes
// √ Deve retornar 200 e um JSON no GET /colecoes/id 
// √ Deve retornar 404 e um JSON no GET /colecoes/id 
// √ Deve retornar 200 e um JSON no PUT /colecoes/id                                                                                                                                                                                 
// √ Deve retornar 404 e um JSON no PUT /colecoes/id                                                                                                                                                                              
// √ Deve retornar 422 e um JSON no PUT /colecoes                                                                                                                                                                                   
// √ Deve retornar 204 e sem corpo no DELETE /colecoes/id                                                                                                                                                                           
// √ Deve retornar 404 e sem corpo no DELETE /colecoes/id 



