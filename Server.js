import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body

  try {
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New Contact – Rohan Web Designs",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ success: false })
  }
})

app.listen(5000, () => {
  console.log("Backend running on port 5000")
})
