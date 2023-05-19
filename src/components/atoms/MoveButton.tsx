import Image from 'next/image';

export function MoveLeftButton() {
  return (
    <div>
      <button>
        <Image src="/moveLeft.png" width={20} height={20} alt="moveButton" />
      </button>
    </div>
  );
}