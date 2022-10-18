import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { StoreService } from "../../../../services/store.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories$!: Observable<Array<string>>;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.categories$ = this.storeService.getAllCategories();
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
