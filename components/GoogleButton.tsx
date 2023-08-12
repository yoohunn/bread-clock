import { GoogleIcon } from '@/components/ui';

export function GoogleButton() {
  return (
    <a className={'btn-white w-full'} href={href}>
      <GoogleIcon />
      <span>구글로 시작하기</span>
    </a>
  );
}

const href =
  `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
  `&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/auth/redirect/google`;
