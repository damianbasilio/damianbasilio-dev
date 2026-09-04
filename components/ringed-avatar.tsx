import { site } from '@/content/site';

/**
 * Portrait inside two concentric rings: an outer hairline circle and an inner
 * ringed disc. Shared by the home hero and the About page so both read the same.
 */
export function RingedAvatar({ src }: { src?: string }) {
  return (
    <div className="relative my-5 md:mt-9">
      <div className="mx-auto flex h-[141px] w-[141px] items-center justify-center rounded-full border border-border/50">
        <div className="flex h-[116px] w-[116px] items-center justify-center rounded-full border-[1.5px] border-border/50 bg-bg shadow-[inset_0_2px_4px_rgb(0_0_0_/_0.04)]">
          <img
            src={src ?? site.avatar}
            alt={site.fullName}
            width={512}
            height={512}
            /* Above the fold: fetch eagerly and at high priority. */
            fetchPriority="high"
            decoding="async"
            className="h-[100px] w-[100px] rounded-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
