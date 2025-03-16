import { MenuProps } from "antd";
import { 
    AppstoreOutlined,
    CreditCardOutlined,
    ManOutlined,
    ScheduleOutlined,
    TableOutlined,
    ThunderboltOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import Link from "next/link";

export const sidebarItems = (role : string) => {
    const defaultSidebarItems: MenuProps['items'] = [
        {
            label: 'Profile',
            key: 'prodile',
            icon:  <UserOutlined />,
            children:[
                {
                    label: <Link href={`/${role}/profile`}>Account Profile</Link>,
                    key: `/${role}/profile`,
                },
                {
                    label: <Link href={`/${role}/Change Password`}>Change Password</Link>,
                    key: `/${role}/password`,
                }
            ],
        },
    ];

    const commonAdminSidebarItems : MenuProps['items'] = [
        {
            label: <Link href={`/${role}/manage-student`}>ManageStudents</Link>,
            icon: <ManOutlined/>,
            key: 'manage-student'
        }
    ];

    const adminSidebarItems :MenuProps['items'] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
            label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
            icon: <TableOutlined/>,
            key: `/${role}/manage-faculty`,
        },
        {
            label: 'Manage academic',
            key: 'manage academic',
            icon: <TableOutlined/>,
            children: [
                {
                    label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
                    key: `/${role}/academic/faculty`,
                },
                {
                    label: <Link href={`/${role}/academic/depertmet`}>Depertmets</Link>,
                    key: `/${role}/academic/depertmet`,
                },
                {
                    label: <Link href={`/${role}/academic/semister`}>Semisters</Link>,
                    key: `/${role}/academic/semister`,
                },
                
            ]
        },
        {
            label: 'Management',
            key: 'management',
            icon: <AppstoreOutlined/>,
            children: [
                {
                    label: <Link href={`/${role}/depertment`}>Depertment</Link>,
                    key: `/${role}/depertment`,
                },
                {
                    label: <Link href={`/${role}/building`}>Building</Link>,
                    key: `/${role}/building`,
                },
                {
                    label: <Link href={`/${role}/room`}>Rooms</Link>,
                    key: `/${role}/room`,
                },
                {
                    label: <Link href={`/${role}/courses`}>Courses</Link>,
                    key:  `/${role}/courses`,
                },
                {
                    label: <Link href={`/${role}/semister-ragistration`}>Semister Registration</Link>,
                    key:  `/${role}/semister-ragistration`,
                },
                {
                    label: <Link href={`/${role}/offered-courses`}>Offered courses</Link>,
                    key:  `/${role}/offered-courses`,
                },
                {
                    label: <Link href={`/${role}/course-section`}>Course sections</Link>,
                    key:  `/${role}/course-section`,
                },
                {
                    label: <Link href={`/${role}/course-schedules`}>Course schedules</Link>,
                    key:  `/${role}/course-schedules`,
                },
                
            ]
        }
    ]

    const superAdminSidebarItems : MenuProps['items']=[
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
            label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
            icon: <TableOutlined/>,
            key: `/${role}/manage-faculty`,
        },
        {
            label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
            icon: <TableOutlined/>,
            key: `/${role}/academic/faculty`,
        },
        {
            label: <Link href={`/${role}/academic/depertmet`}>Manage User</Link>,
            icon: <TableOutlined/>,
            key: `/${role}/user`,
        },
        {
            label: "Manage permission",
            icon: <AppstoreOutlined/>,
            key: 'manage-permission',
            children:[
                {
                    label: <Link href={`/${role}/permission`}>View permission</Link>,
                    key: `/${role}/permission`,
                },
            ],
        }, 
        {
            label: 'ManageMent',
            key: 'management',
            icon: <AppstoreOutlined/>,
            children:[
                {
                    label: <Link href={`/${role}/derpertment`}>Depertment</Link>,
                    key: `/${role}/depertment`,
                }
            ]
        }
       
    ]

    const facultySidebarItems : MenuProps['items']=[
        ...defaultSidebarItems,
        {
            label: <Link href={`/${role}/courses`}>Courses</Link>,
            icon: <TableOutlined/>,
            key:  `/${role}/courses`,
        },
       
    ]

    const studentSidebarItem: MenuProps['items']=[
        ...defaultSidebarItems,
        {
            label: <Link href={`/${role}/courses`}>Courses</Link>,
            icon: <TableOutlined/>,
            key:  `/${role}/courses`,
        },
        {
            label: <Link href={`/${role}/Course/schedules`}>Course schedules</Link>,
            icon: <ScheduleOutlined/>,
            key:  `/${role}/Course/schedules`,
        },
        {
            label: <Link href={`/${role}/registration`}>Registration</Link>,
            icon: <ThunderboltOutlined/>,
            key:  `/${role}/registration`,
        },
        {
            label: <Link href={`/${role}/payment`}>Payment</Link>,
            icon: <CreditCardOutlined/>,
            key:  `/${role}/payment`, 
        },
        {
            label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
            icon: <CreditCardOutlined/>,
            key:  `/${role}/academic-report`, 
        }

    ]

    if(role === "super_admin") return superAdminSidebarItems;
    else if(role === "admin") return adminSidebarItems;
    else if(role === 'faculty') return facultySidebarItems ;
    if(role === "student") return studentSidebarItem;
    else {
        return defaultSidebarItems;
    }
    
};

