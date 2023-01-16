const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('anything', data => {
    console.log('ON: anything', data);
})
emitter.emit('anything', {name1: 'Muzaffar'})
emitter.emit('anything', {name2: 'Victorious'})

setTimeout(() => {
    emitter.emit('anything', {name3: '123'})
}, 500);

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb){
        console.log("[Subscribe...]");
        this.on(eventName, cb)
    }
    dispatch(eventName, data){
        console.log('[Dispatching..]');
        this.emit(eventName, data)
    }
}

const method = new Dispatcher()

method.dispatch('aa', { aa:  33})

method.subscribe('aa', data=>{
    console.log('ON: aa', data);
})