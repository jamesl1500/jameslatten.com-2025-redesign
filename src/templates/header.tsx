import Image from "next/image";

export default function Header() {



    return (
        <header className="header">
            <div className="header-inner container">
                <div className="header-row row">
                    <div className="header-branding col-lg-3">
                        <div className="header-branding-inner">
                            <a href="#" className="header-logo">
                                <Image src="/images/favicon.png" alt="James Latten" width={50} height={50} />
                                <h2>James Latten</h2>
                            </a>
                        </div>
                    </div>
                    <div className="header-navigation col-lg-6">
                        <div className="header-navigation-inner">
                            <nav className="header-nav">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-cta col-lg-3">
                        <div className="header-cta-inner">
                            <nav className="header-cta-nav">
                                <ul>
                                    <li>
                                        <a href="#">Contact Me</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}