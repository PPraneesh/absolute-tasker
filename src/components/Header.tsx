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
import SecondaryHeader from "./SecondaryHeader";
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
      <header className="w-full px-6 py-4 shadow-md bg-white hidden md:block">
        {isAuthenticated && (
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-xl font-semibold text-gray-800">
                Absolute Tasker
              </h1>
              {/* Navigation buttons */}
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer"
                    onClick={() => navigate("/post")}
                  >
                    Post a task
                  </Button>
                  <Button
                    className="cursor-pointer"
                    onClick={() => navigate("/browse")}
                  >
                    Browse tasks
                  </Button>
                  <Button onClick={() => navigate("/my-tasks")}>
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
                        <HelpCircle />
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
                        <Bell />
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
                <User className="w-6 h-6 text-gray-700" />
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Header - Only shown on mobile */}

      {location.pathname === "/browse" ? (
        <div>
          <div className="bg-gray-200 px-6 py-2 hidden md:block">
            <SecondaryHeader />
            <div></div>
          </div>

          <div>
            <header className="w-full px-4 py-3 bg-white md:hidden">
              <div className="flex items-center justify-between gap-4">
                <div className="invisible items-start flex gap-2">
                  <Button variant="outline" className="cursor-pointer">
                    <Bell />
                  </Button>
                  <Button variant="outline" className="cursor-pointer">
                    <Bell />
                  </Button>
                </div>
                <h1 className="text-xl font-semibold text-gray-800 text-center flex-1">
                  Browse Tasks
                </h1>
                {/* Empty div to balance the flex layout */}
                <div className=" flex gap-2">
                  <Button variant="outline">
                    <Search />
                  </Button>
                  <Button variant="outline" className="cursor-pointer">
                    <Bell />
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex items-center justify-between gap-4 px-4 py-2 border-b border-gray-200 bg-gray-200 md:hidden">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <ListFilter />
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
                          <SortAsc />
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
                    <Star className="mr-2 h-4 w-4" />
                    Recommended
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Most recently posted
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <CalendarClock className="mr-2 h-4 w-4" />
                    Due soon
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Closest to me
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <ArrowDownCircle className="mr-2 h-4 w-4" />
                    Lowest price
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <ArrowUpCircle className="mr-2 h-4 w-4" />
                    Highest price
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ) : (
        <header className="w-full px-4 py-3 shadow-md bg-white flex md:hidden justify-center">
          <h1 className="text-xl font-semibold text-gray-800">Tasker</h1>
        </header>
      )}

      {/* Mobile Navigation Bar - Fixed at bottom on mobile screens */}
      {isAuthenticated && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-1 md:hidden z-10">
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/browse")}
          >
            <Search className="h-5 w-5" />
            <span className="text-xs">Browse</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/post")}
          >
            <Plus className="h-5 w-5" />
            <span className="text-xs">Post</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/my-tasks")}
          >
            <Clipboard className="h-5 w-5" />
            <span className="text-xs">My Tasks</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center p-1"
            onClick={() => navigate("/profile")}
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      )}
    </div>
  );
};
