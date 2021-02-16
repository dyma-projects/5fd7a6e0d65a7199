import { Directive, ElementRef, OnInit, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective implements OnInit {
  constructor(private element: ElementRef<any>) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.changeColor("blue");
  }

  @HostListener("window:keydown", ["$event"]) private test(
    event: KeyboardEvent
  ) {
    if (event.key === "ArrowLeft") {
      console.log(event);
      this.changeColor("red");
    } else if (event.key === "ArrowRight") {
      this.changeColor("blue");
    } else if (event.key === "ArrowDown") {
      this.changeColor("green");
    } else if (event.key === "ArrowUp") {
      this.changeColor("purple");
    }
  }

  private changeColor(color: string) {
    this.element.nativeElement.style.color = color;
  }

  ngOnInit(): void {}
}
