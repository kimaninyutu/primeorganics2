'use client'

export function CheckoutForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm mb-2">First Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-sm"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Company Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-sm"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Street Address</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-sm"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Apartment, floor, etc. (optional)</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-sm"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Town/City</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-sm"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Phone Number</label>
        <input
          type="tel"
          className="w-full px-4 py-2 border rounded-sm"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Email Address</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-sm"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="save-info" />
        <label htmlFor="save-info" className="text-sm">
          Save this information for faster check-out next time
        </label>
      </div>
    </form>
  )
}

