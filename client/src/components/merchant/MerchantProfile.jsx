import React from 'react';
import { Field, reduxForm, initialize } from 'redux-form';

class MerchantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const { merchantInfo } = this.props;
    const profileInitialValues = {
      storeName: merchantInfo.storeName,
      description: merchantInfo.description,
      logo: merchantInfo.logo,
      location: merchantInfo.location,
      facebook: merchantInfo.facebook,
      twitter: merchantInfo.twitter,
      website: merchantInfo.website,
      stream: merchantInfo.stream,
    };
    this.props.initialize(profileInitialValues);
  }

  handleSubmitForm(values) {
    const profile = {
      storeName: values.storeName,
      description: values.description,
      logo: values.logo,
      location: values.location,
      facebook: values.facebook,
      twitter: values.twitter,
      website: values.website,
      stream: values.stream,
    };
    // TODO: PASS IN LOGGED IN MERCHANT ID FOR FIRST PARAMETER
    this.props.editMerchantProfile(1, profile);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="mercProfile__container">
        <h4>Merchant Profile</h4>
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <label>Store & Channel Name: </label>
          <Field type="text" component="input" name="storeName" /><br />
          <label>Merchant Description: </label>
          <Field type="text" component="input" name="description" /><br />
          <label>Logo Image URL: </label>
          <Field type="text" component="input" name="logo" /><br />
          <label>Location: </label>
          <Field type="text" component="input" name="location" /><br />
          <label>Facebook URL: </label>
          <Field type="text" component="input" name="facebook" /><br />
          <label>Twitter ID: </label>
          <Field type="text" component="input" name="twitter" /><br />
          <label>Website: </label>
          <Field type="text" component="input" name="website" /><br />
          <label>Stream URL: </label>
          <Field type="text" component="input" name="stream" /><br />
          <button action="submit">Save Profile</button>
        </form>
      </div>
    );
  }
};

const MerchantProfileForm = reduxForm({
  form: 'editMerchantProfile',
})(MerchantProfile);

export default MerchantProfileForm;
