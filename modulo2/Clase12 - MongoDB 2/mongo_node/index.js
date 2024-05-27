const { MongoClient } = require("mongodb");

async function run() {
    // Url de mi cluster
    const uri = "mongodb+srv://munozjeanette23:Ingenias24@clusteringenias.mxipeak.mongodb.net/?retryWrites=true&w=majority&appName=ClusterIngenias";

  // Client configuration
  const client = new MongoClient(uri); 
  // Esperamos entablar conexion
  await client.connect();
  const dbName = "productos";
  const collectionName = "frutas";

  // Create references to the database and collection in order to run
  // operations on them.
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  try {
    let misDatosEnDB = []
    const frutas = await collection.find()
    await frutas.forEach(fruta => {
        misDatosEnDB.push(fruta)
      console.log(`${fruta.nombre} has ${fruta.stock} stock and importe ${fruta.importe}.`);
    });
// console.log(misDatosEnDB)
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }
  
  const findOneQuery = { nombre: "Banana" };

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult === null) {
      console.log("Couldn't find  ingredient.\n");
    } else {
      console.log(`Found a recipe with 'Banana' as an ingredient:\n${JSON.stringify(findOneResult)}\n`);
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }
   // Make sure to call close() on your client to perform cleanup operations
   await client.close();

}

run().catch(console.dir);