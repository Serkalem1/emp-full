import './employeeHeader.css'
export default function EmployeeHeader(props) {
    const {name, position, image} = props?.employee
    return (
        <div className="emp-header">
            <div className= "emp-header-img">
                <img width="100" style={{"borderRadius": "50%"}} src={image} alt={name}/>
            </div>
            <div style={{  placeSelf: "center"}}>
                <div>
                {name}
                </div>
                <div>
                    {position}
                </div>
            </div>
        </div>
    )
}