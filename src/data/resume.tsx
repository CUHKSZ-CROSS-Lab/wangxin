import { assetPath, siteUrl } from "@/lib/site";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, BriefcaseBusiness, GraduationCap, Network, BrainCircuit, BookOpen, Search, ChartNoAxesCombined, Database, GitBranch, Layers } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { projectsEn } from "@/data/profile-en";
import { profile, projects, collaborations } from "@/data/profile";

export const DATA = {
  name: profile.name,
  englishName: profile.englishName,
  initials: "WX",
  copy: {
    greeting: "你好，我是王鑫", about: "关于我", work: "职业经历", education: "教育背景", skills: "专业技能",
    projects: "精选项目", projectsTitle: "从业务到工程实践",
    projectsIntro: "大模型知识库、需求预测，到企业平台架构。",
    collaborations: "产业合作", collaborationsTitle: "让研究走进实际业务",
    collaborationsIntro: "在深圳市大数据研究院期间，与团队共同参与产业合作，探索人工智能与运筹优化技术的行业应用。",
    contact: "与我联系", contactTitle: "长期开放产学研合作", contactIntro: "做些有价值的项目。",
    contactOutro: "期待与你讨论具体的技术问题与合作机会。", theme: "切换深浅色主题", details: "项目详情",
    close: "关闭项目详情", context: "业务问题", role: "我的工作", approach: "技术路径", delivery: "交付方向",
    imageNote: "项目经历根据个人简历整理。卡片封面为行业配图，不代表客户现场或产品截图。",
    coverAlt: "行业配图",
  },
  url: siteUrl,
  description: "高级架构工程师，专注大模型应用、供应链优化与企业系统架构。近二十年技术与咨询实践，贯穿模型与系统到业务组件。",
  summary: `${profile.summary} 曾在 [IBM、埃森哲、普华永道](#work) 从事技术与咨询工作，任[深圳市大数据研究院高级工程师](https://www.sribd.cn/teacher/1009)。拥有[香港中文大学（深圳）供应链与物流管理硕士学位](#education)。`,
  avatarUrl: assetPath("/wangxin.png"),
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "LLM / AIGC", icon: BrainCircuit },
    { name: "RAG", icon: Search },
    { name: "LangChain", icon: BookOpen },
    { name: "PyTorch", icon: GitBranch },
    { name: "需求预测", icon: ChartNoAxesCombined },
    { name: "运筹优化", icon: Network },
    { name: "Redis", icon: Database },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Spring Cloud", icon: Layers },
  ],
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "首页" },
    { href: "#projects", icon: NotebookIcon, label: "精选项目" },
  ],
  contact: {
    email: profile.email,
    social: {
      "职业经历": { url: "#work", icon: BriefcaseBusiness, navbar: true },
      "产业合作": { url: "#collaborations", icon: Network, navbar: true },
      "联系邮箱": { url: `mailto:${profile.email}`, icon: Icons.email, navbar: true },
    },
  },
  work: profile.work.map((work, i) => ({
    company: work.company, title: work.role, period: work.period,
    description: work.description,
    logoUrl: assetPath(`/logos/${["sribd.png", "pwc.png", "accenture.png", "ibm.ico"][i]}`),
  })),
  education: [
    { school: "香港中文大学（深圳）", href: "https://www.cuhk.edu.cn/", degree: "供应链与物流管理 · 高级管理人员", logoUrl: assetPath("/logos/cuhk.png"), period: "硕士" },
    { school: "东北大学", href: "https://www.neu.edu.cn/", degree: "计算机科学与技术", logoUrl: assetPath("/logos/neu.png"), period: "本科" },
  ],
  projects: projects.map((project, i) => ({
    title: project.title, href: `#${project.id}`, dates: project.label,
    description: `${project.description} ${project.role}`,
    technologies: project.tags,
    image: assetPath(`/projects/${["csg", "bama", "huawei", "edition"][i]}.jpg`), video: "",
    links: [{ type: "项目详情", href: `#${project.id}`, icon: <Icons.globe className="size-3" /> }],
    detail: project,
  })),
  hackathons: collaborations.map((item) => ({
    title: item.title, dates: `${item.date} · 公开报道`, location: item.partner,
    description: item.description, image: assetPath("/logos/sribd.png"),
    links: [{ title: item.source, href: item.href, icon: <Icons.globe className="size-3" /> }],
  })),
};


