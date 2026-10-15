import type { Project } from "./profile";
export const projectsEn: Project[] = [
  {
    id: "csg-rag", number: "01", title: "China Southern Power Grid · AIGC Knowledge Base", label: "ENTERPRISE AI", category: "AI", visual: "rag",
    description: "Connecting business knowledge with LLMs to support customer-service questions and agent assistance.",
    tags: ["RAG", "LangChain", "LoRA", "XPU Adaptation"],
    context: "Make dispersed business knowledge searchable and useful for assisted answers, while integrating with existing service processes and domestic computing infrastructure.",
    role: "Knowledge-base solution design, model and hardware adaptation, and customer-service process optimization.",
    approach: ["Organized knowledge extraction and question answering with LangChain, vector retrieval, and LLMs.", "Explored Prompt, P-Tuning, and LoRA adaptation, and used PaddlePaddle / PaddleNLP with Kunlun R200 XPU resources.", "Designed assistance workflows around the knowledge base and staff feedback, using M/M/k queueing models to analyze waiting times and scheduling."],
    delivery: "Developed a knowledge-base application and process-optimization approach connecting models, computing resources, and service operations.",
  },
  {
    id: "bama-forecast", number: "02", title: "Bama Tea · Demand Forecasting & Inventory", label: "SUPPLY CHAIN", category: "供应链", visual: "forecast",
    description: "Connecting SKU sales forecasts to safety stock and reorder points to support replenishment decisions.",
    tags: ["SARIMAX", "LSTM", "PyTorch", "EOQ / ROP"],
    context: "Build forecasting methods around SKU sales and inventory data, then translate predictions into inventory and ordering policies.",
    role: "Forecasting solution planning, model training and evaluation, and inventory decision consulting.",
    approach: ["Developed SARIMAX and LSTM models in stages, covering data preparation, training, forecasting, and visualization.", "Evaluated model performance with training and test splits and forecast-error analysis.", "Calculated economic order quantities, safety stock, and reorder points using demand, ordering and holding costs, lead times, and service-level parameters."],
    delivery: "Translated forecasts into explainable replenishment recommendations and supported buyback-contract and supply-chain coordination analysis.",
  },
  {
    id: "huawei-mu", number: "03", title: "Huawei MU · Digital Supply Chain Platform", label: "SYSTEM ARCHITECTURE", category: "供应链", visual: "architecture",
    description: "Engineering a supply-chain operations platform, from service architecture and databases to cloud deployment.",
    tags: ["Microservices", "Redis", "Distributed Systems", "High Availability"],
    context: "Establish a service-oriented foundation for supply-chain operations, balancing data management, concurrency, reliability, and delivery.",
    role: "Service architecture, database design, core framework development, and distributed deployment.",
    approach: ["Designed service and database structures and developed core frameworks, external interfaces, and operational metrics.", "Designed access paths using database read/write separation, Redis clusters, and layered caching for high-traffic and hotspot scenarios.", "Applied load balancing, resource isolation, rate limiting, graceful degradation, and circuit breakers alongside continuous integration and cloud deployment."],
    delivery: "Delivered platform architecture and core engineering spanning development, data services, deployment, and operations.",
  },
  {
    id: "edition", number: "04", title: "edition · AI Data & Application Platform", label: "MODEL TO PRODUCT", category: "AI", visual: "pipeline",
    description: "Connecting sensor data, feature engineering, model training, and applications into an end-to-end AI workflow.",
    tags: ["Feature Engineering", "TensorFlow", "Flutter", "Kubernetes"],
    context: "Connect device data with web and mobile applications so trained models can become part of an evolving product workflow.",
    role: "Platform and mobile frameworks, feature engineering, model training and deployment, and development-team collaboration.",
    approach: ["Built data collection and feature-processing workflows, using anomaly detection and cleaning to support model training.", "Trained machine-learning and deep-learning models and connected cloud storage, message queues, and inference services.", "Implemented web and Flutter results views and set up Kubernetes, Docker, and DevOps delivery workflows."],
    delivery: "Connected data collection, training, model releases, service calls, and application interfaces to support AI product delivery.",
  },
];
