import { GoogleIcon } from '@/components/ui';

export function GoogleButton() {
  return (
    <button className={'btn-white w-full'}>
      <GoogleIcon />
      <span>구글로 시작하기</span>
    </button>
  );
}
