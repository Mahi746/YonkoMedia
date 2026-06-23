import { readFileSync } from 'node:fs'
import path from 'node:path'
import Script from 'next/script'

function getHomepageMarkup() {
  const source = readFileSync(path.join(process.cwd(), 'hero-carousel-concept.html'), 'utf8')
    .replaceAll('public/concept-assets/', '/concept-assets/')
    .replace(
      '<a href="#faq">FAQs</a><a href="https://calendly.com/akshay-yonkomedia/30min"',
      '<a href="#faq">FAQs</a><a href="/privacy">Privacy</a><a href="https://calendly.com/akshay-yonkomedia/30min"',
    )

  const style = source.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? ''
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1] ?? ''
  const script = body.match(/<script>([\s\S]*?)<\/script>/)?.[1] ?? ''
  const markup = body.replace(/<script>[\s\S]*?<\/script>/, '')

  return { style, markup, script }
}

export default function Home() {
  const { style, markup, script } = getHomepageMarkup()

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <Script
        id="yonkomedia-homepage-interactions"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: script }}
      />
    </>
  )
}
