import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function Home() {
    return (
        <div className={cx('content__wrapper')}>
            <div cx={cx('content__eclipse__holder')}></div>
            <div cx={cx('content__main__container')}>
                <div className={cx('content__inner')}>
                    <div className={cx('content__inner__text')}>
                        <div className={cx('content__inner__icon')}>
                            <img src={images.appIcon} alt="app icon" />
                        </div>
                        <h1 className={cx('content__main__heading')}>Manage it all, in this all new system.</h1>
                        <div className={cx('content__grid')}>
                            <p className={cx('content__inner_desc')}>
                                Bold keeps your team’s work on-brand, on message, and on time. Innovative features make
                                creating and sharing your work feel effortless.
                            </p>
                        </div>
                        <div className={cx('content__download')}>
                            <div className={cx('download__ios')}>
                                <a
                                    href="http://apple.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cx('download__btn', 'button')}
                                >
                                    <AppleFilled />
                                    Download for IOS
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
        </div>
    );
}
