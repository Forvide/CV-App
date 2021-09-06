import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {
  @Input('appHideElement') set hideElement(container) {
    if (!container) {
      this.viewContainer.clear();
    }
    else {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
