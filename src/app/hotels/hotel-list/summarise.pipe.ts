import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "summarise" })
export class Summarise implements PipeTransform {
  transform(value: string, limit: number) {
    if (value?.length > limit) return value.substr(0, limit) + "...";
    else return value;
  }
}
