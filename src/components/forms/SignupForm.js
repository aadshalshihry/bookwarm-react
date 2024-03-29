import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
import { arInput } from '../../ar/form';

class SignupForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      this.setState({ loading: true });
      this.props.submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  }

  validate = data => {
    const errors = {}
    if(!isEmail(data.email)) errors.email = "Invalid email";
    if(!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}

        <Form.Field error={!!errors.email}>
          <label htmlFor="email">{arInput.arEmail}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exmaple@example.com"
            value={data.email}
            onChange={this.onChange.bind(this)}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor="password">{arInput.arPassword}</label>
          <input type="password" id="password" name="password"
            placeholder="secure"
            value={data.password}
            onChange={this.onChange.bind(this)}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Button primary>Login</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default SignupForm;
