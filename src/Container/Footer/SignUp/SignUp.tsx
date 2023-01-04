import './SignUp.scss'
type Props = {}
const SignUp = (props: Props) => {
    return (
        <>
            <header>Newsletter</header>
            <div className="box">
                <div className="content">
                    <div className="container">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Your Email" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp
