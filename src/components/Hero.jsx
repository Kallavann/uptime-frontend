import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950">

      <img src="/logo.png" alt="Uptime Consultoria" className="h-32 w-auto" />

      <p className="text-yellow-600 text-2xl font-semibold tracking-widest uppercase mb-3 mt-6">
        Consultoria de Carreiras Offshore
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
        Sua carreira <br />
        <span className="text-white leading-tight">no próximo nível</span>
      </h1>

      <p className="text-gray-400 text-sm max-w-sm mb-8">
        A Uptime conecta profissionais ao mercado offshore com mentoria
        especializada, análise de currículo e suporte completo na sua jornada.
      </p>

      <div className="flex gap-4">
        <Link to="/contato"
          className="border border-yellow-600 text-yellow-600 font-semibold px-8 py-3 text-sm hover:bg-yellow-600 hover:text-gray-950 transition-all duration-200">
          Falar com a equipe
        </Link>
        <Link to="/curriculo"
          className="border border-yellow-600 text-yellow-600 font-semibold px-8 py-3 text-sm  hover:bg-yellow-600 hover:border-yellow-600 hover:text-gray-950 transition-all duration-200">
          Enviar Currículo
        </Link>

         <Link to="/planos"
          className="border border-yellow-600 text-yellow-600 font-semibold px-8 py-3 text-sm  hover:bg-yellow-600 hover:border-yellow-600 hover:text-gray-950 transition-all duration-200">
          Contratar Consultoria →
        </Link>
      </div>

    </section>
  )
}

export default Hero