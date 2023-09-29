import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PreLoader.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function PreLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cx('preloader', `${loading ? 'active' : 'hidden'}`)}>
            <img src={images.logoPreLoader} alt="Logo" className={cx('zoom_in')} />
        </div>
    );
}
