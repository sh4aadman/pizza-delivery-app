async function patchDeliveryAddress(place, orderId) {
  console.log(orderId);
  const response = await fetch(`http://localhost:8000/deliveries/${orderId.orderId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(place),
  });

  if (!response.ok) {
    throw new Error("Failed to post delivery address");
  }

  return response.json();
}

export { patchDeliveryAddress };
