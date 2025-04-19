import { useState } from "react";
import { ListFilter, MinusIcon, PlusIcon, SortAsc } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Star,
  Clock,
  CalendarClock,
  MapPin,
  ArrowDownCircle,
  ArrowUpCircle,
  SearchIcon,
} from "lucide-react";

const SecondaryHeader = () => {
  const minDistance = 0;
  const maxDistance = 200;
  const stepsDistance = 5;
  const [distance, setDistance] = useState([100]);
  const decreaseValue = () =>
    setDistance((prev) => [Math.max(minDistance, prev[0] - stepsDistance)]);
  const increaseValue = () =>
    setDistance((prev) => [Math.min(maxDistance, prev[0] + stepsDistance)]);
  const categories = [
    "AC Repair & Servicing",
    "Electrical Repairs & Wiring",
    "Plumbing Services",
    "Furniture Assembly",
    "Home Cleaning",
    "Geyser Repair & Installation",
    "Pest Control",
    "Painting & Wall Care",
    "Water Purifier Installation & Repair",
    "Gardening & Landscaping",
    "Roofing & Waterproofing",
    "Home Security & CCTV Installation",
    "Door & Window Repairs",
    "Interior Designing",
    "Insulation & Soundproofing",
    "Solar Panel Installation",
    "Carpenter Services",
    "Masonry & Bricklaying",
    "Ceiling & Roofing Contractors",
    "Stonemasonry",
    "Welding & Fabrication",
    "Glasswork & Mirror Installation",
    "False Ceiling & POP Work",
    "Flooring & Tiling Services",
    "General Repair & Fixes",
    "Curtain & Blind Installation",
  ];
  const [typeOfTask, setTypeOfTask] = useState<string>("in-person");
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent className="w-full sm:w-[400px] md:w-[600px] lg:w-[750px] p-4">
                  <h1 className="mb-4 font-medium text-lg">All Categories</h1>
                  <div className="mb-4">
                    <div className="relative">
                      <Input
                        className="peer ps-9 pe-9"
                        placeholder="Search..."
                        type="search"
                      />
                      <button
                        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Submit search"
                        type="submit"
                      >
                        <SearchIcon size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {categories.map((category) => (
                      <NavigationMenuLink
                        key={category}
                        className="cursor-pointer p-2 hover:bg-slate-100 rounded-md block"
                      >
                        {category}
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button>Cancel</Button>
                    <Button>Apply</Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Distance from location
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div>
                    <h1>To be done</h1>
                    <ToggleGroup
                      type="single"
                      value={typeOfTask}
                      onValueChange={setTypeOfTask}
                      className="flex justify-between gap-4 m-auto mt-2"
                    >
                      <ToggleGroupItem
                        value="in-person"
                        aria-label="in person"
                        className="flex flex-col items-center gap-3 px-4 py-2 border rounded-md "
                      >
                        <h1>In-Person</h1>
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="remote"
                        aria-label="remote"
                        className="flex flex-col items-center gap-3 px-4 py-3 border rounded-md "
                      >
                        <h1>Remote</h1>
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="all"
                        aria-label="all"
                        className="flex flex-col items-center gap-3 px-4 py-3 border rounded-md"
                      >
                        <h1>All</h1>
                      </ToggleGroupItem>
                    </ToggleGroup>
                    <div className="mt-3">
                      <h1>Location</h1>
                      <div className="relative">
                        <Input
                          className="peer ps-9"
                          placeholder="Drop up location"
                          type="text"
                        />
                        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                          <MapPin size={16} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex justify-between mb-1">
                          <span>Distance</span>
                          <Label className="tabular-nums text-right">
                            {distance[0]} km
                          </Label>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-8"
                              aria-label="Decrease value"
                              onClick={decreaseValue}
                              disabled={distance[0] === 0}
                            >
                              <MinusIcon size={16} aria-hidden="true" />
                            </Button>
                          </div>
                          <Slider
                            className="grow"
                            value={distance}
                            onValueChange={setDistance}
                            min={minDistance}
                            max={maxDistance}
                            step={stepsDistance}
                            aria-label="Dual range slider with buttons"
                          />
                          <div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-8"
                              aria-label="Increase value"
                              onClick={increaseValue}
                              disabled={distance[0] === 200}
                            >
                              <PlusIcon size={16} aria-hidden="true" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between mt-4">
                          <Button>Cancel</Button>
                          <Button>Apply</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Task Price</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="*:not-first:mt-2 flex-1">
          <div className="relative">
            <Input
              className="peer ps-3 pe-3 border border-black/30 bg-white"
              placeholder="Search..."
              type="search"
            />
            <button
              className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Submit search"
              type="submit"
            >
              <SearchIcon size={16} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
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
  );
};

export default SecondaryHeader;
