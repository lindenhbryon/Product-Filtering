function FormError(props){
    if(props.error === null){
        return false;
    }
    const colorClass = props.error  !== null ? 'alert alert-success' : 'alert alert-danger';
    return(
        <div className={colorClass} role="alert">{props.error}</div>
    )
}

export default FormError;