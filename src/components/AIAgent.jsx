import React, { useState } from "react";

export default function AIAgent() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("https://phys-chatbot-api.vercel.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      setAnswer(data.response);
    } catch (err) {
      console.error(err);
      setAnswer("Error: Unable to fetch response from AI agent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Physical AI & Humanoid Robotics AI</h2>
      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: "0.5rem 1rem" }}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div
          style={{
            marginTop: "1rem",
            background: "#000000ff",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          <strong>AI Response:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
