import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Droplets, Leaf, Wind, Send, AtSign } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Zen com Toques Orgânicos
 * - Paleta: Branco, cinza claro, verde menta e tons de terra
 * - Espaçamento generoso para respiração visual
 * - Transições suaves e meditativas
 * - Tipografia: Playfair Display (títulos) + Inter (corpo)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
                  src="/image/logo.jpeg"
                  alt="logo"
                  className="w-55 h-30 rounded-lg object-cover"
                />
            <h1 className="text-2xl font-bold text-foreground"></h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-sm font-medium hover:text-accent transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#remocao" className="text-sm font-medium hover:text-accent transition-colors">
              Serviço de Remoção
            </a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-accent transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
          <a href="https://wa.me/5511999803503?text=Olá%20Tao%20Centro%20de%20Biomedicina!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
              Agendar
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/r4eqXbJ306wy5f16Shcgho/sandbox/vbHChzgJEgmuF1Ow5rRoJv-img-1_1771341281000_na1fn_aGVyby13YXRlci13ZWxsbmVzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcjRlcVhiSjMwNnd5NWYxNlNoY2doby9zYW5kYm94L3ZiSENoemdKRWdtdUYxT3c1clJvSnYtaW1nLTFfMTc3MTM0MTI4MTAwMF9uYTFmbl9hR1Z5YnkxM1lYUmxjaTEzWld4c2JtVnpjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=U-Q28yLnHf5vXFADtoES2wneQgT4HFDkpUvhWDTdqooPRnb4eIU5ElA6nG2o6WRUfJTNubQce7C0Q2ZJHlq~dTCp39MH95GKFQ80EbCw7ymezvd-V6SO6OgrF580XFMmx36E4r2w8JAc23UMGJMgPXt7RXr9z3FOL9sW8LnJNeUrhtJy3xOPGbnap~I5s97p6ntyNlne1PLm2xO-wrGGj61U8y4aLYCuFO88m7imhQfMtotUxbYly0OM8Es4MNrL5f0Q4Jy257ANtHeGq1keLF5zhp5t-TkRRDVjxbblMcXWL0BDet2AYhUq-Mo~MR1Wl~XIsNvardLFcExje7xj8A__')`,
          }}
        >
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 container text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Tao Centro de Biomedicina<br />
            Integrativa e bem estar
          </h1>
          <p className="text-xl text-muted-foreground mb-8 font-light">
            Biomedicina integrativa para seu bem-estar completo
          </p>
          <a href="#servicos">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Conhecer Serviços
            </Button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-4">Nossos Serviços</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Acupuntura */}
            <div className="flex flex-col h-full">
              <div className="mb-6 flex-shrink-0">
                <img
                  src="/image/acupuntura.jpeg"
                  alt="Acupuntura"
                  className="w-full rounded-lg object-cover h-48"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-3">Acupuntura</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Terapia tradicional chinesa que equilibra a energia do corpo, aliviando dores e promovendo bem-estar integral.
                </p>
                <div className="mt-4 pt-4 border-t border-accent/30">
                  <p className="font-semibold text-foreground mb-3">Indicada para:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Dores cronicas</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Enxaquecas</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Stress</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Insonia</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Desequilibrios energeticos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidroterapia */}
            <div className="flex flex-col h-full">
              <div className="mb-6 flex-shrink-0">
                <img
                  src="/image/hidroterapia.jpeg"
                  alt="Hidroterapia"
                  className="w-full rounded-lg object-cover h-48"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-3">Hidroterapia</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Terapia Individual realizada em piscina aquecida, com atendimento personalizado e acompanhamento profissional.
