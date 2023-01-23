import ClientPhoneForm from "../../components/organisms/ClientPhoneForm";
import Layout from "../../template/Layout";

interface LayoutProps {
  isLogged: boolean;
  user: {};
}
const ClientPhone = ({ isLogged, user }: LayoutProps) => {
  const handleSubmit = (data: { [key: string]: string }) => {
    console.log(data);
  };

  return (
    <div>
      <Layout isLogged={isLogged} user={user} />
      <h1>Telefono</h1>
      <ClientPhoneForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ClientPhone;
