import type { ReactNode } from 'react';

export function Section({id,kicker,title,children}:{id?:string;kicker:string;title:string;children:ReactNode}){return <section id={id} className="section"><div className="container"><div className="section-kicker">{kicker}</div><h2 className="section-title">{title}</h2>{children}</div></section>}