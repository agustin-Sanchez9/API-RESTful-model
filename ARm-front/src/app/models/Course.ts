import { Teacher } from "./Teacher"
import { Topic } from "./Topic"

export class Course{
    id!: number
    topic!: Topic
    start_date!: Date
    end_date!: Date
    teacher!: Teacher
    price!: number
}