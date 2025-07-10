import React, { useState } from "react";
import Button from "../components/Button";
import { Section } from "../components/Section";

const ContactSection = () => {
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
      const res = await fetch("http://localhost:3000/api/resend/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error enviando el formulario");
      setStatus("¡Mensaje enviado con éxito!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Ocurrió un error. Intenta de nuevo.");
    }
  };

  return (
    <Section id="contact" title={["Hablemos de tu", "Proyecto"]}>
      <p className="text-neutral-600 text-lg mb-10 text-center max-w-xl">
        ¿Tenés una idea? Nos encantaría escucharla y ayudarte a hacerla realidad
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 p-6 rounded-md mx-auto bg-white shadow-md"
      >
        <div className="flex justify-between gap-4">
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
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
          <Button type="submit">Enviar mensaje</Button>
        </div>
        {status && (
          <p className="text-center mt-2 text-sm text-neutral-600">{status}</p>
        )}
      </form>
    </Section>
  );
};

export default ContactSection;
