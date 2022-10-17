import './employeeListItem.css'

export default function EmployeeListItem(props) {
    const { name, position, image } = props.employee
    return (
        <div className="emp-list-item">
            <div>
                <img width="65" className='emp-item-img' src={image} alt={name} />
            </div>
            <div className="emp-item-content">
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