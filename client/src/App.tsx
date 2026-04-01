import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, lazy, Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress, MouseFollower } from "@/components/animations";

const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Creative = lazy(() => import("@/pages/creative"));
const MediaDept = lazy(() => import("@/pages/media-dept"));
const BTLEvents = lazy(() => import("@/pages/btl-events"));
const Events = lazy(() => import("@/pages/events"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      window.history.replaceState({}, "", window.location.pathname);
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 600);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Switch key={location}>
          <Route path="/">
            <PageTransition><Home /></PageTransition>
          </Route>
          <Route path="/about">
            <PageTransition><About /></PageTransition>
          </Route>
          <Route path="/creative">
            <PageTransition><Creative /></PageTransition>
          </Route>
          <Route path="/media">
            <PageTransition><MediaDept /></PageTransition>
          </Route>
          <Route path="/btl-events">
            <PageTransition><BTLEvents /></PageTransition>
          </Route>
          <Route path="/events">
            <PageTransition><Events /></PageTransition>
          </Route>
          <Route>
            <PageTransition><NotFound /></PageTransition>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollProgress />
        <MouseFollower />
        <Navbar />
        <ScrollToTop />
        <Router />
        <Footer />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
