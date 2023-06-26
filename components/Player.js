import ReactPlayer from 'react-player';

export default function Player({ url }) {
  return (
    <ReactPlayer
      url={url}
      className="video-player"
      width="100%"
      height="calc(100vh - 100px)"
    />
  );
}
