function FormError(props){
    const colorClass = props.productAdded === true ? 'alert alert-success' : 'alert alert-danger';
    if(props.errors.length === 0){
        return false;
    }
    const listItems = props.errors.map((err, key) => {
        return <div key={key} className={colorClass} role="alert">{err}</div>
    });
    return(
        <div>{listItems}</div> 
    )
}

export default FormError;