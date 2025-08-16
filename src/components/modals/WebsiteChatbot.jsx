// components/WebsiteChatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCommentDots } from "react-icons/fa";

// Expanded AI response generator for Plex Ci Hub
const generateResponse = (msg) => {
  const message = msg.toLowerCase();

  if (message.includes("service") || message.includes("offer")) {
    return "Plex Ci Hub offers modern website development including React, Next.js, WordPress, and custom designs tailored for your business.";
  }
  if (message.includes("pricing") || message.includes("cost") || message.includes("price")) {
    return "Basic websites start at ₹10,000. Pricing increases depending on complexity like e-commerce, dynamic features, and custom integrations.";
  }
  if (message.includes("process") || message.includes("how")) {
    return "We follow: Discovery → Design → Development → Testing → Launch. Each step ensures quality and satisfaction.";
  }
  if (message.includes("portfolio") || message.includes("work")) {
    return "You can view our portfolio in the Portfolio section of the website.";
  }
  if (message.includes("contact") || message.includes("call")) {
    return "You can contact us at +91-12345-67890 or request a callback via the Connect button on the website.";
  }
  if (message.includes("location") || message.includes("shop") || message.includes("address")) {
    return "Our shop is located in Kalpetta, Wayanad, Kerala. You are welcome to visit us during working hours.";
  }
  if (message.includes("meet") || message.includes("appointment")) {
    return "You can schedule a meeting with Plex Ci Hub via WhatsApp or call to discuss your project requirements.";
  }

  return "I can answer questions about Plex Ci Hub services, pricing, process, portfolio, contact, location, and appointments.";
};

const WebsiteChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I can help you with Plex Ci Hub website services. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const chatEndRef = useRef(null);

  // Suggestions while typing
  useEffect(() => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const keywords = ["service", "pricing", "process", "portfolio", "contact", "location", "meet", "appointment"];
    const matched = keywords.filter((k) => k.includes(input.toLowerCase()));
    setSuggestions(matched.slice(0, 5));
  }, [input]);

  const sendMessage = (msg = input) => {
    if (!msg) return;

    setMessages((prev) => [...prev, { sender: "user", text: msg }]);
    setInput("");
    setSuggestions([]);
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: generateResponse(msg) }]);
      setTyping(false);
    }, 600);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="fixed bottom-6 left-6 sm:bottom-4 sm:left-4 z-50 flex flex-col items-start w-[90%] sm:w-96">
      {/* Chat Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="bg-gradient-to-br from-green-400 to-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
          >
            <FaCommentDots size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden w-full max-w-md sm:max-w-md"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-3 flex justify-between items-center">
              <span className="font-semibold text-sm sm:text-base">Plex Ci Hub Assistant</span>
              <button onClick={() => setOpen(false)} className="hover:text-gray-200 transition-colors">
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-green-100">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.sender === "bot" ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-xl shadow-sm max-w-[80%] break-words ${
                    m.sender === "bot"
                      ? "bg-green-50 self-start text-green-900"
                      : "bg-gradient-to-r from-green-400 to-green-600 text-white self-end"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-50 self-start p-2 rounded-lg max-w-[30%] animate-pulse text-green-700"
                >
                  Typing...
                </motion.div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            {/* Input */}
            <div className="p-3 border-t flex flex-col space-y-2">
              <div className="flex space-x-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Ask about Plex Ci Hub services..."
                />
                <button
                  onClick={() => sendMessage()}
                  className="bg-gradient-to-br from-green-400 to-green-600 text-white px-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  Send
                </button>
              </div>

              {suggestions.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="bg-green-100 px-2 py-1 rounded-lg hover:bg-green-200 text-sm transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebsiteChatbot;
