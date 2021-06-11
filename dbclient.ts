import { Client } from "./deps.ts";
// default port mysqlserver is 3306
// const client = await new Client().connect({
//   hostname: "127.0.0.1",
//   username: "deno",
//   db: "deno",
//   password: "deno", 
// });

//Deno.env.get
const client = await new Client().connect({
  hostname: Deno.env.get("HOST"),
  username: Deno.env.get("DBUSER"),
  db: Deno.env.get("DBNAME"),
  password: Deno.env.get("DBPASSWORD"),
});


export { client}
 
