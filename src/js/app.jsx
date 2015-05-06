var React = require("react");
var CommentBox = require("./ui/comment_box.jsx");
var CommentsService = require("./services/comments.js");

var commentsProvider = new CommentsService();
window.setInterval(function() {
    commentsProvider.addComment({
        author: "John Doe",
        text: "This is an awesome comment !"
    });
}, 2000);

var commentBox = React.render(
    <CommentBox commentsProvider={commentsProvider} />,
    document.getElementById("myAppContainer")
);
