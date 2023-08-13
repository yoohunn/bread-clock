import { bakeryService } from '@/services/bakery';
import Image from 'next/image';

import { ChevronUpIcon, LocationIcon, TimeIcon } from '@/components/ui';
import { BakeryHeader } from '@/components/BakeryHeader';
import { FavoriteButton } from '@/components/FavoriteButton';
import { BuyableBreadList } from '@/components/BuyableBreadList';
import { BreadTimeList } from '@/components/BreadTimeList';
import { BreadImageList } from '@/components/BreadImageList';
import { OpeningHours } from '@/components/OpeningHours';
import { Distance } from '@/components/Distance';

export const revalidate = 100;

export async function generateStaticParams() {
  const bakeries = await bakeryService.getBakeries();
  return bakeries.map(({ id }) => ({ id: id.toString() }));
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
    longitude,
    latitude,
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

  return (
    <main className={'h-full overflow-y-scroll'}>
      <BakeryHeader />
      <div className='w-full h-[211px] bg-gray-300 flex-center overflow-hidden'>
        <Image
          src={photoUrls[0]}
          alt={'bakery-img'}
          width={450}
          height={211}
          priority
        />
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
              {address}{' '}
              <span>
                <Distance latitude={latitude} longitude={longitude} />
              </span>
            </p>
          </div>
          <div className={'flex items-start gap-1.5'}>
            <TimeIcon className={`mt-[1px] ${iconClass}`} />
            {openingHours && <OpeningHours openingHours={openingHours} />}
          </div>
        </div>
      </section>
      <BuyableBreadList id={id} breads={breads?.filter((i) => i.available)} />
      <BreadTimeList breads={breads} />
      <BreadImageList photoUrls={photoUrls} />
    </main>
  );
}
const iconClass = 'w-3.5 h-3.5 text-gray-500';
