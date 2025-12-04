type VideoPlaceholderProps = {
  title: string;
  embedUrl?: string;
};

export default function VideoPlaceholder({ title }: VideoPlaceholderProps) {
  return (
    <div className="aspect-video w-full rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 shadow-sm flex items-center justify-center">
      <div className="text-center space-y-3 px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white shadow">
          ▶
        </div>
        <p className="text-sm text-slate-600 font-medium">{title} – Video</p>
        <p className="text-xs text-slate-400">
          Placeholder for your explainer / demo clip (YouTube, MP4, or platform video).
        </p>
      </div>
    </div>
  );
}

