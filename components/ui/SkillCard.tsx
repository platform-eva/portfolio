type SkillCardProps = {
  skill: string;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-white">
      {skill}
    </div>
  );
}