async function postOrder(order) {
  const response = await fetch("http://localhost:8000/orders", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    throw new Error("Failed to post order");
  }

  return response.json();
}

export { postOrder };