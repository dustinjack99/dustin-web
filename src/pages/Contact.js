import React, { Component } from 'react';
import nodemailer from 'nodemailer';

async function main(email, comment) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
  });

  let info = await transporter.sendMail({
    from: `<${email}>`, // sender address
    to: 'dustin.guy.jackson@gmail.com', // list of receivers
    subject: 'Feedback from dustin-jackson.com', // Subject line
    text: `${comment}`, // plain text body
    html: `<p>${comment}</p>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
}
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      comment: '',
    };

    this.submitForm.bind(this);
    this.changeComment.bind(this);
    this.changeEmail.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    const email = this.state.email;
    const comment = this.state.comment;
    main(email, comment);
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
