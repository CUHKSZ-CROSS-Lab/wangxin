import Link from "next/link";

export default function NotFound() {
 return <main className="page-shell not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>这页暂时不在这里。</h1><p>回到首页，继续了解我的工作。</p><Link className="primary-button" href="/">返回首页 ↗</Link></main>;
}
