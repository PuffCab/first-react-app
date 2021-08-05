import React from 'react'
import "./Modal/Modal.css"

const Modal = props => {

    if (!props.show) {
        return null
    }
console.log(`props`, props.children)
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-header">
                        {props.title}
                    </h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                <button onClick={props.onClose} className="button">close</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modal



