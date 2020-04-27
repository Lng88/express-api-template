import express from 'express';
import { indexPage, aboutPage, messagesPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/messages', messagesPage);
indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);

export default indexRouter;