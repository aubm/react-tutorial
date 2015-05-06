var EventEmitterDecorator = require("../utils/event_emitter_decorator.js");

function CommentsService() {
    this._comments = [
        {
            author: "Pete Hunt",
            text: "This is one comment"
        },
        {
            author: "Jordan Walke",
            text: "This is *another* comment"
        }
    ];
}

CommentsService.prototype = Object.create(EventEmitterDecorator.prototype);

CommentsService.prototype.getComments = function() {
    return this._comments;
};

CommentsService.prototype.addComment = function(commentData) {
    this._comments.push(commentData);
    this.emitEvent("commentAdded");
};

module.exports = CommentsService;
