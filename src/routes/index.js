import express from 'express';
import { indexPage, aboutPage, messagesPage, addMessage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/messages', messagesPage);
indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);
indexRouter.post('/messages', addMessage);

export default indexRouter;