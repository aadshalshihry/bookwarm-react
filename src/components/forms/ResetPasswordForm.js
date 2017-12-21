import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';


class ResetPasswordForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      data :{
        token: this.props.token,
        newPassword: '',
        confirmPassword: ''

      },
      loading: false,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      ...this.state,
      data: {...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      this.setState({ loading: true });
      this.props.submit(this.state.data)
      .catch(err =>{
        this.setState({ errors: err.response.data.errors, loading: false })
      });
    }
  }

  validate = data => {
    const { newPassword, confirmPassword } = this.state.data;
    const errors = {}
    if(!newPassword) errors.newPassword = "Can't be blank"
    if(newPassword === 0) errors.newPassword = "Too short";
    if(newPassword !== confirmPassword) errors.confirmPassword = "Password doesn't match"
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
      {!!errors.global && <Message negative>{errors.global}</Message>}
        <Form.Field error={!!errors.newPassword}>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" name="newPassword"
            placeholder="Enter new password"
            value={data.newPassword}
            onChange={this.onChange.bind(this)}
          />
          {errors.newPassword && <InlineError text={errors.newPassword} />}
        </Form.Field>

        <Form.Field error={!!errors.confirmPassword}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword"
            placeholder="Re-enter same password"
            value={data.confirmPassword}
            onChange={this.onChange.bind(this)}
          />
          {errors.confirmPassword && <InlineError text={errors.confirmPassword} />}
        </Form.Field>

        <Button primary>Submit</Button>
      </Form>
    );
  }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default ResetPasswordForm;
