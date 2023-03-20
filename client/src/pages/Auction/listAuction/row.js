function CarAuctionRow(data){
    console.log(data);
    return <div className="single-car-listing " data-cy="car-item-167903">
        <div className="c-single-car has-topbar-">
            <article className="c-car-item ">
                <div className="c-car-item__image"><a href="/dashboard/car-detail/167903">
                    <figure><img src="https://images-20210209174033434400000001.s3.eu-north-1.amazonaws.com/81870ff1194be42bea2bf5252764514cc87e207380b3acbe91342815f5f087c9.thumb.jpg" alt="Hyundai IONIQ 5 | Skinn | HUD | ACC | V.Pumpe | R.Kam" data-id={167903} data-cy="car-image" /></figure>
                </a></div>
                <div className="c-car-item__content">
                    {/*<div className="c-favorite-button fadeIn " data-cy="like-toggle-inactive">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">*/}
                    {/*        <path fill="none" d="M0 0h24v24H0V0z" />*/}
                    {/*        <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                    <div className="c-car-item__content-top">
                        <div className="c-car-item__content-top-left">
                            <div className="c-car-item__information">
                                <div className="c-car-item__title"><a href="/dashboard/car-detail/167903"><h2 className="u-h5 u-margin-bottom-tiny" data-id={167903}>Hyundai IONIQ 5 | Skinn | HUD |
                                    ACC | V.Pumpe | R.Kam</h2></a></div>
                                <div className="c-car-item__details">
                                    <ul>
                                        <li>2022</li>
                                        <li>5 000 km</li>
                                        <li>Automat</li>
                                        <li>Elektrisitet</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="c-car-item__content-top-right">
                            <div className="c-car-item__detail-auction">
                                <div className="o-level o-level--margin-tiny u-margin-bottom-tiny" />
                                <div className="c-car-item__detail-auction-status">
                                    <div className="o-level auction-time-wrapper--bordered u-text-bold">
                                        <span>Avsluttes:&nbsp;</span>
                                        <div className="auction-time-wrapper" data-cy="timer-static">
                                            <span>I morgen kl. 10:00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="c-car-item__price-details"><span className="u-h6">Høyeste bud</span><span className="u-h3 u-text-bold">15&nbsp;000 NOK</span></div>
                        </div>
                    </div>
                    <div className="c-car-item__content-bottom o-level o-level--spaced-end">
                        <div className="c-car-item__content-bottom-left">
                            <div className="c-car-item__location">Økernveien 99 NAF</div>
                            <div className="c-tag c-car-item__regnr">CH17656</div>
                        </div>
                        <div className="c-car-details__actions">
                            <div className="o-level o-level--right">
                                <div className="c-bidding-controls ">
                                    <div className="c-quickbids o-level o-level--equal o-level--margin-tiny">
                                        <div className="o-level__item">
                                            <button type="button" data-cy="167903-bid-1000" className="c-btn c-btn--confirm   c-btn--full c-btn--color-primary-tint-2        c-btn--bold ">
                                                + 1&nbsp;000 kr
                                            </button>
                                        </div>
                                        <div className="o-level__item">
                                            <button type="button" data-cy="167903-bid-3000" className="c-btn c-btn--confirm   c-btn--full c-btn--color-primary-tint-2        c-btn--bold ">
                                                + 3&nbsp;000 kr
                                            </button>
                                        </div>
                                        <div className="o-level__item">
                                            <button type="button" data-cy="167903-bid-5000" className="c-btn c-btn--confirm   c-btn--full c-btn--color-primary-tint-2        c-btn--bold ">
                                                + 5&nbsp;000 kr
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>;
}

export default CarAuctionRow;


