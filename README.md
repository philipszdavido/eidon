# Eidon
`Node.js` module that runs single/multiple commands simultaneously using [Node.js Child_Process](http://nodejs.org/api/child_process.html) spawn.

### Technologies:
- [JavaScript](http://es6-features.org/)
- [Node.js](http://nodejs.org/)
- [Child_Process (Node.js)](http://nodejs.org/api/child_process.html)

## Installation
* `npm i eidon -g`

## Usage
* `eidon "node server.js" "npm run start"`

In `package.json`:
* `"dev": "eidon \"npm run start\" \"node server/app.js\""`

### Contribute
1. Fork this repository
2. Clone it to your local machine
3. Create a branch for the feature you want to implement
4. Push your changes to your repository
5. Submit a pull request

- Issue Tracker: https://github.com/philipszdavido/eidon/issues
- Source Code: https://github.com/philipszdavido/eidon

### Support
If you are having issues, please let me know.
Mail me at: kurtwanger40@gmail.com
