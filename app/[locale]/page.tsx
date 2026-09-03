import { getDictionary, toLocale, type LocaleParams } from '@/lib/i18n';
import { ThemeToggle } from '@/components/theme-toggle';

export default async function HomePage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-medium tracking-tight">{dict.nav.home}</h1>
      <p className="mt-2 font-mono text-sm text-muted">locale: {locale}</p>
      <div className="mt-6">
        <ThemeToggle dict={dict} />
      </div>
    </main>
  );
}
