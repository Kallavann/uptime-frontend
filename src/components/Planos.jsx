import { Link } from 'react-router-dom'

function Planos() {
  const planos = [
    {
      nome: "Uptime White Belt",
      de: "400,00",
      por: "297,99",
      parcela: "29,92",
      link: "https://pay.kiwify.com.br/Jfro0dp",
      destaque: false,
      beneficios: [
        "LinkedIn competitivo entregue pronto",
        "Currículo competitivo entregue pronto",
        "Uma mentoria online grátis",
      ]
    },
    {
      nome: "Uptime Green Belt",
      de: "1.100,00",
      por: "797,99",
      parcela: "80,12",
      link: "https://pay.kiwify.com.br/eFxP2sr",
      destaque: true,
      beneficios: [
        "LinkedIn competitivo entregue pronto",
        "Currículo competitivo entregue pronto",
        "Mentoria Completa em grupo com 3 meses de acompanhamento com no mínimo 6 encontros",
      ]
    },
    {
      nome: "Uptime Black Belt",
      de: "1.890,50",
      por: "1.197,99",
      parcela: "120,28",
      link: "https://pay.kiwify.com.br/qTQqQmI",
      destaque: true,
      beneficios: [
        "LinkedIn competitivo entregue pronto",
        "Currículo competitivo entregue pronto",
        "Mentoria Completa em grupo com 3 meses de acompanhamento com no mínimo 6 encontros",
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Header */}
      <div className="pt-16 pb-10 text-center">
        <Link to="/">
          <img src="/logo.png" alt="Uptime" className="h-20 mx-auto mb-6" />
        </Link>
        <p className="text-yellow-600 text-4xl font-semibold tracking-widest uppercase mb-3">
          Escolha seu plano
        </p>
        <h1 className="text-3xl md:text-2xl font-bold text-white mb-3">
          Invista na sua <span className="text-yellow-600">carreira offshore</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          Escolha o plano ideal para o seu momento e dê o próximo passo.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-6 pb-16 max-w-5xl mx-auto">
        {planos.map((plano, index) => (
          <div key={index}
            className={`relative flex flex-col rounded-lg overflow-hidden flex-1 border ${
              plano.destaque
                ? 'border-yellow-600'
                : 'border-yellow-600'
            }`}>

            {/* Topo do card */}
            <div className="bg-gray-900 p-6 text-center border-b border-gray-700">
              <div className="text-4xl mb-3">{plano.icone}</div>
              <h2 className="text-lg font-bold text-white">{plano.nome}</h2>
            </div>

            {/* Preço */}
            <div className="bg-yellow-600 p-6 text-center">
              <p className="text-gray-700 text-sm line-through mb-1">
                R$ {plano.de}
              </p>
              <div className="flex items-end justify-center gap-1">
                <span className="text-gray-950 text-lg font-bold">R$</span>
                <span className="text-gray-950 text-5xl font-black leading-none">
                  {plano.por.split(',')[0]}
                </span>
                <span className="text-gray-950 text-lg font-bold mb-1">
                  ,{plano.por.split(',')[1]}
                </span>
              </div>
              <p className="text-gray-800 text-sm mt-2">
                À vista ou 12x R${plano.parcela}
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-gray-900 p-6 flex flex-col gap-3 flex-1">
              {plano.beneficios.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-yellow-600 mt-0.5">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Botão */}
            <div className="bg-gray-900 p-6 pt-0">

            <a  
                href={plano.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-yellow-600 text-gray-950 font-bold py-3 hover:bg-yellow-200 transition-all duration-200">
                Contratar agora →
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Voltar */}
      <div className="text-center pb-10">
        <Link to="/" className="text-gray-500 text-sm hover:text-yellow-600 transition">
          ← Voltar para o início
        </Link>
      </div>

    </div>
  )
}

export default Planos