export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <main className="flex min-h-dvh items-center justify-center">
        <a href="/en/" className="text-sm underline">
          Continue to damianbasilio.dev
        </a>
      </main>
    </>
  );
}
