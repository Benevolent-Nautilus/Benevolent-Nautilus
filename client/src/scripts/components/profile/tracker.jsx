'use strict';
// Actions
var actions = require('../../actions/actions');
// Components
var TotalStepsTracker = require('./tracker/totalStepsTracker');

var Tracker = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },

  render: function() {
    var totalSteps = this.props.totalSteps;
    var dailyGoal = this.props.dailyGoal;
    var dailyGoalBox = (dailyGoal !== null) ? <TotalStepsTracker totalSteps= { dailyGoal } /> : null;
    return (
        <div className="row">
          <TotalStepsTracker totalSteps= { totalSteps } />
          { dailyGoalBox }
        </div>
    );
  }
});

module.exports = Tracker;