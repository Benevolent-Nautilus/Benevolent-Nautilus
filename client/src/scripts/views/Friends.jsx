
'use strict';
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../actions/actions');
// Stores
// var profileStore = require('../stores/profileStore');
// var userStore = require('../stores/userStore');
// Components
var Spinner = require('../components/spinner');
var Footer = require('../components/Profile/Footer');
var FriendsList = require('../components/Friends/FriendsList');
var FriendsTable = require('../components/Friends/FriendsTable');

// Stores
var friendsStore = require('../stores/friendsStore');

// Profile Class
var Friends = React.createClass({
  
  mixins: [
    require('react-router').Navigation,
    Reflux.listenTo(friendsStore, 'onLoaded')
  ],

  // When the View loads up, get the data from the Store
  getInitialState: function() {
    return {
      friendsList: friendsStore.getFriendsList(),
      isLoading: true
    };
  },

  // When there is a change in the store, the method recieves an updated note list and changes the state. 
  onChange: function(friends) {
    this.setState({
      friendsList: friends // state changes
    });
  },

  componentDidMount: function() {
    // when the component mounts we start listening to profileStore's 
    // change event.  This is broadcast whenever there is a mutation in the notes lists
    // the following line registers as a listener.
    this.unsubscribe = friendsStore.listen(this.onChange);
  },

  componentWillUnmount: function() {
    // this will remove the listener.
    // will always stay up-to-date by listening to the Store's change event
    this.unsubscribe();
  },

  render: function() {
    console.log('Friends', this.state.friendsList)
    return (
      <div className="content full-width">
        <h2>Search For Friends</h2>
        < FriendsTable data= {this.state.friendsList} />
        < Footer />
      </div>
    );
  }
});

module.exports = Friends;