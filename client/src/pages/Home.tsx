import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Droplets, Leaf, Wind } from "lucide-react";

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
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Leaf className="w-6 h-6 text-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Tao</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-sm font-medium hover:text-accent transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
          <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
            Agendar
          </Button>
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
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Caminho da Saúde
          </h1>
          <p className="text-xl text-muted-foreground mb-8 font-light">
            Biomedicina integrativa para seu bem-estar completo
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Conhecer Serviços
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-4">Nossos Serviços</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Acupuntura */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/r4eqXbJ306wy5f16Shcgho/sandbox/vbHChzgJEgmuF1Ow5rRoJv-img-2_1771341276000_na1fn_YWN1cHVudHVyYS16ZW4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcjRlcVhiSjMwNnd5NWYxNlNoY2doby9zYW5kYm94L3ZiSENoemdKRWdtdUYxT3c1clJvSnYtaW1nLTJfMTc3MTM0MTI3NjAwMF9uYTFmbl9ZV04xY0hWdWRIVnlZUzE2Wlc0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HKGqLRfU6CuCC-MX8yqeSGBLBf2b4cGaxfMWO7vW33BMzs5qoZsHJulI5~JgfhFpOg~z38RZ5Vd1jjoWbwaut2g64ovqAkE2dY6~cBb7i4b2IOPeY9IokzGFHNXjYQ7T1F6inf1VPsjMjHyiD18D2~e1s~-eiHCSjZqtO5toP4Da4kGs5C4qgfzJj6ulIzLGlMU-P1P-jgvMDxej2wupXi6tqPCZu12-5i2SW9TpwesTa4TTejoIhdy148rZouiDCplMPqJ766i46hGRdiAd7skaEjCs~5m5OnAC8OwVnpjKs7OkJNyLZx52NhOEsd6yWGvOlIGmXXemg16SA2n3Ww__"
                  alt="Acupuntura"
                  className="w-32 h-32 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Acupuntura</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Terapia tradicional chinesa que equilibra a energia do corpo, aliviando dores e promovendo bem-estar integral.
                </p>
                <p className="text-sm text-muted-foreground">
                  Responsável técnico: Dr. Carlos Lupo (CRBM: 22793)
                </p>
              </div>
            </div>

            {/* Hidroterapia */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/r4eqXbJ306wy5f16Shcgho/sandbox/6J883kVhqpm3woFQ9jqqmm-img-1_1771341770000_na1fn_aGlkcm90ZXJhcGlhLXRlcmFwZXV0aWNh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcjRlcVhiSjMwNnd5NWYxNlNoY2doby9zYW5kYm94LzZKODgza1ZocXBtM3dvRlE5anFxbW0taW1nLTFfMTc3MTM0MTc3MDAwMF9uYTFmbl9hR2xrY201MFpYSmhjR2xoTFhSbGNtRndaWFYwYVdOaC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Bz4I4U-5r8WfJOGfc~FZLJFOUhsWAoGVLvv2Io37uzyEecPXuWNij4lxClnD91z8ZWmiDwruueusfhcaBl1dx7tKJAKn1Z93~gSNWnSfmWwinX6Q3n3av6J~ITnHRN-Bl9oFSZHy36gavQK4voDmySnbZpd-imHDjzu84WMfNOYu-RxXBi5AAfuBBoILfX4CyCB-~b6UgB-zZYLcRBbaOHeRSp4G11Zwmoi9fRd9EU9oAsb8vm8BMhnK33PA8CDK9q0H-wHPT1fqVXeQrqUCdZHY1jgPSzQUZSp2cj3W4w1448jMQKEVJr7jU0Zc1OXKlKNrWXHHnPXGyjr4otS7Ww__"
                  alt="Hidroterapia"
                  className="w-32 h-32 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Hidroterapia</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Terapia com água para reabilitação, relaxamento e tratamento de condições específicas como pés diabéticos.
                </p>
                <p className="text-sm text-muted-foreground">
                  Inclui tratamento com ozônio para máxima eficácia
                </p>
              </div>
            </div>

            {/* Massoterapia */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/r4eqXbJ306wy5f16Shcgho/sandbox/BrjvSUtPVruVaxTXmHKdTS-img-1_1771341308000_na1fn_bWFzc2FnZW0tdGVyYXBldXRpY2E.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcjRlcVhiSjMwNnd5NWYxNlNoY2doby9zYW5kYm94L0JyanZTVXRQVnJ1VmF4VFhtSEtkVFMtaW1nLTFfMTc3MTM0MTMwODAwMF9uYTFmbl9iV0Z6YzJGblpXMHRkR1Z5WVhCbGRYUnBZMkUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QrinEMzKmzqUbTrUhEuvCLfPpDwFNQQJki8Vdz3mxRyBQIpVd2WwuicVY~5~y5SuVwAc-NAZhUMe6qcwitYwj5IlY01RPY9gAwET~SsQA3eBby5knZExHKnaLxTK686bfOvMcqFhF1hIouO1xibm37zgcqCcortFWVqvXvxbhDjqfldEqk1gduLN3a62Ck2ff4ciE1skRRnloyizuiM02TQxo6eK6nE3xEvTP4qQHdkcinkLLdUTu-WJQbYvK77buSd3GMfsP3EglBklmcuLMrjRV3IBFj35YHbDQ2oroZ1Te~fcIluP9dBAMFAjXinuDb4229m1WibRdbE9QyewiQ__"
                  alt="Massoterapia"
                  className="w-32 h-32 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Massoterapia</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Técnicas de massagem terapêutica para alívio de tensões, melhora da circulação e relaxamento profundo.
                </p>
                <p className="text-sm text-muted-foreground">
                  Profissionais especializados em diferentes modalidades
                </p>
              </div>
            </div>

            {/* Ozonioterapia */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Wind className="w-16 h-16 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Ozonioterapia</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tratamento inovador com ozônio para potencializar a eficácia de outras terapias e promover cura acelerada.
                </p>
                <p className="text-sm text-muted-foreground">
                  Especialmente eficaz em tratamentos de feridas e condições crônicas
                </p>
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
              <p className="text-sm text-muted-foreground">
                <a href="tel:" className="hover:text-accent transition-colors">
                  Entre em contato
                </a>
                <br />
                <a href="https://www.instagram.com/taocentrodebiomedicina/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  @taocentrodebiomedicina
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Agendar Consulta
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center text-sm text-white/70">
          <p>&copy; 2024 Tao Centro de Biomedicina. Todos os direitos reservados.</p>
          <p className="mt-2">Caminho da Saúde - Biomedicina Integrativa</p>
        </div>
      </footer>
    </div>
  );
}
