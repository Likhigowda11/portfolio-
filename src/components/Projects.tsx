import React, { useState, useEffect, useRef } from "react";
import { FolderGit2, Play, RefreshCw, Send, CheckCircle2, AlertTriangle, HelpCircle, ArrowUpRight, BarChart3, Bot, Terminal, CalendarRange, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { resumeData, Project } from "../types";

// Mock Products for the Stock Tracker Simulation
const MOCK_PRODUCTS = [
  { id: "p1", name: "RTX 5090 GPU Founders Edition", prices: [1599, 1649, 1599, 1720, 1599], stock: { Amazon: "In Stock", Flipkart: "Out of Stock", BestBuy: "In Stock", Myntra: "N/A" } },
  { id: "p2", name: "PlayStation 5 Pro Console", prices: [699, 699, 720, 699, 699], stock: { Amazon: "Out of Stock", Flipkart: "In Stock", BestBuy: "In Stock", Myntra: "N/A" } },
  { id: "p3", name: "Apple MacBook Pro M4 Max (16-inch)", prices: [3499, 3499, 3449, 3499, 3499], stock: { Amazon: "In Stock", Flipkart: "In Stock", BestBuy: "In Stock", Myntra: "N/A" } },
];

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState<string>("product-checker");

  // --- 1. PRODUCT AVAILABILITY CHECKER SIMULATION STATES ---
  const [selectedProduct, setSelectedProduct] = useState(MOCK_PRODUCTS[0]);
  const [isScraping, setIsScraping] = useState(false);
  const [scrapingLogs, setScrapingLogs] = useState<string[]>([]);
  const [scrapeSuccess, setScrapeSuccess] = useState(false);
  const [chartDataKey, setChartDataKey] = useState(0); // For animating chart redraws
  const logsEndRef = useRef<HTMLDivElement>(null);

  const triggerScrapeSimulation = () => {
    if (isScraping) return;
    setIsScraping(true);
    setScrapeSuccess(false);
    setScrapingLogs([]);

    const logSteps = [
      `[INIT] Booting Python BeautifulSoup/Playwright environment...`,
      `[AGENT] Spawning requests to web endpoints...`,
      `[TARGET] Scraping Amazon API catalog details for: ${selectedProduct.name}`,
      `[TARGET] Querying Flipkart REST stock inventory databases...`,
      `[TARGET] Validating BestBuy HTML dom status codes...`,
      `[TRANSFORM] Bundling payload values into data.JSON frame...`,
      `[DATAVIZ] Powering Power BI reporting metrics dashboard charts...`,
      `[SUCCESS] Synchronous scraper sync finished. Inventory caches updated!`,
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < logSteps.length) {
        setScrapingLogs((prev) => [...prev, logSteps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsScraping(false);
        setScrapeSuccess(true);
        setChartDataKey((prev) => prev + 1);
      }
    }, 450);
  };

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrapingLogs]);

  // --- 2. HEALTHCARE BOT STATES ---
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "bot"; text: string; timestamp: string }[]>([
    {
      sender: "bot",
      text: "Hello! I am Dr. Likhith's Assistant Bot. Healthcare is important! You can ask me medical remedies, search doctor slots, or book an appointment. How Can I assist you today?",
      timestamp: "08:15 AM",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [botIsTyping, setBotIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", date: "2026-05-26", slot: "11:00 AM" });
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, botIsTyping]);

  const presetQueries = [
    "Book an appointment",
    "Headache remedy",
    "Who is Likhith Gowda?",
    "Check available slots",
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMsg = { sender: "user" as const, text, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChatMessages((prev) => [...prev, newMsg]);
    setUserInput("");
    setBotIsTyping(true);

    // AI simulation replies
    setTimeout(() => {
      let botReply = "";
      const cleaned = text.toLowerCase();

      if (cleaned.includes("book") || cleaned.includes("appointment") || cleaned.includes("schedule")) {
        botReply = "Certainly! You can easily book an appointment. Please use the booking form right next to this chatbot chat, or tell me your preferred slot and name!";
      } else if (cleaned.includes("headache") || cleaned.includes("fever") || cleaned.includes("remedy")) {
        botReply = "For mild headaches or minor fevers, standard protocol is ample hydration, rest, and generic paracetamol under consultation. Avoid continuous screen exposure (I see you are viewing Likhith's amazing portfolio!). If symptoms persist over 48 hours, seek in-person diagnostic clinics.";
      } else if (cleaned.includes("likhith") || cleaned.includes("gowda") || cleaned.includes("portfolio")) {
        botReply = "Likhith S Gowda is a talented student at Sambhram Institute of Technology pursuing a B.E in Artificial Intelligence and Data Science (CGPA: 7.5). He has advanced competence in Python, C++, SQL, Azure, and has won major hackathons! Connect with his direct LinkedIn profile or mail on the homepage!";
      } else if (cleaned.includes("slot") || cleaned.includes("available")) {
        botReply = "Current active open slots for Consultation are: 10:00 AM, 11:30 AM, 02:00 PM, and 04:30 PM for tomorrow and subsequent weekdays. Select yours in the booking module!";
      } else {
        botReply = "Thank you for the message! I've logged this in our healthcare system indices. Our automated patient response module suggests adequate rest and scheduling an appointment if clinical checkup is required. Let me know if I can help you book slots!";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot" as const,
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setBotIsTyping(false);
    }, 900);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone) return;
    setIsBooked(true);

    // Log message to chat too
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot" as const,
          text: `🎉 Appointment Confirmed! Thank you, ${bookingForm.name}. We have scheduled your consultation slot for ${bookingForm.date} at ${bookingForm.slot}. A SMS reminder has been simulated to ${bookingForm.phone}!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 600);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white relative">
      <div className="absolute inset-0 bg-radial from-indigo-50/20 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono"
          >
            <FolderGit2 className="w-4 h-4" />
            Interactive Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight"
          >
            Showcase of <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm sm:text-base font-sans"
          >
            Explore real, functional, interactive client-side simulators built to demonstrate the core architecture of these academic software projects.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200/50">
            {resumeData.projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProjectTab(p.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeProjectTab === p.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                id={`project-tab-btn-${p.id}`}
              >
                {p.id === "product-checker" ? <BarChart3 className="w-4 h-4 text-indigo-600" /> : <Bot className="w-4 h-4 text-emerald-600" />}
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Showcases */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="project-showcase-container">
          
          {/* Column A: Project Description & Static Metadata */}
          {resumeData.projects.map((p) => {
            if (activeProjectTab !== p.id) return null;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 flex flex-col justify-between"
              >
                <div className="space-y-6 sm:space-y-8">
                  {/* Title & Tag */}
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
                      <Sparkles className="w-3.5 h-3.5" />
                      {p.role || "Developer"}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                      {p.title}
                    </h3>
                  </div>

                  {/* Core Description */}
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
                    {p.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3.5">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">Key Highlights</p>
                    <div className="space-y-2.5">
                      {p.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono font-semibold text-slate-500 bg-slate-50 border border-slate-100 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated Source CTA */}
                <div className="pt-8 border-t border-slate-100 mt-8 flex items-center gap-4">
                  <div className="text-xs text-slate-400 font-mono">
                    Built for academic research at <br />
                    <span className="text-slate-600 font-semibold">Sambhram Institute of Technology</span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Column B: Interactive Playground / Simulator */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeProjectTab === "product-checker" ? (
                /* --- INTERACTIVE DEMO: PRODUCT AVAILABILITY SCRAPER --- */
                <motion.div
                  key="product-simulation"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[500px]"
                  id="scraper-simulator-box"
                >
                  <div className="space-y-6">
                    {/* Simulator Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-emerald-400" />
                        <span className="font-mono text-sm font-semibold tracking-wide text-slate-400">STOCK_TRACKER_V1.py</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold">
                        Ready
                      </span>
                    </div>

                    {/* Product selector dropdown simulation */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs text-slate-400 font-mono">Select Target Item</label>
                        <select
                          value={selectedProduct.id}
                          onChange={(e) => {
                            const found = MOCK_PRODUCTS.find((p) => p.id === e.target.value);
                            if (found) {
                              setSelectedProduct(found);
                              setScrapeSuccess(false);
                              setScrapingLogs([]);
                            }
                          }}
                          className="w-full text-xs font-mono font-bold bg-slate-800 text-white rounded-lg border border-slate-700 p-2.5 outline-none cursor-pointer"
                        >
                          {MOCK_PRODUCTS.map((prod) => (
                            <option key={prod.id} value={prod.id}>
                              {prod.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-xs text-slate-400 font-mono">Simulate Process</label>
                        <button
                          onClick={triggerScrapeSimulation}
                          disabled={isScraping}
                          className="w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-lg transition-colors font-mono font-bold text-xs flex items-center justify-center gap-2 cursor-pointer outline-none"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${isScraping ? "animate-spin" : ""}`} />
                          {isScraping ? "Running scrapers..." : "Execute Stock Check"}
                        </button>
                      </div>
                    </div>

                    {/* Visual Scraping Logs */}
                    <div className="bg-slate-950/80 rounded-xl p-4 h-40 overflow-y-auto font-mono text-xs border border-slate-800 text-left space-y-1.5">
                      {scrapingLogs.length === 0 ? (
                        <p className="text-slate-500 italic">Console idle. Click "Execute Stock Check" to initiate BeautifulSoup request simulation...</p>
                      ) : (
                        scrapingLogs.map((log, index) => {
                          const isSuccess = log.includes("[SUCCESS]");
                          const isTarget = log.includes("[TARGET]");
                          return (
                            <p
                              key={index}
                              className={isSuccess ? "text-emerald-400 font-bold" : isTarget ? "text-indigo-400" : "text-slate-300"}
                            >
                              {log}
                            </p>
                          );
                        })
                      )}
                      <div ref={logsEndRef} />
                    </div>

                    {/* Interactive Stocks results visual overlay */}
                    {scrapeSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4 pt-1 text-left"
                      >
                        <p className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Scraped Platform Results</p>
                        
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                          {Object.entries(selectedProduct.stock).map(([plat, status]) => (
                            <div key={plat} className="bg-slate-800/40 border border-slate-800 rounded-xl p-3 text-center">
                              <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wide">{plat}</p>
                              <p className={`text-xs font-bold font-mono mt-1 ${status === "In Stock" ? "text-emerald-400" : status === "Out of Stock" ? "text-red-400" : "text-slate-500"}`}>
                                {status}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Beautiful custom inline chart representing Price History Trend (Power BI concept) */}
                        <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-2.5">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-slate-400">Power BI Visualization: Price Trend Index</span>
                            <span className="text-emerald-400 font-bold">In-Stock avg: ${selectedProduct.prices[0]}</span>
                          </div>

                          {/* Line Chart drawing using SVG line nodes */}
                          <div className="relative w-full h-24 pt-4">
                            <svg className="w-full h-full overflow-visible">
                              <defs>
                                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {/* Grid lines */}
                              <line x1="0%" y1="100%" x2="100%" y2="100%" stroke="#1e293b" strokeDasharray="3 3" />
                              <line x1="0%" y1="0%" x2="100%" y2="0%" stroke="#1e293b" strokeDasharray="3 3" />

                              {/* Price history path */}
                              <path
                                d={`M 0 ${100 - (selectedProduct.prices[0] / 3600) * 80}
                                   L 120 ${100 - (selectedProduct.prices[1] / 3600) * 80}
                                   L 240 ${100 - (selectedProduct.prices[2] / 3600) * 80}
                                   L 360 ${100 - (selectedProduct.prices[3] / 3600) * 80}
                                   L 480 ${100 - (selectedProduct.prices[4] / 3600) * 80}`}
                                fill="none"
                                stroke="#6366f1"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />

                              {/* Area filling for gradient */}
                              <path
                                d={`M 0 100
                                   L 0 ${100 - (selectedProduct.prices[0] / 3600) * 80}
                                   L 120 ${100 - (selectedProduct.prices[1] / 3600) * 80}
                                   L 240 ${100 - (selectedProduct.prices[2] / 3600) * 80}
                                   L 360 ${100 - (selectedProduct.prices[3] / 3600) * 80}
                                   L 480 ${100 - (selectedProduct.prices[4] / 3600) * 80}
                                   L 480 100`}
                                fill="url(#chart-grad)"
                              />

                              {/* Target circles */}
                              {selectedProduct.prices.map((p, idx) => {
                                const xVal = idx * 120;
                                const yVal = 100 - (p / 3600) * 80;
                                return (
                                  <g key={idx}>
                                    <circle cx={xVal} cy={yVal} r="4" fill="#10b981" />
                                    <text x={xVal} y={yVal - 8} fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">
                                      ${p}
                                    </text>
                                  </g>
                                );
                              })}
                            </svg>
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </div>

                  <div className="text-slate-500 font-mono text-[10px] text-center border-t border-slate-800 pt-3 mt-6">
                    Designed using Python Standard library & Beautiful Soup for automated scraping.
                  </div>
                </motion.div>
              ) : (
                /* --- INTERACTIVE DEMO: HEALTHCARE ASSISTANT CHATBOT --- */
                <motion.div
                  key="healthcare-simulation"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="grid md:grid-cols-12 gap-5 min-h-[500px]"
                  id="healthcare-simulator-container"
                >
                  {/* Chat interface bubble (Column 7/12) */}
                  <div className="md:col-span-7 bg-white rounded-2xl border border-slate-100 shadow-xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 border-b border-slate-50 pb-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center relative">
                        <Bot className="w-5 h-5 animate-pulse" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white"></span>
                      </div>
                      <div className="text-left">
                        <h4 className="font-display font-medium text-slate-850 text-sm">HealthAssist Chatbot</h4>
                        <span className="text-[10px] text-slate-400 font-mono">Dialog-Flow Handler Active</span>
                      </div>
                    </div>

                    {/* Messages Panel */}
                    <div className="flex-1 space-y-3.5 h-64 overflow-y-auto mb-4 p-2 text-left bg-slate-50/50 rounded-xl max-h-[290px]">
                      {chatMessages.map((msg, index) => {
                        const isBot = msg.sender === "bot";
                        return (
                          <div
                            key={index}
                            className={`flex ${isBot ? "" : "justify-end"} items-start gap-2.5`}
                          >
                            {isBot && (
                              <div className="p-1 rounded bg-indigo-50 text-indigo-600 flex-shrink-0 mt-1">
                                <Bot className="w-3.5 h-3.5" />
                              </div>
                            )}
                            <div className="max-w-[85%]">
                              <div
                                className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                                  isBot
                                    ? "bg-slate-100 text-slate-700 rounded-tl-none"
                                    : "bg-indigo-600 text-white rounded-tr-none shadow-sm shadow-indigo-600/10"
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className="text-[9px] text-slate-400 font-mono block mt-1 ml-1">
                                {msg.timestamp}
                              </span>
                            </div>
                          </div>
                        );
                      })}

                      {botIsTyping && (
                        <div className="flex items-center gap-1 ml-6 p-2 rounded bg-slate-100 w-16 justify-center">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>

                    {/* Preset query helpers */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {presetQueries.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(q)}
                          className="px-2.5 py-1 text-[10px] font-sans font-semibold border border-slate-100 hover:border-indigo-100 bg-white hover:bg-indigo-50 text-indigo-700 transition-colors rounded-full cursor-pointer outline-none"
                        >
                          {q}
                        </button>
                      ))}
                    </div>

                    {/* Text Form Input */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage(userInput);
                      }}
                      className="flex gap-2"
                    >
                      <input
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type standard health or query prompt..."
                        className="flex-1 px-3.5 py-2 hover:border-slate-300 focus:border-indigo-500 bg-slate-50 border border-slate-100 rounded-xl text-xs sm:text-sm transition-all outline-none"
                      />
                      <button
                        type="submit"
                        className="p-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer transition-colors outline-none"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>

                  </div>

                  {/* Booking Simulation Module (Column 5/12) */}
                  <div className="md:col-span-5 bg-indigo-50/40 rounded-2xl border border-indigo-100/30 p-5 flex flex-col justify-between text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100 rounded-bl-full pointer-events-none" />

                    <div className="space-y-4">
                      {/* Booking Header */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <CalendarRange className="w-4 h-4 text-indigo-600" />
                          <span className="text-[10px] text-indigo-600 font-mono font-bold tracking-wider uppercase">Clinic Connect</span>
                        </div>
                        <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">Appointment Booker</h4>
                      </div>

                      {/* Booking form */}
                      {isBooked ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center space-y-3"
                        >
                          <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                          <h5 className="font-display font-medium text-emerald-800 text-sm">Demo Booking Completed!</h5>
                          <p className="text-xs text-emerald-700 leading-relaxed">
                            Simulated appointment logged successfully for <strong>{bookingForm.name}</strong> on <strong>{bookingForm.date}</strong> at <strong>{bookingForm.slot}</strong>. Let's schedule on LinkedIn next!
                          </p>
                          <button
                            onClick={() => {
                              setIsBooked(false);
                              setBookingForm({ name: "", phone: "", date: "2026-05-26", slot: "11:00 AM" });
                            }}
                            className="text-xs font-semibold text-indigo-600 hover:underline pt-2 inline-block cursor-pointer"
                          >
                            Book another slot
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleBookingSubmit} className="space-y-3">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-400 font-mono">Patient Fullname</label>
                            <input
                              required
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm((prev) => ({ ...prev, name: e.target.value }))}
                              placeholder="Your full name"
                              className="w-full text-xs bg-white rounded-lg border border-slate-100 p-2.5 outline-none font-sans"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-400 font-mono">Phone Number</label>
                            <input
                              required
                              type="tel"
                              value={bookingForm.phone}
                              onChange={(e) => setBookingForm((prev) => ({ ...prev, phone: e.target.value }))}
                              placeholder="e.g. +91 XXXXX XXXXX"
                              className="w-full text-xs bg-white rounded-lg border border-slate-100 p-2.5 outline-none font-mono"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-400 font-mono">Consultation Date</label>
                              <input
                                type="date"
                                value={bookingForm.date}
                                onChange={(e) => setBookingForm((prev) => ({ ...prev, date: e.target.value }))}
                                className="w-full text-xs bg-white rounded-lg border border-slate-100 p-2.5 outline-none font-mono"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] text-slate-400 font-mono">Preferred Slot</label>
                              <select
                                value={bookingForm.slot}
                                onChange={(e) => setBookingForm((prev) => ({ ...prev, slot: e.target.value }))}
                                className="w-full text-xs bg-white rounded-lg border border-slate-100 p-2.5 outline-none font-mono"
                              >
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:30 AM">11:30 AM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="04:30 PM">04:30 PM</option>
                              </select>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full mt-2 py-2.5 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors outline-none font-sans shadow-md"
                          >
                            Submit Simulated Appointment
                          </button>
                        </form>
                      )}
                    </div>

                    <div className="text-[9px] text-slate-400 leading-relaxed text-left border-t border-slate-100 pt-3 mt-4">
                      Disclaimer: Built as a mock patient portal using Natural Language Processing (NLP) heuristics in Python.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