export const DATA_EN = {
  ...DATA,
  name: "Wang Xin",
  description: "Senior Architecture Engineer focused on LLM applications, supply chain optimization, and enterprise architecture. Nearly two decades in engineering and consulting, spanning models and systems through to business components.",
  summary: "I focus on landing AI applications and putting AI governance into real enterprise workflows, starting from business problems and connecting models, system architecture, and product delivery. My work spans LLM applications, supply chain optimization, and enterprise digitalization—from end-to-end investigation and validation through to system integration and deployment. I previously worked at [IBM, Accenture, and PwC](#work) and served as a [Senior Engineer at the Shenzhen Research Institute of Big Data](https://www.sribd.cn/teacher/1009). I hold a [master’s degree in supply chain and logistics management from CUHK-Shenzhen](#education).",
  copy: {
    greeting: "Hi, I'm Wang Xin", about: "About", work: "Work Experience", education: "Education", skills: "Skills",
    projects: "My Projects", projectsTitle: "From Business to Engineering Practice",
    projectsIntro: "LLM knowledge bases, demand forecasting, and enterprise platform architecture.",
    collaborations: "Collaborations", collaborationsTitle: "From research to practice",
    collaborationsIntro: "Industry collaborations I participated in with the team during my time at SRIBD, exploring applications of AI and operations research.",
    contact: "Get in Touch", contactTitle: "Open to Long-Term Industry–Academia Collaboration", contactIntro: "Let’s build something valuable.",
    contactOutro: "Looking forward to discussing concrete technical questions and opportunities to work together.", theme: "Toggle theme", details: "Case Study",
    close: "Close project details", context: "The challenge", role: "My contribution", approach: "Technical approach", delivery: "Delivery",
    imageNote: "Project experience is based on my résumé. Cover images illustrate the industry; they are not client sites or product screenshots.",
    coverAlt: "Industry illustration",
  },
  skills: DATA.skills.map(skill => ({ ...skill, name: ({ "需求预测": "Forecasting", "运筹优化": "Optimization" } as Record<string, string>)[skill.name] ?? skill.name })),
  navbar: DATA.navbar.map((item, i) => ({ ...item, label: ["Home", "Projects"][i] })),
  contact: { email: DATA.contact.email, social: {
    "Work experience": { url: "#work", icon: BriefcaseBusiness, navbar: true },
    "Collaborations": { url: "#collaborations", icon: Network, navbar: true },
    "Email": { url: `mailto:${profile.email}`, icon: Icons.email, navbar: true },
  } },
  work: [
    { company: "Shenzhen Research Institute of Big Data", title: "Senior Engineer", period: "Former", description: "Worked on supply chain optimization, machine learning, and enterprise system architecture, supporting the application of research in industry. This is a former position.", logoUrl: assetPath("/logos/sribd.png") },
    { company: "PwC", title: "Digital Transformation Consulting Manager / AI Expert", period: "2021 — 2023", description: "Worked on digital-transformation product consulting and AI development, connecting large-model capabilities with concrete business needs.", logoUrl: assetPath("/logos/pwc.png") },
    { company: "Accenture", title: "Architecture / Digital Intelligence Consulting Manager", period: "2017 — 2020", description: "Combined system architecture, digital product design, and deep learning to support clients’ digital transformation projects.", logoUrl: assetPath("/logos/accenture.png") },
    { company: "IBM", title: "Product Project Manager / Technical Consulting Expert", period: "2007 — 2016", description: "Developed and delivered enterprise technology projects, building experience in system architecture, engineering implementation, and cross-team project management.", logoUrl: assetPath("/logos/ibm.ico") },
  ],
  education: [
    { school: "The Chinese University of Hong Kong, Shenzhen", href: "https://www.cuhk.edu.cn/", degree: "Executive Master’s in Supply Chain and Logistics Management", logoUrl: assetPath("/logos/cuhk.png"), period: "Master’s" },
    { school: "Northeastern University, China", href: "https://www.neu.edu.cn/", degree: "Computer Science and Technology", logoUrl: assetPath("/logos/neu.png"), period: "Bachelor’s" },
  ],
  projects: projectsEn.map((project, i) => ({
    ...DATA.projects[i], title: project.title, description: `${project.description} ${project.role}`,
    technologies: project.tags, detail: project,
    links: [{ ...DATA.projects[i].links[0], type: "Case Study" }],
  })),
  hackathons: [
    { ...DATA.hackathons[0], title: "Arabic Speech Recognition & LLM Collaboration", dates: "June 2024 · Public report", location: "SRIBD × iFLYTEK", description: "Participated in related collaboration during my time at SRIBD. The cooperation focused on Arabic ASR, large-model applications, and localization for the Middle East and North Africa.", links: [{ ...DATA.hackathons[0].links[0], title: "SRIBD announcement" }] },
    { ...DATA.hackathons[1], title: "XOPT Solver · Industry Applications", dates: "April 2024 · Public report", location: "Operations research × Technology transfer", description: "Participated in related industry application projects during my time at SRIBD. XOPT applies general-purpose optimization capabilities to complex business decisions and explores industry use cases.", links: [{ ...DATA.hackathons[1].links[0], title: "CUHK-Shenzhen report" }] },
  ],
};
