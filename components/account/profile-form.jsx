'use client'

export function ProfileForm() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium">Edit Your Profile</h1>
        <div className="text-sm">
          Welcome! <span className="text-red-500">John Doe</span>
        </div>
      </div>
      <form className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2">First Name</label>
            <input
              type="text"
              defaultValue="John"
              className="w-full px-4 py-2 border rounded-sm"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full px-4 py-2 border rounded-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            defaultValue="customer@example.com"
            className="w-full px-4 py-2 border rounded-sm"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Address</label>
          <input
            type="text"
            defaultValue="Kingston, 5236, United States"
            className="w-full px-4 py-2 border rounded-sm"
          />
        </div>
        <div>
          <h2 className="font-medium mb-4">Password Changes</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white rounded-sm"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

