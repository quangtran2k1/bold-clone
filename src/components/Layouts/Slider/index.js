import React, { useState } from 'react';
import styles from '../../../pages/Home/Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div className={cx('phone_slider w_slider')}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={cx(`${index === currentIndex ? 'active' : ''}`, 'phone_slider', 'w_slider')}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slide}
                </div>
            ))}
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Slider;
