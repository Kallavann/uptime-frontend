import { useState } from "react"
import { Link } from 'react-router-dom'



function ResumeUpload() {
  const [file, setFile] = useState(null)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return
    setStatus("enviando")

    const formData = new FormData()
    formData.append("arquivo", file)
    formData.append("email", email)

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/curriculo`, {
        method: "POST",
        body: formData,
      })
      if (res.ok) setStatus("sucesso")
      else setStatus("erro")
    } catch {
      setStatus("erro")
    }
  }

  return (
    <section className="bg-gray-950 py-24 px-6 flex flex-col items-center">

      <Link to="/" className="mb-6">
        <img src="/logo.png" alt="Uptime" className="h-24 mx-auto" />
      </Link> 

      <h2 className="text-3xl font-bold text-white mb-2">Envie seu Currículo</h2>

      <p className="text-gray-400 mb-10">Nossa equipe vai analisar e entrar em contato</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">

        <input type="email" placeholder="Seu e-mail" value={email}
          onChange={(e) => setEmail(e.target.value)} required
          className="bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 focus:ring-yellow-400" />

        <label className="bg-gray-800 text-gray-400 p-4 rounded text-center border-2 border-dashed border-yellow-400 cursor-pointer hover:bg-gray-700 transition">
          {file ? file.name : "Clique para anexar seu currículo (PDF)"}

          <input type="file" accept="application/pdf" className="hidden"
            onChange={(e) => setFile(e.target.files[0])} />

        </label>

        <button type="submit"
          className="bg-yellow-400 text-gray-950 font-bold py-3 px-6 hover:bg-yellow-300 transition-all duration-200">
          {status === "enviando" ? "Enviando..." : "Enviar Currículo para Análise"}
        </button>

        {status === "sucesso" && <p className="text-green-400 text-center">Currículo enviado! Em breve entraremos em contato. ✅</p>}
        {status === "erro" && <p className="text-red-400 text-center">Erro ao enviar. Tente novamente. ❌</p>}
      </form>
       

    </section>
  )
}

export default ResumeUpload