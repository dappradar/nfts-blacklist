'use strict';
const fs = require('fs');

const getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

const allCollections = () => {
    let allCollections = {}
    let protocols = 0;
    getDirectories(__dirname).forEach(protocol => {
        console.log(`Compiling ${protocol} list`);
        protocols++;
        let protocolBlacklist = {};
        getDirectories(`${__dirname}/${protocol}`).forEach(collection => {
            let data = JSON.parse(fs.readFileSync(`${__dirname}/${protocol}/${collection}/blacklist.json`));
            protocolBlacklist[collection] = data.items;
        })
        allCollections[protocol] = protocolBlacklist;
    })
    fs.writeFileSync('all-nfts.json', JSON.stringify({
        "name": "NFT collections blacklist",
        "description": "This file is auto-generated when new NFT collections are added to specific protocols blacklists",
        "updated": new Date().toISOString(),
        "collections": allCollections
    }, null, 2));
}

allCollections();
