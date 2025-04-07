import { Suspense } from "react";
import Image from "next/image";
import { LinearProgress } from "@mui/material";

import "./ott.css";
import ottLogo from "@/assets/img/ott/ott_logo.png";

export default async function OTT() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <div id="ott-main-container">
                <div id="ott-main-header">
                    <Image src={ottLogo} width={100} alt="OTT Logo" />
                    <ul id="ott-main-header-menu" className="et-menu nav">
                        <li
                            id="menu-item-2795"
                            className="first-level et_pb_menu_page_id-2795 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2795"
                        >
                            <a>About Us</a>
                            <ul className="sub-menu">
                                <li
                                    id="menu-item-4795"
                                    className="second-level et_pb_menu_page_id-1631 menu-item menu-item-type-post_type menu-item-object-page menu-item-4795"
                                >
                                    <a href="https://ott.ca/company-overview/">
                                        Company Overview
                                    </a>
                                </li>
                                <li
                                    id="menu-item-4792"
                                    className="second-level et_pb_menu_page_id-2600 menu-item menu-item-type-post_type menu-item-object-page menu-item-4792"
                                >
                                    <a href="https://ott.ca/ott-history/">
                                        History
                                    </a>
                                </li>
                                <li
                                    id="menu-item-4793"
                                    className="second-level et_pb_menu_page_id-2001 menu-item menu-item-type-post_type menu-item-object-page menu-item-4793"
                                >
                                    <a href="https://ott.ca/our-culture/">
                                        Our Culture
                                    </a>
                                </li>
                                <li
                                    id="menu-item-4794"
                                    className="second-level et_pb_menu_page_id-3947 menu-item menu-item-type-post_type menu-item-object-page menu-item-4794"
                                >
                                    <a href="https://ott.ca/accreditation/">
                                        Accreditation
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li
                            id="menu-item-1625"
                            className="first-level et_pb_menu_page_id-1625 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1625"
                        >
                            <a>Businesses</a>
                            <ul className="sub-menu">
                                <li
                                    id="menu-item-1669"
                                    className="second-level et_pb_menu_page_id-1669 menu-item menu-item-type-custom menu-item-object-custom menu-item-1669"
                                >
                                    <a
                                        target="_blank"
                                        href="https://www.ottfinancial.com/"
                                    >
                                        OTT Financial
                                    </a>
                                </li>
                                <li
                                    id="menu-item-1672"
                                    className="second-level et_pb_menu_page_id-1672 menu-item menu-item-type-custom menu-item-object-custom menu-item-1672"
                                >
                                    <a
                                        target="_blank"
                                        href="https://ottpay.com/"
                                    >
                                        OTT Pay
                                    </a>
                                </li>
                                <li
                                    id="menu-item-6264"
                                    className="et_pb_menu_page_id-6264 menu-item menu-item-type-custom menu-item-object-custom menu-item-6264"
                                >
                                    <a href="https://www.ottpocket.com">
                                        OTT Pocket
                                    </a>
                                </li>
                                <li
                                    id="menu-item-6324"
                                    className="et_pb_menu_page_id-6324 menu-item menu-item-type-custom menu-item-object-custom menu-item-6324"
                                >
                                    <a href="https://ottremit.com">OTT Remit</a>
                                </li>
                            </ul>
                        </li>
                        <li
                            id="menu-item-4789"
                            className="et_pb_menu_page_id-2029 menu-item menu-item-type-post_type menu-item-object-page menu-item-4789"
                        >
                            <a href="https://ott.ca/ott-news/">News</a>
                        </li>
                        <li
                            id="menu-item-4787"
                            className="et_pb_menu_page_id-2047 menu-item menu-item-type-post_type menu-item-object-page menu-item-4787"
                        >
                            <a href="https://ott.ca/contact/">Contact Us</a>
                        </li>
                        <li
                            id="menu-item-6946"
                            className="et_pb_menu_page_id-6709 menu-item menu-item-type-post_type menu-item-object-page menu-item-6946"
                        >
                            <a href="https://ott.ca/careers/">Careers</a>
                        </li>
                        <li
                            id="menu-item-3878"
                            className="top-menu_get_started first-level et_pb_menu_page_id-3878 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3878"
                        >
                            <a className="red-button ott-button">Sign in</a>
                            <ul className="sub-menu">
                                <li
                                    id="menu-item-3881"
                                    className="second-level et_pb_menu_page_id-3881 menu-item menu-item-type-custom menu-item-object-custom menu-item-3881"
                                >
                                    <a
                                        target="_blank"
                                        href="https://my.ott.ca/reg.aspx"
                                    >
                                        OTT Financial
                                    </a>
                                </li>
                                <li
                                    id="menu-item-3882"
                                    className="second-level et_pb_menu_page_id-3882 menu-item menu-item-type-custom menu-item-object-custom menu-item-3882"
                                >
                                    <a
                                        target="_blank"
                                        href="https://webreq.ottpay.com/"
                                    >
                                        OTT Pay
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li
                            id="menu-item-6175"
                            className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6175"
                        >
                            <a className="gray-button ott-button">EN</a>
                            <ul className="sub-menu">
                                <li
                                    id="menu-item-6175-zh"
                                    className="lang-item lang-item-5 lang-item-zh lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-6175-zh"
                                >
                                    <a
                                        href="https://ott.ca/zh/%e4%b8%bb%e9%a1%b5/"
                                        lang="zh-CN"
                                    >
                                        中
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </Suspense>
    );
}
