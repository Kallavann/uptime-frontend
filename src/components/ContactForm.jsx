import { useState } from "react"
import { Link } from 'react-router-dom'

function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("enviando")
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus("sucesso")
      else setStatus("erro")
    } catch {
      setStatus("erro")
    }
  }

  return (
    <section className="bg-gray-900 py-24 px-6 flex flex-col items-center">
      <Link to="/" className="mb-6">
        <img src="/logo.png" alt="Uptime" className="h-24 mx-auto" />
      </Link> 
      
      <h2 className="text-3xl font-bold text-white mb-2">Entre em Contato</h2>
      <p className="text-gray-400 mb-10">Tire suas dúvidas ou agende uma conversa</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">
        <input name="nome" placeholder="Seu nome" onChange={handleChange} required
          className="bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 focus:ring-yellow-400" />

        <input name="email" type="email" placeholder="Seu e-mail" onChange={handleChange} required
          className="bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 focus:ring-yellow-400" />

        <input name="telefone" placeholder="Telefone / WhatsApp" onChange={handleChange}
          className="bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 focus:ring-yellow-400" />

        <textarea name="mensagem" placeholder="Sua mensagem" rows={4} onChange={handleChange} required
          className="bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 focus:ring-yellow-400" />

        <button type="submit"
          className="bg-yellow-400 text-gray-950 font-bold py-3 px-6 hover:bg-yellow-300 transition-all duration-200">
          {status === "enviando" ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {status === "sucesso" && <p className="text-green-400 text-center">Mensagem enviada! ✅</p>}
        {status === "erro" && <p className="text-red-400 text-center">Erro ao enviar. Tente novamente. ❌</p>}
      </form>
    </section>
  )
}

export default ContactForm