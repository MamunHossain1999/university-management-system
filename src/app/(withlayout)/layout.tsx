import Contents from "@/components/ui/contents";
import SiderComponent from "@/components/ui/sider";
import { Layout } from "antd";


// akhane chidlren nite hobe
const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return(
   <Layout hasSider>
    <SiderComponent/>
     <Contents>{children}</Contents>
   </Layout>
  );
};

export default DashboardLayout;