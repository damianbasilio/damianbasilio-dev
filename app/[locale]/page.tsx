import { getDictionary, toLocale, type LocaleParams } from '@/lib/i18n';
import { ThemeToggle } from '@/components/theme-toggle';
import { Card } from '@/components/card';
import { Reveal } from '@/components/reveal';
import { Media } from '@/components/media';
import { StackChips } from '@/components/stack-chips';

export default async function HomePage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <ThemeToggle dict={dict} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <Reveal key={i} delay={i}>
            <Card href="https://example.com" external className="h-56">
              <h2 className="text-lg font-medium">Card {i + 1}</h2>
              <p className="mt-1 text-sm text-muted">Hover me. Tab to me.</p>
              <StackChips items={['Python', 'Kafka']} className="mt-3" />
            </Card>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 aspect-video overflow-hidden rounded-2xl">
        <Media seed="fallback-demo" label="HPE CDS" alt="Fallback demo" />
      </div>
      <div className="h-[120vh]" />
    </main>
  );
}
