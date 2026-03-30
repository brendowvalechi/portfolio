export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  featured: boolean;
  icon: "database" | "zap" | "shield";
  narrative: string;
}

export const projects: Project[] = [
  {
    id: "executive-data-api",
    title: "Executive Data API",
    description:
      "API REST completa para dados empresariais e indicadores econômicos. Simula o backend de uma plataforma de BI com endpoints documentados, cache Redis e cobertura de testes superior a 70%.",
    longDescription:
      "API REST de produção construída para simular o backend de uma plataforma de Business Intelligence. Expõe dados empresariais e indicadores econômicos com 4+ endpoints totalmente documentados via Swagger e ReDoc. Implementa paginação, filtros avançados, ordenação dinâmica e busca por texto. O cache Redis com TTL configurável reduz latência em consultas frequentes de forma mensurável. A suíte de testes com pytest e httpx garante cobertura superior a 70%, validando contratos de API, casos de erro e comportamento do cache.",
    tags: [
      "FastAPI",
      "Pydantic v2",
      "SQLAlchemy",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "pytest",
      "httpx",
      "Swagger",
      "Docker",
    ],
    github: "https://github.com/brendowvalechi/executive-data-api",
    featured: true,
    icon: "database",
    narrative: "Expõe os dados",
  },
  {
    id: "data-harvester",
    title: "Data Harvester",
    description:
      "Motor de coleta assíncrono que busca dados de APIs públicas brasileiras (IBGE, câmbio, feriados) com centenas de requisições simultâneas, rate limiting e checkpoints incrementais.",
    longDescription:
      "Motor de coleta de dados assíncrono de alta performance projetado para ingerir dados de múltiplas APIs públicas brasileiras em paralelo — IBGE, câmbio e feriados. Utiliza asyncio e aiohttp com Semaphore para controle preciso de concorrência, permitindo centenas de requisições simultâneas sem sobrecarregar as fontes. Implementa retry automático com backoff exponencial para lidar com falhas transientes e rate limiting para respeitar os limites das APIs. O sistema de checkpoints garante coleta incremental: retoma de onde parou sem reprocessar dados já coletados. Integra-se diretamente com a Executive Data API como fonte de dados.",
    tags: [
      "Python",
      "asyncio",
      "aiohttp",
      "Semaphore",
      "SQLite",
      "Backoff Exponencial",
      "Rate Limiting",
      "IBGE API",
    ],
    github: "https://github.com/brendowvalechi/data-harvester",
    featured: true,
    icon: "zap",
    narrative: "Coleta os dados",
  },
  {
    id: "security-log-analyzer",
    title: "Security Log Analyzer",
    description:
      "Ferramenta CLI para análise de segurança em logs de servidor. Detecta ataques de força bruta, path traversal e padrões suspeitos com multiprocessing para processar arquivos de 2GB+.",
    longDescription:
      "Ferramenta CLI de linha de comando para análise forense de logs de servidor em escala. Detecta automaticamente ataques de força bruta, tentativas de path traversal e padrões de acesso suspeitos usando regex avançada construída sobre padrões reais de ataque. O uso de multiprocessing distribui o processamento entre múltiplos núcleos de CPU, permitindo analisar arquivos de log de 2GB+ em tempo viável. Gera relatórios estruturados com IPs suspeitos, frequência de tentativas e janelas de tempo dos ataques. Peça essencial na proteção dos dados expostos pela Executive Data API.",
    tags: [
      "Python",
      "multiprocessing",
      "regex",
      "CLI",
      "Segurança",
      "Log Analysis",
      "Forense Digital",
    ],
    github: "https://github.com/brendowvalechi/security-log-analyzer",
    featured: true,
    icon: "shield",
    narrative: "Protege os dados",
  },
];
