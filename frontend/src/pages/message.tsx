import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Message {
  id: number;
  email: string;
  body: string;
}

// Mock data – replace with API call
const mockMessages: Message[] = [
  { id: 1, email: 'user1@example.com', body: 'I need help with my website.' },
  { id: 2, email: 'user2@example.com', body: 'Looking for a mobile app developer.' },
  { id: 3, email: 'user3@example.com', body: "Great portfolio! Let's work together." },
  { id: 4, email: 'user4@example.com', body: 'Do you offer maintenance services?' },
  { id: 5, email: 'user5@example.com', body: 'Interested in your React expertise.' },
];

function MessageDetail() {
  const { message: messageId } = useParams<{ message: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate fetching message from API
    setLoading(true);
    setTimeout(() => {
      const id = Number(messageId);
      const found = mockMessages.find(m => m.id === id);
      if (found) {
        setMessage(found);
        setError('');
      } else {
        setError('Message not found.');
      }
      setLoading(false);
    }, 500);
  }, [messageId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--primary-color)"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 dark:bg-red-950/30 rounded-lg">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => navigate('/admin/messages')}
          className="mt-4 px-4 py-2 bg-(--primary-color) text-white rounded hover:bg-(--primary-color)/90"
        >
          Back to Messages
        </button>
      </div>
    );
  }

  return (
    <section className='min-h-screen pt-24'>
      <div className="max-w-2xl mx-auto p-6 bg-(--bg-primary) rounded-xl shadow-lg border border-(--highlight-color)">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 hover:text-(--primary-color) transition">
          ← Back
        </button>

        <div className="space-y-4">
          <div className="border-b border-(--highlight-color) pb-2">
            <span className="text-xs text-(--secondary-color) uppercase tracking-wide">Message ID</span>
            <p className="text-lg font-semibold">{message?.id}</p>
          </div>

          <div className="border-b border-(--highlight-color) pb-2">
            <span className="text-xs text-(--secondary-color) uppercase tracking-wide">From</span>
            <p className="text-lg font-semibold">{message?.email}</p>
          </div>

          <div>
            <span className="text-xs text-(--secondary-color) uppercase tracking-wide">Message</span>
            <div className="mt-2 p-4 bg-(--fg-color) rounded-lg leading-relaxed">
              {message?.body}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageDetail;