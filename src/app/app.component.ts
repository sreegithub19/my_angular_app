import { Component, OnInit } from "@angular/core";
import { get } from "scriptjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    get("", () => {
      this.initMap();
    });
  }

  initMap() {
    document.getElementById("clicked").addEventListener("click", function () {
      document.write(`
          hi clicked
      `);
      });

    document.getElementById("again").addEventListener("click", function () {
      document.write(`
          hi again
      `);
      });
  }
}
