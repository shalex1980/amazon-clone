import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="header__search">
                <input 
                    className="header_searchInput" type="text"
                />
                {/* Logo */}
            </div>
        </header>
    )
}

export default Header