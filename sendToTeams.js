export const sendToTeams = async (message) => {
  const webhookUrl = "YOUR_WEBHOOK_URL_HERE"; // Replace with your MS Teams webhook URL

  const payload = {
    text: message, // Teams accepts "text" for simple messages
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("Message sent to Teams!");
    } else {
      console.error("Failed to send message:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending to Teams:", error);
  }
};
