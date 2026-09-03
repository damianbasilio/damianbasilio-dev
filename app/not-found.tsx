import { getDictionary } from '@/lib/i18n';

export default function NotFound() {
  const dict = getDictionary('en');

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="text-3xl font-medium tracking-tight">
        {dict.notFound.title}
      </h1>
      <p className="text-muted">{dict.notFound.body}</p>
      <a
        href="/en/"
        className="font-mono text-sm underline decoration-accent-soft underline-offset-4"
      >
        {dict.notFound.home}
      </a>
    </main>
  );
}
