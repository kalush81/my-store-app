import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">My Store</Link>
      </div>
      <Nav></Nav>
      <div className="search">
        <input type="text" className="search" placeholder="search item" />
      </div>
    </header>
  );
}

export default Header;
