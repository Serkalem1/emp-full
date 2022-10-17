import './header.css'
export default function Header(props) {
    return (
        <div className="header">

            {props?.hasBackButton &&
                <div onClick={() => {
                    props.setDefaultEmployee()
                }}
                    className="arrow">
                    {"<"}
                </div>
            }

            <div style={{}}>
                <div className='header-title'>{props.title}</div>
            </div>
        </div>
    )
}