type VideoPlaceholderProps = {
  title: string;
  videoSrc: string; // path like "/videos/sasf.mp4"
};


export default function VideoPlaceholder({ title, videoSrc }: VideoPlaceholderProps) {
  return (
    <div className="aspect-video w-full rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
      <video
        src={videoSrc}
        controls
        className="h-full w-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
