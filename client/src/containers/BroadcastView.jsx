import React from 'react';
import ChangeVideoForm from '../components/ChangeVideoForm.jsx';

class BroadcastView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ChangeVideoForm />
      </div>
    )
  }
}

export default BroadcastView;