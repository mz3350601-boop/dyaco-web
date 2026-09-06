"use client";

import { useEffect, useState } from "react";

const projects = [
  { title: "آشپزخانه مدرن", type: "CABINET DESIGN", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1400&q=85" },
  { title: "فضای مینیمال", type: "INTERIOR", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" },
  { title: "طراحی اختصاصی", type: "CUSTOM", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a className="brand" href="#home"><span>◇</span> DYACO</a>
        <nav className={open ? "links open" : "links"}>
          <a onClick={() => setOpen(false)} href="#about">درباره ما</a>
          <a onClick={() => setOpen(false)} href="#services">خدمات</a>
          <a onClick={() => setOpen(false)} href="#portfolio">نمونه‌کارها</a>
          <a onClick={() => setOpen(false)} href="#contact">ارتباط</a>
        </nav>
        <button aria-label="منو" className="menu" onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
      </header>

      <section id="home" className="hero">
        <div className="heroGlow" />
        <div className="heroCopy">
          <p className="eyebrow">CABINET · INTERIOR · CRAFT</p>
          <h1>فضا فقط ساخته نمی‌شود.<br/><em>هویت پیدا می‌کند.</em></h1>
          <p className="lead">طراحی و اجرای کابینت و دکوراسیون داخلی با تمرکز بر جزئیات، متریال و کیفیت ساخت.</p>
          <div className="actions"><a className="primary" href="#portfolio">مشاهده پروژه‌ها</a><a className="ghost" href="#contact">شروع همکاری</a></div>
        </div>
        <div className="heroMeta"><span>SCROLL TO EXPLORE</span><b>↓</b></div>
      </section>

      <section id="about" className="about section">
        <div className="bigNumber">01</div>
        <div>
          <p className="eyebrow">THE DYACO APPROACH</p>
          <h2>هر خانه یک داستان دارد؛<br/><em>ما آن را قابل زندگی می‌کنیم.</em></h2>
          <p className="bodyText">DYACO روی یک اصل ساده ساخته شده: طراحی خوب زمانی ارزشمند است که در زندگی واقعی هم زیبا، کاربردی و ماندگار باشد.</p>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="sectionTop"><div><p className="eyebrow">WHAT WE DO</p><h2>آنچه می‌سازیم</h2></div><span>02</span></div>
        <div className="serviceGrid">
          {[
            ["01","کابینت آشپزخانه","طراحی مدرن و سفارشی متناسب با فضای شما."],
            ["02","کمد و کلوزت","استفاده هوشمندانه از هر سانتی‌متر فضا."],
            ["03","TV WALL","دیوار تلویزیون با ترکیب متریال و نور."],
            ["04","دکوراسیون داخلی","هماهنگی کامل فضا، رنگ و جزئیات."]
          ].map(([n,t,d]) => <article className="serviceCard" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
        </div>
      </section>

      <section id="portfolio" className="portfolio section">
        <div className="sectionTop"><div><p className="eyebrow">SELECTED WORKS</p><h2>پروژه‌های منتخب</h2></div><a href="#contact">پروژه بعدی شما ←</a></div>
        <div className="projectGrid">
          {projects.map((p,i) => <article key={p.title} className={"project p"+i} style={{backgroundImage:`linear-gradient(0deg,rgba(4,5,5,.92),rgba(4,5,5,.04)),url(${p.image})`}}><div><small>{p.type}</small><h3>{p.title}</h3></div></article>)}
        </div>
      </section>

      <section className="section promise">
        <p className="eyebrow">WHY DYACO</p>
        <div className="promiseGrid"><h2>جزئیات کوچک،<br/><em>تفاوت بزرگ.</em></h2><div className="checks"><p>✦ طراحی متناسب با فضای واقعی</p><p>✦ انتخاب دقیق متریال</p><p>✦ اجرای تمیز و حرفه‌ای</p><p>✦ ارتباط مستقیم تا پایان پروژه</p></div></div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">CONTACT DYACO</p>
        <h2>برای ساخت فضای بعدی<br/><em>آماده‌ای؟</em></h2>
        <div className="contactButtons"><a href="#">Instagram</a><a href="#">WhatsApp</a><a href="#">Telegram</a></div>
      </section>

      <footer><a className="brand" href="#home"><span>◇</span> DYACO</a><p>Cabinet & Interior Design · © 2026</p></footer>
    </main>
  );
}