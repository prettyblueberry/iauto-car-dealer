import { Link } from "react-router-dom";
import routes from "../../routes";

function HtmlRJX() {
    return (<div id="header" className="transparent-header">
        <div className="header-main header-main-ev_dealer header-listing-fixed">
            <div className="container">
                <div className="row header-row">
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <div className="stm-header-left">
                            <div className="logo-main" style={{marginTop: '4px'}}>
                                <Link to="/" className="bloglogo">
                                    <img src="/assets/logo.png" style={{width: 'px'}} title="Home" alt="Logo"/>
                                </Link>
                                <div className="mobile-menu-trigger">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-holder" style={{height: '379px'}}>
                            <div className="mobile-menu-wrap">
                                <ul className="header-menu clearfix">
                                    {routes.map((r, i) => {
                                        if(r.dropdown){
                                            return <li key={i} className="
                                              menu-item
                                              menu-item-type-post_type
                                              menu-item-object-page menu-item-has-children menu-item-918
                                            ">
                                                <a>{r.name}</a><span className="arrow"><i className="fas fa-angle-right"/></span>
                                                <ul className="sub-menu">
                                                    {r.collapse.map((c, j) =>
                                                        <li key={j}
                                                            className="
                                                              menu-item
                                                              menu-item-type-post_type
                                                              menu-item-object-page menu-item-920
                                                            "
                                                        >
                                                            <Link to={c.route}>{c.name}</Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </li>
                                        } else {
                                            return <li key={i} id="menu-item-919" className="
                                              menu-item
                                              menu-item-type-post_type
                                              menu-item-object-page menu-item-home
                                              current-menu-item
                                              page_item page-item-22
                                              current_page_item
                                              menu-item-919
                                            ">
                                                { r.route ? <Link to={r.route}>{r.name}</Link> : "" }
                                            </li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 header-right-wrap">
                        <div className="stm-header-right">
                            <div className="main-menu">
                                <ul className="header-menu clearfix">
                                    {routes.map((r, i) => {
                                        if(r.dropdown){
                                            return <li key={i} className="
                                              menu-item
                                              menu-item-type-custom
                                              menu-item-object-custom
                                              menu-item-has-children
                                              menu-item-900
                                            ">
                                                <a >{r.name}</a>
                                                <ul className="sub-menu">
                                                    {r.collapse.map((c, j) =>
                                                        <li key={j}
                                                            className="
                                                              menu-item
                                                              menu-item-type-post_type
                                                              menu-item-object-page menu-item-922
                                                            "
                                                        >
                                                            <Link to={c.route}>{c.name}</Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </li>
                                        } else {
                                            console.log("1", r);
                                            return <li key={i} className="
                                              menu-item
                                              menu-item-type-post_type
                                              menu-item-object-page menu-item-home
                                              current-menu-item
                                              page_item page-item-22
                                              current_page_item
                                              menu-item-919
                                            ">
                                                { r.route ? <Link to={r.route}>{r.name}</Link> : "" }
                                            </li>
                                        }
                                    })}
                                </ul>
                            </div>
                            <div className="head-phone-wrap">
                                <div className="ph-title heading-font">Call-centre:</div>
                                <div className="phone heading-font">(878) 967-4455</div>
                            </div>
                            <div className="stm-compare">
                                <a className="lOffer-compare" href="https://auction.iauto.no"
                                   title="View compared items">
                                    <i className="icon-ap-compare"/>
                                    <span className="list-badge">
                        <span className="stm-current-cars-in-compare">0</span>
                      </span>
                                </a>
                            </div>
                            <div className="pull-right hdn-767">
                                <div className="help-bar-shop">
                                    <a href="https://auction.iauto.no" title="Watch shop items">
                                        <i className="stm-icon-shopping-cart-1"/>
                                        <span className="list-badge">
                          <span className="stm-current-items-in-cart"> </span>
                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default HtmlRJX