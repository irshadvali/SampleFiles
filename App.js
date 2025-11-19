import React, { useState } from "react";
import { sendToTeams } from "./sendToTeams";

function App() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    sendToTeams(message || "Default: User triggered action");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Send Notification to MS Teams</h2>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <button
        onClick={handleSend}
        style={{ padding: 10, marginLeft: 10 }}
      >
        Send
      </button>
    </div>
  );
}

export default App;
