import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const FinalModal = ({ show }) => {
  const { score, total } = useSelector((state) => state)
  return (
    <Modal
      show={show}
      onHide={() => window.location.reload()}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>congrats!</h4>
        <h3>
          your score is <span className='text-danger'>{score}</span> from {total}
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => window.location.reload()}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FinalModal
