# Collections Blacklist
This repository is used to remove scam collections from user's portfolios at https://dappradar.com/hub/wallet
If you see a scam collection in your wallet, please add it to the list or report it in our Telegram or Discord.  
Do not add dead or inactive collections.

# How to add new collections to the blacklist
1. Fork the GitHub repository
2. Go to the `collections` directory and select the relevant protocol (create if did not exist)
3. Create or open a new folder named after collection smart contract address
4. Open `blacklist.json` (create if did not exist) and:
   1. To blacklist all collection items, add the following content: ``{"items": []}``
   2. To blacklist specific collection items, add item IDs separated by a comma in `items` array: (`{"items": [123, 321]}`)
5. Commit & Push the changes
6. Create a pull request to the main repository

# All Tokens
File `all-collections.json` is generated automatically by GitHub Actions after new collections are added to specific protocols.
