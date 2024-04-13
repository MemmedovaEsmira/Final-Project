const Languageoption = (props) => {
    return(
        <div >
            <select className="dropdown-menu" onChange={props.onChange}>
                <option className="dropdown-item" value={'en'}>English</option>
                <option className="dropdown-item" value={'ko'}>Korean</option>
                <option className="dropdown-item" value={'chi'}>Chinese</option>
            </select>
        </div>
    )
}
export default Languageoption;