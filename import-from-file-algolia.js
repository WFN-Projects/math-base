import {apiKey} from './secrets.js';

const algoliasearch = require("algoliasearch");
const client = algoliasearch("1QZ1KS7XU1", apiKey);
const index_raw = client.initIndex("file-import")

const formulas = require("./testData.json")

index_raw
    .saveObjects(formulas, { autoGenerateObjectIDIfNotExist: true })
    .then(({ objectIDs }) => {
        console.log(objectIDs);
    })