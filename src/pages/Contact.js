import React, { Component } from 'react';
import axios from 'axios';

function sendNodemailer(email, comment) {
  axios.post('http://localhost:8080/send', { email, comment });
}
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      comment: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeComment = this.changeComment.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    const email = this.state.email;
    const comment = this.state.comment;
    sendNodemailer(email, comment);
  }

  changeEmail(e) {
    const email = e.target.value;
    this.setState({ email });
    console.log(this.state.email);
  }

  changeComment(e) {
    const comment = e.target.value;
    this.setState({ comment });
    console.log(this.state.comment);
  }

  render() {
    return (
      <>
        <h2 className='contacthead m-2'>Contact</h2>
        <form>
          <div>
            <label htmlFor='email'>E-Mail</label>
            <input
              onChange={value => this.changeEmail(value)}
              id='email'
              type='email'
            />
          </div>
          <div>
            <label htmlFor='comment'>Comments / Inquiries</label>
            <textarea
              onChange={value => this.changeComment(value)}
              rows='5'
              id='comment'
            ></textarea>
          </div>
          <input id='submit' type='submit' onClick={this.submitForm} />
        </form>
      </>
    );
  }
}

export default Contact;
