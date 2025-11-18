import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Order from "./pages/Order";
import FreshFish from "./pages/articles/FreshFish";
import Benefits from "./pages/articles/Benefits";
import FishInfo from "./pages/articles/FishInfo";
import WhyUs from "./pages/articles/WhyUs";
import LoadingScreen from "./components/LoadingScreen";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  return (
    <>
      <LoadingScreen />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/articles/fresh" component={FreshFish} />
        <Route path="/articles/benefits" component={Benefits} />
        <Route path="/articles/fish-info" component={FishInfo} />
        <Route path="/articles/why-us" component={WhyUs} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <WhatsAppButton />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
