'use client';

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 text-center">
        <div className="mb-4 text-6xl">📱</div>
        <h1 className="mb-4 font-bold text-3xl text-gray-800">
          Você está offline
        </h1>
        <p className="mb-6 text-gray-600">
          Parece que você está sem conexão com a internet. Verifique sua conexão
          e tente novamente.
        </p>
        <button
          className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
          onClick={() => window.location.reload()}
          type="button"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
