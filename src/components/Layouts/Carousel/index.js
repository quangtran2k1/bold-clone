import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import { Card, Rate } from 'antd';

const cx = classNames.bind(styles);

const reviewsData = [
    {
        name: 'Customer 1',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor eros at justo sodales, id hendrerit velit euismod.',
        rating: 5,
    },
    {
        name: 'Customer 2',
        review: 'Quisque eget volutpat elit. Donec non viverra nisi. Aliquam non augue sit amet justo tempor malesuada.',
        rating: 4,
    },
    {
        name: 'Customer 3',
        review: 'Sed eu vestibulum turpis. Nullam a libero quis erat tincidunt hendrerit.',
        rating: 3,
    },
    {
        name: 'Customer 4',
        review: 'Proin non dictum elit. Aliquam a ex at purus blandit ultricies.',
        rating: 4,
    },
    {
        name: 'Customer 5',
        review: 'Vestibulum eu quam eget arcu scelerisque semper. Sed euismod sapien vitae libero egestas.',
        rating: 5,
    },
    // Thêm các đánh giá khách hàng khác ở đây
];

const CarouselReviews = () => {
    const settings = {
        dots: true, // Hiển thị số trang
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Hiển thị 3 card trên mỗi trang
        slidesToScroll: 1, // Chuyển qua từng card mỗi lần
    };

    return (
        <Slider {...settings}>
            {reviewsData.map((review, index) => (
                <div key={index}>
                    <Card className={cx('review-card')} title={review.name}>
                        <p>{review.review}</p>
                        <Rate disabled defaultValue={review.rating} />
                    </Card>
                </div>
            ))}
        </Slider>
    );
};

export default CarouselReviews;
