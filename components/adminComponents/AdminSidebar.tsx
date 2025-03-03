import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Palette,
  Layers2,
  Users,
  ChartBarStacked,
} from "lucide-react";
import { AdminLogout } from "./AdminLogout";

const links = [
  { href: "/admin", label: "Dashboard", Icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", Icon: Package },
  { href: "/admin/sizes-colors", label: "Size&Color", Icon: Palette },
  { href: "/admin/product-variants", label: "Product Variants", Icon: Layers2 },
  { href: "/admin/orders", label: "Orders", Icon: ShoppingCart },
  { href: "/admin/users", label: "Users", Icon: Users },
  { href: "/admin/categories", label: "Categories", Icon: ChartBarStacked },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="mt-5 px-2">
        {links.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
          >
            <Icon className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" />
            {label}
          </Link>
        ))}
        <AdminLogout />
      </nav>
    </aside>
  );
}
