function ProductContainer(props){
    return(
        <div className="card zoom">
            <div className="card-img-top"></div>
            <div className="card-body">
                <h5 className="card-title">{props.products.product_name}</h5>
                <p className="card-text">{props.products.product_description}</p>
                <p className="card-text">{props.products.product_price}</p>
            </div>
        </div>
    )
}

export default ProductContainer;