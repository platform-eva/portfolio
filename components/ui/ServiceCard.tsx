type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
      <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="leading-7 text-zinc-400">{description}</p>
    </article>
  );
}