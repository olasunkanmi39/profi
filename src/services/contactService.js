const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxK91B0-FDbZHXcUVaKzZPLmj7nUC11lVUnRC-NAASM48XjMR0EBpzmam2pMhs4WLchQg/exec";

export const sendMessage = async (contactForm) => {
  const formData = new FormData();
  formData.append("name", contactForm.name);
  formData.append("email", contactForm.email);
  formData.append("message", contactForm.message);

  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }
};