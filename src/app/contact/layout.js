import Header from "../components/Header";

export default function ContactLayout({ children }) {
   return (
      <section>
         <Header />
         {children}
      </section>
   );
}
