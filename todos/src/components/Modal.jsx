const Modal = ({ message, functionOnYes, setShowModal }) => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <p>{ message }</p>
        <div className='modal-footer'>
          <button className='y-btn' onClick={ functionOnYes }>Yes</button>
          <button className='n-btn' onClick={() => setShowModal(false)}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Modal