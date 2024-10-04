import TechnologyNavbar from "./TechnologyNavbar";

export default function TechnologyLayout({ children }) {
  return (
    <div className="dark:bg-neutral-950">
        <TechnologyNavbar />
        {children}
    </div>
  )
}
