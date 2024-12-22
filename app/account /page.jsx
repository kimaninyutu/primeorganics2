import { AccountSidebar } from "../../components/account/account-sidebar"
import { ProfileForm } from "../../components/account/profile-form"
import { Breadcrumb } from "../../components/breadcrumb"

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "My Account", href: "/account" }
      ]} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <AccountSidebar />
        <ProfileForm />
      </div>
    </div>
  )
}

