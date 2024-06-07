/* --- */
import express from 'express'
import { PrismaClient } from '@prisma/client';
import { messageLink } from 'discord.js';
/* --- */

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

//Criar usuários
app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.send('Ok, o post deu certo!');
});

// Listar Usuários
app.get('/users', async (req, res) => {
    let users = [];
    //Possibilita usar o query params (<site.com>/users?name=<name>) 
    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.body.name
            }
        })
    } else {
        users = prisma.user.findMany();
    }
    res.status(201).json(users);

});

//Editar Usuário (:id cria uma variavel)
app.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        //Quem eu vou atualizar
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });
    res.send('Ok, o put deu certo!');
});

//Deletar Usuário
app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({ message: " Usuário deletado com sucesso!" })
});

app.listen(3000);





/*
    Criar nossa API de Usuários

    - Criar um usuário; X
    - Listar todos os usuários; X
    - Editar um usuário; X
    - Deletar um usuário. X

    npx prisma db push
    npx prisma studio

    node --watch index.js

*/