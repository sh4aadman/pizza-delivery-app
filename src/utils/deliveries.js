async function postDeliveryAddress(place) {
  const response = await fetch("http://localhost:8000/deliveries", {
    method: "POST",
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

export { postDeliveryAddress };
