import Header from '../header/Header';

const Layout = ({ children, loading }) => {
  return (
    <main>
      <Header></Header>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-900"></div>
          LOADING
        </div>
      ) : (
        children
      )}
    </main>
  );
};

export default Layout;
