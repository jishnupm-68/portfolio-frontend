import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const EmailComponent = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const publicUser = useSelector((store) => store.publicUser);

  // build safe mailto link
  const mailtoLink = publicUser
    ? `mailto:${publicUser.contactEmail}?subject=Message&body=${encodeURIComponent(
        message
      )}`
    : "#";

  return (
    <div>
      <h3>Send Message</h3>

      <fieldset className="w-80">
        <label>Enter your email address</label>
        <div className="join">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@site.com"
            className="input input-bordered join-item"
          />
          {publicUser && (
            <a
              className="ml-2 btn btn-primary join-item"
              href={mailtoLink}
            >
              Connect me
            </a>
          )}
        </div>
      </fieldset>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="input input-bordered join-item mt-2"
      />
    </div>
  );
};

export default EmailComponent;
