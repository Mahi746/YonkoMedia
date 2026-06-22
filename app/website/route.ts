import { NextResponse } from 'next/server'

const CALENDLY = 'https://calendly.com/akshay-yonkomedia/30min'

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Website Design & Development — Yonkomedia</title>
<meta name="description" content="We design and build websites that turn visitors into customers. Strategy-led, conversion-focused. Live in 14 days.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="icon" href="/icon.svg">
<style>
:root{--ink:#171714;--paper:#f1f0ea;--white:#fff;--line:#d7d4ca;--muted:#6b6962;--lime:#d4ff3f;--max:1320px;--gutter:max(32px,calc((100vw - var(--max))/2));--space:112px}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--paper);color:var(--ink);font-family:"Geist",system-ui,sans-serif;font-size:16px;line-height:1.5;letter-spacing:-.03em;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
h1{font-size:clamp(46px,5vw,64px);font-weight:600;line-height:.96;letter-spacing:-.06em}
h2{font-size:clamp(38px,4vw,48px);font-weight:600;line-height:1;letter-spacing:-.05em}
h3{font-size:clamp(22px,2.2vw,30px);font-weight:600;line-height:1.1;letter-spacing:-.04em}
h4{font-size:22px;font-weight:600;letter-spacing:-.03em}
.eyebrow{font-size:13px;font-weight:600;letter-spacing:.01em;text-transform:uppercase;display:inline-flex;padding:8px 13px;border-radius:999px;background:var(--lime);color:var(--ink);margin-bottom:18px}
.lede{font-size:20px;line-height:1.6;letter-spacing:-.04em;color:var(--muted)}
.section{padding:var(--space) var(--gutter)}
.reveal{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .85s cubic-bezier(.16,1,.3,1)}
.reveal.visible{opacity:1;transform:none}

/* ── NAV ── */
.site-nav{position:absolute;inset:20px 0 auto;z-index:50;width:min(calc(100% - 48px),var(--max));margin:auto;min-height:62px;padding:8px 10px 8px 22px;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(23,23,20,.12);border-radius:999px;background:rgba(241,240,234,.88);backdrop-filter:blur(18px);box-shadow:0 8px 28px rgba(45,42,34,.07)}
.site-nav.stuck{position:fixed;top:10px;background:rgba(241,240,234,.95);box-shadow:0 12px 36px rgba(45,42,34,.1)}
.brand{font-size:20px;font-weight:700;letter-spacing:-.05em;color:var(--ink)}
.brand span{color:var(--lime);background:var(--ink);padding:2px 5px;border-radius:4px;margin-left:1px}
.nav-links{display:flex;align-items:center;gap:24px}
.nav-links a{font-size:14px;font-weight:500;color:rgba(23,23,20,.7);letter-spacing:-.015em;transition:color .2s}
.nav-links a:hover{color:var(--ink)}
.nav-cta{border:0;border-radius:999px;background:var(--ink);color:#fff;padding:13px 20px;font-size:14px;font-weight:600;letter-spacing:-.015em;cursor:pointer;transition:transform .2s,box-shadow .2s;font-family:inherit}
.nav-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(23,23,20,.18)}
.menu-toggle{display:none;border:0;background:var(--ink);color:#fff;border-radius:999px;padding:11px 16px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;font-family:inherit}

/* ── HERO ── */
.hero{position:relative;min-height:100svh;display:grid;align-items:center;padding:140px var(--gutter) 64px;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:var(--paper);z-index:0}
.hero-bg::before{content:"";position:absolute;right:-8%;top:-12%;width:56%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(212,255,63,.55) 0%,rgba(212,255,63,.18) 40%,transparent 72%);filter:blur(40px);animation:pulse-glow 7s ease-in-out infinite}
@keyframes pulse-glow{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.08);opacity:1}}
.hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,.95fr) minmax(480px,1.05fr);gap:56px;align-items:center;width:100%}
.hero-copy{max-width:640px}
.hero-copy .eyebrow{margin-bottom:22px}
.hero-copy h1{margin-bottom:22px;max-width:640px}
.hero-copy h1 .accent{color:var(--ink);background:var(--lime);padding:0 .12em .04em;border-radius:.12em}
.hero-copy .lede{max-width:500px;margin-bottom:32px}
.hero-actions{display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin-bottom:48px}
.btn-primary{border:0;border-radius:999px;background:var(--ink);color:#fff;padding:17px 28px;font-size:16px;font-weight:600;letter-spacing:-.02em;cursor:pointer;transition:transform .2s,box-shadow .2s;font-family:inherit}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 16px 36px rgba(23,23,20,.2)}
.btn-secondary{font-size:15px;font-weight:600;color:var(--ink);text-decoration:underline;text-decoration-color:rgba(23,23,20,.35);text-underline-offset:5px;letter-spacing:-.015em;transition:text-decoration-color .2s}
.btn-secondary:hover{text-decoration-color:var(--ink)}
.proof{display:flex;gap:28px}
.proof-item + .proof-item{padding-left:28px;border-left:1px solid rgba(23,23,20,.15)}
.proof strong{display:block;font-size:28px;font-weight:600;letter-spacing:-.05em;line-height:1}
.proof span{display:block;margin-top:6px;font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(23,23,20,.45)}

/* ── HERO MEDIA: browser mockups ── */
.hero-media{position:relative;height:min(620px,70vh);min-height:480px}
.browser-card{position:absolute;overflow:hidden;border:1.5px solid rgba(23,23,20,.12);border-radius:16px;background:var(--white);box-shadow:0 28px 72px rgba(23,23,20,.18);transition:transform .8s cubic-bezier(.2,.72,.22,1)}
.browser-chrome{height:30px;background:#e9e7e2;display:flex;align-items:center;gap:5px;padding:0 12px;border-bottom:1px solid rgba(23,23,20,.08)}
.browser-chrome .dot{width:7px;height:7px;border-radius:50%}
.browser-chrome .d1{background:#ff5f57}.browser-chrome .d2{background:#febc2e}.browser-chrome .d3{background:#28c840}
.browser-chrome .bar{flex:1;margin-left:10px;height:14px;border-radius:3px;background:rgba(23,23,20,.08);display:flex;align-items:center;padding:0 8px}
.browser-chrome .bar span{font-size:8px;color:#999;letter-spacing:.01em}
.browser-body{padding:16px;flex:1;display:flex;flex-direction:column;gap:9px;background:var(--white)}
.sk{border-radius:4px;background:rgba(23,23,20,.07)}
.sk.h{height:11px}.sk.s{height:8px}.sk.btn{height:28px;border-radius:7px;background:var(--lime);width:42%}
.sk.img{border-radius:10px;background:linear-gradient(135deg,rgba(23,23,20,.06),rgba(23,23,20,.03))}
.hero-media .browser-card.main{width:290px;height:440px;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-2deg);z-index:4}
.hero-media .browser-card.side-a{width:190px;height:320px;left:2%;top:30%;transform:rotate(-7deg);z-index:2}
.hero-media .browser-card.side-b{width:190px;height:320px;right:0;top:30%;transform:rotate(6deg);z-index:2}
.hero-media:hover .browser-card.main{transform:translate(-50%,-52%) rotate(1.5deg)}
.hero-media:hover .browser-card.side-a{transform:translate(-8px,6px) rotate(-9.5deg)}
.hero-media:hover .browser-card.side-b{transform:translate(8px,6px) rotate(9deg)}
.hero-chip{position:absolute;z-index:8;padding:9px 13px;border-radius:999px;background:var(--white);border:1px solid rgba(23,23,20,.1);font-size:11px;font-weight:600;letter-spacing:-.02em;box-shadow:0 12px 28px rgba(23,23,20,.12);animation:bob 3.8s ease-in-out infinite}
.hero-chip.c1{left:6%;bottom:18%;animation-delay:0s}
.hero-chip.c2{right:2%;top:15%;animation-delay:.5s}
@keyframes bob{50%{margin-top:-9px}}
.perf-mini{position:absolute;z-index:8;right:-2%;bottom:8%;width:190px;padding:14px;border-radius:14px;background:var(--white);border:1px solid rgba(23,23,20,.1);box-shadow:0 18px 40px rgba(23,23,20,.14);transform:rotate(2deg)}
.perf-mini header{display:flex;justify-content:space-between;align-items:center;margin-bottom:11px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:rgba(23,23,20,.45)}
.mini-row{display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px;padding:7px 0;border-top:1px solid rgba(23,23,20,.07)}
.mini-row span{font-size:10px;font-weight:500;color:var(--muted)}
.mini-row strong{font-size:13px;font-weight:600;letter-spacing:-.03em;color:#28c840}

/* ── TRUST ── */
.trust{padding:64px var(--gutter);background:var(--white);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.trust-label{font-size:18px;font-weight:500;letter-spacing:-.025em;color:var(--ink);margin-bottom:28px}
.trust-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}
.brand-mark{position:relative;min-height:84px;padding:18px 14px;display:flex;align-items:center;justify-content:center;border:1px solid var(--line);border-radius:16px;background:var(--paper);color:#5e5c56;font-size:15px;font-weight:600;letter-spacing:-.03em;cursor:default;transition:background .22s,color .22s,transform .22s}
.brand-mark:hover{background:var(--lime);color:var(--ink);transform:translateY(-2px)}
.brand-story{position:absolute;left:50%;bottom:calc(100% + 12px);width:min(240px,82vw);padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:var(--ink);color:#fff;font-size:11px;font-weight:500;line-height:1.5;letter-spacing:0;text-align:left;box-shadow:0 16px 38px rgba(23,23,20,.18);opacity:0;pointer-events:none;transform:translate(-50%,8px);transition:opacity .2s,transform .2s;z-index:10}
.brand-story::after{content:"";position:absolute;left:50%;top:100%;width:10px;height:10px;background:var(--ink);transform:translate(-50%,-5px) rotate(45deg)}
.brand-mark:hover .brand-story{opacity:1;transform:translate(-50%,0)}

/* ── PAIN ── */
.pain{padding:var(--space) var(--gutter);background:var(--paper)}
.pain-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:80px;align-items:start}
.pain-copy{max-width:560px}
.pain-copy h2{margin-bottom:22px}
.pain-copy .lede{margin-bottom:36px}
.pain-list{display:flex;flex-direction:column;gap:14px;margin-top:32px}
.pain-item{display:flex;align-items:flex-start;gap:14px;padding:18px 20px;border:1px solid var(--line);border-radius:16px;background:var(--white)}
.pain-icon{width:36px;height:36px;border-radius:9px;background:rgba(23,23,20,.06);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.pain-item-text h4{font-size:15px;margin-bottom:4px}
.pain-item-text p{font-size:13px;color:var(--muted);line-height:1.5}
.pain-visual{display:flex;flex-direction:column;gap:12px;padding:32px;border:1px solid var(--line);border-radius:24px;background:var(--white);box-shadow:0 14px 38px rgba(23,23,20,.05)}
.pain-visual-header{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(23,23,20,.4);margin-bottom:6px}
.funnel-step{display:flex;align-items:center;gap:12px;padding:13px 16px;border-radius:12px;background:var(--paper);margin-bottom:4px}
.funnel-step.broken{background:#fff5f5;border:1px solid #ffd0d0}
.funnel-step.good{background:#f4fff0;border:1px solid #c8f0c0}
.funnel-icon{font-size:20px}
.funnel-text h4{font-size:13px;margin-bottom:2px}
.funnel-text p{font-size:11px;color:var(--muted)}
.funnel-arrow{text-align:center;font-size:18px;color:rgba(23,23,20,.25);margin:2px 0}

/* ── SERVICES ── */
.services{padding:var(--space) var(--gutter);background:var(--white)}
.section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:48px;margin-bottom:52px}
.section-head .lede{max-width:420px;margin:0}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.service-card{padding:28px;border:1px solid var(--line);border-radius:22px;background:var(--paper);display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,background .25s}
.service-card:hover{transform:translateY(-6px);box-shadow:0 22px 52px rgba(23,23,20,.09)}
.service-card.featured{background:var(--ink);color:#fff;border-color:transparent}
.service-card.featured .service-copy,.service-card.featured .service-point{color:rgba(255,255,255,.65)}
.service-card.featured .service-point .check{background:rgba(255,255,255,.12);color:#fff}
.service-icon{width:52px;height:52px;border-radius:14px;background:var(--lime);color:var(--ink);font-size:22px;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.service-card.featured .service-icon{background:rgba(212,255,63,.2);color:var(--lime)}
.service-num{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:5px 9px;border-radius:999px;border:1px solid rgba(23,23,20,.18);color:rgba(23,23,20,.55);margin-bottom:10px}
.service-card.featured .service-num{border-color:rgba(255,255,255,.2);color:rgba(255,255,255,.5)}
.service-card h3{font-size:24px;margin-bottom:8px}
.service-copy{font-size:15px;color:var(--muted);line-height:1.55;margin-bottom:20px}
.service-divider{height:1px;background:rgba(23,23,20,.09);margin:16px 0}
.service-card.featured .service-divider{background:rgba(255,255,255,.12)}
.service-points{display:flex;flex-direction:column;gap:9px;margin-bottom:22px}
.service-point{display:flex;align-items:center;gap:9px;font-size:13px;line-height:1.35}
.service-point .check{width:20px;height:20px;border-radius:50%;background:var(--lime);color:var(--ink);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.service-delivery{margin-top:auto;padding:11px 14px;border-radius:10px;background:rgba(23,23,20,.06);font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;display:flex;align-items:center;gap:6px}
.service-card.featured .service-delivery{background:rgba(255,255,255,.1)}
.delivery-dot{width:6px;height:6px;border-radius:50%;background:var(--lime)}

/* ── WHAT MAKES US DIFFERENT ── */
.diff{padding:var(--space) var(--gutter);background:var(--lime)}
.diff h2{margin-bottom:52px;max-width:660px}
.diff-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid rgba(23,23,20,.15);border-radius:22px;overflow:hidden}
.diff-item{padding:28px 24px;border-right:1px solid rgba(23,23,20,.12)}
.diff-item:last-child{border-right:0}
.diff-num{font-size:40px;font-weight:600;letter-spacing:-.06em;line-height:1;margin-bottom:10px}
.diff-item h4{font-size:17px;margin-bottom:8px}
.diff-item p{font-size:14px;color:rgba(23,23,20,.65);line-height:1.55}

/* ── PROCESS ── */
.process{padding:var(--space) var(--gutter);background:var(--white)}
.process-head{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:end;margin-bottom:56px}
.process-steps{display:flex;flex-direction:column;gap:0}
.process-step{display:flex;gap:28px;padding:28px 0;border-top:1px solid var(--line);position:relative}
.step-node{width:36px;height:36px;border-radius:50%;border:2px solid var(--line);background:var(--white);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:var(--muted);flex-shrink:0;margin-top:4px;transition:.25s}
.process-step.active .step-node{background:var(--ink);border-color:var(--ink);color:#fff}
.step-eyebrow{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(23,23,20,.4);margin-bottom:7px}
.process-step.active .step-eyebrow{color:var(--ink)}
.step-content h3{font-size:28px;margin-bottom:8px}
.step-content p{font-size:15px;color:var(--muted);line-height:1.6;max-width:540px}
.step-day{position:absolute;right:0;top:28px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(23,23,20,.3)}
.process-cta{padding:28px 0 0;border-top:1px solid var(--line);display:flex;align-items:center;gap:20px}

/* ── RESULTS ── */
.results{padding:var(--space) var(--gutter);background:var(--paper)}
.results-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.result-card{padding:28px;border-radius:22px;background:var(--white);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;min-height:360px;transition:transform .3s,box-shadow .3s}
.result-card:hover{transform:translateY(-7px);box-shadow:0 24px 56px rgba(23,23,20,.1)}
.result-card:nth-child(2){background:var(--ink);color:#fff;border-color:transparent}
.result-card:nth-child(2) .result-body p{color:rgba(255,255,255,.6)}
.result-tag{font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(23,23,20,.4);margin-bottom:14px}
.result-card:nth-child(2) .result-tag{color:rgba(255,255,255,.45)}
.result-card h3{font-size:26px;margin-bottom:10px}
.result-body p{font-size:14px;color:var(--muted);line-height:1.58;margin-bottom:22px}
.result-metrics{display:flex;gap:22px}
.result-metric strong{display:block;font-size:36px;font-weight:600;letter-spacing:-.06em;line-height:1}
.result-metric span{display:block;margin-top:6px;font-size:9px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.5}

/* ── TESTIMONIALS ── */
.testimonials{padding:var(--space) var(--gutter);background:var(--white)}
.testi-head{margin-bottom:48px}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.testi-featured{grid-column:1/-1;padding:42px;border:1px solid var(--line);border-radius:22px;background:var(--paper);margin-bottom:4px}
.testi-featured blockquote{font-size:clamp(20px,2.2vw,26px);font-weight:500;line-height:1.35;letter-spacing:-.04em;margin-bottom:22px}
.testi-author{display:flex;align-items:center;gap:14px}
.testi-avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:600;color:var(--ink)}
.testi-name{font-size:15px;font-weight:600;letter-spacing:-.02em}
.testi-role{font-size:12px;color:var(--muted);margin-top:2px}
.testi-tag{display:inline-block;padding:6px 11px;border-radius:999px;background:var(--lime);font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-left:auto}
.testi-card{padding:22px;border:1px solid var(--line);border-radius:16px;background:var(--paper);display:flex;flex-direction:column;gap:16px}
.testi-card blockquote{font-size:15px;color:var(--muted);line-height:1.6;flex:1}
.testi-card .testi-author{padding-top:14px;border-top:1px solid var(--line)}

/* ── FAQ ── */
.faq{padding:var(--space) var(--gutter);background:var(--paper)}
.faq-shell{display:grid;grid-template-columns:.7fr 1.3fr;gap:52px;padding:40px;border:1px solid var(--line);border-radius:28px;background:var(--white)}
.faq-aside{padding:28px;border-radius:18px;background:var(--lime);display:flex;flex-direction:column;justify-content:space-between;min-height:460px}
.faq-aside h2{margin-top:12px;font-size:clamp(32px,3.2vw,40px)}
.faq-aside p{font-size:15px;color:rgba(23,23,20,.7);line-height:1.55;margin:18px 0 22px}
.faq-list{border-top:1px solid var(--line)}
.faq-item{border-bottom:1px solid var(--line)}
.faq-q{width:100%;padding:20px 0;display:flex;align-items:center;justify-content:space-between;gap:20px;border:0;background:none;color:var(--ink);font-size:16px;font-weight:500;letter-spacing:-.025em;font-family:inherit;cursor:pointer;text-align:left}
.faq-q .icon{width:30px;height:30px;border-radius:50%;background:var(--lime);color:var(--ink);font-size:14px;font-weight:600;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .22s,background .22s}
.faq-item.open .faq-q .icon{transform:rotate(45deg);background:var(--ink);color:#fff}
.faq-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}
.faq-a > div{overflow:hidden}
.faq-a p{padding:0 60px 18px 0;font-size:15px;color:var(--muted);line-height:1.65}
.faq-item.open .faq-a{grid-template-rows:1fr}

/* ── FOOTER/CTA ── */
.footer-cta{padding:var(--space) var(--gutter);background:var(--ink);color:#fff}
.footer-cta-inner{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:56px;align-items:center;padding:56px;border:1px solid rgba(255,255,255,.12);border-radius:28px;background:rgba(255,255,255,.04)}
.footer-copy .eyebrow{background:var(--lime);color:var(--ink);margin-bottom:18px}
.footer-copy h2{color:#fff;font-size:clamp(34px,3.6vw,48px);margin-bottom:16px}
.footer-copy p{color:rgba(255,255,255,.6);font-size:17px;line-height:1.55;margin-bottom:28px}
.footer-copy .btn-primary{background:var(--lime);color:var(--ink)}
.footer-copy .btn-primary:hover{box-shadow:0 14px 36px rgba(212,255,63,.35)}
.footer-proof{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.footer-proof-card{padding:20px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
.footer-proof-card strong{display:block;font-size:32px;font-weight:600;letter-spacing:-.06em;line-height:1;margin-bottom:6px}
.footer-proof-card span{font-size:12px;color:rgba(255,255,255,.45);font-weight:600;letter-spacing:.06em;text-transform:uppercase}
.footer-nav{margin-top:48px;padding-top:28px;border-top:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.footer-brand{font-size:19px;font-weight:700;letter-spacing:-.04em;color:#fff}
.footer-brand span{color:var(--lime);background:rgba(212,255,63,.15);padding:2px 5px;border-radius:4px}
.footer-links{display:flex;gap:24px}
.footer-links a{font-size:13px;color:rgba(255,255,255,.5);font-weight:500;transition:color .2s}
.footer-links a:hover{color:#fff}
.footer-bottom{font-size:11px;color:rgba(255,255,255,.28)}

/* scroll-call */
.scroll-call{position:fixed;right:24px;top:18px;z-index:100;height:48px;overflow:hidden;border:1px solid rgba(23,23,20,.1);border-radius:999px;background:var(--ink);color:#fff;box-shadow:0 10px 28px rgba(23,23,20,.14);opacity:0;pointer-events:none;transform:translateY(-10px);transition:width .32s cubic-bezier(.2,.75,.25,1),opacity .22s,transform .22s;display:flex;align-items:center;width:48px;cursor:pointer;font-family:inherit;border:0}
.scroll-call.visible{opacity:1;pointer-events:auto;transform:none}
.scroll-call:hover{width:234px}
.sc-icon{width:48px;min-width:48px;display:flex;align-items:center;justify-content:center;font-size:20px}
.sc-label{white-space:nowrap;padding-right:18px;font-size:13px;font-weight:600;letter-spacing:-.02em}

@media(max-width:1080px){
  :root{--gutter:24px;--space:90px}
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .pain-grid{grid-template-columns:1fr;gap:44px}
  .services-grid{grid-template-columns:1fr}
  .diff-grid{grid-template-columns:1fr 1fr}
  .diff-item:nth-child(2){border-right:0}.diff-item:nth-child(3){border-top:1px solid rgba(23,23,20,.12);border-right:1px solid rgba(23,23,20,.12)}.diff-item:last-child{border-top:1px solid rgba(23,23,20,.12)}
  .results-grid{grid-template-columns:1fr 1fr}
  .testi-grid{grid-template-columns:1fr 1fr}
  .faq-shell{grid-template-columns:1fr;padding:28px 24px}
  .faq-aside{min-height:auto;gap:28px}
  .footer-cta-inner{grid-template-columns:1fr;padding:36px 28px}
  .nav-links{display:none}
  .menu-toggle{display:block}
  .trust-grid{grid-template-columns:repeat(3,1fr)}
  .process-head{grid-template-columns:1fr}
}
@media(max-width:640px){
  h1{font-size:44px}h2{font-size:36px}
  .hero{padding:120px 20px 56px}
  .hero-media{height:440px;min-height:340px}
  .browser-card.main{width:220px;height:350px}
  .browser-card.side-a,.browser-card.side-b{width:140px;height:240px}
  .results-grid{grid-template-columns:1fr}
  .testi-grid{grid-template-columns:1fr}
  .testi-featured{padding:26px 22px}
  .diff-grid{grid-template-columns:1fr}
  .diff-item{border-right:0;border-top:1px solid rgba(23,23,20,.12)}
  .diff-item:first-child{border-top:0}
  .trust-grid{grid-template-columns:1fr 1fr}
  .proof{gap:14px}.proof-item+.proof-item{padding-left:14px}
  .footer-proof{grid-template-columns:1fr 1fr}
  .scroll-call{right:14px;top:12px}
}
</style>
</head>
<body>

<!-- Sticky scroll CTA -->
<button class="scroll-call book-call" aria-label="Book a strategy call">
  <span class="sc-icon">🗓</span>
  <span class="sc-label">Book a FREE Strategy Call</span>
</button>

<main>

<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-bg"></div>
  <nav class="site-nav" id="nav">
    <a class="brand" href="/">yonko<span>media</span></a>
    <div class="nav-links">
      <a href="#services">What We Build</a>
      <a href="#process">Process</a>
      <a href="#results">Work</a>
      <a href="#faq">FAQs</a>
    </div>
    <button class="nav-cta book-call">Book a FREE Strategy Call ↗</button>
    <button class="menu-toggle" id="menu-btn">Menu</button>
  </nav>

  <div class="hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Website Design &amp; Development</p>
      <h1>Your website should <span class="accent">sell.</span><br>Not just sit there.</h1>
      <p class="lede">We design and build high-converting websites for brands that run paid ads — so every click you pay for has somewhere worth going.</p>
      <div class="hero-actions">
        <button class="btn-primary book-call">Get a Free Website Audit →</button>
        <a class="btn-secondary" href="#results">See Our Work</a>
      </div>
      <div class="proof">
        <div class="proof-item"><strong>14</strong><span>Day Delivery</span></div>
        <div class="proof-item"><strong>30+</strong><span>Sites Built</span></div>
        <div class="proof-item"><strong>2×</strong><span>Avg. Conv. Lift</span></div>
      </div>
    </div>

    <div class="hero-media">
      <!-- Side A: landing page mockup -->
      <article class="browser-card side-a">
        <div class="browser-chrome">
          <div class="dot d1"></div><div class="dot d2"></div><div class="dot d3"></div>
          <div class="bar"><span>client-landing.com</span></div>
        </div>
        <div class="browser-body">
          <div class="sk h" style="width:70%"></div>
          <div class="sk s" style="width:50%"></div>
          <div class="sk btn"></div>
          <div class="sk img" style="flex:1;min-height:90px;margin-top:6px"></div>
        </div>
      </article>

      <!-- Main: full website mockup -->
      <article class="browser-card main">
        <div class="browser-chrome">
          <div class="dot d1"></div><div class="dot d2"></div><div class="dot d3"></div>
          <div class="bar"><span>yourbrand.com</span></div>
        </div>
        <div class="browser-body" style="gap:7px">
          <div style="display:flex;gap:8px;padding:8px 0;border-bottom:1px solid rgba(23,23,20,.07);margin-bottom:4px">
            <div class="sk s" style="width:22%;border-radius:3px"></div>
            <div class="sk s" style="width:18%;border-radius:3px"></div>
            <div class="sk s" style="width:22%;border-radius:3px"></div>
          </div>
          <div class="sk h" style="width:85%"></div>
          <div class="sk h" style="width:65%;height:8px"></div>
          <div class="sk s" style="width:80%;height:6px"></div>
          <div class="sk s" style="width:60%;height:6px"></div>
          <div style="display:flex;gap:8px;margin-top:4px">
            <div class="sk btn" style="width:36%;height:24px"></div>
            <div class="sk btn" style="width:28%;height:24px;background:rgba(23,23,20,.08)"></div>
          </div>
          <div class="sk img" style="flex:1;min-height:110px;margin-top:8px"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:6px">
            <div class="sk img" style="height:54px"></div>
            <div class="sk img" style="height:54px"></div>
            <div class="sk img" style="height:54px"></div>
          </div>
        </div>
      </article>

      <!-- Side B: ecom mockup -->
      <article class="browser-card side-b">
        <div class="browser-chrome">
          <div class="dot d1"></div><div class="dot d2"></div><div class="dot d3"></div>
          <div class="bar"><span>shop.yourbrand.com</span></div>
        </div>
        <div class="browser-body">
          <div class="sk img" style="height:90px;margin-bottom:8px"></div>
          <div class="sk h" style="width:75%;height:9px"></div>
          <div class="sk s" style="width:40%;height:7px"></div>
          <div class="sk btn" style="height:24px;border-radius:6px;width:60%;margin-top:4px"></div>
        </div>
      </article>

      <!-- Chips -->
      <div class="hero-chip c1">⚡ Live in 14 days</div>
      <div class="hero-chip c2">📈 Conversion-first</div>

      <!-- Perf card -->
      <div class="perf-mini">
        <header><span>Site performance</span><span>Live</span></header>
        <div class="mini-row"><span>Conv. rate</span><strong>+2.4×</strong></div>
        <div class="mini-row"><span>Page speed</span><strong>96/100</strong></div>
        <div class="mini-row"><span>Bounce rate</span><strong>-38%</strong></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ TRUST ═══ -->
<section class="trust">
  <p class="trust-label">Trusted by ambitious brands to grow.</p>
  <div class="trust-grid">
    <div class="brand-mark" tabindex="0">The Hosteller<span class="brand-story">Rebuilt their booking flow — direct bookings grew from 30% to 60%.</span></div>
    <div class="brand-mark" tabindex="0">Mogg's Estates<span class="brand-story">New landing pages drove 103% more qualified plot enquiries.</span></div>
    <div class="brand-mark" tabindex="0" style="font-size:22px;letter-spacing:-.04em">sitre<span class="brand-story">Conversion-led design for an intimate care brand entering new markets.</span></div>
    <div class="brand-mark" tabindex="0">TESU<span class="brand-story">Product-first landing pages designed for fast decision-making.</span></div>
    <div class="brand-mark" tabindex="0">Walk of Elegance<span class="brand-story">A sharper e-commerce experience to match a premium fashion brand.</span></div>
    <div class="brand-mark" tabindex="0">CoLLearn<span class="brand-story">Acquisition-focused site architecture built around learner intent.</span></div>
    <div class="brand-mark" tabindex="0">Jadecaps<span class="brand-story">Conversion-led design for a high-consideration consumer journey.</span></div>
    <div class="brand-mark" tabindex="0">Bajaj Finserv<span class="brand-story">Clearer acquisition pages for complex financial products.</span></div>
    <div class="brand-mark" tabindex="0">Microsoft<span class="brand-story">Enterprise communication delivered with speed and clarity.</span></div>
    <div class="brand-mark" tabindex="0" style="font-size:13px;color:rgba(23,23,20,.45)">+ more<span class="brand-story">Across travel, finance, education, wellness and e-commerce.</span></div>
  </div>
</section>

<!-- ═══ PAIN ═══ -->
<section class="pain section" id="pain">
  <div class="pain-grid">
    <div class="pain-copy reveal">
      <p class="eyebrow">The problem</p>
      <h2>Your ads are sending traffic to a site that can't close.</h2>
      <p class="lede">You're paying for every click. But if the page they land on doesn't convert, you're just funding a leaky funnel.</p>
      <div class="pain-list">
        <div class="pain-item">
          <div class="pain-icon">💸</div>
          <div class="pain-item-text">
            <h4>Ad spend wasted on weak pages</h4>
            <p>A generic homepage can't close a cold visitor. Your landing page needs to match your ad's promise exactly.</p>
          </div>
        </div>
        <div class="pain-item">
          <div class="pain-icon">📉</div>
          <div class="pain-item-text">
            <h4>Visitors leave without taking action</h4>
            <p>If your page doesn't answer "what's in it for me?" in 5 seconds, they're gone. And you paid for that visit.</p>
          </div>
        </div>
        <div class="pain-item">
          <div class="pain-icon">🔀</div>
          <div class="pain-item-text">
            <h4>No clear path to conversion</h4>
            <p>Too many options, no urgency, confusing layout. Every friction point is a lost sale.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pain-visual reveal" style="transition-delay:.12s">
      <p class="pain-visual-header">Typical funnel — before we fix it</p>
      <div class="funnel-step broken">
        <div class="funnel-icon">📢</div>
        <div class="funnel-text">
          <h4>Ad click (you paid for this)</h4>
          <p>Good hook. Strong creative. User is interested.</p>
        </div>
      </div>
      <div class="funnel-arrow">↓</div>
      <div class="funnel-step broken">
        <div class="funnel-icon">😕</div>
        <div class="funnel-text">
          <h4>Landing on a slow, confusing page</h4>
          <p>Generic homepage. Doesn't match the ad. Too much copy.</p>
        </div>
      </div>
      <div class="funnel-arrow">↓</div>
      <div class="funnel-step broken">
        <div class="funnel-icon">🚪</div>
        <div class="funnel-text">
          <h4>User bounces. Money gone.</h4>
          <p>No clear CTA. No trust signals. No reason to stay.</p>
        </div>
      </div>
      <div style="margin:20px 0;height:2px;background:var(--line);border-radius:2px"></div>
      <p class="pain-visual-header" style="color:#28c840">After Yonkomedia rebuilds it</p>
      <div class="funnel-step good">
        <div class="funnel-icon">🎯</div>
        <div class="funnel-text">
          <h4>Ad matches landing page exactly</h4>
          <p>Same message, same offer. Zero confusion.</p>
        </div>
      </div>
      <div class="funnel-arrow">↓</div>
      <div class="funnel-step good">
        <div class="funnel-icon">✅</div>
        <div class="funnel-text">
          <h4>Clear CTA, fast load, social proof</h4>
          <p>Converts cold traffic into enquiries and purchases.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SERVICES ═══ -->
<section class="services section" id="services">
  <div class="section-head reveal">
    <div>
      <p class="eyebrow">What we build</p>
      <h2>Three things we do exceptionally well.</h2>
    </div>
    <p class="lede">Strategy first. Design second. Performance always. Every project starts with understanding what you need to happen — then we build for it.</p>
  </div>
  <div class="services-grid">
    <article class="service-card reveal">
      <div class="service-icon">🎯</div>
      <span class="service-num">01</span>
      <h3>Campaign Landing Pages</h3>
      <p class="service-copy">Built specifically for your ads. One clear offer, one conversion goal, zero distractions. The fastest way to turn clicks into customers.</p>
      <div class="service-divider"></div>
      <div class="service-points">
        <span class="service-point"><span class="check">✓</span>Ad-to-page message match</span>
        <span class="service-point"><span class="check">✓</span>Conversion copywriting included</span>
        <span class="service-point"><span class="check">✓</span>Mobile-first design</span>
        <span class="service-point"><span class="check">✓</span>A/B testing ready</span>
        <span class="service-point"><span class="check">✓</span>Analytics &amp; tracking setup</span>
      </div>
      <div class="service-delivery"><span class="delivery-dot"></span>Delivered in 7 days</div>
    </article>

    <article class="service-card featured reveal" style="transition-delay:.08s">
      <div class="service-icon">🌐</div>
      <span class="service-num">02</span>
      <h3>Full Business Websites</h3>
      <p class="service-copy">Your brand's 24/7 salesperson. Strategy-led, conversion-focused, designed to work with your ads — not against them.</p>
      <div class="service-divider"></div>
      <div class="service-points">
        <span class="service-point"><span class="check">✓</span>Discovery &amp; strategy session</span>
        <span class="service-point"><span class="check">✓</span>Full design &amp; copywriting</span>
        <span class="service-point"><span class="check">✓</span>Next.js, Framer or Webflow</span>
        <span class="service-point"><span class="check">✓</span>SEO foundations built-in</span>
        <span class="service-point"><span class="check">✓</span>Pixel &amp; CAPI integration</span>
      </div>
      <div class="service-delivery"><span class="delivery-dot"></span>Delivered in 14 days</div>
    </article>

    <article class="service-card reveal" style="transition-delay:.16s">
      <div class="service-icon">🛒</div>
      <span class="service-num">03</span>
      <h3>E-Commerce Stores</h3>
      <p class="service-copy">Built to reduce cart abandonment and increase revenue per visitor. Every step in the checkout journey is designed to convert.</p>
      <div class="service-divider"></div>
      <div class="service-points">
        <span class="service-point"><span class="check">✓</span>Shopify or custom build</span>
        <span class="service-point"><span class="check">✓</span>Product page optimisation</span>
        <span class="service-point"><span class="check">✓</span>Checkout flow redesign</span>
        <span class="service-point"><span class="check">✓</span>Upsell &amp; cross-sell structure</span>
        <span class="service-point"><span class="check">✓</span>Ad-ready from day one</span>
      </div>
      <div class="service-delivery"><span class="delivery-dot"></span>Delivered in 21 days</div>
    </article>
  </div>
</section>

<!-- ═══ DIFF ═══ -->
<section class="diff section" id="diff">
  <h2 class="reveal">Why brands building on paid ads choose us.</h2>
  <div class="diff-grid reveal" style="transition-delay:.1s">
    <div class="diff-item">
      <div class="diff-num">01</div>
      <h4>We understand paid traffic</h4>
      <p>We're a performance marketing agency first. We know what happens between the ad click and the conversion — and we design for it.</p>
    </div>
    <div class="diff-item">
      <div class="diff-num">02</div>
      <h4>14 days, not 14 weeks</h4>
      <p>No discovery docs that go nowhere. We move fast because your ads are running now — and every day with a weak site costs you.</p>
    </div>
    <div class="diff-item">
      <div class="diff-num">03</div>
      <h4>Copy included, always</h4>
      <p>Most agencies hand you a design and expect you to write the words. We do both — because design without copy doesn't convert.</p>
    </div>
    <div class="diff-item">
      <div class="diff-num">04</div>
      <h4>Built to scale with you</h4>
      <p>Clean code. Fast load times. Structured for SEO. Designed to keep performing as your budget and traffic grow.</p>
    </div>
  </div>
</section>

<!-- ═══ PROCESS ═══ -->
<section class="process section" id="process">
  <div class="process-head reveal">
    <div>
      <p class="eyebrow">How it works</p>
      <h2>Live in 14 days. Here's exactly how.</h2>
    </div>
    <p class="lede">No long discovery phases. No endless revision loops. We work in a fast, focused sprint — strategy to launch in two weeks.</p>
  </div>
  <div class="process-steps">
    <article class="process-step active reveal">
      <div class="step-node">01</div>
      <div class="step-content">
        <p class="step-eyebrow">Days 1–2</p>
        <h3>Strategy &amp; Brief</h3>
        <p>We get into your business: who you're targeting, what your ads say, what action you need people to take. Everything that follows is built on this foundation.</p>
      </div>
      <span class="step-day">Days 1–2</span>
    </article>
    <article class="process-step reveal" style="transition-delay:.06s">
      <div class="step-node">02</div>
      <div class="step-content">
        <p class="step-eyebrow">Days 3–7</p>
        <h3>Design &amp; Copywriting</h3>
        <p>We design every page and write every word. You get a full design concept for review — most clients approve in one round because we nail the brief first.</p>
      </div>
      <span class="step-day">Days 3–7</span>
    </article>
    <article class="process-step reveal" style="transition-delay:.12s">
      <div class="step-node">03</div>
      <div class="step-content">
        <p class="step-eyebrow">Days 7–12</p>
        <h3>Build &amp; Test</h3>
        <p>We build in your chosen platform — Next.js, Framer, Webflow or Shopify. Tracking is configured, pixel is connected, and the site is tested across all devices.</p>
      </div>
      <span class="step-day">Days 7–12</span>
    </article>
    <article class="process-step reveal" style="transition-delay:.18s">
      <div class="step-node">04</div>
      <div class="step-content">
        <p class="step-eyebrow">Day 14</p>
        <h3>Launch</h3>
        <p>Your site goes live. Your ads start sending traffic to a page that's actually built to convert it. We stay close for the first two weeks to monitor performance.</p>
      </div>
      <span class="step-day">Day 14</span>
    </article>
  </div>
  <div class="process-cta reveal">
    <button class="btn-primary book-call">Start Your Project →</button>
    <p style="font-size:14px;color:var(--muted)">Most projects begin within 48 hours of our first call.</p>
  </div>
</section>

<!-- ═══ RESULTS ═══ -->
<section class="results section" id="results">
  <div class="section-head reveal">
    <div>
      <p class="eyebrow">Results</p>
      <h2>Websites that do the work.</h2>
    </div>
    <p class="lede">Every site we build is measured against one thing: does it convert?</p>
  </div>
  <div class="results-grid">
    <article class="result-card reveal">
      <div>
        <p class="result-tag">The Hosteller · Booking Flow Rebuild</p>
        <h3>Direct bookings doubled in 90 days.</h3>
        <div class="result-body"><p>A full redesign of the booking flow — cleaner navigation, faster load times, and an offer page that matched their Meta ads. Direct bookings went from 30% to 60% of all reservations.</p></div>
      </div>
      <div class="result-metrics">
        <div class="result-metric"><strong>2×</strong><span>Direct bookings</span></div>
        <div class="result-metric"><strong>30→60%</strong><span>Direct share</span></div>
      </div>
    </article>
    <article class="result-card reveal" style="transition-delay:.08s">
      <div>
        <p class="result-tag">Mogg's Estates · Landing Page Build</p>
        <h3>103% more qualified plot enquiries.</h3>
        <div class="result-body"><p>New campaign-specific landing pages aligned with their Meta and Google ads. One message. One CTA. No distractions. Enquiries more than doubled and site visits grew 29%.</p></div>
      </div>
      <div class="result-metrics">
        <div class="result-metric"><strong>103%</strong><span>More enquiries</span></div>
        <div class="result-metric"><strong>29%</strong><span>More site visits</span></div>
      </div>
    </article>
    <article class="result-card reveal" style="transition-delay:.16s">
      <div>
        <p class="result-tag">E-Commerce Brand · Full Site Rebuild</p>
        <h3>Revenue doubled in 30 days post-launch.</h3>
        <div class="result-body"><p>A complete rebuild of the product pages and checkout flow, integrated with their Meta ads campaign. Lower friction, clearer offers, and a conversion rate that made the ads finally profitable.</p></div>
      </div>
      <div class="result-metrics">
        <div class="result-metric"><strong>2×</strong><span>Revenue</span></div>
        <div class="result-metric"><strong>30</strong><span>Days post-launch</span></div>
      </div>
    </article>
  </div>
</section>

<!-- ═══ TESTIMONIALS ═══ -->
<section class="testimonials section" id="testimonials">
  <div class="testi-head reveal">
    <p class="eyebrow">What clients say</p>
    <h2>Don't take our word. Take theirs.</h2>
  </div>
  <div class="testi-grid">
    <div class="testi-featured reveal">
      <blockquote>"Working with Mahipal never felt like working with an external partner. He understood the business fast, challenged the assumptions that needed challenging, and built a site that felt like us — but sharper and actually built to sell."</blockquote>
      <div class="testi-author">
        <div class="testi-avatar" style="background:#d4ff3f">S</div>
        <div>
          <div class="testi-name">Srishty Arora</div>
          <div class="testi-role">Founder, CoLLearn</div>
        </div>
        <span class="testi-tag">Full website build</span>
      </div>
    </div>
    <div class="testi-card reveal" style="transition-delay:.06s">
      <blockquote>"The landing pages were live in under two weeks and our CAC dropped almost immediately. The message-to-page match made the difference."</blockquote>
      <div class="testi-author">
        <div class="testi-avatar" style="background:#e8e4ff">J</div>
        <div>
          <div class="testi-name">Julie Herskin</div>
          <div class="testi-role">Co-Founder, Sitre</div>
        </div>
      </div>
    </div>
    <div class="testi-card reveal" style="transition-delay:.12s">
      <blockquote>"The new booking page did more for our direct revenue than two years of agency work before it."</blockquote>
      <div class="testi-author">
        <div class="testi-avatar" style="background:#ffefd4">P</div>
        <div>
          <div class="testi-name">Pranav Dangi</div>
          <div class="testi-role">Founder, The Hosteller</div>
        </div>
      </div>
    </div>
    <div class="testi-card reveal" style="transition-delay:.18s">
      <blockquote>"We thought our ads were the problem. The site was the problem. Within 30 days of the rebuild, we were profitable."</blockquote>
      <div class="testi-author">
        <div class="testi-avatar" style="background:#d4f4ff">A</div>
        <div>
          <div class="testi-name">Arjun Shah</div>
          <div class="testi-role">CEO, E-commerce Brand</div>
        </div>
      </div>
    </div>
    <div class="testi-card reveal" style="transition-delay:.24s">
      <blockquote>"The copy was what made it. Most design studios hand you wireframes and expect you to figure out the words. These guys wrote everything."</blockquote>
      <div class="testi-author">
        <div class="testi-avatar" style="background:#ffd4e8">R</div>
        <div>
          <div class="testi-name">Rohit Kapoor</div>
          <div class="testi-role">COO, Real Estate Firm</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FAQ ═══ -->
<section class="faq section" id="faq">
  <div class="faq-shell reveal">
    <aside class="faq-aside">
      <div>
        <p class="eyebrow">FAQs</p>
        <h2>What brands ask before we start.</h2>
        <p>Still have questions? Book a free call — 20 minutes, no pitch, just clarity.</p>
        <button class="btn-primary book-call" style="width:100%">Book a Free Call ↗</button>
      </div>
    </aside>
    <div class="faq-list" id="faq-list">
      <article class="faq-item open">
        <button class="faq-q"><span>How long does a website take?</span><span class="icon">+</span></button>
        <div class="faq-a"><div><p>Landing pages: 7 days. Full business websites: 14 days. E-commerce stores: 21 days. These are real delivery timelines — not "it depends" answers. We move fast because your ads need somewhere to go.</p></div></div>
      </article>
      <article class="faq-item">
        <button class="faq-q"><span>What platform will you build on?</span><span class="icon">+</span></button>
        <div class="faq-a"><div><p>We build in Next.js, Framer, Webflow or Shopify depending on what you need. We'll recommend the right platform on our strategy call — and we won't upsell you into something you don't need.</p></div></div>
      </article>
      <article class="faq-item">
        <button class="faq-q"><span>Do you write the copy?</span><span class="icon">+</span></button>
        <div class="faq-a"><div><p>Yes, always. Conversion copywriting is part of every project. We write headlines, body copy, CTAs and microcopy — because design without copy doesn't convert and we've seen too many good designs underperform because of weak words.</p></div></div>
      </article>
      <article class="faq-item">
        <button class="faq-q"><span>Can you connect it to my Meta and Google ads?</span><span class="icon">+</span></button>
        <div class="faq-a"><div><p>Yes. Pixel setup, Conversions API (CAPI), Google Tag Manager, GA4 — all configured before we hand over the site. We're a paid media agency first, so we know exactly what tracking needs to be in place.</p></div></div>
      </article>
      <article class="faq-item">
        <button class="faq-q"><span>Do you redesign existing websites?</span><span class="icon">+</span></button>
        <div class="faq-a"><div><p>Yes. Most of our clients come with an existing site that's underperforming. We audit what you have, identify the specific conversion issues, and rebuild accordingly — not just a visual refresh, a structural rethink.</p></div></div>
      </article>
      <article class="faq-item">
        <button class="faq-q"><span>Is SEO included?</span><span class="icon">+</span></button>
        <div class="faq-a"><div><p>On-page SEO foundations are always included — proper heading hierarchy, metadata, fast loading, clean URLs, sitemap. We don't do ongoing SEO content strategy, but the technical foundation will be solid from day one.</p></div></div>
      </article>
      <article class="faq-item">
        <button class="faq-q"><span>What's the investment?</span><span class="icon">+</span></button>
        <div class="faq-a"><div><p>Landing pages start from $1,500. Full websites from $3,500. E-commerce from $5,000. Exact pricing depends on scope — we'll give you a fixed quote after a 20-minute strategy call. No surprises.</p></div></div>
      </article>
    </div>
  </div>
</section>

<!-- ═══ FOOTER CTA ═══ -->
<footer class="footer-cta" id="contact">
  <div class="footer-cta-inner reveal">
    <div class="footer-copy">
      <p class="eyebrow">Ready when you are</p>
      <h2>Let's build a site your ads deserve.</h2>
      <p>Book a free strategy call. We'll audit your current setup, identify the biggest conversion gaps, and tell you exactly what we'd build and why.</p>
      <button class="btn-primary book-call">Book a Free Strategy Call →</button>
    </div>
    <div class="footer-proof">
      <div class="footer-proof-card"><strong>14</strong><span>Day Delivery</span></div>
      <div class="footer-proof-card"><strong>30+</strong><span>Sites Built</span></div>
      <div class="footer-proof-card"><strong>2×</strong><span>Conv. Lift (avg)</span></div>
      <div class="footer-proof-card"><strong>100%</strong><span>Conversion-first</span></div>
    </div>
  </div>
  <div class="footer-nav" style="max-width:var(--max);margin:0 auto;padding:0 var(--gutter)">
    <a class="footer-brand" href="/">yonko<span>media</span></a>
    <div class="footer-links">
      <a href="/">Main site</a>
      <a href="/#work">Case Studies</a>
      <a href="/privacy">Privacy</a>
    </div>
    <p class="footer-bottom">© 2026 Yonkomedia. Website design &amp; development.</p>
  </div>
</footer>

</main>

<script>
// Book call
const CALENDLY = '${CALENDLY}';
document.querySelectorAll('.book-call').forEach(btn => btn.addEventListener('click', () => window.open(CALENDLY, '_blank', 'noopener')));

// Nav stuck + scroll-call
const nav = document.getElementById('nav');
const scrollCall = document.querySelector('.scroll-call');
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('stuck', y > 80);
  scrollCall.classList.toggle('visible', y > 120);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

// Reveal
const ro = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Process steps — activate on scroll
const steps = [...document.querySelectorAll('.process-step')];
const activateStep = () => {
  const mid = window.innerHeight * .55;
  let active = 0;
  steps.forEach((s, i) => { if (s.getBoundingClientRect().top < mid) active = i; });
  steps.forEach((s, i) => s.classList.toggle('active', i === active));
};
window.addEventListener('scroll', activateStep, { passive: true });
activateStep();

// FAQ
document.querySelectorAll('.faq-q').forEach(q => q.addEventListener('click', () => {
  const item = q.closest('.faq-item');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.toggle('open', i === item && !item.classList.contains('open')));
}));

// Brand mark hover (touch devices)
document.querySelectorAll('.brand-mark').forEach(bm => {
  bm.addEventListener('focus', () => {});
});
</script>
</body>
</html>`

export async function GET() {
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
