import { ArrowRight, BadgeCheck, Headphones, Lock, Mic, Quote, Users } from 'lucide-react'
import { EpisodeLibrary } from '@/components/home/episode-library'
import { MidnightToMorning } from '@/components/home/midnight-to-morning'
import { Parallax } from '@/components/home/parallax'
import { SilentCircle } from '@/components/home/silent-circle'
import { PlayButton, PlayerProvider } from '@/components/home/player'
import { SiteHeader } from '@/components/home/site-header'
import { BrandIcon } from '@/components/home/brand-icon'
import { FloatingDock } from '@/components/home/floating-dock'
import { EPISODES, LATEST_EPISODE, PLATFORMS, SILENT_ROOM_FORM, SOCIALS } from '@/lib/episodes'

const TRUST_ITEMS = ['Featured in The Hindu', 'Trusted by 50K+ listeners', 'Award-winning conversations', 'Expert insights']

const STATS = [
  { number: '60+', label: 'Episodes' },
  { number: '50K+', label: 'Listeners' },
  { number: '5K+', label: 'Downloads' },
]

const OFFERINGS = [
  { icon: Mic, name: 'The Podcast', desc: 'Weekly episodes with doctors, nutritionists, educators & wellness experts. Real conversations, real answers.' },
  { icon: Users, name: 'Our Community', desc: 'A space where mums feel less alone, more informed and completely seen. From Instagram to confidential peer circles.' },
  { icon: BadgeCheck, name: 'Brand Approvals', desc: 'Every brand we recommend has been tried, tested and genuinely approved by our community.' },
]

const TESTIMONIALS = [
  { quote: 'This podcast made me feel less alone in my journey.', name: 'Deepa M.', handle: '@deepa_mum' },
  { quote: "Sneha asks the questions I've always wanted to ask.", name: 'Priya K.', handle: '@priya_khanna' },
  { quote: 'Every episode is like a therapy session with a friend.', name: 'Meera R.', handle: '@meera_roy' },
]

const SECTION = 'px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32'
const CONTAINER = 'mx-auto max-w-7xl'
const H2 = 'font-serif text-4xl leading-[1.1] font-light text-ink sm:text-5xl lg:text-6xl'
const BODY = 'text-base leading-relaxed text-ink-muted sm:text-lg'

