# Projeto Integrado de Backend

### Criadores:

```
Bruno Vaz: https://github.com/brunnovaz1
```

```
Larrysa Moraes: https://github.com/Larysmo
```

```
Saind Medeiros: https://github.com/Sasaestudo
```

# API de Coleções de Músicas

Uma API REST para gerenciar coleções de músicas. Esta API permite aos usuários criar, listar, atualizar e excluir coleções de músicas, bem como buscar coleções por ID e criterios específicos.

## Instalação e Configuração

1. Clone este repositório:

```
git clone https://github.com/brunnovaz1/backEndAPI.git
```

2. Instale as dependências:

```
cd backEndAPI
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias, como `MONGODB_URL` para a URL do banco de dados MongoDB. Exemplo:

```
MONGODB_URL=mongodb+srv://usuario:senha@cluster.ztjtz3c.mongodb.net/nomedobancodedados
SEGREDO=00000
PORT=3000
```

# Como Executar
Para rodar o servidor localmente, utilize o seguinte comando:

```
npm run dev
```

Este comando iniciará o servidor local na porta definida no arquivo .env.

# Como Testar
Para executar os testes, utilize o seguinte comando:

```

npm run test
```

Isso executará os testes automatizados para garantir o correto funcionamento da API.

## Contribuição

Sinta-se à vontade para contribuir com novos recursos, correções de bugs ou melhorias. Abra uma issue ou envie um pull request e teremos prazer em revisar.

## Documentação

Para mais detalhes sobre cada endpoint e os parâmetros suportados, consulte a [Documentação da API](http://localhost:3000/swagger).

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
