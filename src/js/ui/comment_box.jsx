var React = require("react");
var CommentList = require("./comment_list.jsx");
var CommentForm = require("./comment_form.jsx");

module.exports = React.createClass({
    componentDidMount: function() {
        this.props.commentsProvider.attachEventHandler("commentAdded", function() {
            this.forceUpdate();
        }.bind(this));
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.commentsProvider.getComments()} />
                <CommentForm />
            </div>
        );
    }
});
