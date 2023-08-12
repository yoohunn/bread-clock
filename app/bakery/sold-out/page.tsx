import { BakeryHeader } from '@/components/BakeryHeader';
import { SoldOutBreadsForm } from '@/components/SoldOutBreadsForm';

interface Props {
  params: { id: string };
}

export default function SoldOutPage() {
  return (
    <main className={'h-full bg-gray-300'}>
      <BakeryHeader />
      <SoldOutBreadsForm />
    </main>
  );
}
