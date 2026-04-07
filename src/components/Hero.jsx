import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950">

      <img src="/logo.png" alt="Uptime Consultoria" className="h-24" />

      <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3 mt-6">
        Consultoria de Carreiras Offshore
      </p>

      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
        Sua carreira <br />
        <span className="text-yellow-400">no próximo nível</span>
      </h1>

      <p className="text-gray-400 text-sm max-w-sm mb-8">
        A Uptime conecta profissionais ao mercado offshore com mentoria
        especializada, análise de currículo e suporte completo na sua jornada.
      </p>

      <a
        href="https://SEU_LINK_DE_CHECKOUT"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-gray-950 font-bold text-base px-10 py-4 hover:bg-yellow-300 transition-all duration-200 mb-4">
        Contratar Consultoria →
      </a>

      <div className="flex gap-4">
        <Link to="/contato"
          className="border border-yellow-400 text-yellow-400 font-semibold px-8 py-3 text-sm hover:bg-yellow-400 hover:text-gray-950 transition-all duration-200">
          Falar com a equipe
        </Link>
        <Link to="/curriculo"
          className="border border-gray-600 text-gray-400 font-semibold px-8 py-3 text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
          Enviar Currículo
        </Link>
      </div>

    </section>
  )
}

export default Hero