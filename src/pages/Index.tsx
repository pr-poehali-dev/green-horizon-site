import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8c2cce17-5f63-4dbd-bdda-17d55a880e51/files/3d66805f-c11b-4581-ae36-cf74b2fcee6b.jpg";
const PALMS_IMG = "https://cdn.poehali.dev/projects/8c2cce17-5f63-4dbd-bdda-17d55a880e51/files/5a4d1525-4fc5-4aef-ac17-b026035c8052.jpg";
const CARE_IMG = "https://cdn.poehali.dev/projects/8c2cce17-5f63-4dbd-bdda-17d55a880e51/files/ef9df0c4-68aa-4627-8c56-792bf12e42a9.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Персонал", href: "#team" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Layers",
    title: "Проектирование фитостен",
    desc: "Создание живых стен из растений с интегрированной системой автоматического полива. Разрабатываем проект под ваш интерьер и бюджет.",
    price: "от 45 000 ₽",
    img: HERO_IMG,
  },
  {
    icon: "Scissors",
    title: "Обслуживание растений",
    desc: "Регулярные выезды специалистов для профессионального ухода: подкормка, обрезка, диагностика состояния и лечение.",
    price: "от 3 500 ₽/визит",
    img: CARE_IMG,
  },
  {
    icon: "TreePalm",
    title: "Аренда крупномеров",
    desc: "Прокат больших пальм, фикусов и экзотических растений для мероприятий, фотосессий и временного украшения офисов.",
    price: "от 2 000 ₽/сутки",
    img: PALMS_IMG,
  },
];

const TEAM = [
  {
    name: "Алексей Вершинин",
    role: "Ведущий дендролог",
    desc: "Подбирает растения с учётом микроклимата, освещённости и эстетики пространства. 12 лет практики.",
    emoji: "🌿",
    bg: "bg-[hsl(90,30%,88%)]",
  },
  {
    name: "Марина Ростова",
    role: "Ландшафтный дизайнер",
    desc: "Составляет визуальные проекты, 3D-визуализации и цветовые решения. Лауреат конкурса «ГринАрт 2022».",
    emoji: "✏️",
    bg: "bg-[hsl(45,40%,96%)]",
  },
  {
    name: "Дмитрий Хлопков",
    role: "Инженер систем автополива",
    desc: "Проектирует и монтирует технические системы: автополив, дренаж, освещение. Сертифицирован Hunter & Rain Bird.",
    emoji: "⚙️",
    bg: "bg-[hsl(90,30%,88%)]",
  },
];

const PORTFOLIO = [
  { title: "Офис «Технопарк»", tag: "Фитостена", img: HERO_IMG },
  { title: "Ресторан «Берёза»", tag: "Озеленение", img: PALMS_IMG },
  { title: "Форум «GreenTech»", tag: "Аренда", img: CARE_IMG },
  { title: "Лобби «Москва-Сити»", tag: "Фитостена", img: PALMS_IMG },
  { title: "Коворкинг «Рост»", tag: "Озеленение", img: HERO_IMG },
  { title: "Выставка «ExpoDesign»", tag: "Аренда", img: CARE_IMG },
];

