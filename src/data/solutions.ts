import intercomImg from '../assets/back-view-deliverer-ringing-intercom-gate-customer-s-house-while-delivering-packages.jpg'
import cctvImg from '../assets/cctv-security-camera-ceiling.jpg'
import fingerprintImg from '../assets/fingerprint.jpg'
import homeAutomationImg from '../assets/tech-automation.jpg'
import tabletSmartHomeImg from '../assets/man-using-tablet-his-smart-home.jpg'

export type Solution = {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  detail: string
  image: string
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
    image: homeAutomationImg,
    imageAlt: 'Monitoramento residencial e comercial por dispositivo de automação e segurança',
    bullets: ['Sensores estrategicamente posicionados', 'Alertas e acompanhamento 24 horas', 'Projeto ajustado ao perfil do imóvel'],
    idealFor: ['Residências', 'Comércios', 'Condomínios', 'Empresas'],
    overview: [
      'O monitoramento de alarmes é indicado para quem precisa de uma camada ativa de proteção. O sistema identifica eventos como abertura indevida, movimentação em áreas protegidas, violação de perímetro e acionamento manual de emergência.',
      'A BWE estrutura o projeto considerando rotina do local, pontos vulneráveis, horários de maior risco e perfil de uso. Assim, o alarme deixa de ser apenas um equipamento instalado e passa a operar como parte de uma estratégia de segurança.',
    ],
    benefits: ['Reduz tempo de resposta em ocorrências', 'Dificulta invasões e ações oportunistas', 'Permite proteção por setores e horários', 'Gera mais tranquilidade para o responsável pelo imóvel'],
    applications: ['Casas e apartamentos', 'Lojas e escritórios', 'Galpões e depósitos', 'Condomínios e áreas comuns'],
    technical: ['Sensores de presença, abertura e perímetro', 'Sirenes, teclados e controles de acionamento', 'Comunicação com responsáveis pelo imóvel', 'Setorização para ambientes internos e externos'],
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
    image: cctvImg,
    imageAlt: 'Câmera CFTV dome instalada em teto de ambiente comercial',
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
    slug: 'biometria-digital',
    title: 'Controle de acesso por biometria e digital',
    shortTitle: 'Biometria e digital',
    description: 'Sistemas de controle de entrada que combinam biometria, leitores de proximidade, senhas e integração com portões e cancelas.',
    detail: 'Ideal para empresas, condomínios e residências que precisam registrar e restringir o acesso de pessoas a áreas específicas.',
    image: fingerprintImg,
    imageAlt: 'Leitor biométrico de controle de acesso por impressão digital',
    bullets: ['Registro de entrada e saída', 'Acesso por digital, senha ou cartão', 'Restrição por área e perfil'],
    idealFor: ['Empresas', 'Condomínios', 'Portarias', 'Áreas restritas'],
    overview: [
      'O controle de acesso organiza quem entra, quando entra e quais áreas pode acessar. A solução substitui chaves tradicionais por credenciais como digital, senha, cartão, tag ou reconhecimento conforme o projeto.',
      'A BWE avalia fluxo de pessoas, nível de restrição, quantidade de usuários e pontos críticos para criar uma solução prática, segura e fácil de administrar.',
    ],
    benefits: ['Mais controle sobre circulação de pessoas', 'Redução de chaves físicas e cópias não autorizadas', 'Registro de acessos para auditoria', 'Restrição por horários, perfis e ambientes'],
    applications: ['Portas de empresas', 'Salas restritas', 'Condomínios e portarias', 'Academias, clínicas e escritórios'],
    technical: ['Leitores biométricos, faciais, tags ou cartões', 'Fechaduras eletromagnéticas e eletroímãs', 'Botoeiras, fontes e controladoras', 'Cadastro, permissões e relatórios de usuários'],
    implementation: ['Mapeamento dos pontos de acesso', 'Escolha do método de identificação', 'Instalação dos leitores e fechaduras', 'Cadastro inicial e treinamento de operação'],
    differentiators: ['Configuração adequada ao fluxo real', 'Integração com portões e portas', 'Organização de permissões', 'Expansão para novos pontos de acesso'],
  },
  {
    id: 'portaria-remota',
    slug: 'portaria-remota',
    title: 'Portaria remota',
    shortTitle: 'Portaria remota',
    description: 'Substituição ou apoio à portaria presencial com atendimento e liberação de acesso realizado remotamente, com segurança e agilidade.',
    detail: 'Integração com interfone, câmeras e controle de acesso, permitindo identificar e autorizar visitantes de qualquer lugar.',
    image: intercomImg,
    imageAlt: 'Entregador utilizando interfone com câmera integrada em portão residencial',
    bullets: ['Atendimento remoto de visitantes', 'Integração com câmeras e interfone', 'Mais controle na liberação de acesso'],
    idealFor: ['Condomínios', 'Empresas', 'Portarias', 'Recepções'],
    overview: [
      'A portaria remota centraliza o atendimento de visitantes e prestadores, permitindo identificação e liberação de acesso com apoio de câmeras, interfonia e controle eletrônico.',
      'O objetivo é aumentar o controle de entrada e reduzir vulnerabilidades operacionais, mantendo rastreabilidade e padronização no atendimento.',
    ],
    benefits: ['Mais controle na entrada de visitantes', 'Redução de falhas humanas na liberação', 'Integração com câmeras e sistemas de acesso', 'Operação mais padronizada e rastreável'],
    applications: ['Condomínios residenciais', 'Empresas com recepção', 'Portarias de acesso restrito', 'Locais com fluxo recorrente de visitantes'],
    technical: ['Interfonia, câmeras e fechaduras integradas', 'Controle de abertura de portões e portas', 'Comunicação com moradores ou responsáveis', 'Registro e acompanhamento de eventos'],
    implementation: ['Diagnóstico da estrutura existente', 'Definição dos pontos de áudio, vídeo e acesso', 'Integração dos equipamentos', 'Testes de fluxo de atendimento e liberação'],
    differentiators: ['Projeto pensado para o fluxo do local', 'Integração entre imagem, áudio e acesso', 'Mais segurança na triagem', 'Possibilidade de expansão gradual'],
  },
  {
    id: 'tecnologia',
    slug: 'tecnologia',
    title: 'Soluções em tecnologia',
    shortTitle: 'Tecnologia',
    description: 'Desenvolvimento e integração de soluções tecnológicas personalizadas que ampliam a segurança e a eficiência operacional.',
    detail: 'Automação residencial integrada à segurança, dashboards de monitoramento e consultoria técnica para projetos complexos.',
    image: tabletSmartHomeImg,
    imageAlt: 'Profissional utilizando tablet para controle de sistema de segurança inteligente',
    bullets: ['Integrações sob medida', 'Automação aplicada à segurança', 'Consultoria técnica para projetos'],
    idealFor: ['Projetos especiais', 'Empresas', 'Residências inteligentes', 'Operações complexas'],
    overview: [
      'As soluções em tecnologia conectam segurança eletrônica, automação e controle operacional para criar projetos personalizados. São indicadas quando o cenário exige mais do que equipamentos isolados.',
      'A BWE atua na integração de sistemas, melhoria de processos e criação de soluções que aumentam controle, eficiência e visibilidade sobre o ambiente protegido.',
    ],
    benefits: ['Integra sistemas que antes funcionavam separados', 'Melhora controle e tomada de decisão', 'Permite automações de rotina e segurança', 'Cria soluções adequadas à operação real do cliente'],
    applications: ['Residências inteligentes', 'Empresas com múltiplos ambientes', 'Projetos com integração de sistemas', 'Operações que exigem monitoramento centralizado'],
    technical: ['Automação residencial e corporativa', 'Integração com câmeras, alarmes e controle de acesso', 'Dashboards e recursos de acompanhamento', 'Consultoria para infraestrutura e expansão'],
    implementation: ['Entendimento do objetivo do projeto', 'Mapeamento dos sistemas existentes', 'Definição da arquitetura de integração', 'Implantação, testes e ajustes operacionais'],
    differentiators: ['Solução pensada de ponta a ponta', 'Integração com foco prático', 'Escalabilidade para novas demandas', 'Acompanhamento técnico especializado'],
  },
]

export function getSolutionPath(slug: string) {
  return `/solucoes/${slug}`
}
