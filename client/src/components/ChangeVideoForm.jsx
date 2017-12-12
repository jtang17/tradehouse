import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

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
    this.setState({
      url: '',
    })
  }

  onUrlChanged(e) {
    this.setState({
      url: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label>Enter Youtube Channel ID</label>
          <input type="text" placeholder="Youtube Channel ID..." onChange={this.onUrlChanged} value={this.state.url} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ChangeVideoForm;