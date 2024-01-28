import Navbar from "./_components/navbar";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex justify-center overflow-hidden overflow-y-scroll">
      <Navbar />
      <main className="h-full">{children}</main>
    </div>
  );
};

export default ProductLayout;
