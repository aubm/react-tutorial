var React = require("react");
var CommentBox = require("./ui/comment_box.jsx");
var commentsService = require("./services/comments.js");

React.render(
    <CommentBox data={commentsService.getComments()} />,
    document.getElementById("myAppContainer")
);
