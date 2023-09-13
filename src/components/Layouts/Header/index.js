import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div className={cx('menu__fixed')}>
            <div className={cx('menu__container')}>
                <a className={cx('menu__brand')} href="/">
                    <img src={images.logo} alt="Bold" />
                </a>
                <nav className={cx('menu__nav')}>
                    <a className={cx('menu__nav__link')} href="#FeatureList">
                        Feature List
                    </a>
                    <a className={cx('menu__nav__link')} href="#About">
                        About Bold
                    </a>
                    <a className={cx('menu__nav__link')} href="#NightMode">
                        App Night Mode
                    </a>
                    <div className={cx('menu__nav__btn')}>
                        <button className={cx('menu__btn', 'button')}>
                            <strong>BOLD</strong> for $24
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
