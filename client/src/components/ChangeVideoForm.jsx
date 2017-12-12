import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {
  changeVideo
} from '../actions/actions.jsx';

class ChangeVideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onUrlChanged = this.onUrlChanged.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.changeVideo(this.state.url);
  }

  onUrlChanged(e) {
    this.setState({
      url: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        Current Video: {this.props.video}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Video URL..." onChange={this.onUrlChanged} value={this.state.url} />
          <input type="submit" value="Set Video Url" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    video: state.video
  }
}

export default connect(mapStateToProps, { changeVideo })(ChangeVideoForm);