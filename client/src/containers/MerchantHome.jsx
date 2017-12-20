import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import MerchantOverview from '../components/merchant/MerchantOverview.jsx';
import MerchantStats from '../components/merchant/MerchantStats.jsx';
import { fetchMerchantInfo, editMerchantProfile } from '../actions/merchantActions.jsx';
import { Auth } from '../Auth/Auth';

const auth = new Auth();

class MerchantHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* TODO: use ID retrieved from DB upon login, instead of hardcoding */
    this.props.fetchMerchantInfo(this.props.match.params.merchantId);
  }

  render() {
    // redirect to home if not logged in, shouldn't be here
    if (!auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="merchantHome__container">
        <MerchantOverview
          merchantInfo={this.props.merchantInfo}
          editMerchantProfile={this.props.editMerchantProfile}
        />
        <MerchantStats />
      </div>
    );
  }
}

const mapStateToProps = state => ({ merchantInfo: state.merchantInfo });
export default connect(mapStateToProps, { fetchMerchantInfo, editMerchantProfile })(MerchantHome);
