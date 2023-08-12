import { ChevronUpIcon, LocationIcon, TimeIcon } from '@/components/ui';
import { BakeryHeader } from '@/components/BakeryHeader';
import { FavoriteLink } from '@/components/FavoriteLink';
import { BuyableBreadList } from '@/components/BuyableBreadList';
import { BreadTimeList } from '@/components/BreadTimeList';
import { BreadImageList } from '@/components/BreadImageList';

// export async function generateStaticParams() {
//   const bakeries = await getBakeries();
//   return bakeries.map(({ id }) => ({ id }));
// }

interface Props {
  params: { id: string };
}

export default function BakeryDetailPage({ params }: Props) {
  return (
    <main className={'h-full overflow-y-scroll'}>
      <BakeryHeader />
      <div className={'w-[375px] h-[211px] bg-[#D1C9C8]'}></div>
      <section className={'px-4 py-6 flex flex-col gap-2'}>
        <div className={'flex-row-center justify-between'}>
          <h2 className={'title-28-bold'}>빵집이름</h2>
          <FavoriteLink />
        </div>
        <div className={'mt-2 text-gray-700 text-[13px] space-y-1'}>
          <div className={'flex-row-center gap-1.5'}>
            <LocationIcon className={iconClass} />
            <p>
              서울 기역구 가나다라로98길 33 마바사빌딩 1층 <span>(350m)</span>
            </p>
          </div>
          <div className={'flex items-start gap-1.5'}>
            <TimeIcon className={`mt-[1px] ${iconClass}`} />
            <div>
              <p>
                목 <span className={'ml-[3px]'}>00:00 - 00:00</span>
              </p>
              <p>
                금 <span className={'ml-[3px]'}>00:00 - 00:00</span>
              </p>
              <p>
                토 <span className={'ml-[3px]'}>00:00 - 00:00</span>
              </p>
              <p>
                일 <span className={'ml-[3px]'}>00:00 - 00:00</span>
              </p>
              <p>
                월 <span className={'ml-[3px]'}>00:00 - 00:00</span>
              </p>
              <p>
                화 <span className={'ml-[3px]'}>00:00 - 00:00</span>
              </p>
              <p>
                수 <span className={'ml-[3px]'}>00:00 - 00:00</span>
              </p>
            </div>
            <div className={'mt-auto'}>
              <button>
                <ChevronUpIcon className={`${iconClass} text-gray-700`} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <BuyableBreadList />
      <BreadTimeList />
      <BreadImageList />
    </main>
  );
}
const iconClass = 'w-3.5 h-3.5 text-gray-500';
