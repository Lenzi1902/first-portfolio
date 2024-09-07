const VideoBackgroundHover = () => {
  return <video src="./wavelinebackground.mp4" suppressHydrationWarning={true} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-[1] transition-all duration-1000" />;
};

export default VideoBackgroundHover;
