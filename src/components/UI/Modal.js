import {Fragment} from 'react';
import  ReactDom from 'react-dom';
import clasess from './Modal.module.css';
const Backdrop =(props) =>{
    return <div className={clasess.backdrop} onChange={props.onClose}></div>
};
const Modelovarlays =(props) =>{
    return <div className={clasess.modal}>
    <div className={clasess.content}>{ props.children}</div>
</div> 
};
const portalElement=document.getElementById('overlays');
const Modal =(props)=>{
  return <Fragment>
   {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
   {ReactDom.createPortal(<Modelovarlays>{props.children}</Modelovarlays>,portalElement)}
  </Fragment> 

};
export default Modal;