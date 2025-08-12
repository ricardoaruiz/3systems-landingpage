import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

export function HeaderView() {
  return (
    <header className="flex items-center justify-center bg-zinc-100 p-4 md:p-8">
      <div className="relative size-[140px] md:size-[280px]">
        <Image alt="Logo" fill src={logo} />
      </div>
    </header>
  );
}
