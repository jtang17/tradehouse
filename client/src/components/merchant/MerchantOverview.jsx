import React from 'react';
import MerchantProfileForm from './MerchantProfile.jsx';

class MerchantOverview extends React.Component {
  constructor(props) {
    super(props);
    this.editProfileClick = this.editProfileClick.bind(this);
    this.state = {
      edit: false,
    };
  }

  editProfileClick() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    const { merchantInfo } = this.props;
    return (
      <div className="mercOverview__container clear">
        <h3 className="mercOverview__title clear">Merchant Overview</h3>
        <a className="btn--action edit-profile" onClick={this.editProfileClick}>
          {this.state.edit ? 'View Profile' : 'Edit Profile'}
        </a>
        {this.state.edit ? <MerchantProfileForm merchantInfo={merchantInfo} editMerchantProfile={this.props.editMerchantProfile} /> :

        <div>

          <span className="mercOverview__profile">
            <section className="mercOverview__profile--part1">
              Store Name: {merchantInfo.storeName} <br />
              Website: {merchantInfo.website} <br />
              Ratings: {merchantInfo.rating} <br />
              Location: {merchantInfo.location} <br />
            </section>
            <section className="mercOverview__profile--part2">
              Support E-mail: {merchantInfo.email} <br />
              Facebook: {merchantInfo.facebook} <br />
              Twitter: {merchantInfo.twitter} <br />
              Description: {merchantInfo.description} <br />
            </section>
            <img src={merchantInfo.logo} style={{ width: '75px' }} />
          </span>
        </div>
        }
      </div>
    );
  }
}

export default MerchantOverview;
