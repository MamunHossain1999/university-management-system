import { Content } from "antd/es/layout/layout";

const Contents = ({ children }: { children: React.ReactNode }) => {
    return (
        <Content style={{ margin: '0 16px' }}>
         
          {children}
        
        </Content>
    );
};

export default Contents;
