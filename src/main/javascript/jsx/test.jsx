/** @jsx React.DOM */
var HelloMessage = React.createClass({
    render: function() {
        console.log("Changed again fi");
        return (
            <div>Hello world from React{this.props.name}</div>
        );
    }
});