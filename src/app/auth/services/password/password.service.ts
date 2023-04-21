import { Injectable } from '@angular/core';
import { google } from 'googleapis';
import { auth } from 'google-auth-library';
import { OAuth2Client } from 'google-auth-library';
// import { Injectable } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';




@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private authClient:any;

  constructor() {
    const { google } = require('googleapis');
    const { OAuth2Client } = require('google-auth-library');

    const keyPath= './src/credenciales/credencial.json';

    const credentials = require(keyPath);
  const { client_id, client_secret, redirect_uris } = credentials.installed;

  const oauth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);
    
    // const oauth2Client = new OAuth2Client({
    //   clientId: '<your-client-id>',
    //   clientSecret: '<your-client-secret>',
    //   redirectUri: '<your-redirect-uri>',
    //   credentials: require(keyPath),
    // });

  }

  async sendPasswordResetEmail(to: string, resetUrl: string) {
    // Crea un objeto `Message` con el correo electrónico del destinatario, el asunto y el cuerpo del mensaje
    const message = [
      `To: ${to}`,
      'Subject: Restablecer contraseña',
      '',
      `Haga clic en el siguiente enlace para restablecer su contraseña: ${resetUrl}`,
    ].join('\n');
  
  // Envía el correo electrónico utilizando la API de Gmail de Google
  const gmail = google.gmail({ version: 'v1', auth: this.authClient });
  const response = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: Buffer.from(message).toString('base64'),
    },
  });
  console.log(response.data);
}
}
