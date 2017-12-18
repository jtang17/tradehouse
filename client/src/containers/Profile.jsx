import React from 'react';
import { Redirect } from 'react-router';
import { Auth } from '../Auth/Auth.js';

const auth = new Auth();
import { connect } from 'react-redux';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="profile__container">
        TODO: Insert Profile sub-containers here, (MerchantProfile / Customer Profile, depending on user account)
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {

})(Profile);