Através de exercícios específicos dentro da água, promovemos reabilitação, fortalecimento muscular e alívio da dor de forma segura e eficaz.
A água aquecida proporciona relaxamento muscular, melhora da circulação e redução do impacto nas articulações, permitindo movimentos com mais conforto e menos dor.
                </p>
                <div className="mt-4 pt-4 border-t border-accent/30">
                  <p className="font-semibold text-foreground mb-3">Indicada para:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Dores na coluna</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Artrose</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Artrite</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Lesões musculares</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Pós-operatório</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Reabilitação neurológica</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Fibromialgia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Massoterapia */}
            <div className="flex flex-col h-full">
              <div className="mb-6 flex-shrink-0">
                <img src="/image/massoterapia.jpeg" alt="Massagem Relaxante" className="w-full rounded-lg h-48 object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-3">Massagem Relaxante</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Tecnicas terapeuticas para alivio de tensoes, melhora da circulacao e relaxamento profundo. Profissionais especializados em diferentes modalidades.
                </p>
                <div className="mt-4 pt-4 border-t border-accent/30">
                  <p className="font-semibold text-foreground mb-3">Indicada para:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Tensao muscular</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Relaxamento</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Circulacao</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Bem-estar</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Recuperacao pos-atividade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventosaterapia */}
            <div className="flex flex-col h-full">
              <div className="mb-6 flex-shrink-0">
                <img src="/image/ventosa.jpeg" alt="Ventosaterapia" className="w-full rounded-lg h-48 object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-3">Ventosaterapia</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Tecnica milenar da Medicina Tradicional Chinesa que utiliza copos de succao para estimular circulacao, aliviar dores e promover equilibrio do organismo.
                </p>
                <div className="mt-4 pt-4 border-t border-accent/30">
                  <p className="font-semibold text-foreground mb-3">Indicada para:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Dores musculares</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Circulacao</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Desintoxicacao</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Celulite</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Equilibrio energetico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Sobre a Tao</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Tao Centro de Biomedicina Integrativa é dedicada a oferecer tratamentos que integram a medicina tradicional com tecnologias modernas, sempre com foco no bem-estar completo do paciente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nossos profissionais são altamente qualificados e trabalham com responsabilidade técnica comprovada, oferecendo um atendimento humanizado e personalizado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que o verdadeiro caminho para a saúde passa pelo equilíbrio entre corpo, mente e espírito.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Por que escolher a Tao?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Leaf className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Abordagem integrativa e holística</span>
                </li>
                <li className="flex gap-3">
                  <Droplets className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Tecnologias modernas e comprovadas</span>
                </li>
                <li className="flex gap-3">
                  <Wind className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Profissionais qualificados e certificados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground">Estamos prontos para ajudar você no seu caminho para a saúde</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Localização</h3>
              <p className="text-sm text-muted-foreground">
                Rua Turiassu, 662<br />
                Perdizes, São Paulo - SP<br />
                05005-000
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Horário</h3>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta<br />
                08:00 - 16:00<br />
                <span className="text-xs text-muted-foreground/70">Agendamento necessário</span>
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Contato</h3>
              <p className="text-sm text-muted-foreground mb-1">Entre em Contato</p>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-accent" />
                <p className="text-sm text-muted-foreground font-medium">(11) 3864-9570</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/5511999803503" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
                  <Send className="w-4 h-4 text-accent" />
                  <p className="text-sm text-muted-foreground font-medium">WhatsApp</p>
                </a>
                <a href="https://www.instagram.com/taocentrodebiomedicina/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-accent transition-colors">
                  <AtSign className="w-4 h-4 text-accent" />
                  <p className="text-sm text-muted-foreground font-medium">Instagram</p>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://wa.me/5511999803503?text=Olá%20Tao%20Centro%20de%20Biomedicina!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Agendar Consulta
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Retirada e Entrega Section */}
      <section id="remocao" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Serviço de Remoção em Ambulância</h2>
            <p className="text-lg text-muted-foreground mb-8">Realizamos remoções hospitalares com segurança, agilidade e equipe qualificada.</p>
          </div>
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96">
                <img
                  src="/image/ambulancia1.jpeg"
                  alt="Ambulância de transporte"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <button className="w-2 h-2 rounded-full bg-accent"></button>
                <button className="w-2 h-2 rounded-full bg-accent/30"></button>
              </div>
            </div>
          </div>
          <div className="relative bg-muted/20 rounded-lg p-10 border border-accent/20 overflow-hidden">
            <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
              <img
                src="/image/saudesf.jpeg"
                alt="Saúde sem Fronteiras"
                className="w-96 h-96 object-contain"
              />
            </div>
            <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Atendemos:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl font-bold">✔</span>
                <p className="text-foreground font-medium">Alta hospitalar</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl font-bold">✔</span>
                <p className="text-foreground font-medium">Consultas e exames</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl font-bold">✔</span>
                <p className="text-foreground font-medium">Remoção domiciliar</p>
              </div>

            </div>
            
            <div className="border-t border-accent/20 pt-8">
              <p className="text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Ambulâncias equipadas</span> conforme normas da Agência Nacional de Vigilância Sanitária (ANVISA).
              </p>
              <p className="text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">Equipe treinada</span> e atendimento humanizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <span className="text-foreground font-medium">Entre em contato para orçamento imediato:</span>
                <a href="https://wa.me/5511920721951?text=Gostaria%20de%20solicitar%20o%20serviço%20de%20remoção%20em%20ambulância." target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:text-accent/80 transition-colors">
                  +55 11 92072-1951
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent mb-2">DEPOIMENTOS</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">O que nossos pacientes dizem</h2>
            <p className="text-muted-foreground">Confira os depoimentos de pacientes satisfeitos com nossos serviços.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-accent shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"A acupuntura com a Tao mudou minha vida. Sou muito grato pelo profissionalismo e dedicação da equipe. Recomendo para todos!"</p>
              <p className="font-semibold text-foreground">Roberto Silva</p>
              <p className="text-sm text-muted-foreground">Empresário</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-accent shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"As sessões de hidroterapia me ajudaram muito com minhas dores. A equipe é muito atenciosa e o ambiente é muito acolhedor."</p>
              <p className="font-semibold text-foreground">Fernanda Costa</p>
              <p className="text-sm text-muted-foreground">Professora</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-accent shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"Excelente atendimento! A massoterapia me deixou muito relaxado. Voltarei com certeza. Muito obrigado à toda equipe!"</p>
              <p className="font-semibold text-foreground">Marcos Oliveira</p>
              <p className="text-sm text-muted-foreground">Consultor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nos Encontre</h2>
            <p className="text-muted-foreground">Visite nossa clínica em Perdizes, São Paulo</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0928537701357!2d-46.6662!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c3e6a3a3a3a3a3%3A0x0!2sRua%20Turiassu%2C%20662%20-%20Perdizes%2C%20S%C3%A3o%20Paulo%2C%20SP%2005005-000!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center text-sm text-white/70">
          <p>&copy; 2024 Tao Centro de Biomedicina. Todos os direitos reservados.</p>
          <p className="mt-2">Tao Centro de Biomedicina Integrativa e bem estar</p>
        </div>
      </footer>
    </div>
  );
}
