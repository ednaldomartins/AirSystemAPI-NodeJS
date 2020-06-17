# AirSystemApiRest
 
## Configuração

#### Para o funcionamento do sistema é necessário instalar o node.js (https://nodejs.org/en/download/). Após o node instalado, usando o terminal, execute os comandos abaixo dentro da pasta raiz do projeto:

1. npm init

2. npm install --save pg

3. npm install --save express

4. npm install --save-dev nodemon (opcional)

## Instruções de uso

#### Por padrão, o servidor está em "localhost:3000".

### Usando o @GET

#### >    use **_localhost:3000/places_** para pegar os dados brutos da tabela "Place".

#### >    use **_localhost:3000/flight_** para pegar os dados brutos da tabela "Flight". Para obter informações mais detalhadas da tabela recomenda-se usar o método @GET abaixo.

#### >    use **_localhost:3000/flight/all_** para pegar os dados da tabela "Flight" de forma mais detalhada (contendo os nomes da cidade de saída e destino do voo.

#### >    use _localhost:3000/flight/to/_<b>nome_da_cidade</b> para pegar os voos cadastrados com destino a cidade especificada.

#### >    use _localhost:3000/flight/from/_<b>nome_da_cidade</b> para pegar os voos cadastrados com saída a partir da cidade especificada.

#### >    use **_localhost:3000/places_** para pegar os dados brutos da tabela "Place".

### Usando o @POST

#### >    use **_localhost:3000/places_** para enviar os dados de uma cidade para a tabela "Place".

#### >    use **_localhost:3000/flight_** para enviar os dados de um voo para a tabela "Flight"

### Exemplos de JSON

#### JSON - place

```
{
    "place_id": 1,
    "zip_code": "52200000",
    "country": "Brasil",
    "estate": "São Paulo",
    "city": "São Paulo"
}
```

#### JSON - flight

```
{
    "from_id": 4,
    "to_id": 1,
    "flight_id": 4,
    "flight_date": "17-07-2020, 18:10"
}
```
