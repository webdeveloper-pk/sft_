import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import {
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  TrophyOutlined,
  AppstoreOutlined,
  MergeCellsOutlined,
  AccountBookOutlined,
  AlignRightOutlined,
  DownloadOutlined,
  DeleteOutlined,
  IdcardOutlined,
  ProfileOutlined,
  MoneyCollectOutlined,
  PhoneOutlined,
  ArrowLeftOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
// import { usePathname } from "../customeHook/usePathName";
import logo from "../assets/images/navbar-black-logo.png";
import userIcon from "../assets/images/navbar-user-icon.png";
import dropdownIcon from "../assets/images/navbar-dropdown-icon.png";
import Footer from "./common/Footer";
import "../style.scss";

const items = [
  {
    label: <Link to="/home/information">Billing</Link>,
    key: "personalinformation",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: <Link to="/home/information">Change password</Link>,
    key: "affiliateportal",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: <p>Sign out</p>,
    key: "orders",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
];

const { Header, Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  // const path = usePathname();

  // const handleWindowSizeChange = () => {
  //   const isMobileSize = window.innerWidth <= 767; // Adjust the breakpoint as needed
  //   setCollapsed(isMobileSize);
  // };

  // useEffect(() => {
  //   handleWindowSizeChange(); // Set initial collapse state on component mount
  //   window.addEventListener("resize", handleWindowSizeChange); // Update collapse state on window resize

  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange); // Cleanup the event listener on component unmount
  //   };
  // }, []);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout className="layoutStyling">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className={collapsed ? "collapse-style" : "uncollapse-style"}
        >
          <div className="logo bg-black"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={
                <div className="mt-0">
                  <AppstoreOutlined />
                </div>
              }
            >
              <Link to="/home/dashboard">
                <div className="ml-1">Dashboard</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <div className="mt-0">
                  <DeleteOutlined />
                </div>
              }
            >
              <Link to="/home/orders">
                <div className=" ml-1">My orders</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <div className="mt-0">
                  <UserOutlined />
                </div>
              }
            >
              <Link to="/home/information">
                <div className=" ml-1">Profile</div>
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
              <Link to="/home/accountmerge">
                <div className=" ml-1">Account Merge</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={
                <div className="mt-0">
                  <DownloadOutlined />
                </div>
              }
            >
              <Link to="/home/downloads">
                <div className=" ml-1">Downloads</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                <div className="mt-0">
                  <MoneyCollectOutlined />
                </div>
              }
            >
              <Link to="/home/withdrawals">
                <div className=" ml-1">Payouts</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={
                <div className="mt-0">
                  <ProfileOutlined />
                </div>
              }
            >
              <Link to="/home/certificates">
                <div className=" ml-1">Certificates</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={
                <div className="mt-0">
                  <TrophyOutlined />
                </div>
              }
            >
              <Link to="/home/leaderboard">
                <div className=" ml-1">Leaderboard</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="9"
              icon={
                <div className="mt-0">
                  <AccountBookOutlined />
                </div>
              }
            >
              <Link to="/home/affiliate">
                <div className=" ml-1">Account affiliate</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="10"
              icon={
                <div className="mt-0">
                  <IdcardOutlined />
                </div>
              }
            >
              <Link to="/home/affiliateportal">
                <div className=" ml-1">Affiliate Portal</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="11"
              icon={
                <div className="mt-0">
                  <DashboardOutlined />
                </div>
              }
            >
              <Link to="/home/simulator">
                <div className=" ml-1">Simulator</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="12"
              icon={
                <div className="mt-0">
                  <PhoneOutlined />
                </div>
              }
            >
              <Link to="/contact">
                <div className=" ml-1">Contact us</div>
              </Link>
            </Menu.Item>
            <Menu.Item></Menu.Item>
            <Menu.Item
              key="13"
              icon={
                <div className="mt-0 text-white">
                  <ArrowLeftOutlined />
                </div>
              }
            >
              <Link to="/">
                <div className=" ml-1 text-white">Back to Home</div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="14"
              icon={
                <div className="mt-0 text-white">
                  <LogoutOutlined />
                </div>
              }
            >
              {/* <Link to="/"> */}
              <div className=" ml-1 text-white">Sign out</div>
              {/* </Link> */}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="headerCustom">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : AlignRightOutlined,
              {
                className: collapsed ? "trigger mt-2" : "trigger mt-2",
                onClick: toggle,
              }
            )}
            <div className="header-text hidden md:block">
              <Link to="/">
                <img src={logo} alt="logo" width="100px" height="auto" />
              </Link>
            </div>
            <div className="flex flex-row items-center w-[100%] justify-end">
              <ul className="flex flex-row items-center justify-center gap-x-2 md:gap-x-6 mt-3">
                <li className="hover:cursor-pointer hover:text-white">
                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="hidden md:block text-xs md:text-sm text-white bg-light-green border border-light-green hover:bg-transparent hover:text-light-green py-1.5 px-6 rounded-full uppercase"
                  >
                    First free contest
                  </button>
                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="hidden text-xs md:text-sm text-white bg-light-green border border-light-green hover:bg-transparent hover:text-light-green py-1.5 px-6 rounded-full uppercase"
                  >
                    contest
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
                  <div className="my-dropdown-container">
                    <Dropdown menu={{ items }} placement="bottomRight">
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="text-black hover:text-black flex items-center mr-[-30px] md:mr-[-30px] lg:pr-[30px]"
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
                      </button>
                    </Dropdown>
                  </div>
                </li>
              </ul>
            </div>
          </Header>
          <Content className="site-layout-background md:min-h-[280px] md:p-[6px]">
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </>
  );
};

export default LayoutComponent;
