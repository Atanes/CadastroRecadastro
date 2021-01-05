import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ClienteListagemComponent } from './cliente-listagem/cliente-listagem.component';

@Component({
  selector: 'custom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const ClienteElement = createCustomElement(ClienteListagemComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('custom-cliente-listagem', ClienteElement);
  }

  ngDoBootstrap() {}
}
