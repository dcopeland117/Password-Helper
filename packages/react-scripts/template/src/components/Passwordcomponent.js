import React, { Component } from 'react';
import '../styles/App.css';
import validationMessages from '../validators/Password-validator';
import content from '../containers/Passwordcontainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', validation: [], initialState: true };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const currentPassword = this.state.value.toString();
    this.setState({
      validation: validationMessages(currentPassword),
      initialState: false,
    });

    event.preventDefault();
  }
  render = content;
}
export default App;
