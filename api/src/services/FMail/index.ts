import nodemailer from 'nodemailer'

class FMail {
  private transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "mailhog",
      port: 1025,
      secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
      // auth: {
      //   user: process.env.MAIL_SENDER,
      //   pass: process.env.MAIL_PASSWORD,
      // },
    });
  }

  async send() {
    try {
      const info = await this.transporter.sendMail({
        from: 'bangtran.hha@gmail.com', // sender address
        to: "bangtx@fullstack.edu.vn", // list of recipients
        subject: "Hello", // subject line
        text: "Hello world?", // plain text body
        html: "<div><h1>Hello world?</h1><img src='http://localhost:3000/email_trackings' width='0' style='font-size: 0' '/></div>", // HTML body
      });

      console.log("Message sent: %s", info.messageId);
      // Preview URL is only available when using an Ethereal test account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
      console.error("Error while sending mail:", err);
    }
  }
}

export const fMail = new FMail()