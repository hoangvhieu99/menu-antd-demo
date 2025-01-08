import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  NotificationOutlined,
  UsergroupAddOutlined,
  ToolOutlined,
  FileOutlined,
  DashboardOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ZoomOutOutlined,
  RiseOutlined,
  BarChartOutlined,
  AccountBookOutlined,
  DollarOutlined,
  UserOutlined,
  ScheduleOutlined,
  FileSearchOutlined,
  EuroOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="menu-home"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            padding: "10px",
            marginLeft: collapsed ? "0px" : "25px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapse}
            style={{ color: "white", fontSize: "16px" }}
          />
        </div>
        <div className="logo">
          <p>Owner</p>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<NotificationOutlined />}>
            Thông báo
          </Menu.Item>
          <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
            Nhân viên
          </Menu.Item>
          <Menu.Item key="4" icon={<ToolOutlined />}>
            Công cụ - Dụng cụ
          </Menu.Item>
          <SubMenu key="sub1" icon={<DashboardOutlined />} title="Chấm công">
            <Menu.Item key="5" icon={<CalendarOutlined />}>
              Lịch làm việc{" "}
            </Menu.Item>
            <Menu.Item key="6" icon={<CheckCircleOutlined />}>
              Chấm công
            </Menu.Item>
            <Menu.Item key="7" icon={<ZoomOutOutlined />}>
              Phép
            </Menu.Item>
            <Menu.Item key="8" icon={<RiseOutlined />}>
              Chuyên cần
            </Menu.Item>
          </SubMenu>
          <SubMenu
            className="mb-40"
            key="sub2"
            icon={<BarChartOutlined />}
            title="Tài chính kế toán"
          >
            <Menu.Item key="9" icon={<AccountBookOutlined />}>
              Hệ thống tài khoản
            </Menu.Item>
            <Menu.Item key="10" icon={<FileOutlined />}>
              Tài liệu & Hoá đơn
            </Menu.Item>
            <SubMenu key="sub3" icon={<DollarOutlined />} title="Doanh thu">
              <Menu.Item key="11" icon={<UserOutlined />}>
                Pháp nhân
              </Menu.Item>
              <Menu.Item key="12" icon={<ScheduleOutlined />}>
                Danh sách doanh thu
              </Menu.Item>
              <Menu.Item key="13" icon={<FileSearchOutlined />}>
                Danh sách nợ phải thu
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<PayCircleOutlined />}
              title="Chi phí"
            ></SubMenu>
            <Menu.Item key="14" icon={<EuroOutlined />}>
              Lương
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ background: "#fff", padding: "24px" }}>
          <h1>Welcome to My App</h1>
          <p>This is a demo menu example</p>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
