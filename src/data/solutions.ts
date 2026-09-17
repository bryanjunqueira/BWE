// Photos from fotos nova / fotos-enviadas-fim
import cameraBullet1 from '../assets/camera-bullet-1.png'
import speedDome from '../assets/speed-dome.jpeg'
import xat8000 from '../assets/xat-8000.webp'
import sistemaAlarme from '../assets/sistema-alarme.webp'
import leitorFacial from '../assets/leitor-facial.webp'
import controleFacialNovo from '../assets/controle-facial-novo.webp'
import catraca1 from '../assets/catraca-1.webp'
import catraca2 from '../assets/catraca-2.webp'
import portariaRemotaHibrida from '../assets/portaria-remota-hibrida.webp'
import casaAutomacao from '../assets/casa-automacao.jpeg'
import boxInteligente from '../assets/box-inteligente.webp'

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
    images: [xat8000, sistemaAlarme],
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
    image: cameraBullet1,
    images: [cameraBullet1, speedDome],
    imageAlt: 'Câmeras bullet instaladas para CFTV e vigilância',
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
    image: leitorFacial,
    images: [leitorFacial, controleFacialNovo, catraca1, catraca2],
    imageAlt: 'Leitor de reconhecimento facial instalado para controle de acesso',
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
    title: 'Soluções em tecnologia',
    shortTitle: 'Tecnologia',
    description: 'Desenvolvimento e integração de soluções tecnológicas personalizadas que ampliam a segurança e a eficiência operacional.',
    detail: 'Antenas veiculares, torres de vigilância interligadas ao Smart Sampa, vizinhança solidária, armário inteligente e automação integrada à segurança.',
    image: casaAutomacao,
    images: [casaAutomacao, boxInteligente],
    imageAlt: 'Casa com automação residencial integrada a sistema de segurança',
    bullets: ['Integrações sob medida', 'Automação aplicada à segurança', 'Consultoria técnica para projetos'],
    idealFor: ['Projetos especiais', 'Empresas', 'Residências inteligentes', 'Operações complexas'],
    overview: [
      'As soluções em tecnologia conectam segurança eletrônica, automação e controle operacional para criar projetos personalizados. São indicadas quando o cenário exige mais do que equipamentos isolados.',
      'A BWE atua na integração de sistemas, melhoria de processos e criação de soluções que aumentam controle, eficiência e visibilidade sobre o ambiente protegido — de antenas veiculares e leitura de placas a torres de vigilância interligadas ao Smart Sampa e projetos de vizinhança solidária.',
    ],
    benefits: ['Integra sistemas que antes funcionavam separados', 'Melhora controle e tomada de decisão', 'Permite automações de rotina e segurança', 'Cria soluções adequadas à operação real do cliente'],
    applications: ['Residências inteligentes', 'Empresas com múltiplos ambientes', 'Ruas e condomínios com vizinhança solidária', 'Operações que exigem monitoramento centralizado'],
    technical: ['Antenas veiculares e leitura automática de placas', 'Torres de vigilância interligadas ao Smart Sampa', 'Armário inteligente para recebimento de encomendas', 'Integração com câmeras, alarmes e controle de acesso'],
    implementation: ['Entendimento do objetivo do projeto', 'Mapeamento dos sistemas existentes', 'Definição da arquitetura de integração', 'Implantação, testes e ajustes operacionais'],
    differentiators: ['Solução pensada de ponta a ponta', 'Integração com foco prático', 'Escalabilidade para novas demandas', 'Acompanhamento técnico especializado'],
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
