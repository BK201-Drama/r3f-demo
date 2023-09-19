import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const LayoutIndex = () => {
  return (

    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible onCollapse={() => { }}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[]} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0px 16px' }}>
          <div className="p-[24px] min-h: 360">
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex