import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "a11y-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FooterComponent {}
