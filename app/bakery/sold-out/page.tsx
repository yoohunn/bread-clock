import { BakeryHeader } from '@/components/BakeryHeader';
import { BreadTagList } from '@/components/BreadTagList';

interface Props {
  params: { id: string };
}

export default function SoldOutPage() {
  return (
    <main className={'h-full bg-gray-300'}>
      <BakeryHeader />
      <div className={'px-4 py-6'}>
        <h2 className={'title-28-bold text-gray-700'}>
          빵의 매진 상태를
          <br />
          체크해 주세요
        </h2>
        <BreadTagList className={'mt-6'} />
      </div>
      <div className={'p-4'}>
        <button
          className={
            'btn border-0 w-full bg-primary-800 disabled:bg-primary-500 text-white'
          }
        >
          완료
        </button>
      </div>
    </main>
  );
}
