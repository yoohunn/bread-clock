import { useUser } from '@/hook/swr/useUser';
import { OpenBottomDrawer } from '@/components/OpenBottomDrawer';
import { StartIcon } from '@/components/ui';
import { GoogleButton } from '@/components/GoogleButton';

interface Props extends WithChildren {
  heading?: string;
  buttonNode: React.ReactNode;
}

export function AuthDrawerButton({ children, buttonNode, heading }: Props) {
  const { user } = useUser();
  if (!user) {
    return (
      <OpenBottomDrawer buttonNode={buttonNode}>
        <h2 className={'title-22-bold text-gray-900'}>
          {heading || '더 많은 기능을 사용하려면?'}
        </h2>
        <GoogleButton />
      </OpenBottomDrawer>
    );
  }

  return children;
}
