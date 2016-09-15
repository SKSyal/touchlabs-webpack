#Touchlabs-webpack

##Set up
###Prerequisites
Node v4+ / npm


###Installation
run `npm install`

then `npm start`

*Babel errors? Run:*
`npm install -g babel-cli`


###Development
All scripts can be found in package json.

Run
`npm run lint` to lint all files in the src/ directory and webpack config files

Run
`webpack` to compile

###TODO:

- Pass through environment variables
- Add testing framework
- Create an example Middleware ES6 component

###In Progress:

- Create versioning system
- Add Concourse deploy script and wire it up with env variables
- Structure project for any middleware

###Done:

- Load express/node server
- Add linting
- Added templating engine. (handlebars)
- ES6 transpile support
