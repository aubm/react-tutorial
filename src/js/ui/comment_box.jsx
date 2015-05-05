var React = require("react");
var CommentList = require("./comment_list.jsx");
var CommentForm = require("./comment_form.jsx");

module.exports = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});
