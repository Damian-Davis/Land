import { Context } from "https://deno.land/x/oak/mod.ts";
import users from "./users.ts";
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts"
import key from './key.ts'

const header: Jose = {
  alg: "HS256",
  typ: "JWT",
}
//logic for Endpoint Login 
export const login = async (ctx: Context) => {
  const {value}: any = await ctx.request.body();
  for (const user of users) {
    // User is Autheticated 
    if (value.username === user.username && value.password === user.password)  {
      // describe the payload 
      const payload: Payload = {
        iss: user.username, // issurer 
        exp: setExpiration(new Date().getTime() + 60000), // expires after one minute 
      }

      // Create JWT and send it to user once auth
      const jwt = makeJwt({key, header, payload}); //call method that accepts the object from three vaules from earlier lines
      if (jwt) {
        ctx.response.status = 200;
        ctx.response.body = {
          id: user.id,
          username: user.username,
          jwt, // the token that we just created 
        }
      } else {
        ctx.response.status = 500;
        ctx.response.body = {
          message: 'Internal server error'
        }
      }
      return; //stops the for loop 
    }
  }
// if the username was incorrect there will this response 
  ctx.response.status = 422; //validation was failed 
  ctx.response.body = {
    message: 'Invalid username or password'
  };
};
// Logic for Endpoint Guest 
export const guest = (ctx: Context) => {
  ctx.response.body = 'Guest success';
};
// Logiv for Endpoint Auth 
export const auth = (ctx: Context) => {
  ctx.response.body = 'Auth success';
}