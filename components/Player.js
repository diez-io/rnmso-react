import ReactPlayer from 'react-player';
import Modal from 'react-responsive-modal';

export default function Player(props) {
  const { open, closeModal, url } = props;
  const closeIcon = (
    <svg
      width="50"
      height="60"
      viewBox="0 0 50 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 8L45 52M45 8L1 52" stroke="#1A1A1A" strokeWidth="2" />
      <path
        d="M1 8L45 52M45 8L1 52"
        stroke="black"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
    </svg>
  );
  return (
    <Modal
      open={open}
      onClose={closeModal}
      classNames={{
        overlay: 'customOverlay',
        modal: 'customModal',
        closeButton: 'customCloseButton',
      }}
      closeIcon={closeIcon}
      center
    >
      <ReactPlayer
        url={url}
        className="video-player"
        width="100%"
        height="calc(100vh - 100px)"
      />
    </Modal>
  );
}
