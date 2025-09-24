import { useState } from "react";

export default function LeadForm({ apiBase, onCreate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("New");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      setName("");
      setEmail("");
      setStatus("New");
      onCreate && onCreate();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <div>
        <label>Name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter lead name"
        />
      </div>
      <div>
        <label>Email</label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter lead email"
        />
      </div>
      <div>
        <label>Status</label>
        <br />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>New</option>
          <option>Engaged</option>
          <option>Proposal Sent</option>
          <option>Closed-Won</option>
          <option>Closed-Lost</option>
        </select>
      </div>
      <div style={{ marginTop: 8 }}>
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add Lead"}
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </form>
  );
}
