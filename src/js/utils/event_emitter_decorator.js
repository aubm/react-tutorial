function EventEmitterDecorator() {
}

EventEmitterDecorator.prototype.eventHandlerCollection = new EventHandlerCollection();

EventEmitterDecorator.prototype.emitEvent = function(eventType, data) {
    var handlers = this.eventHandlerCollection.getHandlersForEventType(eventType);
    handlers.forEach(function(callable) {
        callable(data);
    });
};

EventEmitterDecorator.prototype.attachEventHandler = function(eventType, callback) {
    this.eventHandlerCollection.registerEventHandler(eventType, callback);
};

function EventHandlerCollection() {
    this.handlers = {};
}

EventHandlerCollection.prototype.registerEventHandler = function(eventType, handler) {
    if (typeof(this.handlers[eventType]) === "undefined") {
        this.handlers[eventType] = [];
    }
    this.handlers[eventType].push(handler);
};

EventHandlerCollection.prototype.getHandlersForEventType = function(eventType) {
    var handlers = [];
    if (typeof(this.handlers[eventType]) !== "undefined") {
        handlers = this.handlers[eventType];
    }
    return handlers;
};

module.exports = EventEmitterDecorator;
