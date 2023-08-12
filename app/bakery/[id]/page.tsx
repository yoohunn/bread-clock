import { bakeryService } from '@/services/bakery';

import { ChevronUpIcon, LocationIcon, TimeIcon } from '@/components/ui';
import { BakeryHeader } from '@/components/BakeryHeader';
import { FavoriteButton } from '@/components/FavoriteButton';
import { BuyableBreadList } from '@/components/BuyableBreadList';
import { BreadTimeList } from '@/components/BreadTimeList';
import { BreadImageList } from '@/components/BreadImageList';
import { OpeningHours } from '@/components/OpeningHours';

export const revalidate = 100;

export async function generateStaticParams() {
  const bakeries = await bakeryService.getBakeries();
  return bakeries.map(({ id }) => ({ id }));
}

interface Props {
  params: { id: string };
}

export default async function BakeryDetailPage({ params }: Props) {
  const bakery = await bakeryService.getBakery(params.id);
  if (!bakery) {
    return <></>;
  }
  const {
    address,
    coordinates,
    favorite,
    id,
    name,
    openingHours,
    photoUrls,
    breads,
  } = bakery;

  if (!id || !breads) {
    return <></>;
  }
  console.log('🌟🌟🌟🌟bakery: ', bakery);

  return (
    <main className={'h-full overflow-y-scroll'}>
      <BakeryHeader />
      <div className={'w-[375px] h-[211px] bg-[#D1C9C8]'}>
        {/* TODO {photoUrls[0]}*/}
      </div>
      <section className={'px-4 py-6 flex flex-col gap-2'}>
        <div className={'flex-row-center justify-between'}>
          <h2 className={'title-28-bold'}>{name}</h2>
          <FavoriteButton id={id} />
        </div>
        <div className={'mt-2 text-gray-700 text-[13px] space-y-1'}>
          <div className={'flex-row-center gap-1.5'}>
            <LocationIcon className={iconClass} />
            <p>
              {address} <span>(350m)</span>
            </p>
          </div>
          <div className={'flex items-start gap-1.5'}>
            <TimeIcon className={`mt-[1px] ${iconClass}`} />
            <OpeningHours openingHours={openingHours} />
            <div className={'mt-auto'}>
              <button>
                <ChevronUpIcon className={`${iconClass} text-gray-700`} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <BuyableBreadList id={id} breads={breads?.filter((i) => i.available)} />
      <BreadTimeList breads={breads} />
      <BreadImageList />
    </main>
  );
}
const iconClass = 'w-3.5 h-3.5 text-gray-500';
