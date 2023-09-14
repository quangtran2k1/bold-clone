import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function Home() {
    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <div cx={cx('eclipse_holder')}></div>
                <div cx={cx('main_container')}>
                    <div className={cx('inner')}>
                        <div className={cx('inner_text')}>
                            <div className={cx('inner_icon')}>
                                <img src={images.appIcon} alt="app icon" />
                            </div>
                            <h1 className={cx('main_heading')}>Manage it all, in this all new system.</h1>
                            <div className={cx('w_layout_grid', 'grid_10_col')}>
                                <p className={cx('inner_desc')}>
                                    Bold keeps your team’s work on-brand, on message, and on time. Innovative features
                                    make creating and sharing your work feel effortless.
                                </p>
                            </div>
                            <div className={cx('download')}>
                                <div className={cx('download_ios')}>
                                    <a
                                        href="http://apple.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cx('download_btn', 'button')}
                                    >
                                        <AppleFilled />
                                        Download for iOS
                                    </a>
                                </div>
                                <div className={cx('download_android', 'last')}>
                                    <a
                                        href="https://play.google.com/store/apps"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cx('download_btn', 'button')}
                                    >
                                        <AndroidFilled />
                                        Download for Android
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('inner')}>
                    <div className={cx('text_sticky')}>
                        <div className={cx('text_holder')}>
                            <div className={cx('text_holder_1')}>
                                <h1 className={cx('text', '_1')}>Meet</h1>
                            </div>
                            <div className={cx('text_line')}></div>
                            <div className={cx('text_holder _2')}>
                                <h1 className={cx('text', '_2')}>Bold</h1>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product_demo')}>
                        <div className={cx('product_sticky')}>
                            <div className={cx('product_phone_image_wrapper')}>
                                <div className={cx('product_container')}>
                                    <div className={cx('product_phone_image_holder')}>
                                        <img
                                            src={images.phoneImg}
                                            alt="PhoneImage"
                                            className={cx('product_phone_image')}
                                        />
                                        <div className={cx('product_phone_content')}>
                                            <img
                                                src={images.charListImg}
                                                alt="char list img"
                                                className={cx('product_phone_demo_image')}
                                            />
                                            <img
                                                src={images.lockScreenImg}
                                                alt="lock screen img"
                                                className={cx('iphone_lock_screen_image')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '50vh', marginTop: '50vh' }}>
                <div className={cx('container')}>
                    <div className={cx('customers_panel')}>
                        <div className={cx('panel__text_holder')}>
                            <div className={cx('text_center')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h5>More than 1,200,000 creative people use it</h5>
                                </div>
                            </div>
                        </div>
                        <div className={cx('w_layout_grid', 'grid_5_col')}>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon1} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon2} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon3} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon4} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon5} alt="asgardian" className={cx('customer_image')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="FeatureList" style={{ backgroundColor: '#f4f8fb' }}>
                <div className={cx('container')}>
                    <div className={cx('text_center')}>
                        <div className={cx('fade_in_on_scroll')}>
                            <h2 className={cx('text_gardient_2')}>Experience your product as you create it.</h2>
                        </div>
                        <div className={cx('text_container')}>
                            <div className={cx('fade_in_on_scroll')}>
                                <p>
                                    Bold keeps your team’s work on-brand, on message, and on time. Innovative features
                                    make creating and sharing your work feel effortless.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('w_layout_grid', 'feature_grid')}></div>
                </div>
            </div>
        </Fragment>
    );
}
