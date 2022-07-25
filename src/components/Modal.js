// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function ConfirmPIN() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Confirm
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirmation PIN</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="d-flex flex-column p-5 m-5">
//             <div className="d-flex justify-content-center flex-row gap-3 pin-wrap">
                
//                  <div className="d-flex align-items-center pin-border">
//                     <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
//                  </div>
                            
//                 <div className="d-flex align-items-center pin-border">
//                     <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
//                 </div>
                            
//                 <div className="d-flex align-items-center pin-border">
//                     <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
//                 </div>
                            
//                 <div className="d-flex align-items-center pin-border">
//                     <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
//                 </div>
                            
//                 <div className="d-flex align-items-center pin-border">
//                     <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
//                 </div>
                            
//                 <div className="d-flex align-items-center pin-border">
//                     <input type="number" className="pin-num" maxlength="1" min="0" max="9"/>
//                 </div>
                          
//               </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ConfirmPIN