function DeleteModal(props){
    const active = props.modalActive === true ? {display: 'block'} : {};
    const toggleModal = (e) => {
        if(props.modalActive === true){
            props.setActive(false);
        }
    }
    return(
        <div className="modal" style={active}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete Product</h5>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this product?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={(e) => toggleModal(e)} data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={(e) => props.deleteProduct(e)}>Delete Product</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;