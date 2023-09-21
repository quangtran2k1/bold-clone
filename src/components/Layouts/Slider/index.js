import React, { useEffect, useState } from 'react';
import styles from '../../../pages/Home/Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const autoSlideInterval = 5000;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        return () => {
            clearInterval(autoSlide);
        };
    }, []);

    return (
        <div className={cx('phone_slider', 'w_slider')}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={cx(`${index === currentIndex ? 'active' : ''}`, 'phone_slider')}
                    style={{
                        transform: `translateX(-${(index - currentIndex) * 100}%)`,
                    }}
                >
                    {slide}
                </div>
            ))}
        </div>
    );
};

export default Slider;
