import Link from 'next/link';

export function BottomNav() {
  return (
    <>
      <button>검색</button>
      <Link href='/favorite'>즐겨찾기</Link>
    </>
  );
}
