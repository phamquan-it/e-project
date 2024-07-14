import React, { ReactNode, useState } from "react";
import { Button, Dropdown, Image, Layout, Menu, theme } from 'antd';
import {
    BookFilled,
    BookOutlined,
    CaretDownFilled,
    ClockCircleFilled,
    ClockCircleOutlined,
    HomeOutlined,
    Loading3QuartersOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    QuestionCircleFilled,
    UnorderedListOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    WechatWorkOutlined,
} from '@ant-design/icons';
import { useRouter } from "next/router";

const { Header, Sider, Content } = Layout;


interface DashBoardLayoutProps {
    children: ReactNode
}
const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({ children }) => {
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const items = [
        { label: 'Profile', key: 'item-1' }, 
        { label: 'Logout', key: 'item-2' },
      ];

    return (
        <Layout className="h-screen">


            <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                <div style={{
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image
                        width={180}
                        height={80}
                        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?random`}
                        alt="logo"
                        preview={false}
                    />
                </div>

                <div className="demo-logo-vertical" />

                <Menu
                    theme="light"
                    mode="inline"
                    onClick={(data)=>{
                        router.push(data.key)
                        
                    }}
                    defaultSelectedKeys={[router.asPath]}
                    items={[

                        {
                            key: '/dashboard',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '/dashboard/user',
                            icon: <UserOutlined />,
                            label: 'Users',
                        },
                        {
                            key: '/dashboard/test',
                            icon: <ClockCircleOutlined />,
                            label: 'Test',
                        },
                        {
                            key: '/dashboard/question',
                            icon: <QuestionCircleFilled />,
                            label: 'Question',
                        },

                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: "#FFF" }} className="">
                    
                <div style={{ 
                    display:"flex",
                    justifyContent:"space-between",
                    paddingRight:"15px"
                    }}>
                <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                   
                 
                      <div>
                        <Dropdown menu={{ items }}>
                        <Button icon={<CaretDownFilled />} iconPosition="end">admin@gmail.com</Button>
                      </Dropdown>
                      </div>
                </div>
                    
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: "#FFF",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
export default DashBoardLayout