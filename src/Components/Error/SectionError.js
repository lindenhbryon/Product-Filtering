function SectionError(props){
    if(props.error === null){
        return false;
    }
    if(typeof props.reset !== 'undefined'){
        const timer = setTimeout(() => {
            props.reset(null);
            clearTimeout(timer);
        }, 2000);
    }
    const colorClass = props.status === 'success' ? 'alert alert-success' : 'alert alert-danger';
    return(
        <div className={colorClass} role="alert">{props.error}</div>
    )
}

export default SectionError;