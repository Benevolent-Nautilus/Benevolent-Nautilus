'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var CurrentChallenge = require('./currentChallenge');

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var CurrentChallengesList = React.createClass({

  getInitialState: function() {
    return { mounted: false };
  },
  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  render: function() {
    var Challenge = 
                    (this.state.mounted) ? 
                      this.props.data.map(function(stat){
                        return <CurrentChallenge key={stat.uid} uid={stat.uid} name={stat.name} currentSteps={stat.currentSteps} goal={stat.goal} amountOfFriends={stat.amountOfFriends} />
                      }) :null;
    return (
      <div>
        <ul className="current-challenges">
          <ReactTransitionGroup transitionName="fade">
            {Challenge}  
          </ReactTransitionGroup>
        </ul>
      </div>
    )
  }
})

module.exports = CurrentChallengesList;