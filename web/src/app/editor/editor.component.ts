import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {MyFileService} from '../../service/my-file.service';
import {EditorModule as TinyEditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {Editor} from 'tinymce';
import {AttachmentService} from '../../service/attachment.service';
// @ts-ignore
import {EventObj} from '@tinymce/tinymce-angular/editor/Events';
import {Attachment} from '../../entity/attachment';
import {CommonModule} from '@angular/common';
import {EditorService} from '../../service/editor.service';
/**
 * 富文本编辑器
 * https://www.tiny.cloud/docs/integrations/angular/#tinymceangularintegrationquickstartguide
 */
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  standalone: true,
  imports: [
    TinyEditorModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => EditorComponent)
    }
  ]
})
export class EditorComponent implements OnDestroy, OnInit, ControlValueAccessor {
  formControl = new FormControl('');

  @Input()
  height = 500;
  init: Record<string, any>;
  private editor: Editor;

  constructor(private editorService: EditorService,
              private attachmentService: AttachmentService) {
  }

  ngOnDestroy(): void {
    this.editorService.deleteComponentAddEditor(this.editor);
  }

  onEditorInit($event: EventObj<any>) {
    this.editor = $event.editor;
    this.editorService.addComponentAddEditor(this.editor, this);
  }

  registerOnChange(fn: (data: string) => void): void {
    this.formControl.valueChanges.subscribe(data => fn(data));
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: string): void {
    this.formControl.setValue(obj);
  }

  ngOnInit(): void {
    this.init = {
      base_url: '/tinymce',
      suffix: '.min',
      height: this.height,
      contextmenu: false,
      relative_urls: false,
      menubar: false,
      language: 'zh_CN',
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount codesample',
      ],
      toolbar:
        `undo redo | formatselect | bold italic ${EditorService.keys.yzImageTip} | ` +
        'alignleft aligncenter alignright alignjustify  | ' +
        'bullist numlist outdent indent | removeformat | help ｜codesample code | help',
      // 文件上传拦截器
      images_upload_handler: (blobInfo: any, success: any, failure: any): void => {
        this.attachmentService.upload(blobInfo.blob())
          .subscribe((response: HttpEvent<Attachment>) => {
            if (response.type === HttpEventType.Response) {
              const attachment = response.body as Attachment;
              success(MyFileService.getFullPath(attachment.file));
            }
          }, (response: HttpErrorResponse) => {
            failure('上传图片异常: ' + response.error);
          });
      },
      paste_data_images: true,
    };
  }
}
