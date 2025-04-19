import { useLocation, useNavigate } from "react-router";
import { Button } from "./ui/button";
import {
  Bell,
  HelpCircle,
  User,
  Search,
  Clipboard,
  Plus,
  ListFilter,
  SortAsc,
  Star,
  Clock,
  CalendarClock,
  MapPin,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Header = () => {
  const isAuthenticated = true;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      {/* Desktop Header - Hidden on mobile */}
      <header className="w-full px-6 py-4 shadow-md bg-white dark:bg-black border-b border-border-light dark:border-border-dark hidden md:block transition-colors">
        {isAuthenticated && (
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-xl font-semibold text-black dark:text-white">
                Absolute Tasker
              </h1>
              {/* Navigation buttons */}
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer"
                    variant="outline"
                    onClick={() => navigate("/post")}
                  >
                    Post a task
                  </Button>
                  <Button
                    className="cursor-pointer"
                    variant="outline"
                    onClick={() => navigate("/browse")}
                  >
                    Browse tasks
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/my-tasks")}
                  >
                    My tasks
                  </Button>
                </div>
              </div>
            </div>
            {/* User Icon */}
            <div className="flex justify-center items-center gap-4">
              <div className="flex gap-2">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="cursor-pointer">
                        <HelpCircle className="text-black dark:text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 text-xs">
                      Help
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="cursor-pointer">
                        <Bell className="text-black dark:text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 text-xs">
                      Notifications
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <User className="w-6 h-6 text-black dark:text-white" />
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Header - Only shown on mobile */}
      {location.pathname === "/browse" ? (
        <div>
          <div>
            <header className="w-full px-4 py-3 bg-white dark:bg-black border-b border-border-light dark:border-border-dark md:hidden transition-colors">
              <div className="flex items-center justify-between gap-4">
                <div className="invisible items-start flex gap-2">
                  <Button variant="outline" className="cursor-pointer">
                    <Bell className="text-black dark:text-white" />
                  </Button>
                  <Button variant="outline" className="cursor-pointer">
                    <Bell className="text-black dark:text-white" />
                  </Button>
                </div>
                <h1 className="text-xl font-semibold text-black dark:text-white text-center flex-1">
                  Browse Tasks
                </h1>
                {/* Empty div to balance the flex layout */}
                <div className=" flex gap-2">
                  <Button variant="outline">
                    <Search className="text-black dark:text-white" />
                  </Button>
                  <Button variant="outline" className="cursor-pointer">
                    <Bell className="text-black dark:text-white" />
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex items-center justify-between gap-4 px-4 py-2 border-b border-border-light dark:border-border-dark bg-white dark:bg-black md:hidden transition-colors">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <ListFilter className="text-black dark:text-white" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="px-2 py-1 text-xs">
                    Filter
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <DropdownMenu>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="cursor-pointer">
                          <SortAsc className="text-black dark:text-white" />
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 pb-[5px] text-xs">
                      Sort
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-black dark:text-white" />
                    Recommended
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-black dark:text-white" />
                    Most recently posted
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <CalendarClock className="mr-2 h-4 w-4 text-black dark:text-white" />
                    Due soon
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-black dark:text-white" />
                    Closest to me
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <ArrowDownCircle className="mr-2 h-4 w-4 text-black dark:text-white" />
                    Lowest price
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <ArrowUpCircle className="mr-2 h-4 w-4 text-black dark:text-white" />
                    Highest price
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ) : (
        <header className="w-full px-4 py-3 shadow-md bg-white dark:bg-black border-b border-border-light dark:border-border-dark flex md:hidden justify-center transition-colors">
          <h1 className="text-xl font-semibold text-black dark:text-white">
            Tasker
          </h1>
        </header>
      )}

      {/* Mobile Navigation Bar - Fixed at bottom on mobile screens */}
      {isAuthenticated && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-border-light dark:border-border-dark flex justify-around py-1 md:hidden z-10 transition-colors">
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/browse")}
          >
            <Search className="h-5 w-5 text-black dark:text-white" />
            <span className="text-xs text-black dark:text-white">Browse</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/post")}
          >
            <Plus className="h-5 w-5 text-black dark:text-white" />
            <span className="text-xs text-black dark:text-white">Post</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/my-tasks")}
          >
            <Clipboard className="h-5 w-5 text-black dark:text-white" />
            <span className="text-xs text-black dark:text-white">My Tasks</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/profile")}
          >
            <User className="h-5 w-5 text-black dark:text-white" />
            <span className="text-xs text-black dark:text-white">Profile</span>
          </Button>
        </div>
      )}
    </div>
  );
};
