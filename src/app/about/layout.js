import Header from "../components/Header";

export default function AboutLayout({ children, activeLink }) {
   return (
      <section>
         <Header activeLink={activeLink}/>
         {children}
      </section>
   );
}
