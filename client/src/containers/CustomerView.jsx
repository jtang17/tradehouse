import React from 'react';
import { connect } from 'react-redux';

const ChannelID = 'UCSJ4gkVC6NrvII8umztf0Ow';

const CustomerView = props => {
    return (
        <div>
        Current Video: {props.video}
        <br />
        <iframe
          width="560" height="315"
          src={`https://www.youtube.com/embed/live_stream?channel=${ChannelID}&autoplay=1`}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    video: state.video
  }
}

export default connect(mapStateToProps, null)(CustomerView);