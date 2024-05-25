import Header from "../components/Header";

export default function ProjectsLayout({ children }) {
   return (
      <section>
         <Header />
         {children}
      </section>
   );
}
