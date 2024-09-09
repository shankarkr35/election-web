import React, { useState, useEffect } from "react"; // Removed unnecessary imports
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from 'selectors';

import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from "reactstrap";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

//Images
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar6 from "assets/images/users/avatar-6.jpg";
import avatar7 from "assets/images/users/avatar-7.jpg";
import smallImage3 from "assets/images/small/img-3.jpg";
import smallImage4 from "assets/images/small/img-4.jpg";
import smallImage5 from "assets/images/small/img-5.jpg";
import smallImage6 from "assets/images/small/img-6.jpg";
import smallImage7 from "assets/images/small/img-7.jpg";
import smallImage9 from "assets/images/small/img-9.jpg";

const OverviewRecentActivities = () => {

    const [activeTab, setActiveTab] = useState("1");
    const [activityTab, setActivityTab] = useState("1");

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const toggleActivityTab = (tab) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };
    return (

        <Row>
            <Col lg={12}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0  me-2">
                            Recent Activity
                        </h4>
                        <div className="flex-shrink-0 ms-auto">
                            <Nav
                                className="justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                role="tablist"
                            >
                                <NavItem>
                                    <NavLink
                                        to="#today-tab"
                                        className={classnames({
                                            active: activityTab === "1",
                                        })}
                                        onClick={() => {
                                            toggleActivityTab("1");
                                        }}
                                    >
                                        Today
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="#weekly-tab"
                                        className={classnames({
                                            active: activityTab === "2",
                                        })}
                                        onClick={() => {
                                            toggleActivityTab("2");
                                        }}
                                    >
                                        Weekly
                                    </NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink
                                        to="#monthly-tab"
                                        className={classnames({
                                            active: activityTab === "3",
                                        })}
                                        onClick={() => {
                                            toggleActivityTab("3");
                                        }}
                                    >
                                        Monthly
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            activeTab={activityTab}
                            className="text-muted"
                        >
                            <TabPane tabId="1">
                                <div className="profile-timeline">
                                    <div></div>
                                    <div
                                        className="accordion accordion-flush"
                                        id="todayExample"
                                    >
                                        <div className="accordion-item border-0">
                                            <div className="accordion-header">
                                                <button
                                                    className="accordion-button p-2 shadow-none"
                                                    type="button"
                                                    id="headingOne"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar2}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Jacqueline Steve
                                                            </h6>
                                                            <small className="text-muted">
                                                                We has changed 2 attributes
                                                                on 05:16PM
                                                            </small>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <UncontrolledCollapse
                                                className="accordion-collapse"
                                                toggler="#headingOne"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    In an awareness campaign, it is
                                                    vital for people to begin put 2
                                                    and 2 together and begin to
                                                    recognize your cause. Too much or
                                                    too little spacing, as in the
                                                    example below, can make things
                                                    unpleasant for the reader. The
                                                    goal is to make your text as
                                                    comfortable to read as possible. A
                                                    wonderful serenity has taken
                                                    possession of my entire soul, like
                                                    these sweet mornings of spring
                                                    which I enjoy with my whole heart.
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="headingTwo"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapseTwo"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xs">
                                                            <div className="avatar-title bg-light text-success rounded-circle">
                                                                M
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Megan Elmore
                                                            </h6>
                                                            <small className="text-muted">
                                                                Adding a new event with
                                                                attachments - 04:45PM
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="collapseTwo"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    <Row className="g-2">
                                                        <div className="col-auto">
                                                            <div className="d-flex border border-dashed p-2 rounded position-relative">
                                                                <div className="flex-shrink-0">
                                                                    <i className="ri-image-2-line fs-17 text-danger"></i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-2">
                                                                    <h6>
                                                                        <Link
                                                                            to="#"
                                                                            className="stretched-link"
                                                                        >
                                                                            Business Template -
                                                                            UI/UX design
                                                                        </Link>
                                                                    </h6>
                                                                    <small>685 KB</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="d-flex border border-dashed p-2 rounded position-relative">
                                                                <div className="flex-shrink-0">
                                                                    <i className="ri-file-zip-line fs-17 text-info"></i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-2">
                                                                    <h6>
                                                                        <Link
                                                                            to="#"
                                                                            className="stretched-link"
                                                                        >
                                                                            Bank Management System
                                                                            - PSD
                                                                        </Link>
                                                                    </h6>
                                                                    <small>8.78 MB</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="headingThree"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar5}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                New ticket received
                                                            </h6>
                                                            <small className="text-muted mb-2">
                                                                User
                                                                <span className="text-secondary">
                                                                    Erica245
                                                                </span>
                                                                submitted a ticket - 02:33PM
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="headingFour"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapseFour"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xs">
                                                            <div className="avatar-title bg-light text-muted rounded-circle">
                                                                <i className="ri-user-3-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Nancy Martino
                                                            </h6>
                                                            <small className="text-muted">
                                                                Commented on 12:57PM
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="collapseFour"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    " A wonderful serenity has taken
                                                    possession of my entire soul, like
                                                    these sweet mornings of spring
                                                    which I enjoy with my whole heart.
                                                    Each design is a new, unique piece
                                                    of art birthed into this world,
                                                    and while you have the opportunity
                                                    to be creative and make your own
                                                    style choices. "
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="headingFive"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapseFive"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar7}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Lewis Arnold
                                                            </h6>
                                                            <small className="text-muted">
                                                                Create new project buildng
                                                                product - 10:05AM
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="collapseFive"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    <p className="text-muted mb-2">
                                                        Every team project can have a
                                                        velzon. Use the velzon to share
                                                        information with your team to
                                                        understand and contribute to
                                                        your project.
                                                    </p>
                                                    <div className="avatar-group">
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title="Christi"
                                                        >
                                                            <img
                                                                src={avatar4}
                                                                alt=""
                                                                className="rounded-circle avatar-xs"
                                                            />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title="Frole Hook"
                                                        >
                                                            <img
                                                                src={avatar3}
                                                                alt=""
                                                                className="rounded-circle avatar-xs"
                                                            />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title=" Ruby"
                                                        >
                                                            <div className="avatar-xs">
                                                                <div className="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title="more"
                                                        >
                                                            <div className="avatar-xs">
                                                                <div className="avatar-title rounded-circle">
                                                                    2+
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="profile-timeline">
                                    <div
                                        className="accordion accordion-flush"
                                        id="weeklyExample"
                                    >
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading6"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapse6"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar3}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Joseph Parker
                                                            </h6>
                                                            <small className="text-muted">
                                                                New people joined with our
                                                                company - Yesterday
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="#collapse6"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    It makes a statement, it’s
                                                    impressive graphic design.
                                                    Increase or decrease the letter
                                                    spacing depending on the situation
                                                    and try, try again until it looks
                                                    right, and each letter has the
                                                    perfect spot of its own.
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading7"
                                            >
                                                <Link
                                                    className="accordion-button p-2 shadow-none"
                                                    data-bs-toggle="collapse"
                                                    to="#collapse7"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded-circle bg-light text-danger">
                                                                <i className="ri-shopping-bag-line"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Your order is placed{" "}
                                                                <span className="badge bg-soft-success text-success align-middle">
                                                                    Completed
                                                                </span>
                                                            </h6>
                                                            <small className="text-muted">
                                                                These customers can rest
                                                                assured their order has been
                                                                placed - 1 week Ago
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading8"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapse8"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xs">
                                                            <div className="avatar-title bg-light text-success rounded-circle">
                                                                <i className="ri-home-3-line"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Q8Tasweet admin dashboard
                                                                templates layout upload
                                                            </h6>
                                                            <small className="text-muted">
                                                                We talked about a project on
                                                                linkedin - 1 week Ago
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="#collapse8"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5 fst-italic">
                                                    Powerful, clean & modern
                                                    responsive bootstrap 5 admin
                                                    template. The maximum file size
                                                    for uploads in this demo :
                                                    <Row className="mt-2">
                                                        <Col xxl={6}>
                                                            <Row className="border border-dashed gx-2 p-2">
                                                                <Col xs={3}>
                                                                    <img
                                                                        src={smallImage3}
                                                                        alt=""
                                                                        className="img-fluid rounded"
                                                                    />
                                                                </Col>

                                                                <Col xs={3}>
                                                                    <img
                                                                        src={smallImage5}
                                                                        alt=""
                                                                        className="img-fluid rounded"
                                                                    />
                                                                </Col>

                                                                <Col xs={3}>
                                                                    <img
                                                                        src={smallImage7}
                                                                        alt=""
                                                                        className="img-fluid rounded"
                                                                    />
                                                                </Col>

                                                                <Col xs={3}>
                                                                    <img
                                                                        src={smallImage9}
                                                                        alt=""
                                                                        className="img-fluid rounded"
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading9"
                                            >
                                                <Link
                                                    className="accordion-button p-2 shadow-none"
                                                    data-bs-toggle="collapse"
                                                    to="#collapse9"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar6}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                New ticket created{" "}
                                                                <span className="badge bg-soft-info text-info align-middle">
                                                                    Inprogress
                                                                </span>
                                                            </h6>
                                                            <small className="text-muted mb-2">
                                                                User
                                                                <span className="text-secondary">
                                                                    Jack365
                                                                </span>
                                                                submitted a ticket - 2 week
                                                                Ago
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading10"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapse10"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar5}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Jennifer Carter
                                                            </h6>
                                                            <small className="text-muted">
                                                                Commented - 4 week Ago
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="#collapse10"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    <p className="text-muted fst-italic mb-2">
                                                        " This is an awesome admin
                                                        dashboard template. It is
                                                        extremely well structured and
                                                        uses state of the art components
                                                        (e.g. one of the only templates
                                                        using boostrap 5.1.3 so far). I
                                                        integrated it into a Rails 6
                                                        project. Needs manual
                                                        integration work of course but
                                                        the template structure made it
                                                        easy. "
                                                    </p>
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="3">
                                <div className="profile-timeline">
                                    <div
                                        className="accordion accordion-flush"
                                        id="monthlyExample"
                                    >
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading11"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapse11"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xs">
                                                            <div className="avatar-title bg-light text-success rounded-circle">
                                                                M
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Megan Elmore
                                                            </h6>
                                                            <small className="text-muted">
                                                                Adding a new event with
                                                                attachments - 1 month Ago.
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="#collapse11"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    <div className="row g-2">
                                                        <div className="col-auto">
                                                            <div className="d-flex border border-dashed p-2 rounded position-relative">
                                                                <div className="flex-shrink-0">
                                                                    <i className="ri-image-2-line fs-17 text-danger"></i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-2">
                                                                    <h6>
                                                                        <Link
                                                                            to="#"
                                                                            className="stretched-link"
                                                                        >
                                                                            Business Template -
                                                                            UI/UX design
                                                                        </Link>
                                                                    </h6>
                                                                    <small>685 KB</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="d-flex border border-dashed p-2 rounded position-relative">
                                                                <div className="flex-shrink-0">
                                                                    <i className="ri-file-zip-line fs-17 text-info"></i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-2">
                                                                    <h6>
                                                                        <Link
                                                                            to="#"
                                                                            className="stretched-link"
                                                                        >
                                                                            Bank Management System
                                                                            - PSD
                                                                        </Link>
                                                                    </h6>
                                                                    <small>8.78 MB</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="d-flex border border-dashed p-2 rounded position-relative">
                                                                <div className="flex-shrink-0">
                                                                    <i className="ri-file-zip-line fs-17 text-info"></i>
                                                                </div>
                                                                <div className="flex-grow-1 ms-2">
                                                                    <h6>
                                                                        <Link
                                                                            to="#"
                                                                            className="stretched-link"
                                                                        >
                                                                            Bank Management System
                                                                            - PSD
                                                                        </Link>
                                                                    </h6>
                                                                    <small>8.78 MB</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading12"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapse12"
                                                    aria-expanded="true"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar2}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Jacqueline Steve
                                                            </h6>
                                                            <small className="text-muted">
                                                                We has changed 2 attributes
                                                                on 3 month Ago
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="collapse12"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    In an awareness campaign, it is
                                                    vital for people to begin put 2
                                                    and 2 together and begin to
                                                    recognize your cause. Too much or
                                                    too little spacing, as in the
                                                    example below, can make things
                                                    unpleasant for the reader. The
                                                    goal is to make your text as
                                                    comfortable to read as possible. A
                                                    wonderful serenity has taken
                                                    possession of my entire soul, like
                                                    these sweet mornings of spring
                                                    which I enjoy with my whole heart.
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading13"
                                            >
                                                <Link
                                                    className="accordion-button p-2 shadow-none"
                                                    data-bs-toggle="collapse"
                                                    to="#collapse13"
                                                    aria-expanded="false"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar6}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                New ticket received
                                                            </h6>
                                                            <small className="text-muted mb-2">
                                                                User
                                                                <span className="text-secondary">
                                                                    Erica245
                                                                </span>
                                                                submitted a ticket - 5 month
                                                                Ago
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading14"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapse14"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xs">
                                                            <div className="avatar-title bg-light text-muted rounded-circle">
                                                                <i className="ri-user-3-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Nancy Martino
                                                            </h6>
                                                            <small className="text-muted">
                                                                Commented on 24 Nov, 2021.
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="#collapse14"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5 fst-italic">
                                                    " A wonderful serenity has taken
                                                    possession of my entire soul, like
                                                    these sweet mornings of spring
                                                    which I enjoy with my whole heart.
                                                    Each design is a new, unique piece
                                                    of art birthed into this world,
                                                    and while you have the opportunity
                                                    to be creative and make your own
                                                    style choices. "
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="accordion-item border-0">
                                            <div
                                                className="accordion-header"
                                                id="heading15"
                                            >
                                                <Link
                                                    to="#"
                                                    className="accordion-button p-2 shadow-none"
                                                    id="collapse15"
                                                >
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                src={avatar7}
                                                                alt=""
                                                                className="avatar-xs rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="fs-14 mb-1">
                                                                Lewis Arnold
                                                            </h6>
                                                            <small className="text-muted">
                                                                Create new project buildng
                                                                product - 8 month Ago
                                                            </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <UncontrolledCollapse
                                                toggler="#collapse15"
                                                defaultOpen
                                            >
                                                <div className="accordion-body ms-2 ps-5">
                                                    <p className="text-muted mb-2">
                                                        Every team project can have a
                                                        velzon. Use the velzon to share
                                                        information with your team to
                                                        understand and contribute to
                                                        your project.
                                                    </p>
                                                    <div className="avatar-group">
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title="Christi"
                                                        >
                                                            <img
                                                                src={avatar4}
                                                                alt=""
                                                                className="rounded-circle avatar-xs"
                                                            />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title="Frole Hook"
                                                        >
                                                            <img
                                                                src={avatar3}
                                                                alt=""
                                                                className="rounded-circle avatar-xs"
                                                            />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title=" Ruby"
                                                        >
                                                            <div className="avatar-xs">
                                                                <div className="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="avatar-group-item"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-trigger="hover"
                                                            data-bs-placement="top"
                                                            title=""
                                                            data-bs-original-title="more"
                                                        >
                                                            <div className="avatar-xs">
                                                                <div className="avatar-title rounded-circle">
                                                                    2+
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </UncontrolledCollapse>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
};
export default OverviewRecentActivities;
