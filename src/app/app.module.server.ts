import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRendering()],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
