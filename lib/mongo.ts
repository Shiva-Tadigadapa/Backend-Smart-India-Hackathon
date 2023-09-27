// import { MongoClient } from "mongodb";

// declare global {
//   var client: MongoClient | null;
// }

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

// export async function connectToDb() {
//   if (global.client) {
//     return {
//       client: global.client,
//     };
//   }

//   const client = (global.client = new MongoClient(MONGODB_URI, {}));

//   await global.client.connect();
//   console.log("Connected to fdssfd MongoDB");

//   return { client: global.client };
// }