/* eslint-disable @typescript-eslint/no-var-requires */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function (req: NextApiRequest, res: NextApiResponse) {
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: true,
    port: 465,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  const mailData = {
    from: process.env.FROM,
    to: process.env.TO,
    replyTo: req.body.email,
    subject: `Mensagem de ${req.body.name}`,
    text: req.body.name,
    html: `<div>
      <strong>Nome: </strong>${req.body.name}<br>
      <strong>Telefone: </strong>${req.body.phone}<br>
      <strong>Email: </strong>${req.body.email}<br>
      <strong>Assunto: </strong>${req.body.subject}<br>
      <strong>Mensagem: </strong><br>${req.body.message}
    </div>`
  }

  transporter.sendMail(mailData, (err: string, info: string) => {
    if (err) {
      return res.status(404).json({ error: err })
    } else {
      return res.status(200).json({ message: info })
    }
  })
}
