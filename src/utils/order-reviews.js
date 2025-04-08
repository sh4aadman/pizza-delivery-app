async function patchStatus(status, orderId) {
  const response = await fetch(`http://localhost:8000/review-orders/${orderId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(status),
  });
    
    if (!response.ok) {
        throw new Error("Failed to change status")
    }

    return response.json();
}

export { patchStatus };
