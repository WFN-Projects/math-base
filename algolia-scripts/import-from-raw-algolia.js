import {apiKey} from './secrets.js';

const algoliasearch = require("algoliasearch");
const client = algoliasearch("1QZ1KS7XU1", apiKey);
const index_raw = client.initIndex("raw-input")

const formulas = [
    {
        name: "Force 1",
        latex: "f_{\\text{k}} = \\mu_{\\text{k}}N"
    },
    {
        name: "Force 2",
        latex: "f_{\\text{s}}^{\\;\\text{max}} = \\mu_{\\text{s}}N"
    },
    {
        name: "Force 3",
        latex: "\\vec{F}_{\\text{net}} = m\\vec{a}"
    },
    {
        name: "Force 4",
        latex: "F = \\dfrac{Gm_{1}m_{2}}{d^{2}}"
    },
    {
        name: "Force 5",
        latex: "\\vec{F}_{\\text{net}} = \\dfrac{\\Delta \\vec{p}}{\\Delta t}"
    },
    {
        name: "Force 6",
        latex: "\\Delta \\vec{p} = m(\\vec{v}_{\\text{f}} - \\vec{v}_{\\text{i}})"
    },
    {
        name: "Force 7",
        latex: "\\vec{p} = m\\vec{v}"
    },
    {
        name: "Force 8",
        latex: "w = F_{\\text{g}} = mg"
    }
];

index_raw
    .saveObjects(formulas, { autoGenerateObjectIDIfNotExist: true })
    .then(({ objectIDs }) => {
        console.log(objectIDs);
    })
