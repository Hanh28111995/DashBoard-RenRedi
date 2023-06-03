import React from 'react'

export default function Chatbox() {
  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
    console.log('dance')
  }

  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  }
  return (
    <div className="chatbox_zone">
      <button className="open-button" onClick={() => openForm()}>Chat</button>
      <div className="chat-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
          <h1>Chat</h1>
          <label htmlFor="msg"><b>Message</b></label>
          <textarea placeholder="Type message.." name="msg" required defaultValue={""} />
          <button type="submit" className="btn">Send</button>
          <button type="button" className="btn cancel" onClick={() => closeForm()}>Close</button>
        </form>
      </div>
    </div>
  )
}
