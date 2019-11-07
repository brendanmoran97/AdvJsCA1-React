/**
 * @Date:   2019-10-21T19:42:03+01:00
 * @Last modified time: 2019-11-05T18:18:54+00:00
 */
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import $ from 'jquery';


let characterNames = [];

 function MyEpsiodeModal(props) {
   const [show, setShow] = useState(false);

   const handleClose = () => {
     characterNames = [];
     setShow(false);

   };
   const handleShow = () => {
     setShow(true);

     for(let i = 0; i < props.data.characters.length; i++){
       console.log(props.data.characters[i]);

       $.ajax({
         url: props.data.characters[i],
         type: "GET",
         dataType: "JSON",
         async: false,
         success(good){
           characterNames.push(good);
         },
         error(bad){
           console.log(bad);
         }
       });
     }
};



   return (
     <>
       <Button className = "topSpace btn btn-primary"variant="primary" onClick={handleShow}>
         Click here for More Info!
       </Button>

       <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
         <Modal.Header closeButton>
           <Modal.Title>Episode Title: {props.data.name}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <ul>

            <p><b>Aired On: </b>{props.data.air_date}</p>
            <p><b>Episode: </b>{props.data.episode.substring(5,6)} of Season {props.data.episode.substring(2,3)}</p>
            <DropdownButton id="dropdown-basic-button" title="List of Characters in this Episode">
            <Dropdown.Item className = "dropList">
              {
                characterNames.map((names) => <p key={names.id}>{names.name}</p>)
              }
            </Dropdown.Item>
            </DropdownButton>
          </ul>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
         </Modal.Footer>
       </Modal>



     </>
   );
 }





 export default MyEpsiodeModal;
