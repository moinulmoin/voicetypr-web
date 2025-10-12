"use client";

// Sample user avatars - replace with real user images if available
const users = [
  {
    name: "User 1",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    name: "User 2",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
  },
  {
    name: "User 3",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmine"
  },
  {
    name: "User 4",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver"
  },
  {
    name: "User 5",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia"
  }
];

export default function SocialProof() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      {/* User Avatars */}
      <div className="flex items-center">
        <div className="flex -space-x-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden transition-transform hover:scale-110 hover:z-10"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Text */}
      <p className="text-sm text-muted-foreground">
        Trusted by <span className="font-semibold text-foreground">1,00+</span> founders
      </p>
    </div>
  );
}
