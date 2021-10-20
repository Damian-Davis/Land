import { Application, Router } from "https://deno.land/x/oak/mod.ts"; //importing oak server middleware framework
import {getNotes, createNote, getSingleNote, updateNote, deleteNote} from './routes.ts'; //specify extention is required

const router = new Router();

router
  .get('/', (ctx) => {
    ctx.response.body = 'Welcome to notes API';
  })
  .get('/notes', getNotes) // Get All Notes
  .get('/notes/:id', getSingleNote) // Get one single note according to id 
  .post('/notes', createNote) // creation of a note 
  .put('/notes/:id', updateNote) // updating a note 
  .delete('/notes/:id', deleteNote) //deleting a note 
  ;

const app = new Application(); // This is the application from above
app.use(router.routes()); // The application now has access to routes 
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Server is up and running");