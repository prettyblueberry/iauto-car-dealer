import { useEffect } from "react";
import "./bid.css";
import { Link } from "react-router-dom";


const customStyle = {
    sideNav: {
        width: '150%',
        marginLeft: '-40%'
    },
    rightNav: {
        width: '60%',
        marginLeft: '-3%',
        main: {
            width: '100%',
            padding: '10px',
            paddingTop: '10px',
            paddingBottom: '5px'
        }
    },
    mainNavButton: {
        boxShadow: "5px 0 30px rgba(1, 41, 112, 0)"
    },
    rightPriceButton: {
        boxShadow: "5px 0 30px rgba(1, 41, 112, 0)"
    },
    rightSideInput: {
        textAlign: 'center',
        backgroundColor: 'rgba(231, 239, 239, 1)',
    }
}


function LayoutAuction({children}){
    useEffect(()=>{
        jQuery(window).off("load");
        jQuery(window).off("scroll");
    }, []);

    return (
        <>
            <div style={{height: '120px', backgroundColor: 'rgba(16, 33, 39, 1)'}}></div>
            <div id="main">
                <div className="container">
                    <div className="dashboard-wrapper gdpr-active">
                        {/*here, I will take the navigation bar*/}
                        <div className="dashboard-wrapper">
                            <main className="dashboard-main container is-big">
                                {/* Left sidebar */}
                                <aside className="c-sidenav">
                                    <div className="u-padding-top" style={customStyle.sideNav}>
                                        <ul className="c-sidenav__list">
                                            <li>
                                                <Link data-cy="navigation-item-on-auction" to="/pages/auction-pages/bidding-auction/list/active">
                                                    <img src="/assets-bid/icons/icons_nav_cars.svg" alt="This is buy car icon" width={18} height={15} style={{marginRight: '30px'}} />
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            Active bidding rounds
                                                        </font>
                                                    </font>
                                                    <span className="list-counter">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        28
                                                    </font>
                                                    </font>
                                                </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/pages/auction-pages/bidding-auction/list/my-bids">
                                                    <img src="/assets-bid/icons/icons_nav_my_bids.svg" alt="This is bid icon" width={19} height={19} style={{marginRight: '30px'}} />
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            My bids
                                                        </font>
                                                    </font>
                                                    <span className="list-counter no-counts">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>0</font>
                                                    </font>
                                                </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link data-cy="navigation-item-upcoming" to="/pages/auction-pages/bidding-auction/list/my-winnings">
                                                    <img src="/assets-bid/icons/icons_nav_upcoming.svg" alt="This is upcoming icon" width={19} height={19} style={{marginRight: '30px'}} />
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            My Winnings
                                                        </font>
                                                    </font>
                                                    <span className="list-counter">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        847
                                                    </font>
                                                    </font>
                                                </span>
                                                </Link>
                                            </li>
                                            <li><span className="menu-separator" /></li>
                                            <li>
                                                <Link data-cy="dealer-faq-sidebar-link" to="/pages/auction-pages/bidding-auction/list/my-actives">
                                                    <img src="/assets-bid/icons/faq_question.svg" alt="This is faq_question icon" width={20} height={20} style={{marginRight: '30px'}} />
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            My Active Auctions
                                                        </font>
                                                    </font>
                                                    <span className="list-counter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link data-cy="navigation-item-favorites" to="/pages/auction-pages/bidding-auction/list/my-auctions">
                                                    <img src="/assets-bid/icons/icons_nav_favorites.svg" alt="This is favourite icon" width={21} height={18} style={{marginRight : '30PX'}} />
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            My Auctions
                                                        </font>
                                                    </font>
                                                    <span className="list-counter no-counts">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>0</font>
                                                    </font>
                                                </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                                {/* main content */}
                                <section className="dashboard-content">
                                    {children}
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutAuction;