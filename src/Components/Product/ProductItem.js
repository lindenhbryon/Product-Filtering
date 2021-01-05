function ProductContainer(props){
    return(
        <div className="card" style={{width: '18rem', float: 'left', width: 'calc(33% - 2px)', margin:'2px'}}>
            <div src="..." className="card-img-top" style={{backgroundColor: 'rgb(134, 142, 150)', width:'100%', height: '200px'}}></div>
            <div className="card-body">
                <h5 className="card-title">{props.products.product_name}</h5>
                <p className="card-text">{props.products.product_description}</p>
                <p className="card-text">{props.products.product_price}</p>
            </div>
        </div>
    )
}

export default ProductContainer;