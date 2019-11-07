/**
 * @Date:   2019-10-21T19:42:03+01:00
 * @Last modified time: 2019-11-05T18:21:24+00:00
 */
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import $ from 'jquery';


let episodeNames = [];


 function MyCharacterModal(props) {
   const [show, setShow] = useState(false);

   const handleClose = () => {
     episodeNames = [];
     setShow(false);

   };
   const handleShow = () => {
     setShow(true);

     for(let i = 0; i < props.data.episode.length; i++){
       console.log(props.data.episode[i]);

       $.ajax({
         url: props.data.episode[i],
         type: "GET",
         dataType: "JSON",
         async: false,
         success(good){
           episodeNames.push(good);
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
           <Modal.Title><h2>This is {props.data.name}</h2></Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <ul>
            <p><b>Species: </b>{props.data.species}</p>
            <p><b>Status: </b>{props.data.status}</p>
            <p><b>Gender: </b>{props.data.gender}</p>
            <p><b>Originally From: </b>{props.data.origin.name}</p>
            <p><b>Was Lat Seen on: </b>{props.data.location.name}</p>

            <DropdownButton className ="otherDropList" id="dropdown-basic-button" title="Appears in">
            <Dropdown.Item className = "dropList">
              {
                episodeNames.map((episodes) => <p key ={episodes.id}><b>{episodes.episode}:</b> {episodes.name}</p>)
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





 export default MyCharacterModal;
