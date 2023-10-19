const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://imgs.search.brave.com/KTFzb_mIQVLfVfV1fs28mPStMe3wKgaiV3jJp-Zcvk8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vMWZjYTBl/NGEtNzJlMy00NTE4/LWFhZTctODE2NTg3/N2NmNTFkL2xvZ28_/bG9nb1RlbXBsYXRl/VmVyc2lvbj0xJnY9/NjM3ODExMzE4NzU2/ODAwMDAw'></img>
            </div>
            <div className='nav-links-container'>
                <ul className='nav-links-list'>   
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;