import './employeeCardIcon.css'
export default function EmployeeCardIcon(props) {
    const { email, sms, officePhone, mobilePhone } = props.employee
    return (
        <div>
            <div className="emp-list" 
            onClick={()=>window.open(`tel:${officePhone}`)}
            >
                <div>
                    <div>
                        Call Office
                    </div>
                    <div>
                        {officePhone}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="emp-list" 
              onClick={()=>window.open(`tel:${officePhone}`)}>
                <div>
                    <div>
                        Call Mobile
                    </div>
                    <div>
                        {mobilePhone}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="emp-list" 
             onClick={()=>window.open(`sms:${officePhone}`)}>
                <div>
                    <div>
                       SMS
                    </div>
                    <div>
                        {sms}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="emp-list" 
            onClick={()=>window.open(`mailto:${email}`)}>
                <div>
                    <div>
                       Email
                    </div>
                    <div>
                        {email}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
        </div>

    )
}