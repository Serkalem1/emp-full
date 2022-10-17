import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeCardIcon from "../../components/employeeCardIcon/employeeCardIcon";
import EmployeeHeader from "../../components/employeeHeader/employeeHeader";
import EmployeeListItem from "../../components/employeeListItem/employeeListItem";
import Header from "../../components/header/header";
import './home.css'

export default function Home() {
    const [employeesData, setEmployeesData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState();
    const [employeeName, setEmployeeName] = useState();
    axios.defaults.baseURL = 'http://localhost:5000/api/employes/'
    function setDefaultEmployee(){
        setSelectedEmployee(employeesData[0])
    }
    useEffect(() => {
        axios.get('allemployees').then((res) => {
            setEmployeesData(res.data)
            setSelectedEmployee(res.data[0])
        })
    }, [])
    useEffect(() => {
        if (employeeName)
            axios.get(`employees?key=${employeeName}`).then((res) => {
                setEmployeesData(res.data)
                setSelectedEmployee(res.data[0])
            })
        else
            axios.get(`allemployees`).then((res) => {
                setEmployeesData(res.data)
                setSelectedEmployee(res.data[0])
            })
    }, [employeeName])
    return (
        <div className="container">
            <div className="home-page">
                <Header title="Employee Directory" />
                <div style={{border: "green solid 3px" }}>
                    <input className="search" onChange={(e) => setEmployeeName(e.target.value)}/>
                </div>
                <div style={{ padding: "3px",  border: "#b614e2 solid 3px" }}>
                    {employeesData?.map((elt) => <div onClick={() => setSelectedEmployee(elt)}> <EmployeeListItem employee={elt} /></div>)}
                </div>
            </div>
            <div className="emp-page">
                {employeesData.length > 0 && <div >
                    <Header title="Employee" hasBackButton={true} setDefaultEmployee={setDefaultEmployee}/>
                    <div className="emp-dis">
                        <EmployeeHeader employee={selectedEmployee} />
                        <EmployeeCardIcon employee={selectedEmployee}/>
                    </div>
                </div>}
            </div>
        </div>
    )
}