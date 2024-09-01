import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'https://scroll-wheat.vercel.app',
		methods: ['GET', 'POST'],
		credentials: true,
	},
});

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

const users = [];
io.on('connect', (socket) => {
	socket.on('user', (user) => {
		console.log(`${user} connected`);
		users.push(user);
		io.emit('user', `${users.length} active users`);
	});

	socket.on('disconnect', () => {
		users.pop();
	});
});

server.listen(3000, () => {
	console.log(' ⚡Server running on http://localhost:3000');
});
