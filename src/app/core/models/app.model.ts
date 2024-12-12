import { PageEvent } from "@angular/material/paginator";

export class UiPaginationModel extends PageEvent {
  override length = 100; // The current total number of items being paged.
  override pageIndex = 0; // The current page index, start from 0.
  override pageSize = 10; // The current page size.
  pageSizeOptions: number[] = [10, 25, 50, 100];
}

export interface EnumData {
  [key: number | string]: string | number;
}
