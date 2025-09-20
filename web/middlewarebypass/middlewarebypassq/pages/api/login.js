export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  const { username, password } = req.body;
  
  if (username === "admin" && password === "secret") {
    res.setHeader(
      "Set-Cookie",
      "auth-token=secrettoken; Path=/; HttpOnly; Secure; SameSite=Strict"
    );
    return res.status(200).json({ message: "Logged in" });
  }
  
  return res.status(401).json({ message: "Invalid credentials" });
}

