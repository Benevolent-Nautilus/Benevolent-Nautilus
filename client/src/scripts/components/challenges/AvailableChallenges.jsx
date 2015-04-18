// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
var AvailableChallenge = require('./AvailableChallenge');
var ChallengeStore = require('../../stores/challengeStore')

var AvailableChallenges = React.createClass({
  render: function() {
  console.log("this.prop.data", this.props.data);
    return (
      <div>
        <ul>
        {this.props.data.data.map(function(challenge) {
            return <li key={challenge.id} > <AvailableChallenge data= { challenge }/> 
                   </li>
        })}
        </ul>
      </div>

    );
  }
});


module.exports = AvailableChallenges;
