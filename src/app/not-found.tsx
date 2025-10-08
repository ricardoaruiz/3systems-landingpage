import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-10">
      <Image
        alt="Logo"
        height={200}
        priority
        quality={100}
        sizes="@(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src="/images/logo.webp"
        width={400}
      />
      <h1 className="font-bold text-6xl text-secondary-3systems">404</h1>
      <p className="mt-4 font-bold text-2xl text-secondary-3systems">
        Página Não Encontrada
      </p>
      <p className="mt-2 text-center font-semibold text-lg text-secondary-3systems">
        Desculpe, a página que você está procurando não existe.
      </p>
      <a
        className="mt-6 rounded bg-primary-3systems px-4 py-4 text-white text-xl transition duration-300 hover:bg-primary-2-3systems"
        href="/"
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}
// estilize com tailwindcss
