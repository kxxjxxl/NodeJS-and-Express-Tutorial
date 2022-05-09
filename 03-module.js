 
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenade') //function somewhere else and it executes somewhere 
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
