import { Resend } from 'resend';
import { envObject } from '../config/enviroment.js';

const resend = new Resend(envObject.resend.key);


export const sendEmail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Faltan campos requeridos" });
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', 
      to: ['cristianpabloayala@hotmail.com'],   
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Error del servidor" });
  }
};