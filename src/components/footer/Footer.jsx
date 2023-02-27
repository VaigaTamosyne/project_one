import './Footer.css'

const Footer = (props) => {

    console.log(props)
    console.log(props.name)

    return (
        <div className='footer'>
            &copy; All rights reserved {props.name} {props.year}
        </div>
    )
}

export default Footer