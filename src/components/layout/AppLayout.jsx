import { useContext } from "react";
import { Layout, Spin } from "antd";
import CryptoContext from "../../context/crypto-context.jsx";
import AppContent from "./AppContent.jsx";
import AppHeader from "./AppHeader.jsx";
import AppSider from "./AppSider.jsx";

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
