import MyApp from './app.js';

const TOKEN = process.env.TOKEN;

if (TOKEN === undefined) {
    console.warn("ERROR: The TOKEN environment variable is not set. Quitting ...");
    process.exit()
}

const exchangefileUrn = process.argv[2];
if (exchangefileUrn === undefined) {
    console.warn("ERROR: ID of the item pointing to exchange is required. Quitting ...");
    process.exit()
}

console.log("Getting exchange container for", exchangefileUrn)

let myAPSApp = new MyApp(
    TOKEN,
);

let exchange = await myAPSApp.getExchange(exchangefileUrn);
let relationships = await myAPSApp.getAllRelationships(exchange.collection.id, exchange.id);
let assets = await myAPSApp.getAllAssets(exchange.collection.id, exchange.id);
let stats = myAPSApp.analyseData(assets, relationships);

let result = await myAPSApp.format(exchange, stats);
console.log(result);
myAPSApp.saveRelationships(exchange.id, relationships);
myAPSApp.saveAssets(exchange.id, assets);



// let exchangeTable = new Table();
// let assetsTable = new Table({head: [ "AssetType", "Count"]})
// let relationshipTable = new Table({head: [ "RelationshipType", "Count"]})
//
//
// exchanges.forEach(exchange => {
//     exchangeTable.push(
//         {"fileName": exchange.components.data.insert["autodesk.fdx:host.acc-1.0.0"].host.String.fileName},
//         {"id": exchange.id},
//         {"collectionId": exchange.collection.id},
//         {"exchangeFileUrn": myAPSApp.getAttributeMapForEntity(exchange)["exchangeFileUrn"].value}
//     )
//
//     let showResults = async() => {
//         let relationships = await myAPSApp.getAllRelationships(exchange.collection.id, exchange.id);
//         let assets = await myAPSApp.getAllAssets(exchange.collection.id, exchange.id);
//         myAPSApp.saveRelationships(exchange.id, relationships);
//         myAPSApp.saveAssets(exchange.id, assets);
//         console.log(`Data saved as JSON in "./${exchange.id}" folder`);
//         console.log(`\nStats on saved data:`);
//         return myAPSApp.analyseData(assets, relationships);
//     }
//
//     showResults().then( result => {
//         exchangeTable.push(
//             {
//                 "Total Assets": result["TotalAssets"]
//             },
//             {
//                 "Total Relationships": result["TotalRelationships"]
//             }
//         )
//         Object.keys(result.assetTypes).forEach(asset =>{
//             assetsTable.push(
//                 {
//                     [asset]:result.assetTypes[asset]
//                 }
//             )
//         })
//
//         Object.keys(result.relationshipsTypes).forEach(rel =>{
//             relationshipTable.push(
//                 {
//                     [rel]:result.relationshipsTypes[rel]
//                 }
//             )
//         })
//         console.log(exchangeTable.toString())
//         console.log(assetsTable.toString())
//         console.log(relationshipTable.toString())
//     })
// })