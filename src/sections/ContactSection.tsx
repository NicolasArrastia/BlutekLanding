import React, { useState } from "react";
import Button from "../components/Button";

const ContactSection = () => {
  const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("http://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Acme <onboarding@resend.dev>",
          to: ["cristianpabloayala@hotmail.com"],
          subject: `Nuevo mensaje de ${form.name}`,
          html: `
            <p><strong>Nombre:</strong> ${form.name}</p>
            <p><strong>Email:</strong> ${form.email}</p>
            <p><strong>Teléfono:</strong> ${form.phone}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${form.message}</p>
          `,
        }),
      });

      if (!res.ok) throw new Error("Error enviando el email");

      setStatus("¡Mensaje enviado con éxito!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Ocurrió un error. Intenta de nuevo.");
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center py-20 px-5">
      <h2 className="text-4xl text-neutral-950 mb-8 text-center font-semibold">
        Contáctanos
      </h2>
      <p className="text-neutral-600 text-lg mb-10 text-center max-w-xl">
        ¿Está interesado en nuestros servicios? Completa el formulario y nos
        pondremos en contacto contigo.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-neutral-300 rounded-md p-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-neutral-300 rounded-md p-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Número de teléfono"
          value={form.phone}
          onChange={handleChange}
          className="border border-neutral-300 rounded-md p-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="border border-neutral-300 rounded-md p-3 text-neutral-800 resize-none focus:outline-none focus:ring-2 focus:ring-black"
        />
        <div className="flex justify-center">
          <Button type="submit" style={{ cursor: "pointer" }}>
            Enviar mensaje
          </Button>
        </div>
        {status && (
          <p className="text-center mt-2 text-sm text-neutral-600">{status}</p>
        )}
      </form>
    </section>
  );
};

export default ContactSection;