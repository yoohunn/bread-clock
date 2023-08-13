import { Service } from '@/services';
import { SignInResponse } from '@/models';

class GoogleService extends Service {
  private async getToken(code: string) {
    const params = new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
      redirect_uri: process.env.NEXT_PUBLIC_BASE_URL + '/auth/redirect/google',
    });

    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await response.json();
    return data.access_token;
  }

  async signIn(code?: string) {
    const googleAccessToken = await this.getToken(code!);
    const res = await this.client.post<SignInResponse>('/auth/login/google', {
      accessToken: googleAccessToken,
      provider: 'google',
    });
    const data = res.data;
    const accessToken = data.accessToken;
    this.tokenStorage.setAccess(accessToken);

    return data.accessToken;
  }
}

export const googleService = new GoogleService();
