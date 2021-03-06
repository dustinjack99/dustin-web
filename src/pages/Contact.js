import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

function sendNodemailer(email, comment, emailErr) {
  axios.post('http://www.dustin-jackson.com/email', { email }).then(res => {
    if (res.data === 'noEmail') {
      emailErr.style.display = 'block';
    } else if (res.data === 'valid') {
      emailErr.style.display = 'none';
      swal
        .fire({
          title: 'Are you sure?',
          text: 'Send an email to me?',
          icon: 'warning',
          showCancelButton: true,
        })
        .then(results => {
          if (results.value) {
            swal.fire(
              'Email sent!',
              "Thanks for dropping a line, I'll respond back ASAP",
              'success'
            );

            axios.post('http://www.dustin-jackson.com/send', {
              email,
              comment,
            });
          } else if (results.dismiss === swal.DismissReason.cancel) {
            swal.fire(
              'Email not sent!',
              "Don't be shy, I'll still be here :)",
              'info'
            );
          }
        });
    }
  });
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
    const lengthErr = document.querySelector('.lengthErr');
    const emailErr = document.querySelector('.emailErr');
    const comField = document.querySelector('#comment');
    const emailField = document.querySelector('#email');
    const email = this.state.email;
    const comment = this.state.comment;

    emailField.textContent = '';
    comField.textContent = '';

    if (comment.length < 25) {
      lengthErr.style.display = 'block';
    } else {
      lengthErr.style.display = 'none';

      sendNodemailer(email, comment, emailErr);
    }
  }

  changeEmail(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  changeComment(e) {
    const comment = e.target.value;
    this.setState({ comment });
  }

  render() {
    return (
      <>
        <div className='contactContainer'>
          <h2 className='contacthead m-2'>Contact</h2>
          <form>
            <div>
              <label id='topLabel' htmlFor='email'>
                E-Mail
              </label>
              <input
                placeholder='your.email@you.com'
                onChange={value => this.changeEmail(value)}
                id='email'
                type='email'
              />
              <p className='emailErr'>Enter a valid email, bub.</p>
            </div>
            <div>
              <label htmlFor='comment'>Comments / Inquiries</label>
              <textarea
                placeholder='Feel free to reach out about work / freelance projects.'
                onChange={value => this.changeComment(value)}
                rows='5'
                id='comment'
              ></textarea>
              <p className='lengthErr'>
                {' '}
                Enter a comment that's longer than 25 characters (spam ain't
                cool, yo){' '}
              </p>
            </div>
            <input id='submit' type='submit' onClick={this.submitForm} />
            <div className='emailAlt'>
              <p>Or, click to use your email:</p>
              <a
                href="mailto:dustin.guy.jackson@gmail.com?subject=Job Offer for Dustin Jackson, that Handsome Devil!&body=Dear Dustin, you are so handsome and talented. Here's our job offer and why we desperately want you:"
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='dustEmail'>dustin.guy.jackson@gmail.com</p>
              </a>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Contact;
