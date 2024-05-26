import Header from "../components/Header";

export default function ContactLayout({ children, activeLink }) {
   return (
      <section>
         <Header activeLink={activeLink}/>
         {children}
      </section>
   );
}
