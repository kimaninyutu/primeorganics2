import Link from "next/link"

const menuItems = [
  {
    title: "Manage My Account",
    items: [
      { label: "My Profile", href: "/account" },
      { label: "Address Book", href: "/account/address" },
      { label: "My Payment Options", href: "/account/payment" }
    ]
  },
  {
    title: "My Orders",
    items: [
      { label: "My Returns", href: "/account/returns" },
      { label: "My Cancellations", href: "/account/cancellations" }
    ]
  },
  {
    title: "My WishList",
    href: "/wishlist"
  }
]

export function AccountSidebar() {
  return (
    <div className="space-y-6">
      {menuItems.map((section, index) => (
        <div key={index}>
          {section.items ? (
            <>
              <h3 className="font-medium mb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-red-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={section.href}
              className="font-medium hover:text-red-500"
            >
              {section.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

