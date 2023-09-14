import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div className={cx('menu_fixed')}>
            <div className={cx('menu_container')}>
                <a className={cx('menu_brand')} href="/">
                    <img src={images.logo} alt="Bold" />
                </a>
                <nav className={cx('menu_nav')}>
                    <a className={cx('menu_nav_link')} href="#FeatureList">
                        Feature List
                    </a>
                    <a className={cx('menu_nav_link')} href="#About">
                        About Bold
                    </a>
                    <a className={cx('menu_nav_link')} href="#NightMode">
                        App Night Mode
                    </a>
                    <div className={cx('menu_nav_btn')}>
                        <button className={cx('menu_btn', 'button')}>
                            <strong>BOLD</strong> for $24
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
