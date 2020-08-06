import cors from 'cors';
import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

class App {
	public readonly app: express.Application;

	constructor() {
		this.app = express();

		this.configureMiddlewares();
		this.configureRoutes();
	}

	private configureRoutes() {
		this.app.use('/v1/', routes);
	}

	private configureMiddlewares() {
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(cors());
		this.app.use(express.json());
	}
}

export default new App().app;