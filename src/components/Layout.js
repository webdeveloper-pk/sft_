import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import {
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  TrophyOutlined,
  HomeOutlined,
  MergeCellsOutlined,
  AccountBookOutlined,
  AlignRightOutlined,
  DownloadOutlined,
  BookOutlined,
} from "@ant-design/icons";
// import { usePathname } from "../customeHook/usePathName";
import logo from "../assets/images/navbar-black-logo.png";
import userIcon from "../assets/images/navbar-user-icon.png";
import dropdownIcon from "../assets/images/navbar-dropdown-icon.png";
import Footer from "./common/Footer";

const items = [
  {
    label: <Link to="/information">Personal Information</Link>,
    key: "personalinformation",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: <Link to="/affiliateportal">Affiliate portal</Link>,
    key: "affiliateportal",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: <Link to="/orders">Account orders</Link>,
    key: "orders",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
];

const { Header, Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // const path = usePathname();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // const onTitle = () => {
  //   switch (path) {
  //     case "/":
  //       return "Global Statistics";
  //     case "/countryData":
  //       return "Countries Statistics ";
  //     default:
  //       return "Statistics";
  //   }
  // };

  return (
    <>
      <Layout className="layoutStyling">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo bg-black"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={
                <div className="mt-0">
                  <HomeOutlined />
                </div>
              }
            >
              <Link to="/dashboard">
                <div className="ml-1">Dashboard</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <div className="mt-0">
                  <UserOutlined />
                </div>
              }
            >
              <Link to="/information">
                <div className=" ml-1">Profile</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <div className="mt-0">
                  <TrophyOutlined />
                </div>
              }
            >
              <Link to="/leaderboard">
                <div className=" ml-1">Leaderboard</div>
              </Link>
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={
                <div className="mt-0">
                  <MergeCellsOutlined />
                </div>
              }
            >
              <Link to="/accountmerge">
                <div className=" ml-1">Account Merge</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={
                <div className="mt-0">
                  <AccountBookOutlined />
                </div>
              }
            >
              <Link to="/affiliate">
                <div className=" ml-1">Account affiliate</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                <div className="mt-0">
                  <DashboardOutlined />
                </div>
              }
            >
              <Link to="/certificates">
                <div className=" ml-1">Certificates</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={
                <div className="mt-0">
                  <DashboardOutlined />
                </div>
              }
            >
              <Link to="/withdrawals">
                <div className=" ml-1">Withdrawals</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={
                <div className="mt-0">
                  <DashboardOutlined />
                </div>
              }
            >
              <Link to="/simulator">
                <div className=" ml-1">Simulator</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="9"
              icon={
                <div className="mt-0">
                  <DashboardOutlined />
                </div>
              }
            >
              <Link to="/affiliateportal">
                <div className=" ml-1">Affiliate Portal</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="10"
              icon={
                <div className="mt-0">
                  <BookOutlined />
                </div>
              }
            >
              <Link to="/orders">
                <div className=" ml-1">Orders</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="11"
              icon={
                <div className="mt-0">
                  <DownloadOutlined />
                </div>
              }
            >
              <Link to="/downloads">
                <div className=" ml-1">Downloads</div>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="headerCustom">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : AlignRightOutlined,
              {
                className: "trigger mt-2",
                onClick: toggle,
              }
            )}
            <div className="header-text">
              <Link to="/">
                <img src={logo} alt="logo" width="100px" height="auto" />
              </Link>
            </div>
            <div className="flex flex-row items-center w-[100%] justify-end">
              <ul className="flex items-center justify-center gap-x-6 mt-3">
                <li className="hover:cursor-pointer hover:text-white">
                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="text-sm text-white bg-light-green border border-light-green hover:bg-transparent hover:text-light-green py-1.5 px-6 rounded-full uppercase"
                  >
                    First free contest
                  </button>
                </li>
                <li className="hover:cursor-pointer hover:text-white">
                  {/* <a
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                    className="flex flex-row gap-x-3 items-center"
                  >
                    <span>
                      <img src={userIcon} alt="eng" width={30} height={32} />
                    </span>
                    <span style={{ color: "#f2f2f2" }}>
                      <img
                        src={dropdownIcon}
                        alt="dropdown"
                        width={8}
                        height={8}
                      />
                    </span>
                  </a> */}
                  <Dropdown menu={{ items }} overlayClassName="custom-dropdown">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="text-black hover:text-black flex items-center pr-[20px]"
                    >
                      <img
                        src={userIcon}
                        alt="gbp"
                        className="w-[30px] h-[32px]"
                      />
                      <span className="mt-[1.5px] text-[12px] pl-[10px]">
                        <img
                          src={dropdownIcon}
                          alt="dropdown"
                          width={8}
                          height={8}
                        />
                      </span>
                    </a>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 12,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </>
  );
};

export default LayoutComponent;

{
  /* <Navbar />
<div className="bg-medium-gray px-6 md:px-8 lg:px-16">{children}</div>
<Footer /> */
}
