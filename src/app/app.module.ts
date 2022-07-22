import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadDocumentComponent } from '../component/upload-document/upload-document.component';
import { AppRoutingModule } from './app.routing.module';
import { CodeGeneratorComponent } from '../component/code-generator/code-generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxPrintElementModule } from 'ngx-print-element';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCollapseModule,
    PdfViewerModule,
    NgxBarcode6Module,
    QRCodeModule,
    NgxPrintElementModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    UploadDocumentComponent,
    CodeGeneratorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
