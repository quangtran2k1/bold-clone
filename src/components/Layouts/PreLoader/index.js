import React from 'react';
import classNames from 'classnames/bind';
import styles from './PreLoader.module.scss';

const cx = classNames.bind(styles);

export default function PreLoader() {
    return (
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
    );
}
