async function submitOrder(user, orderId) {
  const response = await fetch(`http://localhost:8000/payments/${orderId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to change status");
  }

  return response.json();
}

export { submitOrder };
