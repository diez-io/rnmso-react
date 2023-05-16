import ReactPlayer from "react-player";
import 'react-responsive-modal/styles.css';
import Modal from "react-responsive-modal";

export default function Player(props){
    const { open, closeModal, url } = props;
    return(
        <Modal
            open={open}
            onClose={closeModal}
            styles={{
                modal: {
                    width: "100%",
                    padding: "unset"
                },
                overlay: {
                    background: "rgba(0, 0, 0, 0.5)"
                },
                closeButton: {

                }
            }}
            center
        >
            <ReactPlayer
                url={url}
                width="100%"
                height="calc(100vh - 100px)"
            />
        </Modal>
    )
}