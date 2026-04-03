import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const webhookUrl = process.env.N8N_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('[Contact API] N8N_WEBHOOK_URL is not configured')
      return NextResponse.json(
        { error: 'Service unavailable' },
        { status: 500 }
      )
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prenom: body.prenom,
        nom: body.nom,
        email: body.email,
        telephone: body.telephone || null,
        message: body.message || null,
        source: 'keelio-website',
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      console.error('[Contact API] Webhook returned error:', response.status)
      return NextResponse.json(
        { error: 'Failed to relay to webhook' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Contact API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
