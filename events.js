const eventEmitter=require('events')

const emitter=new eventEmitter;

emitter.on('listner',function(){
    console.log('listner1');
})

emitter.emit('listner')


// could be creating user       
emitter.on('firstevent',function(){
    console.log('firstevent');
    emitter.emit('secondevent');
})

// could be storing user in db
emitter.on('secondevent',function(){
    console.log('secondevent');
    emitter.emit('thirdevent');
})

// could be reflecting user in website
emitter.on('thirdevent',function(){
    console.log('thirdevent');
})

emitter.emit('firstevent');