import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="contacthead m-2">Contact</h2>
      <form>
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label for="email">E-Mail</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label for="comment">Comments / Inquiries</label>
          <textarea rows="5" id="comment"></textarea>
        </div>
        <input id="submit" type="submit" />
      </form>
    </>
  );
};

export default Contact;
