import nodemailer from "nodemailer";

export const sendEmail = async (details) => {
  const transporter = nodemailer.createTransport({
    host: process.env.ELASTIC_EMAIL_SERVER,
    port: process.env.ELASTIC_EMAIL_PORT,
    auth: {
      user: process.env.ELASTIC_EMAIL_USERNAME,
      pass: process.env.ELASTIC_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    // from: `Mubashir Ul Hassan <${process.env.EMAIL_FROM}>`,
    from: `${process.env.EMAIL_FROM}`,
    to: "info.genixdc@gmail.com",
    subject: `Enquiry regarding ${details.product}`,
    html: `
    <h2>Dear ${details.name},</h2>
    <p>I hope this email finds you well. My name is ${
      details.name
    }, and I am writing to inquire about ${
      details.product
    }. I came accross H&H Power online and was impressed.</p>
    <br/>
    <p>I am particularly interested in learning more about: ${
      details.description
    }</p>
    <br/>
    ${details.phone ? `<p>My phone number is: ${details.phone}</p>` : ""}
    <br/>
    ${details.email ? `<p>My email is: ${details.email}</p>` : ""}
    `,
  };

  await transporter.sendMail(mailOptions);
};
