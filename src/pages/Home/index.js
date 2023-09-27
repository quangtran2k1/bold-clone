/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import user from '~/assets/user';
import {
    AppleFilled,
    AndroidFilled,
    TwitterOutlined,
    InstagramOutlined,
    LinkedinFilled,
    FacebookFilled,
} from '@ant-design/icons';
import Slider from '~/components/Layouts/Slider';

const cx = classNames.bind(styles);

export default function Home() {
    const [isMore, setIsMore] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [rotation, setRotation] = useState(0);
    const [transformY, setTransformY] = useState(0);
    const [transformLeft, setTransformLeft] = useState(0);
    const [transformRight, setTransformRight] = useState(0);
    const [change, setChange] = useState(100);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)');
    function handleClick() {
        setIsMore(!isMore);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 1);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let hoverInterval;

        if (hoveredIndex !== null) {
            hoverInterval = setInterval(() => {
                setChange((prevChange) => {
                    if (prevChange > 0) {
                        return prevChange - 2.5;
                    }
                    return prevChange;
                });
            }, 1);
        } else {
            clearInterval(hoverInterval);
        }

        return () => clearInterval(hoverInterval);
    }, [hoveredIndex]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setChange(100);
    };

    const handleScroll = () => {
        const element = document.getElementById('NightMode');
        const element1 = document.getElementById('PhoneProduct');

        if (element) {
            const rect = element.getBoundingClientRect();
            const elementY = rect.top;
            const elementYBottom = rect.bottom;
            const windowHeight = window.innerHeight;

            const distanceFromTop = Math.max(0, elementY);
            const distanceFromBottom = Math.max(100, elementYBottom);
            const maxDistance = windowHeight / 2;

            let newRed, newGreen, newBlue;

            if (distanceFromBottom > 300) {
                newRed = Math.min(255, 20 + (235 * distanceFromTop) / maxDistance);
                newGreen = Math.min(255, 20 + (235 * distanceFromTop) / maxDistance);
                newBlue = Math.min(255, 21 + (234 * distanceFromTop) / maxDistance);
                setIsVisible(true);
            }
            if (distanceFromBottom <= 300) {
                newRed = Math.max(244, 20 + (224 * distanceFromBottom) / maxDistance);
                newGreen = Math.max(248, 20 + (228 * distanceFromBottom) / maxDistance);
                newBlue = Math.max(251, 21 + (230 * distanceFromBottom) / maxDistance);
                setIsVisible(false);
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
            const distanceFromBottom = Math.max(100, elementYBottom);
            const maxDistance = windowHeight / 2;
            console.log(distanceFromTop);

            const newTransform = -((maxDistance - distanceFromTop) / maxDistance) * 100;
            const clampedTransform = Math.max(-100, Math.min(0, newTransform));
            setTransformY(clampedTransform);

            if (distanceFromBottom > 300) {
                const newTransformRight = ((maxDistance - distanceFromTop) / maxDistance) * 150;
                const clampedTransformRight = Math.max(0, Math.min(150, newTransformRight));
                setTransformRight(clampedTransformRight);

                const newTransformLeft = -((maxDistance - distanceFromTop) / maxDistance) * 150;
                const clampedTransformLeft = Math.max(-150, Math.min(0, newTransformLeft));
                setTransformLeft(clampedTransformLeft);
            } else {
                const newTransformRight = 150 - ((maxDistance - distanceFromTop) / maxDistance) * 150;
                const clampedTransformRight = Math.max(0, Math.min(150, newTransformRight));
                setTransformRight(clampedTransformRight);

                const newTransformLeft = 150 - ((maxDistance - distanceFromTop) / maxDistance) * 150;
                const clampedTransformLeft = Math.max(-150, Math.min(0, newTransformLeft));
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
        backgroundColor: backgroundColor, // Sử dụng giá trị màu động từ state
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

    const slides = [
        <img
            src="https://assets.website-files.com/604b35876a71cbbd84768e36/604d4b5ee9f5d3561967d646_ChatList-White-p-500.jpeg"
            alt="slide"
            className={cx('phone_slider_image')}
        />,
        <img
            src="https://assets.website-files.com/604b35876a71cbbd84768e36/604d4b5d2582aa2cb7e78d36_Calendar1-p-500.png"
            alt="slide"
            className={cx('phone_slider_image')}
        />,
        <img
            src="https://assets.website-files.com/604b35876a71cbbd84768e36/604d4b5db64f644b318b64f9_Calendar2-p-500.png"
            alt="slide"
            className={cx('phone_slider_image')}
        />,
    ];

    const items = ['Change Log', 'Style', 'Licensing', 'Privacy'];

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
                            <h1 className={cx('main_heading')}>Manage it all, in this all new system.</h1>
                            <div className={cx('w_layout_grid', 'grid_10_col')}>
                                <p className={cx('inner_desc')}>
                                    Bold keeps your team’s work on-brand, on message, and on time. Innovative features
                                    make creating and sharing your work feel effortless.
                                </p>
                            </div>
                            <div className={cx('download')}>
                                <div className={cx('download_ios')}>
                                    <a
                                        href="http://apple.com"
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
                                        href="https://play.google.com/store/apps"
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
                                <h1 className={cx('text', '_1')}>Meet</h1>
                            </div>
                            <div className={cx('text_holder _2')} style={transformXRightStyle}>
                                <h1 className={cx('text', '_2')}>Bold</h1>
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
                                                src={images.charListImg}
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
                                    <h5>More than 1,200,000 creative people use it</h5>
                                </div>
                            </div>
                        </div>
                        <div className={cx('w_layout_grid', 'grid_5_col')}>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon1} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon2} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon3} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon4} alt="asgardian" className={cx('customer_image')} />
                            </div>
                            <div className={cx('content', 'centered')}>
                                <img src={images.icon5} alt="asgardian" className={cx('customer_image')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="FeatureList" style={{ backgroundColor: '#f4f8fb' }}>
                <div className={cx('container')}>
                    <div className={cx('text_center')}>
                        <div className={cx('fade_in_on_scroll')}>
                            <h2 className={cx('text_gradient_2')}>Experience your product as you create it.</h2>
                        </div>
                        <div className={cx('text_container')}>
                            <div className={cx('fade_in_on_scroll')}>
                                <p>
                                    Bold keeps your team’s work on-brand, on message, and on time. Innovative features
                                    make creating and sharing your work feel effortless.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('w_layout_grid', 'feature_grid')}>
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
                                        <img
                                            src={images.quickActionIcon}
                                            className={cx('card_feature_icon')}
                                            alt="icon"
                                        />
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <p>Speed up your work and reduce repetitive tasks.</p>
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <h6>Quick Actions</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card_item', 'light', 'grid_start_1_3')}>
                            <div className={cx('card_item_content')}>
                                <div className={cx('card_feature_center')}>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <img
                                            src={images.shoppingCartIcon}
                                            className={cx('card_feature_icon')}
                                            alt="icon"
                                        />
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <h6>Easy shop</h6>
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <p>Speed up your work and reduce repetitive tasks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card_item', 'light', 'grid_start_1_3')}>
                            <div className={cx('card_item_content')}>
                                <div className={cx('card_feature_center')}>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <img src={images.lockIcon} className={cx('card_feature_icon')} alt="icon" />
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <h6>Safe and Secure</h6>
                                    </div>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <p>Speed up your work and reduce repetitive tasks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="About" style={nightModeStyle}>
                <div className={cx('container')}>
                    <div className={cx('w_layout_grid', 'grid_6_col')}>
                        <div className={cx('trusted_content', 'grid_start_1_3')}>
                            <div className={cx('content_sticky')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h2>We are trusted by thousands of people</h2>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p className={cx('text_x1')}>
                                        Lean on Stories+ to maximize the value of your most compelling social content
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('trusted_content', 'trusted_list', 'grid_start_1_3')}>
                            <div className={cx('trusted_overlay_container')}>
                                <div className={cx('trusted_white_overlay')}></div>
                                <div className={cx('trusted_white_overlay', 'bottom')}></div>
                            </div>
                            <div className={cx('trusted_item')}>
                                <div className={cx('trusted_item_header')}>
                                    <h2 className={cx('trusted_no')}>5.0</h2>
                                    <h5>review average in our app</h5>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p className={cx('text_x1')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna,
                                        sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a
                                        varius.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('trusted_item')}>
                                <div className={cx('trusted_item_header')}>
                                    <h2 className={cx('trusted_no')}>35+</h2>
                                    <h5>minutes per session</h5>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p className={cx('text_x1')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna,
                                        sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a
                                        varius.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('trusted_item')}>
                                <div className={cx('trusted_item_header')}>
                                    <h2 className={cx('trusted_no')}>
                                        $0<span className={cx('text_small')}>.00</span>
                                    </h2>
                                    <h5>everything is FREE</h5>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p className={cx('text_x1')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna,
                                        sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a
                                        varius.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('trusted_item', 'last')}>
                                <div className={cx('trusted_item_header')}>
                                    <h2 className={cx('trusted_no')}>9k</h2>
                                    <h5>New businesses /m</h5>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p className={cx('text_x1')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna urna,
                                        sodales vel quam ut, tincidunt ultrices arcu. Suspendisse vehicula id est a
                                        varius.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="NightMode" style={nightModeStyle}>
                <div className={cx('container')}>
                    <div className={cx('w_layout_grid', 'grid_10_column')}>
                        <div className={cx('content', 'grid_start_2_10')}>
                            <div className={cx('text_center')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h2 className={cx('text_gradient_2')}>Feels great in low-light environments.</h2>
                                </div>
                                <div className={cx('text_container')}>
                                    <div className={cx('fade_in_on_scroll')}>
                                        <p className={cx('white_text')}>
                                            It works great with Dark Mode with endless experience in low-light
                                            environments.
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
                                                    src={images.boldApp1}
                                                    alt="bold app"
                                                    className={cx('card_iphone_screenlock')}
                                                />
                                                <img
                                                    src={images.boldApp2}
                                                    alt="bold app2"
                                                    className={cx('width_pct')}
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
                                                    src={images.calendar1}
                                                    alt="calendar"
                                                    className={cx('card_iphone_screenlock')}
                                                />
                                                <img
                                                    src={images.calendar2}
                                                    alt="calendar"
                                                    className={cx('width_pct')}
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
                            <div className={cx('dont_take_our_word_title')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h3 className={cx('white_text')}>Don't take our word for it.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('testimonials_container')}>
                        <div className={cx('w_layout_grid', 'grid_testimonial')}>
                            {user.map((m) => (
                                <div className={cx('card_item', 'grid_start_1_2')} key={m.id}>
                                    <div className={cx('card_item_content')}>
                                        <div className={cx('testimonial_header')}>
                                            <img src={m.avatar} alt="avatar" className={cx('testimonial_picture')} />
                                            <div className={cx('testimonial_text')}>
                                                <div className={cx('white_text')}>{m.name}</div>
                                                <div className={cx('light_grey')}>{m.position}</div>
                                            </div>
                                        </div>
                                        <div className={cx('fade_in_on_scroll')}>
                                            <p className={cx('white_text')}>
                                                <span>{m.desc}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {isMore ? (
                            <div className={cx('testimonial_more')}>
                                <div className={cx('w_layout_grid', 'grid_testimonial')}>
                                    {user.map((m) => (
                                        <div className={cx('card_item', 'grid_start_1_2')} key={m.id}>
                                            <div className={cx('card_item_content')}>
                                                <div className={cx('testimonial_header')}>
                                                    <img
                                                        src={m.avatar}
                                                        alt="avatar"
                                                        className={cx('testimonial_picture')}
                                                    />
                                                    <div className={cx('testimonial_text')}>
                                                        <div className={cx('white_text')}>{m.name}</div>
                                                        <div className={cx('light_grey')}>{m.position}</div>
                                                    </div>
                                                </div>
                                                <div className={cx('fade_in_on_scroll')}>
                                                    <p className={cx('white_text')}>
                                                        <span>{m.desc}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : isVisible ? (
                            <div className={cx('testimonial_see_more')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <a
                                        className={cx('button', 'w_button')}
                                        onClick={handleClick}
                                        style={{ minWidth: '140px' }}
                                    >
                                        Show more
                                    </a>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div id="Subscribe" style={nightModeStyle}>
                <div className={cx('container')}>
                    <div className={cx('w_layout_grid', 'grid_10_column')}>
                        <div className={cx('grid_start_2_10', 'card_item', 'light')}>
                            <div className={cx('card_item_content')}>
                                <div className={cx('fade_in_on_scroll')}>
                                    <h2 className={cx('text_gradient_2')}>
                                        Stay tuned &<br />
                                        Build your business.
                                    </h2>
                                </div>
                                <div className={cx('fade_in_on_scroll')}>
                                    <p className={cx('text_xs')}>We will email you only about this product.</p>
                                </div>
                                <div id="Subscribe" className={cx('subscribe_form', 'w_form')}>
                                    <form className={cx('subscribe_form_flex')}>
                                        <div className={cx('subscribe_form_input_wrapper')}>
                                            <input
                                                type="email"
                                                className={cx('form_input', 'subscribe_input', 'w_input')}
                                                maxLength={'256'}
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <input
                                            type="submit"
                                            value={''}
                                            className={cx('button', 'w_button', 'btn_subscribe')}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Download" style={{ backgroundColor: 'rgb(244, 248, 251)' }}>
                <div className={cx('container', 'phone_container')}>
                    <div className={cx('w_layout_grid', 'grid_6_col')}>
                        <div className={cx('content', 'phone_content_text', 'grid_start_1_3')}>
                            <div className={cx('fade_in_on_scroll')}>
                                <div className={cx('app_icon_text_holder')}>
                                    <div className={cx('app_icon_holder_xs')}>
                                        <img src={images.appIcon} alt="icon" className="app_icon" />
                                    </div>
                                    <div>Download now and start your experience</div>
                                </div>
                            </div>
                            <div className={cx('fade_in_on_scroll')}>
                                <h2>Manage it all, in this all new system.</h2>
                            </div>
                            <div className={cx('download')}>
                                <div className={cx('download_ios')}>
                                    <a
                                        href="http://apple.com"
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
                                        href="https://play.google.com/store/apps"
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
                        <div className={cx('content', 'phone_content_text', 'grid_start_1_3')}>
                            <div className={cx('phone_holder_container')}>
                                <div className={cx('phone_slider_container')}>
                                    <div className={cx('phone_slider', 'w_slider')}>
                                        <div className={cx('phone_slider_mask', 'w_slider_mask')}>
                                            <Slider slides={slides} />
                                        </div>
                                    </div>
                                </div>
                                <img src={images.handPhone} alt="hand phone" className={cx('phone_holder_image')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('container')}>
                    <div className={cx('footer_social_media_container')}>
                        <div className={cx('social_media_content')}>
                            <div className={cx('fade_in_on_scroll')}>
                                <div>Follow us</div>
                            </div>
                            <a
                                href="http://instagram.com/"
                                target="_blank"
                                className={cx('social_media_link', 'w_inline_block')}
                            >
                                <InstagramOutlined />
                            </a>
                            <a
                                href="http://twitter.com/"
                                target="_blank"
                                className={cx('social_media_link', 'w_inline_block')}
                            >
                                <TwitterOutlined />
                            </a>
                            <a
                                href="http://linkedin.com/"
                                target="_blank"
                                className={cx('social_media_link', 'w_inline_block')}
                            >
                                <LinkedinFilled />
                            </a>
                            <a
                                href="http://facebook.com/"
                                target="_blank"
                                className={cx('social_media_link', 'w_inline_block')}
                            >
                                <FacebookFilled />
                            </a>
                        </div>
                        <div className={cx('made_container')}>
                            <div className={cx('clone_by_quang')}>
                                <div className={cx('made_by_holder')}>
                                    <div className={cx('made_by')}>Clone by</div>
                                    <a
                                        href="https://www.facebook.com/quang.on.social.networks"
                                        className={cx('external_link', 'w_inline_block')}
                                    >
                                        <div>Quang</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer_flex_container')}>
                        <div className={cx('footer_brand_container')}>
                            <a href="/" className={cx('footer_logo_link', 'w_inline_block', 'w_current')}>
                                <img src={images.logoFooter} alt="logo" className={cx('footer_image')} />
                            </a>
                            <ul className={cx('footer_list', 'w_list_unstyled')}>
                                {items.map((item, index) => (
                                    <li
                                        className={cx('footer_list_item')}
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <a href="/" className={cx('link', 'w_inline_block')}>
                                            <div>{item}</div>
                                            <div
                                                className={cx('link_underline')}
                                                style={{
                                                    transform: `translate3d(0px, ${
                                                        hoveredIndex === index ? change : 100
                                                    }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                                                    transformStyle: 'preserve-3d',
                                                }}
                                            ></div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
