/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import CarouselReviews from '~/components/Layouts/Carousel';
import {
    AppleFilled,
    AndroidFilled,
    FacebookFilled,
    MailOutlined,
    PhoneFilled,
    GooglePlusCircleFilled,
    TwitterCircleFilled,
    InstagramFilled,
} from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function Home() {
    const [rotation, setRotation] = useState(0);
    const [transformY, setTransformY] = useState(0);
    const [transformLeft, setTransformLeft] = useState(0);
    const [transformRight, setTransformRight] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)');

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 1);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const handleScroll = () => {
        const element = document.getElementById('DangKy');
        const element1 = document.getElementById('PhoneProduct');

        if (element) {
            const rect = element.getBoundingClientRect();
            const elementY = rect.top;
            const elementYBottom = rect.bottom;
            const windowHeight = window.innerHeight;

            const distanceFromTop = Math.max(0, elementY);
            const distanceFromBottom = Math.max(0, elementYBottom);
            const maxDistance = windowHeight / 2;

            let newRed, newGreen, newBlue;

            if (distanceFromBottom > 300) {
                newRed = Math.min(255, 20 + (235 * distanceFromTop) / maxDistance);
                newGreen = Math.min(255, 20 + (235 * distanceFromTop) / maxDistance);
                newBlue = Math.min(255, 21 + (234 * distanceFromTop) / maxDistance);
            }

            const newBackgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;

            setBackgroundColor(newBackgroundColor);
        }

        if (element1) {
            const rect = element1.getBoundingClientRect();
            const elementY = rect.top - 100;
            const elementYBottom = rect.bottom;
            const windowHeight = window.innerHeight;

            const distanceFromTop = Math.max(0, elementY);
            const distanceFromBottom = Math.max(0, elementYBottom);
            const maxDistance = windowHeight / 2;
            const newTransform = -((maxDistance - distanceFromTop) / maxDistance) * 100;
            const clampedTransform = Math.max(-100, Math.min(0, newTransform));
            setTransformY(clampedTransform);

            if (distanceFromBottom > 400) {
                const newTransformRight = ((maxDistance - distanceFromTop) / maxDistance) * 150;
                const clampedTransformRight = Math.max(0, Math.min(150, newTransformRight));
                setTransformRight(clampedTransformRight);

                const newTransformLeft = -((maxDistance - distanceFromTop) / maxDistance) * 150;
                const clampedTransformLeft = Math.max(-150, Math.min(0, newTransformLeft));
                setTransformLeft(clampedTransformLeft);
            } else {
                const newTransformRight = -((maxDistance - 500 - distanceFromBottom) / 300) * 150;
                const clampedTransformRight = Math.min(150, Math.max(0, newTransformRight));
                setTransformRight(clampedTransformRight);

                const newTransformLeft = ((maxDistance - distanceFromBottom - 500) / 300) * 150;
                const clampedTransformLeft = Math.min(0, Math.max(-150, newTransformLeft));
                setTransformLeft(clampedTransformLeft);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const nightModeStyle = {
        backgroundColor: backgroundColor,
        transition: 'background-color 0.05s ease-in-out',
    };
    const ellipseStyle = {
        transform: `rotateZ(${rotation}deg)`,
    };
    const transformStyle = {
        willChange: 'transform',
        transform: `translate3d(0px, ${transformY}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: 'preserve-3d',
    };
    const transformXLeftStyle = {
        willChange: 'transform',
        transform: `translate3d(${transformLeft}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: 'preserve-3d',
    };
    const transformXRightStyle = {
        willChange: 'transform',
        transform: `translate3d(${transformRight}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: 'preserve-3d',
    };

    const currentYear = new Date().getFullYear();

    return (
        <div onScroll={handleScroll}>
            <div className={cx('wrapper')}>
                <div className={cx('eclipse_holder')}>
                    <div className={cx('eclipse_left')} style={ellipseStyle}></div>
                    <div className={cx('eclipse_right')} style={ellipseStyle}></div>
                </div>
                <div className={cx('main_container')}>
                    <div className={cx('inner')}>
                        <div className={cx('inner_text')}>
                            <div className={cx('inner_icon')}>
                                <img src={images.appIcon} alt="app icon" />
                            </div>
                            <h1 className={cx('main_heading')}>
                                Gọi Timos
                                <br />Ô tô đến tận nhà
                            </h1>
                            <div className={cx('w_layout_grid', 'grid_10_col')}>
                                <p className={cx('inner_desc')}>
                                    Ứng dụng đặt vé xe rẻ, nhanh chóng, tiện lợi với nhiều loại hình liên tỉnh:
                                    <br />
                                    Limousine, tiện chuyến, xe ghép, xe sân bay, xe giường nằm. <br />
                                    <br />
                                    Luôn phục vụ khách hàng mọi lúc mọi nơi. Nhanh tay truy cập ứng dụng để trải nghiệm
                                    những dịch vụ tốt nhất.
                                </p>
                            </div>
                            <div className={cx('download')}>
                                <div className={cx('download_ios')}>
                                    <a
                                        href="https://apps.apple.com/vn/app/timos-%C4%91%E1%BA%B7t-xe-tr%E1%BB%B1c-tuy%E1%BA%BFn/id1563546063?l=vi"
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
                                        href="https://play.google.com/store/apps/details?id=takecare.vn.limousine&pli=1"
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
                            <div className={cx('text_holder_1')} style={transformXLeftStyle}>
                                <h1 className={cx('text', '_1')}>Timos</h1>
                            </div>
                            <div className={cx('text_holder _2')} style={transformXRightStyle}>
                                <h1 className={cx('text', '_2')}>Corp</h1>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product_demo')}>
                        <div className={cx('product_sticky')}>
                            <div className={cx('product_phone_image_wrapper')}>
                                <div className={cx('product_container')}>
                                    <div id="PhoneProduct" className={cx('product_phone_image_holder')}>
                                        <img
                                            src={images.phoneImg}
                                            alt="PhoneImage"
                                            className={cx('product_phone_image')}
                                        />
                                        <div className={cx('product_phone_content')}>
                                            <img
                                                src={images.homeImg}
                                                alt="char list img"
                                                className={cx('product_phone_demo_image')}
                                            />
                                            <img
                                                src={images.lockScreenImg}
                                                alt="lock screen img"
                                                className={cx('iphone_lock_screen_image')}
                                                style={transformStyle}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '50vh' }}>
                <div className={cx('container')}>
                    <div className={cx('customers_panel')}>
                        <div className={cx('panel__text_holder')}>
                            <div className={cx('text_center')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h5> Hơn 10000 khách hàng tin dùng và sử dụng</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="DanhGia" style={{ backgroundColor: '#f4f8fb' }}>
                <div className={cx('container')}>
                    <div className={cx('text_center')}>
                        <div className={cx('fade_in_on_scroll')}>
                            <h2 className={cx('text_gradient_2')}>Đánh giá và sự trải nghiệm của Khách hàng.</h2>
                        </div>
                        <div className={cx('text_container')}>
                            <div className={cx('fade_in_on_scroll')}>
                                <p>
                                    Timos giúp bạn có chuyến đi đúng thương hiệu, đúng thông điệp và đúng thời gian. Các
                                    dịch vụ luôn luôn đổi mới, cập nhật xu hướng khách hàng giúp việc lựa chọn và trải
                                    nhiệm chuyến đi của bạn trở nên dễ dàng, thú vị và tiện ích hơn.
                                </p>
                            </div>
                        </div>
                    </div>

                    <CarouselReviews />
                    {/* <div className={cx('w_layout_grid', 'feature_grid')}>
                        <div className={cx('card_item', 'light', 'grid_start_1_5')}>
                            <div className={cx('card_item_content')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h4>Mobile shopping for all</h4>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p>
                                        Easily integrate with all your favorite tools.
                                        <br />
                                        APIs including automatic integrations.
                                        <br />
                                        <br />
                                        Share content and learn.
                                        <br />
                                        Trustworthy and fun.
                                    </p>
                                </div>
                            </div>
                            <img src={images.featureImage1} alt="feature img" className={cx('feature_1_image')} />
                        </div>
                        <div className={cx('card_item', 'light', 'grid_start_1_4')}>
                            <img src={images.featureImage2} alt="feature img" />
                            <div className={cx('card_item_content')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h4>Effortless integration.</h4>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p>
                                        Easily integrate with all your favorite tools through and APIs including
                                        automatic integrations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card_item', 'light', 'grid_start_1_3')}>
                            <div className={cx('card_item_content')}>
                                <div className={cx('card_feature_center')}>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <img src={images.timos} className={cx('card_feature_icon')} alt="icon" />
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <h6>Timos - Đặt xe trực tuyến</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card_item', 'light', 'grid_start_1_3')}>
                            <div className={cx('card_item_content')}>
                                <div className={cx('card_feature_center')}>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <img src={images.booking} className={cx('card_feature_icon')} alt="icon" />
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <h6>Trung Chuyển Timos</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card_item', 'light', 'grid_start_1_3')}>
                            <div className={cx('card_item_content')}>
                                <div className={cx('card_feature_center')}>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <img src={images.timosDriver} className={cx('card_feature_icon')} alt="icon" />
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <h6>Tài xế Timos </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div id="DangKy" style={nightModeStyle}>
                <div className={cx('container')}>
                    <div className={cx('w_layout_grid', 'grid_10_column')}>
                        <div className={cx('content', 'grid_start_2_10')}>
                            <div className={cx('text_center')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h2 className={cx('text_gradient_2')}>Đăng ký để trở thành đối tác Timos.</h2>
                                </div>
                                <div className={cx('text_container')}>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <p className={cx('white_text')}>
                                            Timos cung cấp sàn thương mại điện tử, giúp Khách hàng và tài xế có thể
                                            tương tác trực tiếp và lựa chọn những chuyến đi dễ dàng phù hợp với sự lựa
                                            chọn của mình.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('w_layout_grid', 'grid_6_col')}>
                                <div className={cx('card_item', 'grid_start_1_3')}>
                                    <div className={cx('card_item_content')}>
                                        <div className={cx('card_iphone')}>
                                            <img
                                                src={images.phoneImg}
                                                alt="iphone"
                                                className={cx('card_iphone_image')}
                                            />
                                            <div className={cx('card_iphone_overlay')}></div>
                                            <div className={cx('card_phone_image_container')}>
                                                <img
                                                    src={images.loginImg}
                                                    alt="bold app"
                                                    className={cx('card_iphone_screenlock')}
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('text_center')}>
                                            <div className={cx('fade_in_on_scroll')}>
                                                <h4 className={cx('white_text')}>Dark Mode - ON</h4>
                                            </div>
                                            <div className={cx('fade_in_on_scroll')}>
                                                <p className={cx('light_grey')}>
                                                    Easily integrate with all your favorite tools through and APIs
                                                    including automatic integrations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('card_item', 'grid_start_1_3')}>
                                    <div className={cx('card_item_content')}>
                                        <div className={cx('card_iphone')}>
                                            <img
                                                src={images.phoneImg}
                                                alt="iphone"
                                                className={cx('card_iphone_image')}
                                            />
                                            <div className={cx('card_iphone_overlay')}></div>
                                            <div className={cx('card_phone_image_container')}>
                                                <img
                                                    src={images.login1Img}
                                                    alt="calendar"
                                                    className={cx('card_iphone_screenlock')}
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('text_center')}>
                                            <div className={cx('fade_in_on_scroll')}>
                                                <h4 className={cx('white_text')}>3x Experience</h4>
                                            </div>
                                            <div className={cx('fade_in_on_scroll')}>
                                                <p className={cx('light_grey')}>
                                                    Easily integrate with all your favorite tools through and APIs
                                                    including automatic integrations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')} style={{ backgroundColor: 'black' }}>
                <div className={cx('container')}>
                    <div className={cx('w_layout_grid', 'footer_grid')}>
                        <div className={cx('grid_start_1_4', 'float_left')}>
                            <div>
                                <a className={cx('footer_brand')} href="/">
                                    <img src={images.logo} alt="Timos" />
                                </a>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <h4 className={cx('footer_title')}>Về chúng tôi</h4>
                                <p className={cx('footer_text')}>
                                    We want to help bring talanted students and unique startups together.
                                </p>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <h4 className={cx('footer_title')}>Liên hệ</h4>
                                <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                                    <li>
                                        <MailOutlined className={cx('footer_icon')} />
                                        <a className={cx('footer_link')} href="mailto:test@test.com">
                                            youremail.com
                                        </a>
                                    </li>
                                    <li>
                                        <PhoneFilled className={cx('footer_icon')} />
                                        <a className={cx('footer_link')} href="tel:+919999999999">
                                            +91 9999 999 999
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('grid_start_1_4', 'float_left')}>
                            <div>
                                <h4 className={cx('footer_title')}>Khách hàng</h4>
                            </div>
                            <div>
                                <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                                    <li>
                                        <a className={cx('footer_link')} href="#">
                                            Thông tin dịch vụ mới nhất
                                        </a>
                                    </li>
                                    <li>
                                        <a className={cx('footer_link')} href="#">
                                            Hướng dẫn đặt vé trực tuyến
                                        </a>
                                    </li>
                                    <li>
                                        <a className={cx('footer_link')} href="#">
                                            Chính sách Khách hàng
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('grid_start_1_4', 'float_left')}>
                            <div>
                                <h4 className={cx('footer_title')}>Tài xế</h4>
                            </div>
                            <div>
                                <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                                    <li>
                                        <a className={cx('footer_link')} href="#">
                                            Hướng dẫn đăng ký tài khoản trực tuyến
                                        </a>
                                    </li>
                                    <li>
                                        <a className={cx('footer_link')} href="#">
                                            Chương trình đặc biệt
                                        </a>
                                    </li>
                                    <li>
                                        <a className={cx('footer_link')} href="#">
                                            Quy định An toàn – Chất Lượng – Gian Lận
                                        </a>
                                    </li>
                                    <li>
                                        <a className={cx('footer_link')} href="#">
                                            Bộ quy tắc ứng xử cho quý tài xế Timos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('outline_footer')}></div>
                    <div className={cx('w_layout_grid', 'footer_grid')} style={{ margin: 'unset' }}>
                        <div className={cx('grid_start_1_5', 'float_left')}>
                            <div className={cx('footer_block')}>
                                <FacebookFilled className={cx('footer_icon')} />
                                <GooglePlusCircleFilled className={cx('footer_icon')} />
                                <TwitterCircleFilled className={cx('footer_icon')} />
                                <InstagramFilled className={cx('footer_icon')} />
                            </div>
                        </div>
                        <div className={cx('grid_start_1_2')}>
                            <div className={cx('footer_hidden')}>
                                <FacebookFilled className={cx('footer_icon')} />
                                <GooglePlusCircleFilled className={cx('footer_icon')} />
                                <TwitterCircleFilled className={cx('footer_icon')} />
                                <InstagramFilled className={cx('footer_icon')} />
                            </div>
                        </div>
                        <div className={cx('grid_start_1_5')} style={{ textAlign: 'right' }}>
                            <p className={cx('footer_text')}>{currentYear}&#169; Company Ltd. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
