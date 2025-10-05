"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Details: {error.message}</p>
      <p>Please try again later.</p>
    </main>
  );
}
