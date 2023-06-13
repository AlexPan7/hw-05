import styles from './Popup.module.scss';

const Popup = ({isOpen, onClose, children}) => {

  const {popupContainer, popup, popupClose} = styles;

  return (
    <>
      {isOpen && (
        <div className={popupContainer}>
          <div className={popup}>
            <button className={popupClose} onClick={onClose}>X</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup