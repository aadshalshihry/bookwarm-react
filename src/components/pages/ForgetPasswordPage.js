import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import ForgetPasswordForm from '../forms/ForgetPasswordForm';
import { resetPasswordRequest } from '../../actions/auth';

class ForgetPasswordPage extends Component {
  state = {
    success: false
  }

  submit = data =>
    this.props.resetPasswordRequest(data)
    .then(() => this.setState({ success: true }));

  render() {
    return (
      <div>
        <h1>Forgetpassword Page</h1>
        {this.state.success ?
          <Message>Email has sent.</Message> :
          <ForgetPasswordForm submit={this.submit} />
        }
      </div>
    );
  }
}

ForgetPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
}

export default connect(null, { resetPasswordRequest })(ForgetPasswordPage);