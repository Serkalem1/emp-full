import { useLocation } from "react-router";
import EmployeeCardIcon from "../../components/employeeCardIcon/employeeCardIcon";
import EmployeeHeader from "../../components/employeeHeader/employeeHeader";
import Header from "../../components/header/header";
import "./employee.css"
export default function Employee() {
    const { state } = useLocation();
    return (
        <div >
            <Header title="Employee" />
            <div className="emp-container">
                <EmployeeHeader employee={state} />
                <EmployeeCardIcon employee={state} />
            </div>
        </div>
    )
}