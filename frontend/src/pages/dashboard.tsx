import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { KeyIcon, LogoutIcon, MessagesIcon } from "../components/icons";
import Input from "../components/input";

function Messages() {
  const testMessages = [
    { id: 1, email: "user1@example.com" },
    { id: 2, email: "user2@example.com" },
    { id: 3, email: "user3@example.com" },
    { id: 4, email: "user4@example.com" },
    { id: 5, email: "user5@example.com" },
  ];

  const handleView = (id: number) => {
    console.log(`View message with id: ${id}`);
    // Implement view logic (e.g., open modal, fetch message details)
  };

  const handleDelete = (id: number) => {
    console.log(`Delete message with id: ${id}`);
    // Implement delete logic (e.g., API call, remove from UI)
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-(--bg-primary) border border-(--bg-color) rounded-lg">
        <thead className="bg-(--bg-secondary) border-b border-(--bg-color)">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-(--text-secondary) uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-(--text-secondary) uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-(--text-secondary) uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-(--bg-color)">
          {testMessages.map((message) => (
            <tr key={message.id} className="bg-(--fg-color) hover:bg-(--highlight-color) transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-(--text-primary)">
                {message.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-(--text-primary)">
                {message.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                <button
                  onClick={() => handleView(message.id)}
                  className="px-3 py-1 bg-(--primary-color) text-white rounded-md hover:bg-(--primary-color)/80 transition"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(message.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!password || !confirmPassword) {
      setError('Please fill in both fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Simulate API call
    console.log('Password changed to:', password);
    setSuccess('Password changed successfully!');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-(--bg-primary) rounded-xl shadow-lg border border-(--highlight-color)">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="password"
          name="password"
          value={password}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          name="confirm_password"
          value={confirmPassword}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        />

        {error && (
          <div className="text-red-500 text-sm bg-red-50 dark:bg-red-950/30 p-2 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="text-green-500 text-sm bg-green-50 dark:bg-green-950/30 p-2 rounded">
            {success}
          </div>
        )}

        <button
          type="submit"
          className="submit-btn"
        >
          Save
        </button>
      </form>
    </div>
  );
}

function Dashboard(){
  /* const navigate = useNavigate()
  useEffect(() => {
    navigate("/admin/login/")
  }, []) */
  const [page, setPage] = useState<"messages"|"changepassword">("messages")
  const navigate = useNavigate()
  return (
    <section className="flex h-screen px-2 pt-22">
      <aside className="">
        <div className="p-4 border-b border-(--border-primary)">
          <h4 className="text-(--primary-color)">Menu</h4>
        </div>
        
        <ul className="p-2 space-y-1">
          <li>
            <button 
              onClick={() => setPage("messages")}
              className={"aside-button"+(page==="messages"?" active":"")}>
              <MessagesIcon width="20" height="20"/>
              <span>Messages</span>
            </button>
          </li>
          
          <li>
            <button 
              onClick={() => setPage("changepassword")}
              className={"aside-button"+(page==="changepassword"?" active":"")}>
              <KeyIcon width="18" height="18"/>
              <span>Change Password</span>
            </button>
          </li>
          
          <li>
            <button 
              onClick={() => navigate("/admin/login/")}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200 group">
              <LogoutIcon/>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-4">
        {page==="messages"?<Messages/>:<ChangePassword/>}
      </main>
    </section>
  )
}
export default Dashboard