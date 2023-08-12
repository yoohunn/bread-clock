import { Service } from '@/services';

interface GoogleResponse {
  access_token: string;
  scope: string;
  token_type: string;
  id_token: string;
}

class GoogleService extends Service {
  private async getToken(code: string) {
    const { access_token: access } = await this.client.post<GoogleResponse>(
      'https://oauth2.googleapis.com/token',
      {
        code,
        grant_type: 'authorization_code',
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri:
          process.env.NEXT_PUBLIC_BASE_URL + '/auth/redirect/google',
      },
    );

    this.cookie.set('google_access', access);
    return access;
  }

  async signIn(code?: string) {
    const accessToken = await this.getToken(code!);

    return await this.client.post('/auth/login/google', {
      accessToken,
      provider: 'google',
    });
  }
}

export const googleService = new GoogleService();
