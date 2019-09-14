import React from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions';

class Clock extends React.Component {
  componentDidMount() {
    setInterval(this.props.tick, 1000);
  }

  render() {

    return(
      <h1>{this.props.time}</h1>
    );
  }
}

function mapStateToProps(state) { //whatever this returns will be passed to component's props
  return {
    time: state.clock.time
  }
}

export default connect(mapStateToProps, { tick: tick })(Clock);
