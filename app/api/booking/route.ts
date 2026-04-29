import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialise l'instance Resend avec la clé API (à définir dans ton fichier .env.local)
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Envoi de l'email via Resend
    const result = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Modifie avec ton propre domaine vérifié sur Resend plus tard
      // Important : Sur le compte gratuit Resend, tu ne peux envoyer qu'à l'email avec lequel tu as créé ton compte.
      // Remplace ci-dessous par l'email de ton compte Resend (ex: mansournachirou246@...)
      to: ['mansournachirou246@gmail.com'], // <-- A CHANGER par ton vrai email Resend si différent
      replyTo: email,
      subject: `Nouvelle Demande Tabara Group: ${subject || 'Non spécifié'}`,
      html: `
        <h2>Nouvelle demande de réservation / contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email (Réponse automatique) :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <h3>Message du client :</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
