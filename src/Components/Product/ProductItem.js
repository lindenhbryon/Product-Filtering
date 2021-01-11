function ProductContainer(props){
    return(
        <div className="card zoom">
            <div className="card-img-top"></div>
            <div className="card-body">
                <h5 className="card-title">{props.products.product_name}</h5>
                <p className="card-text">{props.products.product_description}</p>
                <p>{props.products.product_price}</p>
                <button 
                    type="button"
                    data-id={props.products._id}
                    className="btn btn-danger right"
                    onClick={(e) => props.selectProduct(e)}
                >Delete</button>
            </div>
        </div>
    )
}

export default ProductContainer;