const BLOG_POSTS = [
  {
    date: "10 апреля 2026",
    tag: "Советы",
    title: "5 растений, которые выживут в офисе без окон",
    excerpt: "Разбираемся, какие виды наиболее неприхотливы и почему сансевиерия — настоящий офисный герой.",
  },
  {
    date: "28 марта 2026",
    tag: "Тренды",
    title: "Биофилический дизайн: почему живые стены — это инвестиция",
    excerpt: "Исследования подтверждают: сотрудники в зелёных офисах продуктивнее на 15%. Считаем экономику.",
  },
  {
    date: "14 марта 2026",
    tag: "Кейс",
    title: "Как мы озеленили 2000 м² за 3 недели для «Технопарка»",
    excerpt: "Детальный разбор одного из крупнейших проектов студии: от брифинга до финальной приёмки.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", backgroundColor: "hsl(45,30%,97%)" }}>

      {/* ─── NAVIGATION ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md" style={{ borderBottom: "1px solid hsl(90,15%,82%)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(120,35%,22%)" }}>
              <span className="text-lg">🌱</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-lg tracking-wide" style={{ fontFamily: "'Cormorant', serif", color: "hsl(120,35%,22%)" }}>Зелёный</span>
              <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'Cormorant', serif", color: "hsl(30,25%,55%)" }}>Горизонт</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 relative group"
                style={{ color: "hsl(30,20%,30%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(120,35%,22%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(30,20%,30%)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacts"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            style={{ backgroundColor: "hsl(120,35%,22%)", color: "hsl(45,30%,97%)" }}
          >
            Консультация
          </a>

          <button className="lg:hidden p-2" style={{ color: "hsl(30,20%,30%)" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white px-6 py-4 flex flex-col gap-4" style={{ borderTop: "1px solid hsl(90,15%,82%)" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-1" style={{ color: "hsl(30,20%,30%)" }}>
                {link.label}
              </a>
            ))}
            <a href="#contacts" onClick={() => setMenuOpen(false)} className="mt-2 px-5 py-2.5 rounded-full text-sm text-center font-medium" style={{ backgroundColor: "hsl(120,35%,22%)", color: "white" }}>
              Консультация
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Живая зелёная стена" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)" }} />
        </div>

        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 L0 80 Z" fill="hsl(45,30%,97%)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-8">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "hsl(120,50%,60%)" }} />
              Студия фитодизайна · Москва
            </div>
            <h1 className="font-light text-white leading-[0.95] mb-6" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(3.5rem, 7vw, 5rem)" }}>
              Живая<br />
              <em className="not-italic font-semibold" style={{ color: "hsl(120,40%,75%)" }}>природа</em><br />
              в вашем<br />пространстве
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: "rgba(255,255,255,0.75)" }}>
              Создаём фитостены, озеленяем офисы и предоставляем живые растения в аренду для мероприятий
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-8 py-3.5 rounded-full font-medium transition-all duration-200" style={{ backgroundColor: "white", color: "hsl(120,35%,22%)" }}>
                Наши услуги
              </a>
              <a href="#contacts" className="px-8 py-3.5 border border-white/50 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-200">
                Связаться с нами
              </a>
            </div>

            <div className="flex gap-8 mt-14">
              {[
                { value: "150+", label: "проектов" },
                { value: "8 лет", label: "на рынке" },
                { value: "98%", label: "довольных клиентов" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-semibold text-white" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.875rem" }}>{stat.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest uppercase" style={{ color: "hsl(100,30%,52%)" }}>Что мы делаем</span>
            <h2 className="font-light mt-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "hsl(120,35%,22%)" }}>
              Наши услуги
            </h2>
            <div className="w-16 h-px mx-auto mt-6" style={{ backgroundColor: "hsl(120,35%,32%)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ border: "1px solid hsl(90,15%,82%)" }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }} />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                    <Icon name={service.icon} size={18} className="text-green-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.4rem", color: "hsl(120,35%,22%)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(30,20%,30%)" }}>{service.desc}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid hsl(90,15%,82%)" }}>
                    <span className="font-semibold" style={{ color: "hsl(120,35%,32%)" }}>{service.price}</span>
                    <a href="#contacts" className="text-sm flex items-center gap-1 transition-colors" style={{ color: "hsl(30,20%,30%)" }}>
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "hsl(120,35%,22%)" }}>
        <div className="absolute inset-0 opacity-10">
          <img src={PALMS_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm tracking-widest uppercase" style={{ color: "rgba(200,230,200,0.7)" }}>О студии</span>
              <h2 className="font-light text-white mt-3 leading-tight" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}>
                Мы превращаем<br />
                <em className="not-italic font-semibold" style={{ color: "hsl(120,40%,75%)" }}>пространства</em><br />
                в живые сады
              </h2>
              <div className="w-16 h-px mt-6 mb-8" style={{ backgroundColor: "rgba(200,230,200,0.4)" }} />
              <p className="leading-relaxed text-base mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                Студия «Зелёный Горизонт» основана в 2016 году командой биологов и дизайнеров, влюблённых в природу. Мы убеждены, что живые растения — не декор, а полноправный элемент архитектуры.
              </p>
              <p className="leading-relaxed text-base mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
                Каждый проект начинается с изучения пространства: анализируем свет, влажность, трафик. Подбираем виды, которые будут процветать.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Leaf", text: "Только живые растения" },
                  { icon: "Shield", text: "Гарантия 6 месяцев" },
                  { icon: "Clock", text: "Монтаж за 1–3 дня" },
                  { icon: "Headphones", text: "Поддержка 24/7" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                      <Icon name={item.icon} size={15} className="text-green-300" />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img src={CARE_IMG} alt="Уход за растениями" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl">
                <div className="font-semibold" style={{ fontFamily: "'Cormorant', serif", fontSize: "2.25rem", color: "hsl(120,35%,22%)" }}>150+</div>
                <div className="text-sm mt-1" style={{ color: "hsl(30,20%,30%)" }}>завершённых<br />проектов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="py-24 px-6" style={{ backgroundColor: "hsl(45,40%,96%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest uppercase" style={{ color: "hsl(100,30%,52%)" }}>Эксперты</span>
            <h2 className="font-light mt-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "hsl(120,35%,22%)" }}>
              Наша команда
            </h2>
            <div className="w-16 h-px mx-auto mt-6" style={{ backgroundColor: "hsl(120,35%,32%)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className={`${member.bg} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`} style={{ border: "1px solid hsl(90,15%,82%)" }}>
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mb-6 shadow-sm">
                  {member.emoji}
                </div>
                <h3 className="font-semibold mb-1" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.5rem", color: "hsl(120,35%,22%)" }}>{member.name}</h3>
                <div className="text-sm font-medium mb-4" style={{ color: "hsl(120,35%,32%)" }}>{member.role}</div>
                <div className="w-8 h-px mb-4" style={{ backgroundColor: "hsl(120,35%,32%)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30,20%,30%)" }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest uppercase" style={{ color: "hsl(100,30%,52%)" }}>Работы</span>
            <h2 className="font-light mt-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "hsl(120,35%,22%)" }}>
              Портфолио
            </h2>
            <div className="w-16 h-px mx-auto mt-6" style={{ backgroundColor: "hsl(120,35%,32%)" }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ gridAutoRows: "220px" }}>
            {PORTFOLIO.map((item, i) => (
              <div
                key={item.title}
                className={`group relative rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs tracking-wider uppercase" style={{ color: "hsl(120,40%,75%)" }}>{item.tag}</span>
                  <div className="text-white text-xl font-medium" style={{ fontFamily: "'Cormorant', serif" }}>{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section id="blog" className="py-24 px-6" style={{ backgroundColor: "hsl(45,40%,96%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-sm tracking-widest uppercase" style={{ color: "hsl(100,30%,52%)" }}>Статьи</span>
              <h2 className="font-light mt-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "hsl(120,35%,22%)" }}>
                Блог
              </h2>
              <div className="w-16 h-px mt-6" style={{ backgroundColor: "hsl(120,35%,32%)" }} />
            </div>
            <a href="#blog" className="flex items-center gap-2 text-sm transition-colors" style={{ color: "hsl(30,20%,30%)" }}>
              Все статьи <Icon name="ArrowRight" size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: "hsl(90,30%,88%)", color: "hsl(120,35%,32%)" }}>
                    {post.tag}
                  </span>
                  <span className="text-xs" style={{ color: "hsl(215,16%,47%)" }}>{post.date}</span>
                </div>
                <h3 className="font-medium mb-3 leading-snug transition-colors" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.35rem", color: "hsl(120,35%,22%)" }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30,20%,30%)" }}>{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: "hsl(120,35%,32%)" }}>
                  Читать далее <Icon name="ArrowRight" size={13} />
                </div>
                <div className="mt-6 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(90,30%,82%), transparent)" }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACTS ─── */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest uppercase" style={{ color: "hsl(100,30%,52%)" }}>Напишите нам</span>
            <h2 className="font-light mt-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "hsl(120,35%,22%)" }}>
              Контакты
            </h2>
            <div className="w-16 h-px mx-auto mt-6" style={{ backgroundColor: "hsl(120,35%,32%)" }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Академика Валиева, д. 6" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "E-mail", value: "info@greenhorizon.ru" },
                  { icon: "Clock", label: "Часы работы", value: "Пн–Пт: 9:00–18:00" },
                ].map((contact) => (
                  <div key={contact.label} className="bg-white rounded-2xl p-5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: "1px solid hsl(90,15%,82%)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(90,30%,88%)" }}>
                      <Icon name={contact.icon} size={18} className="text-green-700" />
                    </div>
                    <div>
                      <div className="text-xs mb-1" style={{ color: "hsl(215,16%,47%)" }}>{contact.label}</div>
                      <div className="font-medium text-sm" style={{ color: "hsl(30,20%,30%)" }}>{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden" style={{ height: "256px", border: "1px solid hsl(90,15%,82%)", backgroundColor: "hsl(90,30%,88%)" }}>
                <iframe
                  title="Карта студии Зелёный Горизонт"
                  src="https://yandex.ru/map-widget/v1/?ll=37.615500,55.756900&z=14&pt=37.615500,55.756900,pm2gnl~"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: "1px solid hsl(90,15%,82%)" }}>
              {formSent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="mb-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.875rem", color: "hsl(120,35%,22%)" }}>Спасибо!</h3>
                  <p style={{ color: "hsl(30,20%,30%)" }}>Мы получили ваше сообщение и свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-medium mb-2" style={{ fontFamily: "'Cormorant', serif", fontSize: "1.875rem", color: "hsl(120,35%,22%)" }}>
                    Оставьте заявку
                  </h3>
                  <p className="text-sm mb-8" style={{ color: "hsl(30,20%,30%)" }}>Ответим в течение 30 минут в рабочее время</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="block text-xs mb-2 tracking-wide uppercase" style={{ color: "hsl(215,16%,47%)" }}>
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        placeholder="Иван Иванов"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                        style={{ border: "1px solid hsl(90,15%,82%)", backgroundColor: "hsl(45,40%,96%)", color: "hsl(30,20%,30%)", fontFamily: "'Golos Text', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-2 tracking-wide uppercase" style={{ color: "hsl(215,16%,47%)" }}>
                        Телефон
                      </label>
                      <input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                        style={{ border: "1px solid hsl(90,15%,82%)", backgroundColor: "hsl(45,40%,96%)", color: "hsl(30,20%,30%)", fontFamily: "'Golos Text', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-2 tracking-wide uppercase" style={{ color: "hsl(215,16%,47%)" }}>
                        Расскажите о проекте
                      </label>
                      <textarea
                        placeholder="Опишите ваше пространство и пожелания..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                        style={{ border: "1px solid hsl(90,15%,82%)", backgroundColor: "hsl(45,40%,96%)", color: "hsl(30,20%,30%)", fontFamily: "'Golos Text', sans-serif" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-medium text-base flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: "hsl(120,35%,22%)", color: "white", fontFamily: "'Golos Text', sans-serif" }}
                    >
                      Отправить заявку
                      <Icon name="Send" size={16} />
                    </button>
                    <p className="text-xs text-center" style={{ color: "hsl(215,16%,47%)" }}>
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6" style={{ backgroundColor: "hsl(120,35%,22%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <span className="text-lg">🌱</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-white text-lg" style={{ fontFamily: "'Cormorant', serif" }}>Зелёный Горизонт</span>
                <span className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>Студия фитодизайна</span>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {["Instagram", "MessageCircle", "Phone"].map((icon) => (
                <div key={icon} className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <Icon name={icon} size={16} className="text-white/70" />
                </div>
              ))}
            </div>
          </div>

          <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span>© 2026 Зелёный Горизонт. Все права защищены.</span>
            <span>г. Москва, ул. Академика Валиева, д. 6 · +7 (495) 123-45-67</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
