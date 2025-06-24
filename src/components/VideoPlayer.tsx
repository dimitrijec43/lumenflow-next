import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dominantColor, setDominantColor] = useState<string>('rgba(0, 0, 0, 0)');
  const [aspectRatio, setAspectRatio] = useState<number>(9/16);
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Update aspect ratio when video metadata is loaded
    const handleLoadedMetadata = () => {
      if (!video) return;
      const ratio = video.videoHeight / video.videoWidth;
      console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);
      console.log('Aspect ratio:', ratio);
      setAspectRatio(ratio);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Function to get the dominant color from the video frame
    const getDominantColor = () => {
      if (!video || !canvas || !ctx) return;

      // Draw the current video frame on the canvas
      ctx.drawImage(video, 0, 0, 1, 1);
      
      // Get the pixel data
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      
      // Return the color with some transparency
      return `rgba(${r}, ${g}, ${b}, 0.3)`;
    };

    // Update the dominant color periodically
    const interval = setInterval(() => {
      if (video.paused || video.ended) return;
      const color = getDominantColor();
      if (color) setDominantColor(color);
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Background effect */}
      <motion.div
        className="absolute inset-0 -m-20 blur-[100px] rounded-full"
        animate={{
          backgroundColor: dominantColor,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      />

      {/* Hidden canvas for color extraction */}
      <canvas
        ref={canvasRef}
        width="1"
        height="1"
        className="hidden"
      />

      {/* Video player */}
      <motion.div 
        className="relative flex justify-center items-center max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto rounded-2xl overflow-hidden border border-neutral-700/30 shadow-2xl cursor-pointer h-[50vh]"
        style={{ aspectRatio: `1 / ${aspectRatio}` }}
        animate={{
          scale: isEnlarged ? 1.05 : 1,
          boxShadow: isEnlarged 
            ? '0 20px 40px rgba(0,0,0,0.3)' 
            : '0 10px 20px rgba(0,0,0,0.2)'
        }}
        whileHover={{
          scale: isEnlarged ? 1.05 : 1.02
        }}
        onClick={() => setIsEnlarged(!isEnlarged)}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default VideoPlayer;