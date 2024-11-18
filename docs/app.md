# Podcast Manager

## Descrição

Um app ao estilo netflix, onde posso centralizar diferentes epsodeos podcasts separados por categoria.

## Dominio

Podcasts feitos em video

## Features

- Listar os episodeos podcasts em sessões de categorias
    - [saude, fitness, mentalidade, humor]
- Filtrar epsodeos por nome de podcast

## Como

#### Features
- Listar os episodeos podcasts em sessões de categorias

### Como vou implementar:

GET: retorna lista de epsodios

response:

```js
[
    {
        pocastName: "Flow",
        episodeName: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link : "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saude", "bodybuild", "esporte"]
    },
        {
        pocastName: "Flow",
        episodeName: "RUBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link : "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte", "corrida"]
    }
]
```

GET: retorna lista de epsodios baseado em um parametro enviado pelo cliente do nome do podcast