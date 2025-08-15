import Image from 'next/image';

export function FooterView() {
  return (
    <footer className="bg-zinc-300">
      <div className="mx-auto max-w-[1440px] md:hidden">
        <Image
          alt="Footer imagage"
          className="h-auto w-full"
          height={712}
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          src="/images/footer.webp"
          width={1440}
        />
      </div>
    </footer>
  );
}
