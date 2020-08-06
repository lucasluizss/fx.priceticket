import app from './src/';
import http from 'http';
import path from 'path';
import socket from 'socket.io';
import ejs from 'ejs';
import express, { Request, Response } from 'express';
import PriceService from './src/modules/price/price.service';

export const globalApp: any = global;

const _priceService = new PriceService();

const server = http.createServer(app);

const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/', (req: Request, res: Response) => {
    res.render('index.html');
});

globalApp.io = io;

io.on('connection', async (socket) => {
    console.log(`:: Socket connected ${socket.id}!`);

    const prices = await _priceService.list();

    socket.emit('previousPrices', prices);
});

const port = process.env.PORT || 3333;

server.listen(port, () => console.log(`:: Server is running on ${port}!`));