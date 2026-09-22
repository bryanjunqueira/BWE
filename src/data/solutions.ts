// Uma foto por solução — nenhuma se repete em outra seção do site
import xat8000 from '../assets/xat-8000.webp'
import torreMonitoramento from '../assets/torre-monitoramento-1.webp'
import controleFacial2 from '../assets/controle-facial-2.webp'
import portariaRemotaHibrida from '../assets/portaria-remota-hibrida.webp'
import leitorPlacas from '../assets/leitor-placas.webp'

export type Solution = {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  detail: string
  image: string
  images: string[]
  imageAlt: string
  /**
   * Ponto de foco do recorte (object-position). Fotos verticais em caixas baixas
   * são cortadas pelo centro; aqui definimos o que não pode sumir no corte.
   */
  imagePosition?: string
  bullets: string[]
  idealFor: string[]
  overview: string[]
  benefits: string[]
  applications: string[]
  technical: string[]
  implementation: string[]
  differentiators: string[]
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'monitoramento',
    slug: 'alarmes',
    title: 'Monitoramento de alarmes',
    shortTitle: 'Alarmes',
    description: 'Central de monitoramento que age imediatamente ao menor sinal de anomalia, garantindo resposta rápida em situações de risco.',
    detail: 'Integração com sensores de movimento, abertura de portas e janelas, sirenes e comunicação direta com o responsável pelo imóvel.',
    image: xat8000,
    images: [xat8000],
    imageAlt: 'Teclado de alarme XAT 8000 instalado para monitoramento residencial e comercial',
    bullets: ['Sensores estrategicamente posicionados', 'Alertas e acompanhamento 24 horas', 'Projeto ajustado ao perfil do imóvel'],
    idealFor: ['Residências', 'Comércios', 'Condomínios', 'Empresas'],
    overview: [
      'O monitoramento de alarmes é indicado para quem precisa de uma camada ativa de proteção. O sistema identifica eventos como abertura indevida, movimentação em áreas protegidas, violação de perímetro e acionamento manual de emergência.',
      'A BWE estrutura o projeto considerando rotina do local, pontos vulneráveis, horários de maior risco e perfil de uso. Assim, o alarme deixa de ser apenas um equipamento instalado e passa a operar como parte de uma estratégia de segurança.',
    ],
    benefits: ['Reduz tempo de resposta em ocorrências', 'Dificulta invasões e ações oportunistas', 'Permite proteção por setores e horários', 'Gera mais tranquilidade para o responsável pelo imóvel'],
    applications: ['Casas e apartamentos', 'Lojas e escritórios', 'Galpões e depósitos', 'Condomínios e áreas comuns'],
    technical: ['Sensores de presença, abertura e perímetro', 'Teclado XAT 8000, sirenes e controles de acionamento', 'Comunicação com responsáveis pelo imóvel', 'Setorização para ambientes internos e externos'],
    implementation: ['Levantamento dos pontos de risco', 'Definição dos sensores e zonas de proteção', 'Instalação e configuração do sistema', 'Teste de acionamento e orientação de uso'],
    differentiators: ['Projeto sob medida', 'Equipamentos adequados ao ambiente', 'Instalação limpa e planejada', 'Suporte para ajustes e expansão'],
  },
  {
    id: 'cftv',
    slug: 'cameras',
    title: 'CFTV e sistema de câmeras',
    shortTitle: 'Câmeras',
    description: 'Vigilância por câmeras de alta resolução, cobrindo pontos estratégicos do imóvel com imagens nítidas 24 horas por dia.',
    detail: 'Câmeras internas e externas, gravação em nuvem ou local, acesso remoto pelo smartphone e armazenamento seguro das imagens.',
    image: torreMonitoramento,
    images: [torreMonitoramento],
    imageAlt: 'Torre de monitoramento com câmeras em poste exclusivo na entrada do imóvel',
    // Foto vertical: sem isso o corte mobile esconde as câmeras no topo do poste
    imagePosition: 'center 18%',
    bullets: ['Câmeras internas e externas', 'Acesso remoto pelo celular', 'Gravação local ou em nuvem'],
    idealFor: ['Lojas', 'Galpões', 'Residências', 'Áreas comuns'],
    overview: [
      'O CFTV permite acompanhar, registrar e consultar imagens de pontos estratégicos do imóvel. Além de inibir ações suspeitas, as câmeras ajudam na conferência de rotinas, controle operacional e análise de eventos.',
      'O projeto ideal considera posicionamento, iluminação, ângulo de visão, armazenamento e facilidade de acesso às imagens. A BWE dimensiona cada ponto para evitar áreas cegas e entregar uma visualização clara do ambiente.',
    ],
    benefits: ['Monitoramento visual em tempo real', 'Histórico de gravações para consulta', 'Acesso remoto via celular ou computador', 'Maior controle sobre entradas, áreas externas e circulação'],
    applications: ['Comércios e fachadas', 'Residências e condomínios', 'Garagens e estacionamentos', 'Estoques, caixas e áreas sensíveis'],
    technical: ['Câmeras IP, HD, dome ou bullet conforme o ambiente', 'Gravadores, armazenamento local ou soluções em nuvem', 'Infraestrutura de rede e cabeamento organizada', 'Configuração de aplicativo e permissões de acesso'],
    implementation: ['Análise de campo de visão', 'Definição de pontos internos e externos', 'Instalação, passagem de cabos e fixação', 'Configuração de gravação e acesso remoto'],
    differentiators: ['Menos pontos cegos', 'Imagens nítidas para identificação', 'Organização da infraestrutura', 'Orientação para uso do aplicativo'],
  },
  {
    id: 'controle-acesso',
    slug: 'acesso-facial',
    title: 'Acesso facial',
    shortTitle: 'Acesso facial',
    description: 'Tecnologia de reconhecimento facial para controlar entradas e saídas com mais segurança, agilidade e praticidade. O sistema identifica pessoas previamente cadastradas e permite um controle mais eficiente do acesso aos ambientes.',
    detail: 'Ideal para condomínios, empresas, comércios, escritórios e residências que buscam modernizar sua segurança e ter mais controle sobre a circulação de pessoas.',
    image: controleFacial2,
    images: [controleFacial2],
    imageAlt: 'Leitor de reconhecimento facial liberando o acesso no portão de um condomínio',
    bullets: ['Liberação por reconhecimento facial', 'Cadastro prévio das pessoas autorizadas', 'Registro de entradas e saídas'],
    idealFor: ['Condomínios', 'Empresas', 'Comércios', 'Escritórios', 'Residências'],
    overview: [
      'O acesso facial organiza quem entra, quando entra e quais áreas pode acessar. O leitor identifica pessoas previamente cadastradas e libera a passagem sem chave, cartão ou contato físico, tornando a rotina mais rápida e segura.',
      'A BWE avalia fluxo de pessoas, nível de restrição, quantidade de usuários e pontos críticos para criar uma solução prática, segura e fácil de administrar — inclusive integrada a catracas, portões e portas.',
    ],
    benefits: ['Mais controle sobre a circulação de pessoas', 'Fim das chaves físicas e das cópias não autorizadas', 'Registro de acessos para consulta e auditoria', 'Liberação rápida, sem contato e sem filas na entrada'],
    applications: ['Portarias de condomínios', 'Entradas de empresas e escritórios', 'Comércios e áreas restritas', 'Residências e acessos de garagem'],
    technical: ['Leitores de reconhecimento facial para uso interno e externo', 'Catracas e torniquetes integrados ao acesso facial', 'Fechaduras eletromagnéticas, eletroímãs e botoeiras', 'Cadastro de usuários, permissões e relatórios de acesso'],
    implementation: ['Mapeamento dos pontos de acesso', 'Definição dos equipamentos e do fluxo de passagem', 'Instalação dos leitores, catracas e fechaduras', 'Cadastro inicial das pessoas e treinamento de operação'],
    differentiators: ['Configuração adequada ao fluxo real do local', 'Integração com catracas, portões e portas', 'Organização de permissões por perfil e horário', 'Expansão para novos pontos de acesso'],
  },
  {
    id: 'portaria-remota',
    slug: 'portaria-remota',
    title: 'Portaria remota e portaria híbrida',
    shortTitle: 'Portaria remota/híbrida',
    description: 'Soluções que substituem ou complementam a portaria presencial, proporcionando atendimento e liberação de acessos de forma remota, com mais segurança, agilidade e eficiência.',
    detail: 'Integradas a interfones, câmeras e sistemas de controle de acesso, permitem identificar e autorizar moradores, visitantes e prestadores de serviço com praticidade e segurança.',
    image: portariaRemotaHibrida,
    images: [portariaRemotaHibrida],
    imageAlt: 'Central de portaria remota e portaria híbrida atendendo a entrada de um condomínio',
    bullets: ['Atendimento remoto de visitantes', 'Integração com câmeras e interfone', 'Mais controle na liberação de acesso'],
    idealFor: ['Condomínios', 'Empresas', 'Portarias', 'Recepções'],
    overview: [
      'A portaria remota centraliza o atendimento de visitantes e prestadores em uma central de operação, permitindo identificação e liberação de acesso com apoio de câmeras, interfonia e controle eletrônico.',
      'Na portaria híbrida, esse atendimento remoto trabalha em conjunto com a equipe presente no local: a central assume os horários de menor movimento e apoia a portaria física nos momentos de pico, mantendo rastreabilidade e padronização no atendimento.',
    ],
    benefits: ['Mais controle na entrada de visitantes e prestadores', 'Redução de falhas humanas na liberação', 'Integração com câmeras e sistemas de acesso', 'Operação mais padronizada e rastreável'],
    applications: ['Condomínios residenciais', 'Empresas com recepção', 'Portarias de acesso restrito', 'Locais com fluxo recorrente de visitantes'],
    technical: ['Interfonia, câmeras e fechaduras integradas', 'Controle de abertura de portões, cancelas e portas', 'Comunicação com moradores ou responsáveis', 'Registro e acompanhamento de eventos'],
    implementation: ['Diagnóstico da estrutura existente', 'Definição dos pontos de áudio, vídeo e acesso', 'Integração dos equipamentos', 'Testes de fluxo de atendimento e liberação'],
    differentiators: ['Projeto pensado para o fluxo do local', 'Integração entre imagem, áudio e acesso', 'Modelo remoto ou híbrido conforme a necessidade', 'Possibilidade de expansão gradual'],
  },
  {
    id: 'tecnologia',
    slug: 'tecnologia',
    title: 'Inteligência Artificial Aplicada à Segurança',
    shortTitle: 'Inteligência Artificial',
    description: 'Desenvolvemos softwares com Inteligência Artificial para análise de vídeo em tempo real, realizando leitura de placas, detecção de invasões e monitoramento de áreas de risco.',
    detail: 'Nossa tecnologia atua integrada a alarmes, monitoramento 24h, portarias remotas e híbridas, catracas, antenas veiculares, armários inteligentes e torres de vigilância conectadas ao Smart Sampa e à vizinhança solidária.',
    image: leitorPlacas,
    images: [leitorPlacas],
    imageAlt: 'Leitura automática de placa de veículo por inteligência artificial na entrada do imóvel',
    bullets: ['Análise de vídeo em tempo real', 'Leitura automática de placas', 'Detecção de invasão e áreas de risco'],
    idealFor: ['Condomínios', 'Empresas', 'Indústrias', 'Operações com grande perímetro'],
    overview: [
      'A BWE desenvolve softwares com Inteligência Artificial que analisam as imagens das câmeras em tempo real. Em vez de depender apenas da observação humana, o sistema interpreta o que acontece na cena e gera alertas no momento em que o evento ocorre.',
      'Entre as aplicações estão a leitura automática de placas, a detecção de invasão de perímetro e o monitoramento de áreas de risco. Tudo isso trabalha integrado aos demais sistemas: alarmes, monitoramento 24h, portarias remotas e híbridas, catracas, antenas veiculares, armários inteligentes e torres de vigilância conectadas ao Smart Sampa e à vizinhança solidária.',
    ],
    benefits: ['Alerta no momento em que o evento acontece', 'Menos dependência da observação humana contínua', 'Reduz alarmes falsos com análise de contexto', 'Gera dados e histórico para tomada de decisão'],
    applications: ['Leitura de placas em entradas e cancelas', 'Detecção de invasão de perímetro', 'Monitoramento de áreas de risco e acesso restrito', 'Contagem e controle de fluxo de pessoas e veículos'],
    technical: ['Análise de vídeo em tempo real por IA', 'Leitura automática de placas (LPR) e antenas veiculares', 'Integração com alarmes, catracas e portarias remotas e híbridas', 'Conexão com Smart Sampa e vizinhança solidária'],
    implementation: ['Entendimento do objetivo e das regras de alerta', 'Mapeamento das câmeras e dos pontos de análise', 'Configuração dos modelos e das zonas de detecção', 'Testes em campo, calibragem e ajuste de sensibilidade'],
    differentiators: ['Software desenvolvido pela própria BWE', 'Regras ajustadas à operação real do cliente', 'Integração com todo o ecossistema de segurança', 'Evolução contínua dos modelos de detecção'],
  },
]

// Slugs antigos mantidos para não quebrar links já divulgados
export const LEGACY_SLUGS: Record<string, string> = {
  'biometria-digital': 'acesso-facial',
  'controle-acesso': 'acesso-facial',
}

export function getSolutionPath(slug: string) {
  return `/solucoes/${slug}`
}
