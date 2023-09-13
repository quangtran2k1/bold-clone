import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function Home() {
    return (
        <div className={cx('wrapper')}>
            <div cx={cx('eclipse__holder')}></div>
            <div cx={cx('main__container')}>
                <div className={cx('inner')}>
                    <div className={cx('inner__text')}>
                        <div className={cx('inner__icon')}>
                            <img src={images.appIcon} alt="app icon" />
                        </div>
                        <h1 className={cx('main__heading')}>Manage it all, in this all new system.</h1>
                        <div className={cx('grid')}>
                            <p className={cx('inner_desc')}>
                                Bold keeps your team’s work on-brand, on message, and on time. Innovative features make
                                creating and sharing your work feel effortless.
                            </p>
                        </div>
                        <div className={cx('download')}>
                            <div className={cx('download__ios')}>
                                <a
                                    href="http://apple.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('download__btn', 'button')}
                                >
                                    <AppleFilled />
                                    Download for iOS
                                </a>
                            </div>
                            <div className={cx('download__android', 'last')}>
                                <a
                                    href="https://play.google.com/store/apps"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('download__btn', 'button')}
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
                <div className={cx('text__sticky')}>
                    <div className={cx('text__holder')}>
                        <div className={cx('text__holder__1')}>
                            <h1 className={cx('text', '_1')}>Meet</h1>
                        </div>
                        <div className={cx('text__line')}></div>
                        <div className={cx('text__holder _2')}>
                            <h1 className={cx('text', '_2')}>Bold</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('product__demo')}>
                    <div className={cx('product__sticky')}>
                        <div className={cx('product__phone__image__wrapper')}>
                            <div className={cx('product__container')}>
                                <div className={cx('product__phone__image__holder')}>
                                    <img
                                        src={images.phoneImg}
                                        alt="PhoneImage"
                                        className={cx('product__phone__image')}
                                    />
                                    <div className={cx('product__phone__content')}>
                                        <img
                                            src={images.charListImg}
                                            alt="char list img"
                                            className={cx('product__phone__demo__image')}
                                        />
                                        <img
                                            src={images.lockScreenImg}
                                            alt="lock screen img"
                                            className={cx('iphone__lock__screen__image')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