export default function Home() {
  return (
    <PlayerProvider>
      <div id="top">
        <SiteHeader />

        <main id="main">
          {/* Hero */}
          <section id="hero" className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-10 lg:pt-40 lg:pb-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_30%,rgba(229,150,172,0.22),transparent),radial-gradient(ellipse_40%_40%_at_10%_90%,rgba(134,180,218,0.16),transparent)]"
            />
            <div className={`${CONTAINER} relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16`}>
              <div>
                <p className="eyebrow animate-fade-up">The podcast for modern mums</p>
                <h1 className="animate-fade-up mt-6 font-serif text-[44px] leading-[1.02] font-light tracking-tight text-ink [animation-delay:.1s] sm:text-6xl lg:text-7xl xl:text-[84px]">
                  The questions you&apos;ve been <em className="text-brand-strong">googling at midnight</em>
                </h1>
                <p className={`${BODY} animate-fade-up mt-6 max-w-xl [animation-delay:.2s]`}>
                  The conversations you wish you could have with someone who actually knows. Real answers from real experts, without the fluff.
                </p>
                <div className="animate-fade-up mt-9 flex flex-col gap-3 [animation-delay:.3s] sm:flex-row sm:items-center">
                  <PlayButton className="inline-flex min-h-13 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-brand-strong px-7 text-base font-semibold text-white shadow-[0_12px_32px_rgba(176,58,98,0.25)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-strong-hover">
                    Play the latest episode
                  </PlayButton>
                  <a
                    href="#episodes"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-[1.5px] border-plum/25 bg-card/70 px-7 text-base font-semibold text-plum transition-colors hover:border-brand-strong hover:text-brand-strong"
                  >
                    Browse {EPISODES.length} episodes <ArrowRight className="size-4" aria-hidden />
                  </a>
                </div>
                <div className="animate-fade-up mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 [animation-delay:.4s]">
                  <p className="flex items-center gap-2 text-sm text-ink-muted">
                    <Headphones className="size-4 text-sky-strong" aria-hidden />
                    Listen free on
                  </p>
                  <ul className="flex items-center gap-1">
                    {PLATFORMS.map((p) => (
                      <li key={p.name}>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Listen on ${p.name}`}
                          title={p.name}
                          className="grid size-11 place-items-center rounded-full border border-line bg-card/80 text-ink-muted transition-[color,border-color,transform] hover:-translate-y-0.5 hover:border-brand-strong hover:text-brand-strong"
                        >
                          <BrandIcon name={p.name} className="size-[18px]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="animate-fade-up relative [animation-delay:.25s]">
                <div className="overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(58,30,44,0.18)] ring-1 ring-line">
                  <img
                    src="/hero-sneha.jpg"
                    alt="Sneha Jhaveri recording an episode of Mumma Approved"
                    width={1206}
                    height={672}
                    fetchPriority="high"
                    className="aspect-[4/3] w-full object-cover object-[60%_center] sm:aspect-[16/10]"
                  />
                </div>
                {/* Latest episode mini-player */}
                <PlayButton
                  icon={false}
                  className="group absolute -bottom-6 left-4 right-4 flex cursor-pointer items-center gap-3 rounded-2xl border border-line bg-card/95 p-3 text-left shadow-[0_16px_40px_rgba(58,30,44,0.14)] backdrop-blur-md transition-transform hover:-translate-y-0.5 sm:left-auto sm:-right-4 sm:w-[340px] lg:-left-10 lg:right-auto"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-strong text-white shadow-md">
                    <svg viewBox="0 0 24 24" className="size-5 translate-x-px fill-current" aria-hidden>
                      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
                    </svg>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold tracking-[0.12em] text-brand-strong uppercase">Latest episode</span>
                    <span className="block truncate font-serif text-lg font-medium text-ink">{LATEST_EPISODE.title}</span>
                  </span>
                  <span aria-hidden className="flex h-5 items-center gap-[3px] pr-1">
                    {[10, 16, 12, 18, 14].map((h, i) => (
                      <span
                        key={i}
                        className="w-[2.5px] rounded-full bg-sky"
                        style={{ height: h, animation: `wave-dance 1.4s ease-in-out ${i * 0.15}s infinite` }}
                      />
                    ))}
                  </span>
                </PlayButton>
              </div>
            </div>
          </section>

          {/* Trust strip */}
          <section aria-label="Highlights" className="overflow-hidden bg-plum py-5">
            <div className="animate-marquee flex w-max">
              {[0, 1].map((dup) => (
                <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0">
                  {TRUST_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-10 px-5 font-serif text-lg font-light whitespace-nowrap text-on-plum italic">
                      {item}
                      <span className="size-1.5 rounded-full bg-brand" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          {/* Episodes — content first so visitors start listening quickly */}
          <section id="episodes" className={`${SECTION} bg-surface`}>
            <div className={CONTAINER}>
              <p className="eyebrow">Episodes</p>
              <h2 className={`${H2} mt-4 mb-10 sm:mb-14`}>
                Start with the <em className="text-brand-strong">latest conversation</em>
              </h2>
              <EpisodeLibrary />
            </div>
          </section>

          {/* What we do */}
          <section className={SECTION}>
            <div className={CONTAINER}>
              <p className="eyebrow">What we do</p>
              <h2 className={`${H2} mt-4 mb-10 sm:mb-14`}>
                Real answers, <em className="text-brand-strong">no fluff</em>
              </h2>
              <ul className="grid gap-4 sm:gap-5 md:grid-cols-3">
                {OFFERINGS.map(({ icon: Icon, name, desc }) => (
                  <li key={name} className="rounded-3xl border border-line bg-card p-7 transition-colors hover:border-brand/60 sm:p-8">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand-strong">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-medium text-ink">{name}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Scroll story: midnight search → morning answers */}
          <MidnightToMorning />

          {/* About */}
          <section id="about" className={`${SECTION} relative overflow-hidden bg-surface`}>
            <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] max-w-md overflow-hidden rounded-[28px] shadow-[0_24px_64px_rgba(58,30,44,0.14)] sm:max-w-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-09%20at%205.22.31%20PM-XmYglt8qed7EyHxBTVmDYeRfsOPmBT.jpeg"
                    alt="Sneha Jhaveri, founder of Mumma Approved"
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <figure className="absolute right-0 -bottom-6 w-60 rounded-2xl border border-line bg-card p-6 shadow-[0_16px_48px_rgba(58,30,44,0.12)] sm:right-4 lg:-right-4">
                  <Quote className="size-6 text-brand" aria-hidden />
                  <blockquote className="mt-2 font-serif text-xl leading-snug text-plum italic">Every mother has a story worth telling.</blockquote>
                  <figcaption className="mt-3 text-xs font-semibold tracking-[0.12em] text-ink-muted uppercase">Our mission</figcaption>
                </figure>
              </div>

              <div className="order-1 lg:order-2">
                <p className="eyebrow">Our story</p>
                <h2 className={`${H2} mt-4 mb-6`}>
                  Started out of <em className="text-brand-strong">need</em>
                </h2>
                <div className={`${BODY} space-y-5`}>
                  <p>
                    Mumma Approved started the way most honest things do — out of need. Sneha Jhaveri, mum and founder, had the same questions every mother has.
                    About her kids, their health, their food, their schools, their wellbeing. And like most of us she was googling at midnight, asking friends,
                    getting half answers and still feeling like she did not quite have the full picture.
                  </p>
                  <p>
                    So she did something about it. She started Mumma Approved to get those answers properly — from doctors, nutritionists, educators and wellness
                    experts. The people you wish you had on speed dial as a mum.
                  </p>
                  <p className="text-ink">
                    Now almost a year in, Mumma Approved has become the podcast every mum did not know she needed. Real conversations. Real experts. Real
                    answers. No fluff.
                  </p>
                </div>
                <dl className="mt-10 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col px-3 py-5 text-center sm:py-6">
                      <dt className="text-xs font-semibold tracking-[0.12em] text-ink-muted uppercase">{stat.label}</dt>
                      <dd className="order-first font-serif text-4xl font-light text-ink sm:text-5xl">{stat.number}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          {/* Host */}
          <section className={`${SECTION} on-dark relative overflow-hidden bg-plum`}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_75%_50%,rgba(229,150,172,0.14),transparent)]"
            />
            <div className={`${CONTAINER} relative grid items-center gap-12 md:grid-cols-[auto_1fr] lg:gap-20`}>
              <Parallax className="relative mx-auto w-64 sm:w-72 lg:w-80">
                <div className="aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                  <img src="/meet-sneha.jpeg" alt="Sneha Jhaveri" loading="lazy" width={1080} height={1440} className="size-full object-cover [transform:translate3d(0,calc(var(--parallax,0)*-7%),0)_scale(1.2)] will-change-transform" />
                </div>
                <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-plum/60 px-4 py-2.5 backdrop-blur-md [transform:translate3d(0,calc(var(--parallax,0)*-14px),0)]">
                  <p className="font-serif text-lg text-on-plum italic">Sneha Jhaveri</p>
                  <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">Founder &amp; host</p>
                </div>
              </Parallax>
              <div>
                <p className="eyebrow !text-brand">Founder &amp; host</p>
                <h2 className="mt-4 mb-6 font-serif text-4xl leading-[1.1] font-light text-on-plum sm:text-5xl lg:text-6xl">
                  Meet <em className="text-brand">Sneha</em>
                </h2>
                <div className="max-w-2xl space-y-5 text-base leading-relaxed text-on-plum-muted sm:text-lg">
                  <p>
                    I wanted a space where mothers could find real clarity in the chaos of parenting. So I created Mumma Approved to bring expert voices directly
                    to you.
                  </p>
                  <p>
                    As a mother and an entrepreneur, I believe every mum deserves good information, deeply researched and simply explained. Through Mumma Approved,
                    I hope to celebrate the complexity of modern motherhood and create space for meaningful conversations.
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {['Podcast creator', 'Mother of two', 'Entrepreneur'].map((trait) => (
                    <li key={trait} className="rounded-full border border-white/20 px-4 py-2 text-sm text-on-plum">
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* The Silent Room */}
          <section id="the-silent-room" className={SECTION}>
            <div className={`${CONTAINER} grid items-stretch overflow-hidden rounded-[32px] bg-sage-soft lg:grid-cols-2`}>
              <div className="p-7 sm:p-12 lg:p-16">
                <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-sage uppercase">
                  <Lock className="size-3.5" aria-hidden /> Invitation only
                </p>
                <h2 className={`${H2} mt-6 mb-6`}>The Silent Room</h2>
                <div className={`${BODY} space-y-4`}>
                  <p>
                    A private circle for mothers. Small groups of 8–12 women, professionally moderated and completely confidential. Your space to finally say the
                    thing.
                  </p>
                  <p>Explore real challenges, celebrate wins, and find your tribe. Every conversation stays in the room. Every voice matters.</p>
                </div>
                <ul className="mt-8 grid gap-3 text-base text-ink sm:grid-cols-3">
                  {['8–12 mums per circle', 'Trained facilitators', '100% confidential'].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <BadgeCheck className="size-5 shrink-0 text-sage" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={SILENT_ROOM_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-sage px-8 text-base font-semibold text-white shadow-[0_12px_32px_rgba(63,107,42,0.25)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-sage-hover sm:w-auto"
                >
                  Apply as a founding member <ArrowRight className="size-4" aria-hidden />
                </a>
                <p className="mt-4 text-sm text-ink-muted">Now accepting founding members. Sent with warmth, Sneha</p>
              </div>
              <div className="relative min-h-64 sm:min-h-80">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-09%20at%205.25.43%20PM-0BYjDHRLYaMTdzpRhoepXuFoJE31NF.jpeg"
                  alt="Mothers gathered in a Silent Room circle"
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover grayscale"
                />
                <SilentCircle />
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className={`${SECTION} bg-surface`}>
            <div className={CONTAINER}>
              <p className="eyebrow">Testimonials</p>
              <h2 className={`${H2} mt-4 mb-10 sm:mb-14`}>
                What listeners <em className="text-brand-strong">are saying</em>
              </h2>
              <ul className="grid gap-4 sm:gap-5 md:grid-cols-3">
                {TESTIMONIALS.map((t) => (
                  <li key={t.name}>
                    <figure className="flex h-full flex-col rounded-3xl border border-line bg-card p-7 sm:p-8">
                      <Quote className="size-8 text-brand" aria-hidden />
                      <blockquote className="mt-4 flex-1 font-serif text-2xl leading-snug text-plum italic">{t.quote}</blockquote>
                      <figcaption className="mt-6 flex items-center gap-3">
                        <span aria-hidden className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand to-sky font-semibold text-white">
                          {t.name.charAt(0)}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink">{t.name}</span>
                          <span className="block text-sm text-ink-muted">{t.handle}</span>
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Follow / listen */}
          <section id="listen" className={`${SECTION} relative overflow-hidden text-center`}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_100%,rgba(229,150,172,0.2),transparent)]"
            />
            <div className="relative mx-auto max-w-3xl">
              <p className="eyebrow justify-center">Never miss an episode</p>
              <h2 className={`${H2} mt-4`}>
                Follow on <em className="text-brand-strong">your favourite app</em>
              </h2>
              <p className={`${BODY} mx-auto mt-5 max-w-lg`}>New conversations every week. Hit follow and they&apos;ll land in your feed automatically.</p>
              <ul className="mt-10 flex flex-wrap justify-center gap-3">
                {PLATFORMS.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-plum/20 bg-card px-6 text-base font-medium text-ink transition-[background-color,color,border-color,transform] hover:-translate-y-0.5 hover:border-brand-strong hover:bg-brand-strong hover:text-white"
                    >
                      <BrandIcon name={p.name} />
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-base text-ink-muted">
                <span>Behind the scenes &amp; mum-to-mum chats:</span>
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-semibold text-plum underline-offset-4 transition-colors hover:text-brand-strong hover:underline"
                  >
                    <BrandIcon name={s.name} className="size-[18px]" />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <FloatingDock />

        <footer className="on-dark bg-plum px-4 pt-16 pb-8 text-on-plum-muted sm:px-6 lg:px-10">
          <div className={`${CONTAINER} grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]`}>
            <div>
              <p className="font-serif text-2xl text-on-plum">Mumma Approved</p>
              <p className="mt-3 max-w-sm text-base leading-relaxed">A podcast celebrating modern motherhood through authentic conversations and real stories.</p>
            </div>
            <nav aria-label="Footer">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-on-plum uppercase">Explore</h3>
              <ul className="mt-3">
                {[
                  ['Episodes', '#episodes'],
                  ['Our story', '#about'],
                  ['The Silent Room', '#the-silent-room'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="inline-flex min-h-11 items-center text-base transition-colors hover:text-brand">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.14em] text-on-plum uppercase">Follow us</h3>
              <ul className="mt-3">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2.5 text-base transition-colors hover:text-brand">
                      <BrandIcon name={s.name} className="size-[18px]" />
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.14em] text-on-plum uppercase">Listen on</h3>
              <ul className="mt-3">
                {PLATFORMS.map((p) => (
                  <li key={p.name}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2.5 text-base transition-colors hover:text-brand">
                      <BrandIcon name={p.name} className="size-[18px]" />
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={`${CONTAINER} mt-12 border-t border-white/10 pt-6 text-center text-sm`}>
            © {new Date().getFullYear()} Mumma Approved. All rights reserved.
          </p>
        </footer>
      </div>
    </PlayerProvider>
  )
}
