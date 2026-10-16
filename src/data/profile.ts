export type Project = {
 id: string; number: string; title: string; label: string; category: "AI" | "供应链";
 description: string; tags: string[]; visual: "rag" | "forecast" | "architecture" | "pipeline";
 context: string; role: string; approach: string[]; delivery: string;
};
export const profile = {
 name: "王鑫", englishName: "Wang Xin", email: "39959772@qq.com", location: "中国 · 深圳",
 summary: "擅长落地 AI 应用治理进入企业的真实工作流，从业务问题出发，连接模型、系统架构与产品交付。工作成果横跨大模型应用、供应链运筹优化和企业数字化，从链路调研验证一直收敛到系统集成与部署。",
 work: [
  { company: "深圳市大数据研究院", short: "SR", color: "teal", period: "曾任", role: "高级工程师", description: "从事供应链运筹优化、机器学习与企业系统架构相关工作，参与研究成果向产业场景的应用转化。已离职。", source: "https://www.sribd.cn/teacher/1009" },
  { company: "普华永道 · PwC", short: "pwc", color: "orange", period: "2021 — 2023", role: "数字化转型产品咨询经理 / 人工智能专家", description: "围绕企业数字化转型开展产品咨询与人工智能项目研发，推动大模型能力与具体业务需求结合。" },
  { company: "埃森哲 · Accenture", short: ">", color: "purple", period: "2017 — 2020", role: "系统架构 / 数字智能化咨询经理", description: "结合系统架构、数字化产品设计与深度学习技术，为行业客户推进数字化转型项目。" },
  { company: "IBM", short: "IBM", color: "blue", period: "2007 — 2016", role: "产品项目经理 / 技术咨询专家", description: "承担企业技术项目研发与交付工作，积累系统架构、工程实施和跨团队项目管理经验。" },
 ],
 skills: [
  { label: "大模型与知识工程", items: ["LLM / AIGC", "RAG", "LangChain", "Prompt Engineering", "LoRA / P-Tuning"] },
  { label: "预测与优化", items: ["PyTorch", "PaddleNLP", "LSTM / SARIMAX", "库存优化", "运筹建模"] },
  { label: "企业系统与交付", items: ["Spring Boot / Cloud", "Kubernetes", "Docker", "Redis", "DevOps"] },
 ],
};
export const projects: Project[] = [
 { id: "csg-rag", number: "01", title: "南方电网 AIGC 知识库", label: "ENTERPRISE AI", category: "AI", visual: "rag",
 description: "连接业务知识与大模型，为客服知识问答与人工辅助服务设计应用方案。",
 tags: ["RAG", "LangChain", "LoRA", "国产算力适配"],
 context: "将分散的业务知识转化为可检索、可辅助问答的知识体系，并适配企业既有客服流程与国产计算资源。",
 role: "知识库方案设计、模型与算力适配、客服业务流程优化。",
 approach: ["以 LangChain、向量化检索与 LLM 组织知识抽取和问答链路。", "结合 Prompt、P-Tuning 与 LoRA 探索模型适配；使用 PaddlePaddle / PaddleNLP 对接昆仑 R200 XPU 计算资源。", "结合知识库和业务人员反馈设计辅助服务方式，并运用 M/M/k 排队模型分析客服等待与调度问题。"],
 delivery: "形成知识库应用与客服流程优化方案，把模型能力、硬件环境和业务服务衔接起来。" },
 { id: "bama-forecast", number: "02", title: "八马茶业 · 需求预测与库存优化", label: "SUPPLY CHAIN", category: "供应链", visual: "forecast",
 description: "把 SKU 销售预测连接到安全库存与再订货点，让模型服务于补货决策。",
 tags: ["SARIMAX", "LSTM", "PyTorch", "EOQ / ROP"],
 context: "围绕 SKU 销售与库存数据构建预测方案，并将模型结果转换为库存和订货策略。",
 role: "预测模型方案规划、模型训练与评价、库存决策咨询。",
 approach: ["分阶段构建 SARIMAX 与 LSTM 模型，完成数据处理、训练、预测和结果可视化。", "通过训练集与测试集拆分、预测误差评价等步骤检验模型表现。", "结合需求、订货成本、持有成本、提前期和服务水平等参数，计算经济订货量、安全库存与再订货点。"],
 delivery: "将预测结果转化为可解释的补货建议，并支持上下游回购契约与协同方案分析。" },
 { id: "huawei-mu", number: "03", title: "华为 MU 供应链数字化运营平台", label: "SYSTEM ARCHITECTURE", category: "供应链", visual: "architecture",
 description: "从服务架构、数据库到云上部署，支撑供应链运营系统的企业级工程实现。",
 tags: ["微服务", "Redis", "分布式架构", "高可用"],
 context: "为供应链运营平台构建服务化基础，兼顾数据管理、高并发访问、稳定性与系统交付。",
 role: "系统服务化架构、数据库设计、核心框架开发及分布式部署。",
 approach: ["设计服务与数据库结构，开发核心框架、对外接口及运营指标等业务功能。", "结合数据库读写分离、Redis 集群及多级缓存设计访问链路，处理热点与高并发场景。", "以负载均衡、资源隔离、限流、降级和熔断等机制支撑系统稳定性，配合持续集成与云上部署。"],
 delivery: "完成平台架构与核心业务工程工作，形成从开发、数据服务到部署运维的完整技术链路。" },
 { id: "edition", number: "04", title: "edition · AI 数据与应用平台", label: "MODEL TO PRODUCT", category: "AI", visual: "pipeline",
 description: "打通传感器数据、特征工程、模型训练与多端应用，构建完整的 AI 工程链路。",
 tags: ["特征工程", "TensorFlow", "Flutter", "Kubernetes"],
 context: "连接设备采集的数据与 Web、移动端应用，使训练结果能够进入持续更新的产品流程。",
 role: "平台与移动端框架搭建、特征工程、模型训练部署、研发团队协作。",
 approach: ["构建设备数据采集与特征处理流程，结合异常检测和数据清洗支持模型训练。", "使用机器学习与深度学习模型开展训练，衔接云存储、消息队列和后端推理服务。", "实现 Web / Flutter 端结果展示，搭建 Kubernetes、Docker 与 DevOps 持续集成部署流程。"],
 delivery: "贯通数据采集、训练、模型发布、服务调用和多端呈现，支撑模型进入应用交付流程。" },
];
// Participation is confirmed by the user. Public reports establish project context,
// not Wang Xin's personal responsibilities or the role of signatory/speaker.
export const collaborations = [
 { date: "2024.06", title: "阿拉伯语语音识别与大模型合作", partner: "深圳市大数据研究院 × 科大讯飞", description: "在深圳市大数据研究院期间参与相关合作。合作方向聚焦阿拉伯语 ASR、大模型应用及面向中东北非市场的本地化。", href: "https://www.sribd.cn/article/1132", source: "研究院官方报道", icon: "audio" },
 { date: "2024.04", title: "仙鹏求解器 · 行业优化应用", partner: "运筹优化 × 科技成果转化", description: "在深圳市大数据研究院期间参与相关产业应用项目。仙鹏以通用求解能力面向复杂业务决策，探索优化技术的行业应用。", href: "https://www.cuhk.edu.cn/zh-hans/article/14290", source: "香港中文大学（深圳）官方报道", icon: "network" },
];
