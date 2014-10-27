/** @jsx React.DOM */
var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello world{this.props.name}</div>;
    }
});