import React from 'react';

class CustomerView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe width="560" height="315"
          src="https://www.youtube.com/embed/live_stream?channel=UCSJ4gkVC6NrvII8umztf0Ow&autoplay=1"
          frameBorder="0"
          allowFullScreen>
      </iframe>
    )
  }

}

export default CustomerView;