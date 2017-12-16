import React from 'react';

class SingleStore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.params);
    return (
      <div />
    );
  }
}

export default SingleStore;
