import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UploadDocumentComponent } from '../component/upload-document/upload-document.component';
import { CodeGeneratorComponent } from '../component/code-generator/code-generator.component';


@NgModule({
  declarations: [ 
    
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'uploaddoc', component: UploadDocumentComponent },
      { path: 'codeGen', component: CodeGeneratorComponent }
    
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


