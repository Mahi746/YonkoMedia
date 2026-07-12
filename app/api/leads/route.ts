import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('[leads] GOOGLE_SHEETS_WEBHOOK_URL not set')
      return NextResponse.json({ error: 'Not configured' }, { status: 500 })
    }

    const params = new URLSearchParams({
      timestamp: new Date().toISOString(),
      name: body.name || '',
      company: body.company || '',
      website: body.website || '',
      challenge: Array.isArray(body.challenge) ? body.challenge.join(', ') : '',
      budget: body.budget || '',
      timeline: body.timeline || '',
      email: body.email || '',
      phone: body.phone || '',
      source: body.source || '',
      asset: body.asset || '',
      page: body.page || '',
      sender_email: body.sender_email || 'mahipal@yonkomedia.com',
    })

    const response = await fetch(`${webhookUrl}?${params.toString()}`, {
      method: 'GET',
    })

    if (!response.ok) {
      console.error('[leads] Webhook error:', response.status)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[leads] Unexpected error:', err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
