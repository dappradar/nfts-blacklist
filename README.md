# NFT collections blacklist
This repository is used to remove scam NFT collections from user's portfolios at https://dappradar.com/hub/wallet
If you see a scam NFT collection in your wallet, please add it to the list or report it in our Telegram or Discord.  
Do not add dead or inactive NFT collections.

# How to add new NFT collections to the blacklist
1. Fork the GitHub repository
2. Go to the `collections` directory and select the relevant protocol (create if did not exist)
3. Create or open a new folder named after collection smart contract address
4. Open `blacklist.json` (create if did not exist) and:
   1. To blacklist all NFT collection items, add the following content: ``{"items": []}``
   2. To blacklist specific NFT collection items, add item IDs separated by a comma in `items` array: (`{"items": [123, 321]}`)
5. Commit & Push the changes
6. Create a pull request to the main repository

# All NFTs
File `all-nfts.json` is generated automatically by GitHub Actions after new NFTs are added to specific protocols blacklists.
