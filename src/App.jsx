import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Inbox from "./pages/Inbox.jsx";
import Today from "./pages/Today.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import Project from "./pages/Project.jsx";
import { Inbox as InboxIcon, Calendar as TodayIcon, CalendarDays as UpcomingIcon } from "lucide-react"; // Import icons

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Inbox",
    to: "/inbox",
    icon: <InboxIcon className="h-4 w-4" />,
  },
  {
    title: "Today",
    to: "/today",
    icon: <TodayIcon className="h-4 w-4" />,
  },
  {
    title: "Upcoming",
    to: "/upcoming",
    icon: <UpcomingIcon className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="today" element={<Today />} />
              <Route path="upcoming" element={<Upcoming />} />
              <Route path="project/:id" element={<Project />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;