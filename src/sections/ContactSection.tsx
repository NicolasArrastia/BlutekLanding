import React, { useState } from "react";
import Button from "../components/Form/Button";
import { Section } from "../components/Section";
import { Input } from "../components/Form/Input";
import { TextArea } from "../components/Form/TextArea";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactSection = () => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM_DATA);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);

    const to = form.email;
    const subject = encodeURIComponent("Nuevo mensaje de contacto");
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone}\nMensaje: ${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    // toast.success("Mensaje enviado correctamente");
  };

  return (
    <Section id="contact" title={["Hablemos de tu", "Proyecto"]}>
      <p className="text-neutral-600 text-lg mb-10 text-center max-w-xl">
        ¿Tenés una idea? Nos encantaría escucharla y ayudarte a hacerla realidad
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 p-6 rounded-md mx-auto bg-white shadow-md border border-neutral-200"
      >
        <div className="flex justify-between gap-4">
          <Input
            label="Nombre:"
            placeholder="Tu nombre"
            name="name"
            value={form.name}
            handleChange={handleChange}
          />
          <Input
            label="Email:"
            name="email"
            placeholder="tu@email.com"
            value={form.email}
            handleChange={handleChange}
          />
        </div>
        <Input
          label="Teléfono:"
          name="phone"
          placeholder="(011) 1234-5678"
          value={form.phone}
          handleChange={handleChange}
        />

        <TextArea
          name={form.message}
          label={"Mensaje:"}
          placeholder="Escribinos tu mensaje"
          handleChange={handleChange}
        />
        <Button type="submit">Enviar mensaje</Button>
      </form>
    </Section>
  );
};

export default ContactSection;
