import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ul>
        <Link href="/products">Products</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/account">Account</Link>
      </ul>
    </nav>
  );
}

export default Nav;
