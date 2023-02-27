import './Header.css'

const Header = (props) => {

    console.log(props)
    console.log(props.name)

    return (
        <div>
            <h1 className="justify-content-center">Online Shopping</h1>
        </div>
    )
}

export default Header