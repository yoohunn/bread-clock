import Image from 'next/image';

interface Props extends WithClassName {
  photoUrls: string[];
}
export function BreadImageList({ className, photoUrls }: Props) {
  const length = photoUrls.length;

  return (
    <section className={'px-4 py-6 border-t border-gray-300'}>
      <h3 className={'body-16-bold text-gray-700'}>사진</h3>
      <ImageGrid photoUrls={photoUrls} />
    </section>
  );
}

interface ImageGridProps {
  photoUrls: string[];
}
function ImageGrid({ photoUrls }: ImageGridProps) {
  const length = photoUrls.length;

  if (length === 1) {
    return (
      <ul className={`${baseUlClass} h-[114px] grid-cols-1`}>
        <ImageGridItem photoUrl={photoUrls[0]} />
      </ul>
    );
  }
  if (length === 2) {
    return (
      <ul className={`${baseUlClass} h-[114px] grid-cols-2`}>
        {photoUrls.map((url, index) => (
          <li key={index} className={'relative'}>
            <ImageGridItem photoUrl={url} />
          </li>
        ))}
      </ul>
    );
  }

  if (length === 3) {
    return (
      <ul className={`${baseUlClass} h-[114px] grid-cols-3`}>
        {photoUrls.map((url, index) => (
          <li key={index} className={'relative'}>
            <ImageGridItem photoUrl={url} />
          </li>
        ))}
      </ul>
    );
  }
  if (length === 4) {
    return (
      <ul className={`${baseUlClass} h-[228px] grid-cols-3`}>
        {photoUrls.map((url, index) => (
          <li key={index} className={'relative last:col-span-3'}>
            <ImageGridItem photoUrl={url} />
          </li>
        ))}
      </ul>
    );
  }
  if (length === 5) {
    return (
      <ul className={`${baseUlClass} h-[228px] grid-cols-6`}>
        {photoUrls.map((url, index) => {
          const order = index + 1;
          const className =
            order === 4 || order === 5
              ? 'relative col-span-3'
              : 'relative col-span-2';
          return (
            <li key={index} className={className}>
              <ImageGridItem photoUrl={url} />
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <ul className={`${baseUlClass} h-[228px] grid-cols-3`}>
      {photoUrls.map((url, index) => (
        <li key={index} className={'relative'}>
          <ImageGridItem photoUrl={url} />s
        </li>
      ))}
    </ul>
  );
}

function ImageGridItem({ photoUrl }: { photoUrl: string }) {
  return (
    <Image
      src={photoUrl}
      alt={`bread-img-`}
      fill
      style={{
        objectFit: 'cover',
      }}
    />
  );
}

const baseUlClass =
  'mt-2.5 w-full rounded-xl overflow-hidden grid gap-[1px] relative';
