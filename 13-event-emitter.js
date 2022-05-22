const EventEmitter = require('events'); //getting the events module

const customEmitter = new EventEmitter() //instance from the events module

customEmitter.on('response', (name, id)=>{  //creating the event and a callback
    console.log(`data recived user ${name} with id ${id}`)

})

customEmitter.on('response', ()=>{  //listening for the same event but a different callback
    console.log('so some other logic')

})

customEmitter.emit('response', 'john', 34) //emitting the method for 'response'