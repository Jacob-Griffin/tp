import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="flex flex-col h-screen w-screen">
        <header class="h-12 p-2">
          <h1>New Telephone Pictionary</h1>
        </header>

        <main class="w-screen p-0 m-0 h-32 grow lg:overflow-y-hidden">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
