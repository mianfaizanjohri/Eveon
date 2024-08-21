import React, { useRef, useState } from 'react';
import { Stack, IconButton } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import the icons
import modelDemo from '../../assets/images/demo.mp4';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause of the video
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Stack
        px={{ base: 10, lg: 10 }}
        py={10}
        spacing={10}
        alignItems={'center'}
        direction={{ base: 'column-reverse', lg: 'row' }}
      >
        <Stack alignItems={'center'} w={{ base: '100%', lg: '50%' }}>
          {/* Add any other content here */}
        </Stack>

        <Stack position={'relative'} w={{ base: '100%', lg: '50%' }}>
          {/* Video section */}
          <video
            ref={videoRef}
            src={modelDemo}
            controls={false} // Hide default controls
            onClick={togglePlayPause} // Toggle play/pause on video click
            style={{
              borderRadius: '5px', // Add rounded border
              width: '100%' // Ensure video takes full width
            }}
          />
          {/* Play/pause button */}
          <IconButton
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            onClick={togglePlayPause}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="transparent"
            color="#0ad035"
            fontSize="7xl"
            _hover={{ color: 'gray.300' }}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default VideoSection;
