import { TaskLocation } from "@/components/postTask/TaskLocation";
import {TaskTitleDate} from "../../components/postTask/TaskTitleDate";
import { TaskDetails } from "@/components/postTask/TaskDetails";
import TaskBudget from "@/components/postTask/TaskBudget";

export const stepsData =[{
    id:1,
    title: "title and date",
    component: TaskTitleDate,
},{
    id:2,
    title: "location",
    component: TaskLocation
},{
    id:3,
    title: "details",
    component: TaskDetails
},{
    id:4,
    title: "budget",
    component: TaskBudget
}]