import { ThemeToggle } from "@/components/ThemeToggle";

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 mt-8">
        {/* Profile Icon */}
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-5xl text-muted-foreground shadow">
          <span role="img" aria-label="Profile">
            👤
          </span>
        </div>
        {/* Name */}
        <div className="text-2xl font-semibold">Jane Doe</div>
        {/* What they do */}
        <div className="w-full max-w-xs">
          <label htmlFor="about" className="block text-sm font-medium mb-1">
            What do you do?
          </label>
          <textarea
            id="about"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Describe your role or interests..."
            rows={3}
          />
        </div>
        {/* Settings */}
        <div className="w-full max-w-xs mt-6">
          <div className="text-lg font-medium mb-2">Settings</div>
          <div className="flex items-center justify-between bg-muted rounded-md px-4 py-3 shadow">
            <span className="text-sm">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
