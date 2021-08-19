export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // Уведомляем методы если они есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach((listener) => {
            listener(...args)
        })

        return true
     }
    
    // Подписываемся на уведомление
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] =
                this.listeners[event].filter((listener) => listener !== fn)
        }
    }
}

// const emitter = new Emitter()
// emitter.subscribe('olha', (data) => console.log('sub', data))
// emitter.emit('olha', 24)