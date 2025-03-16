"use client";
import React, { useState } from 'react';
import {Layout, Menu} from 'antd';
import { USER_ROLE } from '@/constants/role';
import { sidebarItems } from '@/constants/sidebarItems';

const { Sider } = Layout;







const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role= USER_ROLE.ADMIN; 
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
    </Sider>
    </Layout>
    
  );
};

export default SiderComponent;
