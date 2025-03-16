import { MenuProps } from "antd";
import { 
    UserOutlined,
  } from '@ant-design/icons';

export const sidebarItems = (role : string) => {
    const defaultSidebarItems: MenuProps['items'] = [
        {
            label: 'Profile',
            key: 'prodile',
            icon:  <UserOutlined />,
            children:[
                {
                    label: "Account Profile",
                    key: 'profile'
                },
                {
                    label: "Change Password",
                    key: "password"
                }
            ],
        },
    ];
    if(role === "student") return defaultSidebarItems;
    
};

