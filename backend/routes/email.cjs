const router = require("express").Router();
const sendMail = require("./sendmail.js");

router.post("/", async (req, res) => {
  try {
    const email = await req.body.email;
    const message = await req.body.message;
    const subject = await req.body.subject;

    const sentmail = await sendMail(email, subject, message);
    if (sentmail.success) {
      console.log("Email sent successfully!");
      return res.status(200).json({ message: "Email sent successfully" });
    } else {
      console.log(" Email sending failed:", sentmail.error);
      return res.status(500).json({ error: sentmail.error });
    }
  } catch (error) {
    console.log(error);
    res.send(500).send(error.message);
  }
});

module.exports = router;
